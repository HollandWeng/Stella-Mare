const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

// Configuration
const EXCEL_PATH = '/Users/hollandweng/Documents/Stella Mare/detail_full_language.xlsx';
const SOURCE_IMAGE_ROOT = '/Users/hollandweng/Documents/Stella Mare/样品/';
const PROJECT_ROOT = path.resolve(__dirname, '..');
const PUBLIC_IMAGES_DIR = path.join(PROJECT_ROOT, 'public/images/products');
const DATA_FILE = path.join(PROJECT_ROOT, 'data/products.ts');

// Ensure output directory exists
if (!fs.existsSync(PUBLIC_IMAGES_DIR)) {
  fs.mkdirSync(PUBLIC_IMAGES_DIR, { recursive: true });
}

// Read Excel
console.log(`Reading Excel from ${EXCEL_PATH}...`);
const workbook = XLSX.readFile(EXCEL_PATH);
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const rows = XLSX.utils.sheet_to_json(sheet);

console.log(`Found ${rows.length} rows in Excel.`);

const products = [];
const categories = new Set();

// Helper to find image
function findImage(name, subfolder) {
  const extensions = ['png', 'jpg', 'jpeg', 'PNG', 'JPG', 'JPEG'];
  const folderPath = path.join(SOURCE_IMAGE_ROOT, subfolder);
  
  if (!fs.existsSync(folderPath)) return null;

  for (const ext of extensions) {
    const filename = `${name}.${ext}`;
    const fullPath = path.join(folderPath, filename);
    if (fs.existsSync(fullPath)) {
      return { fullPath, filename };
    }
  }
  return null;
}

// Process Rows
rows.forEach((row, index) => {
  const categoryRaw = row['分类'] || '';
  const model = row['型号'] || '';
  
  if (!model) return;

  // Exclude SMC-057 due to patent issues
  if (model.includes('SMC-057')) {
    console.log('Skipping SMC-057 (Patent Issue)');
    return;
  }

  // Extract descriptions
  const descriptions = {
    en: row['英文描述'] || '',
    pl: row['波兰语'] || '',
    de: row['德语'] || '',
    es: row['西班牙语'] || '',
    ru: row['俄语'] || '',
    it: row['意大利语'] || '',
    fr: row['法语'] || '',
    pt: row['葡萄牙语'] || ''
  };

  // 1. Extract suffix (e.g., SMC-001 -> 001)
  let suffix = model;
  if (model.includes('-')) {
    suffix = model.split('-').pop();
  }
  suffix = suffix.trim();
  const modelTrimmed = model.trim();

  // 2. Determine subfolder and category
  let subfolder = '';
  let categoryId = '';
  let categoryName = '';
  let searchName = '';

  if (categoryRaw.includes('水灯') || categoryRaw.includes('Water Lamp')) {
    subfolder = '水灯';
    categoryId = 'water-lamp';
    categoryName = 'Glitter Water Lamp';
    searchName = modelTrimmed; // Water lamps use full model name (SMW-001)
  } else if (categoryRaw.includes('蜡烛') || categoryRaw.includes('Candle')) {
    subfolder = '蜡烛';
    categoryId = 'candle';
    categoryName = 'Led Candle';
    searchName = suffix; // Candles use suffix (001)
  } else {
    // Skip other categories
    return; 
  }

  // 3. Find Image
  // Try searchName first
  let imageInfo = findImage(searchName, subfolder);
  
  // If not found and it was water lamp, try suffix just in case
  if (!imageInfo && categoryId === 'water-lamp') {
     imageInfo = findImage(suffix, subfolder);
  }

  if (!imageInfo) {
    // console.log(`Skipping ${model} (No image found in ${subfolder})`);
    return;
  }

  // 4. Copy Image
  const destFilename = `${modelTrimmed}${path.extname(imageInfo.filename)}`;
  const destPath = path.join(PUBLIC_IMAGES_DIR, destFilename);
  fs.copyFileSync(imageInfo.fullPath, destPath);

  // 5. Add to list
  products.push({
    id: model, // Using Model as ID
    name: model, // Display Model as Name (to be bolded)
    descriptions: descriptions, // Store all translations
    price: row['批量价'] || 0, // Keep price just in case, though not displayed
    category: categoryId,
    image: `/images/products/${destFilename}`,
    // Keep other fields for potential future use or debugging
    originalRow: {
        packing: row['产品名称及包装方式'],
        light: row['灯光'],
        power: row['供电方式']
    }
  });

  categories.add(JSON.stringify({ id: categoryId, name: categoryName }));
});

console.log(`Processed ${products.length} products.`);

// Generate TS Content
const tsContent = `export interface ProductDescriptions {
  en: string;
  pl: string;
  de: string;
  es: string;
  ru: string;
  it: string;
  fr: string;
  pt: string;
  [key: string]: string; // Index signature for dynamic access
}

export interface Product {
  id: string;
  name: string;
  descriptions: ProductDescriptions;
  price: number;
  category: string;
  image: string;
  originalRow?: any;
}

export const categories = [
${Array.from(categories).map(c => `  ${c},`).join('\n')}
];

export const products: Product[] = ${JSON.stringify(products, null, 2)};
`;

fs.writeFileSync(DATA_FILE, tsContent);
console.log(`Updated ${DATA_FILE}`);
