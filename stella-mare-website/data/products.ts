export interface ProductDescriptions {
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
  {"id":"candle","name":"Led Candle"},
  {"id":"water-lamp","name":"Glitter Water Lamp"},
];

export const products: Product[] = [
  {
    "id": "SMC-001",
    "name": "SMC-001",
    "descriptions": {
      "en": "5.5*12.5Cm Plastic Led candle in clear cup with Bullet shape steady flame, 12pcs/Display box, working by 2*AA battery",
      "pl": "5,5*12,5 cm plastikowa świeca LED w przezroczystym kubku z płomieniem w kształcie pocisku, 12 szt./pudełko ekspozycyjne, działająca na 2 baterie AA",
      "de": "5,5 x 12,5 cm große LED-Kerze aus Kunststoff in einem transparenten Becher mit gleichmäßiger, kugelförmiger Flamme, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de 5,5 x 12,5 cm en vaso transparente con forma de bala y llama constante, 12 unidades/caja de presentación, funciona con 2 pilas AA.",
      "ru": "Пластиковая светодиодная свеча 5,5*12,5 см в прозрачном стаканчике, с устойчивым пламенем в форме пули, 12 шт./витрина, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 5,5*12,5 cm in tazza trasparente con fiamma fissa a forma di proiettile, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique de 5,5 x 12,5 cm dans un verre transparent avec flamme stable en forme de balle, 12 pièces par boîte présentoir, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico de 5,5 x 12,5 cm em copo transparente com chama estável em formato de bala, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 2.64,
    "category": "candle",
    "image": "/images/products/SMC-001.png",
    "originalRow": {
      "packing": "5.5*12.5cm\r\n平口杯蜡子弹头 \r\n12pcs/展示盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-002",
    "name": "SMC-002",
    "descriptions": {
      "en": "5.5*15Cm Plastic Led candle in clear cup with Bullet shape steady flame, 12pcs/Display box, working by 2*AA battery",
      "pl": "5,5*15 cm plastikowa świeca LED w przezroczystym kubku z płomieniem w kształcie pocisku, 12 szt./pudełko ekspozycyjne, działająca na 2 baterie AA",
      "de": "5,5 x 15 cm große LED-Kerze aus Kunststoff in einem transparenten Becher mit gleichmäßiger, kugelförmiger Flamme, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de 5,5 x 15 cm en vaso transparente con forma de bala, llama constante, 12 piezas/caja de presentación, funciona con 2 pilas AA",
      "ru": "Пластиковые светодиодные свечи 5,5*15 см в прозрачном стаканчике, с устойчивым пламенем в форме пули, 12 шт./витрина, работают от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 5,5*15 cm in tazza trasparente con fiamma fissa a forma di proiettile, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique de 5,5 x 15 cm dans un verre transparent, flamme stable en forme de balle, 12 pièces par boîte présentoir, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico de 5,5 x 15 cm em copo transparente com chama estável em formato de bala, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 2.88,
    "category": "candle",
    "image": "/images/products/SMC-002.png",
    "originalRow": {
      "packing": "5.5*15cm\r\n平口杯蜡子弹头\r\n12pcs/展示盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-003",
    "name": "SMC-003",
    "descriptions": {
      "en": "5.5*15Cm Plastic Led candle in clear cup with Bullet shape steady flame, and print religious picture, 12pcs/Display box, working by 2*AA battery",
      "pl": "5,5*15 cm plastikowa świeca LED w przezroczystym kubku z płomieniem w kształcie pocisku i nadrukowanym obrazkiem religijnym, 12 szt./pudełko ekspozycyjne, zasilana 2 bateriami AA",
      "de": "5,5 x 15 cm große LED-Kerze aus Kunststoff in einem transparenten Becher mit gleichmäßiger, kugelförmiger Flamme und aufgedrucktem religiösem Bild, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de 5,5 x 15 cm en vaso transparente con forma de bala, llama constante e imagen religiosa impresa, 12 piezas/caja de presentación, funciona con 2 pilas AA",
      "ru": "Пластиковая светодиодная свеча 5,5*15 см в прозрачном стаканчике, с устойчивым пламенем в форме пули и религиозным рисунком, 12 шт./коробка для демонстрации, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 5,5*15 cm in tazza trasparente con fiamma fissa a forma di proiettile e stampa di un'immagine religiosa, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique de 5,5 x 15 cm dans un verre transparent, avec flamme stable en forme de balle et motif religieux imprimé, 12 pièces par boîte présentoir, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico de 5,5 x 15 cm em copo transparente com chama estável em formato de bala e estampa religiosa, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 3,
    "category": "candle",
    "image": "/images/products/SMC-003.png",
    "originalRow": {
      "packing": "5.5*15cm\r\n平口杯蜡子弹头\r\n宗教印图\r\n12pcs/展示盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-004",
    "name": "SMC-004",
    "descriptions": {
      "en": "5.5*12.5Cm Plastic Led candle in clear cup+copper lid lights with Bullet shape steady flame, 12pcs/Display box, working by 2*AA battery",
      "pl": "5,5*12,5 cm plastikowa świeca LED w przezroczystym kubku z miedzianą pokrywką, z płomieniem w kształcie pocisku, 12 szt./pudełko ekspozycyjne, działająca na 2 baterie AA",
      "de": "5,5 x 12,5 cm große LED-Kerze aus Kunststoff in einem transparenten Becher mit Kupferdeckel, kugelförmige, gleichmäßige Flamme, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de 5,5 x 12,5 cm en vaso transparente + luces de tapa de cobre con forma de bala y llama constante, 12 piezas/caja de presentación, funciona con 2 pilas AA",
      "ru": "Пластиковые светодиодные свечи 5,5*12,5 см в прозрачном стаканчике с медной крышкой, с постоянным пламенем в форме пули, 12 шт./витрина, работают от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 5,5*12,5 cm in tazza trasparente + coperchio in rame con fiamma fissa a forma di proiettile, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique de 5,5 x 12,5 cm, présentée dans un pot transparent avec couvercle en cuivre, à flamme fixe en forme de balle, 12 pièces par boîte, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico de 5,5 x 12,5 cm em copo transparente com tampa de cobre, com chama estável em formato de bala, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 3.7199999999999998,
    "category": "candle",
    "image": "/images/products/SMC-004.png",
    "originalRow": {
      "packing": " 5.5*12.5cm\r\n灯串杯蜡 子弹头\r\n12pcs/展示盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-005",
    "name": "SMC-005",
    "descriptions": {
      "en": "5.5*15Cm Plastic Led candle in clear cup+copper lid lights with Bullet shape steady flame, 12pcs/Display box, working by 2*AA battery",
      "pl": "5,5*15 cm plastikowa świeca LED w przezroczystym kubku z miedzianą pokrywką, z płomieniem w kształcie pocisku, 12 szt./pudełko ekspozycyjne, działająca na 2 baterie AA",
      "de": "5,5 x 15 cm große LED-Kerze aus Kunststoff in einem transparenten Becher mit Kupferdeckel, kugelförmige, gleichmäßige Flamme, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de 5,5 x 15 cm en vaso transparente + luces de tapa de cobre con forma de bala y llama constante, 12 piezas/caja de presentación, funciona con 2 pilas AA",
      "ru": "Пластиковые светодиодные свечи 5,5*15 см в прозрачном стаканчике с медной крышкой, с устойчивым пламенем в форме пули, 12 шт./витрина, работают от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 5,5*15 cm in tazza trasparente + coperchio in rame con fiamma fissa a forma di proiettile, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique de 5,5 x 15 cm, présentée dans un pot transparent avec couvercle en cuivre, avec une flamme stable en forme de balle. Vendue par boîte de 12. Fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico de 5,5 x 15 cm em copo transparente com tampa de cobre, com chama estável em formato de bala, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 3.9599999999999995,
    "category": "candle",
    "image": "/images/products/SMC-005.png",
    "originalRow": {
      "packing": " 5.5*15cm\r\n灯串杯蜡 子弹头\r\n12pcs/展示盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-006",
    "name": "SMC-006",
    "descriptions": {
      "en": "5.5*17.5Cm Plastic Led candle in clear cup+copper led lights with Bullet shape steady flame, 12pcs/Display box, working by 2*AA battery",
      "pl": "5,5*17,5 cm plastikowa świeca LED w przezroczystym kubku + miedziane diody LED ze stałym płomieniem w kształcie pocisku, 12 szt./pudełko ekspozycyjne, działająca na 2 baterie AA",
      "de": "5,5 x 17,5 cm große LED-Kerze aus Kunststoff in einem transparenten Becher mit kupferfarbenen LEDs und gleichmäßiger, kugelförmiger Flamme, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de 5,5 x 17,5 cm en vaso transparente + luces LED de cobre con forma de bala y llama constante, 12 piezas/caja de presentación, funciona con 2 pilas AA.",
      "ru": "Пластиковая светодиодная свеча 5,5*17,5 см в прозрачном стаканчике + медные светодиоды с пулевидным устойчивым пламенем, 12 шт./витрина, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 5,5*17,5 cm in tazza trasparente + luci LED in rame con fiamma fissa a forma di proiettile, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique de 5,5 x 17,5 cm dans un pot transparent avec LED cuivrées et flamme stable en forme de balle, 12 pièces par boîte présentoir, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico de 5,5 x 17,5 cm em copo transparente com luzes de LED cor de cobre e chama estável em formato de bala, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 4.2,
    "category": "candle",
    "image": "/images/products/SMC-006.png",
    "originalRow": {
      "packing": "5.5*17.5cm\r\n灯串杯蜡 子弹头\r\n12pcs/展示盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-007",
    "name": "SMC-007",
    "descriptions": {
      "en": "7.5*10Cm Plastic Led candle in clear cup+copper led lights with Bullet shape steady flame, 1pcs/Color box, working by 2*AA battery",
      "pl": "7,5*10 cm plastikowa świeca LED w przezroczystym kubku + miedziane diody LED ze stałym płomieniem w kształcie pocisku, 1 szt./kolorowe pudełko, działająca na 2 baterie AA",
      "de": "7,5 x 10 cm große LED-Kerze aus Kunststoff in einem transparenten Becher mit kupferfarbenen LEDs und gleichmäßiger, kugelförmiger Flamme, 1 Stück pro Farbbox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de 7,5 x 10 cm en vaso transparente + luces LED de cobre con forma de bala, llama constante, 1 unidad/caja de color, funciona con 2 pilas AA",
      "ru": "Пластиковая светодиодная свеча 7,5*10 см в прозрачном стаканчике + медные светодиоды с пулевидным устойчивым пламенем, 1 шт./цветная коробка, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 7,5*10 cm in tazza trasparente + luci LED in rame con fiamma fissa a forma di proiettile, 1 pz/scatola colorata, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique de 7,5 x 10 cm dans un pot transparent avec LED cuivrées et flamme stable en forme de balle, 1 pièce par boîte, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico de 7,5 x 10 cm em copo transparente com luzes de LED cor de cobre e chama estável em formato de bala, 1 unidade por caixa colorida, funciona com 2 pilhas AA."
    },
    "price": 5.159999999999999,
    "category": "candle",
    "image": "/images/products/SMC-007.png",
    "originalRow": {
      "packing": "7.5*10cm\r\n灯串杯蜡子弹头\r\n1PC/盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-008",
    "name": "SMC-008",
    "descriptions": {
      "en": "7.5*12.5Cm Plastic Led candle in clear cup+copper led lights with Bullet shape steady flame, 1pcs/Color box, working by 2*AA battery",
      "pl": "7,5*12,5 cm plastikowa świeca LED w przezroczystym kubku + miedziane diody LED ze stałym płomieniem w kształcie pocisku, 1 szt./kolorowe pudełko, działająca na 2 baterie AA",
      "de": "7,5 x 12,5 cm große LED-Kerze aus Kunststoff in einem transparenten Becher mit kupferfarbenen LEDs und gleichmäßiger, kugelförmiger Flamme, 1 Stück pro Farbbox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de 7,5 x 12,5 cm en vaso transparente + luces LED de cobre con forma de bala y llama constante, 1 unidad/caja de color, funciona con 2 pilas AA.",
      "ru": "Пластиковая светодиодная свеча 7,5*12,5 см в прозрачном стаканчике + медные светодиоды с пулевидным устойчивым пламенем, 1 шт./цветная коробка, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 7,5*12,5 cm in tazza trasparente + luci LED in rame con fiamma fissa a forma di proiettile, 1 pz/scatola colorata, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique de 7,5 x 12,5 cm dans un pot transparent avec LED cuivrées et flamme stable en forme de balle, 1 pièce par boîte, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico de 7,5 x 12,5 cm em copo transparente com luzes de LED cor de cobre e chama estável em formato de bala, 1 unidade por caixa colorida, funciona com 2 pilhas AA."
    },
    "price": 5.52,
    "category": "candle",
    "image": "/images/products/SMC-008.png",
    "originalRow": {
      "packing": "7.5*12.5cm\r\n灯串杯蜡子弹头\r\n1PC/盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-009",
    "name": "SMC-009",
    "descriptions": {
      "en": "7.5*15Cm Plastic Led candle in clear cup+copper led lights with Bullet shape steady flame, 1pcs/Color box, working by 2*AA battery",
      "pl": "7,5*15 cm plastikowa świeca LED w przezroczystym kubku + miedziane diody LED ze stałym płomieniem w kształcie pocisku, 1 szt./kolorowe pudełko, działająca na 2 baterie AA",
      "de": "7,5 x 15 cm große LED-Kerze aus Kunststoff in einem transparenten Becher mit kupferfarbenen LEDs und gleichmäßiger, kugelförmiger Flamme, 1 Stück pro Farbbox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de 7,5 x 15 cm en vaso transparente + luces LED de cobre con forma de bala, llama constante, 1 unidad/caja de color, funciona con 2 pilas AA",
      "ru": "Пластиковая светодиодная свеча 7,5*15 см в прозрачном стаканчике + медные светодиоды с пулевидным устойчивым пламенем, 1 шт./цветная коробка, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 7,5*15 cm in tazza trasparente + luci LED in rame con fiamma fissa a forma di proiettile, 1 pz/scatola colorata, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique de 7,5 x 15 cm dans un pot transparent avec LED cuivrées et flamme stable en forme de balle, 1 pièce par boîte, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico de 7,5 x 15 cm em copo transparente com luzes de LED cor de cobre e chama estável em formato de bala, 1 unidade por caixa colorida, funciona com 2 pilhas AA."
    },
    "price": 5.88,
    "category": "candle",
    "image": "/images/products/SMC-009.png",
    "originalRow": {
      "packing": "7.5*15cm\r\n灯串杯蜡子弹头\r\n1PC/盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-010",
    "name": "SMC-010",
    "descriptions": {
      "en": "7.5*10Cm Plastic Led candle in clear cup+copper led lights with imitation yellow flame, 1pcs/Color box, working by 2*AA battery",
      "pl": "7,5*10 cm plastikowa świeca LED w przezroczystym kubku + miedziane diody LED z imitacją żółtego płomienia, 1 szt./kolorowe pudełko, działająca na 2 baterie AA",
      "de": "7,5 x 10 cm große LED-Kerze aus Kunststoff in einem transparenten Becher mit kupferfarbenen LEDs und gelber Flammenimitation, 1 Stück pro Farbbox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de 7,5 x 10 cm en vaso transparente + luces LED de cobre con imitación de llama amarilla, 1 unidad/caja de color, funciona con 2 pilas AA.",
      "ru": "Пластиковая светодиодная свеча 7,5*10 см в прозрачном стаканчике + медные светодиоды с имитацией желтого пламени, 1 шт./цветная коробка, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 7,5*10 cm in tazza trasparente + luci LED in rame con fiamma gialla imitazione, 1 pz/scatola colorata, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique de 7,5 x 10 cm dans un pot transparent avec LED cuivrées et imitation flamme jaune, 1 pièce par boîte, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico de 7,5 x 10 cm em copo transparente com luzes de LED cor de cobre e imitação de chama amarela, 1 unidade por caixa colorida, funciona com 2 pilhas AA."
    },
    "price": 4.919999999999999,
    "category": "candle",
    "image": "/images/products/SMC-010.png",
    "originalRow": {
      "packing": "7.5*10cm\r\n灯串杯蜡 火焰头\r\n1PC/盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-011",
    "name": "SMC-011",
    "descriptions": {
      "en": "7.5*12.5Cm Plastic Led candle in clear cup+copper led lights with imitation yellow flame, 1pcs/Color box, working by 2*AA battery",
      "pl": "7,5*12,5 cm plastikowa świeca LED w przezroczystym kubku + miedziane diody LED z imitacją żółtego płomienia, 1 szt./kolorowe pudełko, działająca na 2 baterie AA",
      "de": "7,5 x 12,5 cm große LED-Kerze aus Kunststoff in einem transparenten Becher mit kupferfarbenen LEDs und gelber Flammenimitation, 1 Stück pro Farbbox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de 7,5 x 12,5 cm en vaso transparente + luces LED de cobre con imitación de llama amarilla, 1 unidad/caja de color, funciona con 2 pilas AA.",
      "ru": "Пластиковая светодиодная свеча 7,5*12,5 см в прозрачном стаканчике + медные светодиоды с имитацией желтого пламени, 1 шт./цветная коробка, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 7,5*12,5 cm in tazza trasparente + luci LED in rame con fiamma gialla imitazione, 1 pz/scatola colorata, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique 7,5 x 12,5 cm dans un pot transparent avec LED cuivrées et imitation flamme jaune, 1 pièce par boîte, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico de 7,5 x 12,5 cm em copo transparente com luzes de LED cor de cobre e imitação de chama amarela, 1 unidade por caixa colorida, funciona com 2 pilhas AA."
    },
    "price": 5.159999999999999,
    "category": "candle",
    "image": "/images/products/SMC-011.png",
    "originalRow": {
      "packing": "7.5*12.5cm\r\n灯串杯蜡 火焰头\r\n1PC/盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-012",
    "name": "SMC-012",
    "descriptions": {
      "en": "7.5*15Cm Plastic Led candle in clear cup+copper led lights with imitation yellow flame, 1pcs/Color box, working by 2*AA battery",
      "pl": "7,5*15 cm plastikowa świeca LED w przezroczystym kubku + miedziane diody LED z imitacją żółtego płomienia, 1 szt./kolorowe pudełko, działająca na 2 baterie AA",
      "de": "7,5 x 15 cm große LED-Kerze aus Kunststoff in einem transparenten Becher mit kupferfarbenen LEDs und gelber Flammenimitation, 1 Stück pro Farbbox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de 7,5 x 15 cm en vaso transparente + luces LED de cobre con imitación de llama amarilla, 1 unidad/caja de color, funciona con 2 pilas AA",
      "ru": "Пластиковая светодиодная свеча 7,5*15 см в прозрачном стаканчике + медные светодиоды с имитацией желтого пламени, 1 шт./цветная коробка, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 7,5*15 cm in tazza trasparente + luci LED in rame con fiamma gialla imitazione, 1 pz/scatola colorata, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique de 7,5 x 15 cm dans un pot transparent avec LED cuivrées et imitation flamme jaune, 1 pièce par boîte, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico de 7,5 x 15 cm em copo transparente com luzes de LED cor de cobre e imitação de chama amarela, 1 unidade por caixa colorida, funciona com 2 pilhas AA."
    },
    "price": 5.3999999999999995,
    "category": "candle",
    "image": "/images/products/SMC-012.png",
    "originalRow": {
      "packing": "7.5*15cm\r\n灯串杯蜡 火焰头\r\n1PC/盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-013",
    "name": "SMC-013",
    "descriptions": {
      "en": "5.5*11Cm Plastic Led Candle with Silver Glitter Spray,12pcs/Display box, working by 2*AA battery",
      "pl": "5,5*11 cm plastikowa świeca LED ze srebrnym brokatem w sprayu, 12 szt./pudełko ekspozycyjne, działająca na 2 baterie AA",
      "de": "5,5 x 11 cm große LED-Kerze aus Kunststoff mit silbernem Glitzerspray, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de 5,5 x 11 cm con spray de purpurina plateada, 12 unidades en caja de presentación, funciona con 2 pilas AA.",
      "ru": "Пластиковые светодиодные свечи 5,5*11 см с серебристыми блестками, 12 шт./витрина, работают от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 5,5*11 cm con spray glitter argento, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique de 5,5 x 11 cm avec paillettes argentées, 12 pièces par boîte présentoir, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico 5,5 x 11 cm com spray de glitter prateado, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 3.5999999999999996,
    "category": "candle",
    "image": "/images/products/SMC-013.png",
    "originalRow": {
      "packing": "撒粉子弹头蜡烛\r\n5.5*10cm\r\n12PCS/展示盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-014",
    "name": "SMC-014",
    "descriptions": {
      "en": "5.5*13Cm Plastic Led Candle with Silver Glitter Spray,12pcs/Display box, working by 2*AA battery",
      "pl": "5,5*13 cm plastikowa świeca LED ze srebrnym brokatem w sprayu, 12 szt./pudełko ekspozycyjne, działająca na 2 baterie AA",
      "de": "5,5 x 13 cm große LED-Kerze aus Kunststoff mit silbernem Glitzerspray, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de 5,5 x 13 cm con spray de purpurina plateada, 12 unidades en caja de presentación, funciona con 2 pilas AA.",
      "ru": "Пластиковые светодиодные свечи 5,5*13 см с серебристыми блестками, 12 шт./витрина, работают от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 5,5*13 cm con spray glitter argento, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique de 5,5 x 13 cm avec paillettes argentées, 12 pièces par boîte présentoir, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico 5,5 x 13 cm com spray de glitter prateado, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 3.84,
    "category": "candle",
    "image": "/images/products/SMC-014.png",
    "originalRow": {
      "packing": "撒粉子弹头蜡烛\r\n5.5*12.5cm\r\n12PCS/展示盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-015",
    "name": "SMC-015",
    "descriptions": {
      "en": "5.5*16Cm Plastic Led Candle with Silver Glitter Spray,12pcs/Display box, working by 2*AA battery",
      "pl": "5,5*16 cm plastikowa świeca LED ze srebrnym brokatem w sprayu, 12 szt./pudełko ekspozycyjne, działająca na 2 baterie AA",
      "de": "5,5 x 16 cm große LED-Kerze aus Kunststoff mit silbernem Glitzerspray, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de 5,5 x 16 cm con spray de purpurina plateada, 12 unidades en caja de presentación, funciona con 2 pilas AA.",
      "ru": "Пластиковые светодиодные свечи 5,5*16 см с серебристыми блестками, 12 шт./витрина, работают от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 5,5*16 cm con spray glitter argento, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique de 5,5 x 16 cm avec paillettes argentées, 12 pièces par boîte présentoir, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico 5,5 x 16 cm com spray de glitter prateado, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 4.08,
    "category": "candle",
    "image": "/images/products/SMC-015.png",
    "originalRow": {
      "packing": "撒粉子弹头蜡烛\r\n5.5*15cm\r\n12PCS/展示盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-016",
    "name": "SMC-016",
    "descriptions": {
      "en": "5.5*11Cm Plastic Led Candle with Gold Glitter Spray,1pcs/Color box, working by 2*AA battery",
      "pl": "5,5*11 cm plastikowa świeca LED ze złotym brokatem w sprayu, 1 szt./kolorowe pudełko, działająca na 2 baterie AA",
      "de": "5,5 x 11 cm große LED-Kerze aus Kunststoff mit Goldglitzerspray, 1 Stück/Farbbox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de 5,5 x 11 cm con spray de purpurina dorada, 1 unidad/caja de color, funciona con 2 pilas AA.",
      "ru": "Пластиковая светодиодная свеча 5,5*11 см с золотыми блестками, 1 шт./цветная коробка, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 5,5*11 cm con spray glitterato dorato, 1 pz/scatola colorata, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique de 5,5 x 11 cm avec paillettes dorées, 1 pièce par boîte, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico 5,5 x 11 cm com spray de glitter dourado, 1 unidade por caixa colorida, funciona com 2 pilhas AA."
    },
    "price": 4.8,
    "category": "candle",
    "image": "/images/products/SMC-016.png",
    "originalRow": {
      "packing": "撒粉子弹头蜡烛\r\n7.5*10cm\r\n1PC/盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-017",
    "name": "SMC-017",
    "descriptions": {
      "en": "5.5*13Cm Plastic Led Candle with Gold Glitter Spray,1pcs/Color box, working by 2*AA battery",
      "pl": "5,5*13 cm plastikowa świeca LED ze złotym brokatem w sprayu, 1 szt./kolorowe pudełko, działająca na 2 baterie AA",
      "de": "5,5 x 13 cm große LED-Kerze aus Kunststoff mit Goldglitzerspray, 1 Stück/Farbbox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de 5,5 x 13 cm con spray de purpurina dorada, 1 unidad/caja de color, funciona con 2 pilas AA.",
      "ru": "Пластиковая светодиодная свеча 5,5*13 см с золотыми блестками, 1 шт./цветная коробка, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 5,5*13 cm con spray glitterato dorato, 1 pz/scatola colorata, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique de 5,5 x 13 cm avec paillettes dorées, 1 pièce par boîte, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico 5,5 x 13 cm com spray de glitter dourado, 1 unidade por caixa colorida, funciona com 2 pilhas AA."
    },
    "price": 5.04,
    "category": "candle",
    "image": "/images/products/SMC-017.png",
    "originalRow": {
      "packing": "撒粉子弹头蜡烛\r\n7.5*12.5cm\r\n1PC/盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-018",
    "name": "SMC-018",
    "descriptions": {
      "en": "5.5*16Cm Plastic Led Candle with Gold Glitter Spray,1pcs/Color box, working by 2*AA battery",
      "pl": "5,5*16 cm plastikowa świeca LED ze złotym brokatem w sprayu, 1 szt./kolorowe pudełko, działająca na 2 baterie AA",
      "de": "5,5 x 16 cm große LED-Kerze aus Kunststoff mit Goldglitzerspray, 1 Stück/Farbbox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de 5,5 x 16 cm con spray de purpurina dorada, 1 unidad/caja de color, funciona con 2 pilas AA.",
      "ru": "Пластиковая светодиодная свеча 5,5*16 см с золотыми блестками, 1 шт./цветная коробка, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 5,5*16 cm con spray glitterato dorato, 1 pz/scatola colorata, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique de 5,5 x 16 cm avec paillettes dorées, 1 pièce par boîte, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico 5,5 x 16 cm com spray de glitter dourado, 1 unidade por caixa colorida, funciona com 2 pilhas AA."
    },
    "price": 5.28,
    "category": "candle",
    "image": "/images/products/SMC-018.png",
    "originalRow": {
      "packing": "撒粉子弹头蜡烛\r\n7.5*15cm\r\n1PC/盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-019",
    "name": "SMC-019",
    "descriptions": {
      "en": "5.5*12.5Cm Plastic Led Candle in Light Grey Color Cup, 12pcs/Display box,working by 2*AA battery",
      "pl": "5,5*12,5 cm plastikowa świeca LED w jasnoszarym kubku, 12 szt./pudełko ekspozycyjne, działająca na 2 baterie AA",
      "de": "5,5 x 12,5 cm große LED-Kerze aus Kunststoff im hellgrauen Becher, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de 5,5 x 12,5 cm en color gris claro, 12 unidades en caja de presentación, funciona con 2 pilas AA.",
      "ru": "Светодиодные пластиковые свечи 5,5*12,5 см в светло-сером корпусе, 12 шт./витрина, работают от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 5,5*12,5 cm in tazza di colore grigio chiaro, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique de 5,5 x 12,5 cm dans un récipient gris clair, 12 pièces par boîte présentoir, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico 5,5 x 12,5 cm em copo cinza claro, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 2.64,
    "category": "candle",
    "image": "/images/products/SMC-019.png",
    "originalRow": {
      "packing": "白色蜡烛浅灰色杯子中号\r\n12PCS/展示盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-020",
    "name": "SMC-020",
    "descriptions": {
      "en": "5.5*15Cm Plastic Led Candle in Light Grey Color Cup, 12pcs/Display box,working by 2*AA battery",
      "pl": "5,5*15 cm plastikowa świeca LED w jasnoszarym kubku, 12 szt./pudełko ekspozycyjne, działająca na 2 baterie AA",
      "de": "5,5 x 15 cm große LED-Kerze aus Kunststoff im hellgrauen Becher, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de 5,5 x 15 cm en color gris claro, 12 unidades en caja de presentación, funciona con 2 pilas AA.",
      "ru": "Светодиодные пластиковые свечи 5,5*15 см в светло-сером корпусе, 12 шт./витрина, работают от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 5,5*15 cm in tazza di colore grigio chiaro, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique de 5,5 x 15 cm dans un récipient gris clair, 12 pièces par boîte présentoir, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico 5,5 x 15 cm em copo cinza claro, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 2.88,
    "category": "candle",
    "image": "/images/products/SMC-020.png",
    "originalRow": {
      "packing": "白色蜡烛浅灰色杯子大号\r\n12PCS/展示盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-021",
    "name": "SMC-021",
    "descriptions": {
      "en": "13.5CM Triple Flame Plastic Led Candle, Gold/Silver/White, 1pc/Color box,working by 2*AA battery",
      "pl": "13,5 cm plastikowa świeca LED z trzema płomieniami, złota/srebrna/biała, 1 szt./kolorowe pudełko, działająca na 2 baterie AA",
      "de": "13,5 cm große LED-Kerze mit dreifacher Flamme aus Kunststoff, Gold/Silber/Weiß, 1 Stück/Farbbox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de triple llama de 13,5 cm, dorada, plateada y blanca, 1 unidad en caja de color, funciona con 2 pilas AA.",
      "ru": "Светодиодная пластиковая свеча с тройным пламенем, 13,5 см, золотистый/серебристый/белый цвет, 1 шт./цветная коробка, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica a tripla fiamma da 13,5 cm, oro/argento/bianco, 1 pezzo/scatola colorata, funzionante con 2 batterie AA",
      "fr": "Bougie LED triple flamme en plastique de 13,5 cm, or/argent/blanc, 1 pièce/boîte couleur, fonctionne avec 2 piles AA",
      "pt": "Vela LED de plástico com chama tripla de 13,5 cm, dourada/prateada/branca, 1 unidade por caixa colorida, funciona com 2 pilhas AA."
    },
    "price": 3.48,
    "category": "candle",
    "image": "/images/products/SMC-021.png",
    "originalRow": {
      "packing": "电镀三只蜡烛\r\n1PC/盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-022",
    "name": "SMC-022",
    "descriptions": {
      "en": "16CM Triple Flame Plastic Led Candle with Cup, Gold/Silver/White, 1pc/Color box,working by 2*AA battery",
      "pl": "16 cm plastikowa świeca LED z potrójnym płomieniem i kubkiem, złota/srebrna/biała, 1 szt./kolorowe pudełko, działa na 2 baterie AA",
      "de": "16 cm LED-Kerze mit dreifacher Flamme aus Kunststoff und Becher, Gold/Silber/Weiß, 1 Stück/Farbbox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de triple llama de 16 cm con taza, dorada, plateada y blanca, 1 unidad en caja de color, funciona con 2 pilas AA.",
      "ru": "Светодиодная пластиковая свеча с тремя пламенами, 16 см, с подставкой, золотистый/серебристый/белый цвет, 1 шт./цветная коробка, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica a tripla fiamma da 16 cm con tazza, oro/argento/bianco, 1 pezzo/scatola colorata, funzionante con 2 batterie AA",
      "fr": "Bougie LED triple flamme en plastique de 16 cm avec coupelle, or/argent/blanc, 1 pièce/boîte couleur, fonctionne avec 2 piles AA",
      "pt": "Vela de LED de plástico com chama tripla de 16 cm e suporte, nas cores dourada, prateada e branca, 1 unidade por caixa colorida, funciona com 2 pilhas AA."
    },
    "price": 4.44,
    "category": "candle",
    "image": "/images/products/SMC-022.png",
    "originalRow": {
      "packing": "三支蜡烛杯蜡16CM\r\n1PC/盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-023",
    "name": "SMC-023",
    "descriptions": {
      "en": "18.5CM Triple Flame Plastic Led Candle with Cup, Gold/Silver/White,  1pc/Color box,working by 2*AA battery",
      "pl": "18,5 cm plastikowa świeca LED z trzema płomieniami i kubkiem, złota/srebrna/biała, 1 szt./kolorowe pudełko, działa na 2 baterie AA",
      "de": "18,5 cm hohe LED-Kerze mit dreifacher Flamme und Becher, Gold/Silber/Weiß, 1 Stück/Farbbox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de triple llama de 18,5 cm con taza, dorada, plateada y blanca, 1 unidad en caja de color, funciona con 2 pilas AA.",
      "ru": "Светодиодная пластиковая свеча с тремя пламенами, 18,5 см, с подставкой, золотистый/серебристый/белый цвет, 1 шт./цветная коробка, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica a tripla fiamma da 18,5 cm con tazza, oro/argento/bianco, 1 pezzo/scatola colorata, funzionante con 2 batterie AA",
      "fr": "Bougie LED triple flamme en plastique de 18,5 cm avec coupelle, or/argent/blanc, 1 pièce/boîte couleur, fonctionne avec 2 piles AA",
      "pt": "Vela de LED de plástico com chama tripla de 18,5 cm e suporte, nas cores dourada, prateada e branca, 1 unidade por caixa colorida, funciona com 2 pilhas AA."
    },
    "price": 4.68,
    "category": "candle",
    "image": "/images/products/SMC-023.png",
    "originalRow": {
      "packing": "三支蜡烛杯蜡18.5CM\r\n1PC/盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-024",
    "name": "SMC-024",
    "descriptions": {
      "en": "21.5CM Triple Flame Plastic Led Candle with Cup, Gold/Silver/White, 1pc/Color box,working by 2*AA battery",
      "pl": "21,5 cm plastikowa świeca LED z trzema płomieniami i kubkiem, złota/srebrna/biała, 1 szt./kolorowe pudełko, działa na 2 baterie AA",
      "de": "21,5 cm LED-Kerze mit dreifacher Flamme aus Kunststoff und Becher, Gold/Silber/Weiß, 1 Stück/Farbbox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de triple llama de 21,5 cm con taza, dorada, plateada y blanca, 1 unidad en caja de color, funciona con 2 pilas AA.",
      "ru": "Светодиодная пластиковая свеча с тремя пламенами, 21,5 см, с подставкой, золотистый/серебристый/белый цвет, 1 шт./цветная коробка, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica a tripla fiamma da 21,5 cm con tazza, oro/argento/bianco, 1 pezzo/scatola colorata, funzionante con 2 batterie AA",
      "fr": "Bougie LED triple flamme en plastique de 21,5 cm avec coupelle, or/argent/blanc, 1 pièce/boîte couleur, fonctionne avec 2 piles AA",
      "pt": "Vela de LED de plástico com chama tripla de 21,5 cm e suporte, nas cores dourada, prateada e branca, 1 unidade por caixa colorida, funciona com 2 pilhas AA."
    },
    "price": 5.04,
    "category": "candle",
    "image": "/images/products/SMC-024.png",
    "originalRow": {
      "packing": "三支蜡烛杯蜡21CM\r\n1PC/盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-025",
    "name": "SMC-025",
    "descriptions": {
      "en": "18CM Triple Flame Plastic Led Candle, 1pc/Color box,working by 2*AA battery",
      "pl": "Świeca LED z potrójnym płomieniem, 18 cm, plastikowa, 1 szt./kolorowe pudełko, działająca na 2 baterie AA",
      "de": "18 cm LED-Kerze mit dreifacher Flamme aus Kunststoff, 1 Stück/Farbbox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de triple llama de 18 cm, 1 unidad/caja de color, funciona con 2 pilas AA",
      "ru": "Светодиодная пластиковая свеча с тройным пламенем, 18 см, 1 шт./цветная коробка, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica a tripla fiamma da 18 cm, 1 pezzo/scatola colorata, funzionante con 2 batterie AA",
      "fr": "Bougie LED triple flamme en plastique de 18 cm, 1 pièce/boîte couleur, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico com chama tripla de 18 cm, 1 unidade por caixa colorida, funciona com 2 pilhas AA."
    },
    "price": 5.159999999999999,
    "category": "candle",
    "image": "/images/products/SMC-025.png",
    "originalRow": {
      "packing": "新款三支蜡\r\n1PC/盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-026",
    "name": "SMC-026",
    "descriptions": {
      "en": "5.5*12.5cm Led Plastic Grave Candle with Gold Cross decoration, 12pcs/Display box,working by 2*AA battery",
      "pl": "5,5*12,5 cm Plastikowa świeca nagrobna LED ze złotym krzyżem, 12 szt./pudełko ekspozycyjne, działa na 2 baterie AA",
      "de": "5,5 x 12,5 cm große LED-Grabkerze aus Kunststoff mit goldener Kreuzverzierung, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien",
      "es": "Vela de tumba de plástico LED de 5,5 x 12,5 cm con decoración de cruz dorada, 12 piezas/caja de presentación, funciona con 2 pilas AA",
      "ru": "Светодиодные пластиковые свечи для могилы размером 5,5*12,5 см с золотым крестом, 12 шт./витрина, работают от 2 батареек типа АА.",
      "it": "Candela funebre in plastica a LED da 5,5*12,5 cm con decorazione a croce dorata, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA",
      "fr": "Bougie funéraire LED en plastique de 5,5 x 12,5 cm avec décoration en croix dorée, 12 pièces par boîte présentoir, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico para túmulo, 5,5 x 12,5 cm, com decoração de cruz dourada, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 3.12,
    "category": "candle",
    "image": "/images/products/SMC-026.png",
    "originalRow": {
      "packing": "5.5*12.5cm子弹头杯蜡+金十字架\r\n12PCS/展示盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-027",
    "name": "SMC-027",
    "descriptions": {
      "en": "5.5*15cm Led Plastic Grave Candle with Gold Cross decoration, 12pcs/Display box,working by 2*AA battery",
      "pl": "5,5*15 cm plastikowa świeca nagrobna LED ze złotym krzyżem, 12 szt./pudełko ekspozycyjne, działa na 2 baterie AA",
      "de": "5,5 x 15 cm große LED-Grabkerze aus Kunststoff mit goldener Kreuzverzierung, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien",
      "es": "Vela de tumba de plástico LED de 5,5 x 15 cm con decoración de cruz dorada, 12 piezas/caja de presentación, funciona con 2 pilas AA",
      "ru": "Светодиодные пластиковые свечи для могилы размером 5,5*15 см с золотым крестом, 12 штук в коробке, работают от 2 батареек типа АА.",
      "it": "Candela funebre in plastica a LED da 5,5*15 cm con decorazione a croce dorata, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA",
      "fr": "Bougie funéraire LED en plastique de 5,5 x 15 cm avec décoration en croix dorée, 12 pièces par boîte présentoir, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico para túmulo, 5,5 x 15 cm, com decoração de cruz dourada, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 3.36,
    "category": "candle",
    "image": "/images/products/SMC-027.png",
    "originalRow": {
      "packing": "5.5*15cm子弹头杯蜡+金十字架\r\n12PCS/展示盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-030",
    "name": "SMC-030",
    "descriptions": {
      "en": "Acrylic Icicle Led candle, light in yellow, 12pcs/display box,working by 2*AA battery",
      "pl": "Świeca LED w kształcie sopla akrylowego, w kolorze żółtym, 12 szt./pudełko ekspozycyjne, zasilana 2 bateriami AA",
      "de": "LED-Kerzen in Eiszapfenform aus Acryl, gelbes Licht, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de carámbano acrílico, luz en amarillo, 12 piezas / caja de presentación, funciona con 2 pilas AA",
      "ru": "Акриловые светодиодные свечи в виде сосулек, светящиеся желтым светом, 12 шт./витрина, работают от 2 батареек типа АА.",
      "it": "Candela LED a forma di ghiacciolo in acrilico, luce gialla, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA",
      "fr": "Bougie LED en acrylique en forme de glaçon, lumière jaune, 12 pièces/boîte présentoir, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED em formato de pingente de gelo acrílico, luz amarela, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 3.1799999999999997,
    "category": "candle",
    "image": "/images/products/SMC-030.png",
    "originalRow": {
      "packing": "跳闪透明大蜡烛\r\n12PCS/展示盒",
      "light": "橘灯",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-031",
    "name": "SMC-031",
    "descriptions": {
      "en": "Acrylic Icicle Led candle, light in red, 12pcs/display box,working by 2*AA battery",
      "pl": "Świeca LED w kształcie sopla akrylowego, świeci na czerwono, 12 szt./pudełko ekspozycyjne, działa na 2 baterie AA",
      "de": "LED-Eiszapfenkerze aus Acryl, rotes Licht, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de carámbano acrílico, luz en rojo, 12 piezas/caja de presentación, funciona con 2 pilas AA",
      "ru": "Акриловые светодиодные свечи в виде сосулек, светящиеся красным, 12 шт./витрина, работают от 2 батареек типа АА.",
      "it": "Candela LED a forma di ghiacciolo in acrilico, luce rossa, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA",
      "fr": "Bougie LED en acrylique en forme de glaçon, lumière rouge, 12 pièces/boîte présentoir, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED em formato de pingente de gelo acrílico, luz vermelha, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 3.1799999999999997,
    "category": "candle",
    "image": "/images/products/SMC-031.png",
    "originalRow": {
      "packing": "跳闪透明大蜡烛\r\n12PCS/展示盒",
      "light": "红灯",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-032",
    "name": "SMC-032",
    "descriptions": {
      "en": "Acrylic Icicle Led candle, light in purple, 12pcs/display box,working by 2*AA battery",
      "pl": "Świeca LED w kształcie sopla akrylowego, w kolorze fioletowym, 12 szt./pudełko ekspozycyjne, zasilana 2 bateriami AA",
      "de": "LED-Kerzen in Eiszapfenform aus Acryl, violettes Licht, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de carámbano acrílico, luz violeta, 12 piezas/caja de presentación, funciona con 2 pilas AA",
      "ru": "Акриловые светодиодные свечи в виде сосулек, фиолетового цвета, 12 шт./витрина, работают от 2 батареек типа АА.",
      "it": "Candela LED a forma di ghiacciolo in acrilico, luce viola, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA",
      "fr": "Bougie LED en acrylique en forme de glaçon, lumière violette, 12 pièces par boîte présentoir, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED em formato de pingente de gelo de acrílico, luz roxa, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 3.1799999999999997,
    "category": "candle",
    "image": "/images/products/SMC-032.png",
    "originalRow": {
      "packing": "跳闪透明大蜡烛\r\n12PCS/展示盒",
      "light": "紫灯",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-033",
    "name": "SMC-033",
    "descriptions": {
      "en": "Acrylic Icicle Led candle, light in cold white, 12pcs/display box,working by 2*AA battery",
      "pl": "Świeca LED w kształcie sopla akrylowego, światło w zimnej bieli, 12 szt./pudełko ekspozycyjne, zasilana 2 bateriami AA",
      "de": "LED-Kerzen in Eiszapfenform aus Acryl, kaltweißes Licht, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de carámbano acrílico, luz en blanco frío, 12 piezas/caja de presentación, funciona con 2 pilas AA",
      "ru": "Акриловые светодиодные свечи в виде сосулек, свет холодного белого света, 12 шт./витрина, работают от 2 батареек типа АА.",
      "it": "Candela LED a forma di ghiacciolo in acrilico, luce bianca fredda, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA",
      "fr": "Bougie LED en acrylique en forme de glaçon, lumière blanche froide, 12 pièces par boîte présentoir, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED em formato de pingente de gelo acrílico, luz branca fria, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 3.1799999999999997,
    "category": "candle",
    "image": "/images/products/SMC-033.png",
    "originalRow": {
      "packing": "跳闪透明大蜡烛\r\n12PCS/展示盒",
      "light": "冷白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-034",
    "name": "SMC-034",
    "descriptions": {
      "en": "Acrylic Icicle Led candle, light in warm white, 12pcs/display box,working by 2*AA battery",
      "pl": "Świeca LED w kształcie sopla akrylowego, o ciepłej bieli, 12 szt./pudełko ekspozycyjne, zasilana 2 bateriami AA",
      "de": "LED-Kerzen in Eiszapfenform aus Acryl, warmweißes Licht, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de carámbano acrílico, luz en blanco cálido, 12 piezas/caja de presentación, funciona con 2 pilas AA",
      "ru": "Акриловые светодиодные свечи в виде сосулек, светящиеся теплым белым светом, 12 шт./витрина, работают от 2 батареек типа АА.",
      "it": "Candela LED a forma di ghiacciolo in acrilico, luce bianca calda, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA",
      "fr": "Bougie LED en acrylique en forme de glaçon, lumière blanc chaud, 12 pièces par boîte présentoir, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED em formato de pingente de gelo acrílico, luz branca quente, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 3.1799999999999997,
    "category": "candle",
    "image": "/images/products/SMC-034.png",
    "originalRow": {
      "packing": "跳闪透明大蜡烛\r\n12PCS/展示盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-035",
    "name": "SMC-035",
    "descriptions": {
      "en": "5.3*12.5cm, Plastic Led Candle with Bullet shape flame, 12pcs/display box,working by 2*AA battery",
      "pl": "5,3*12,5 cm, plastikowa świeca LED z płomieniem w kształcie pocisku, 12 szt./pudełko ekspozycyjne, działa na 2 baterie AA",
      "de": "5,3 x 12,5 cm, LED-Kerze aus Kunststoff mit kugelförmiger Flamme, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico con forma de bala, 5,3 x 12,5 cm, 12 unidades por caja, funciona con 2 pilas AA.",
      "ru": "Светодиодная пластиковая свеча с пламенем в форме пули, 5,3*12,5 см, 12 шт./витрина, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 5,3*12,5 cm con fiamma a forma di proiettile, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique, 5,3 x 12,5 cm, flamme en forme de balle, 12 pièces par boîte présentoir, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico, 5,3 x 12,5 cm, com chama em formato de bala, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 3.0599999999999996,
    "category": "candle",
    "image": "/images/products/SMC-035.png",
    "originalRow": {
      "packing": "白色三波浪子弹头\r\n5.3*12.5cm\r\n12PCS/展示盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-036",
    "name": "SMC-036",
    "descriptions": {
      "en": "5.3*15cm, Plastic Led Candle with Bullet shape flame, 12pcs/display box,working by 2*AA battery",
      "pl": "5,3*15 cm, plastikowa świeca LED z płomieniem w kształcie pocisku, 12 szt./pudełko ekspozycyjne, działa na 2 baterie AA",
      "de": "5,3 x 15 cm große LED-Kerze aus Kunststoff mit kugelförmiger Flamme, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico con forma de bala, 5,3 x 15 cm, 12 unidades por caja, funciona con 2 pilas AA.",
      "ru": "Светодиодная пластиковая свеча с пламенем в форме пули, 5,3*15 см, 12 штук в коробке, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 5,3*15 cm con fiamma a forma di proiettile, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique de 5,3 x 15 cm avec flamme en forme de balle, 12 pièces par boîte présentoir, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico, 5,3 x 15 cm, com chama em formato de bala, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 3.36,
    "category": "candle",
    "image": "/images/products/SMC-036.png",
    "originalRow": {
      "packing": "白色三波浪子弹头\r\n5.3*15cm\r\n12PCS/展示盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-037",
    "name": "SMC-037",
    "descriptions": {
      "en": "5.3*12.5cm, Plastic Led Candle with Bullet shape flame and Gold Cross Decoration, 12pcs/display box,working by 2*AA battery",
      "pl": "5,3*12,5 cm, plastikowa świeca LED z płomieniem w kształcie pocisku i złotym krzyżem, 12 szt./pudełko ekspozycyjne, działa na 2 baterie AA",
      "de": "5,3 x 12,5 cm große LED-Kerze aus Kunststoff mit kugelförmiger Flamme und goldener Kreuzverzierung, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de 5,3 x 12,5 cm con forma de bala y decoración de cruz dorada, 12 unidades por caja, funciona con 2 pilas AA.",
      "ru": "Светодиодная пластиковая свеча размером 5,3*12,5 см с пламенем в форме пули и золотым крестом, 12 штук в коробке, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 5,3*12,5 cm con fiamma a forma di proiettile e decorazione a croce dorata, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique de 5,3 x 12,5 cm, avec flamme en forme de balle et décoration en forme de croix dorée, 12 pièces par boîte présentoir, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico, 5,3 x 12,5 cm, com chama em formato de bala e decoração de cruz dourada, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 3.54,
    "category": "candle",
    "image": "/images/products/SMC-037.png",
    "originalRow": {
      "packing": "白色三波浪子弹头+十字架\r\n5.3*12.5cm\r\n12PCS/展示盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-038",
    "name": "SMC-038",
    "descriptions": {
      "en": "5.3*15cm, Plastic Led Candle with Bullet shape flame and Gold Cross Decoration, 12pcs/display box,working by 2*AA battery",
      "pl": "5,3*15 cm, plastikowa świeca LED z płomieniem w kształcie pocisku i złotym krzyżem, 12 szt./pudełko ekspozycyjne, działa na 2 baterie AA",
      "de": "5,3 x 15 cm große LED-Kerze aus Kunststoff mit kugelförmiger Flamme und goldener Kreuzverzierung, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de 5,3 x 15 cm con forma de bala y decoración de cruz dorada, 12 unidades por caja, funciona con 2 pilas AA.",
      "ru": "Светодиодная пластиковая свеча размером 5,3*15 см с пламенем в форме пули и золотым крестом, 12 штук в коробке, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 5,3*15 cm con fiamma a forma di proiettile e decorazione a croce dorata, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique de 5,3 x 15 cm, avec flamme en forme de balle et décoration en forme de croix dorée, 12 pièces par boîte présentoir, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico, 5,3 x 15 cm, com chama em formato de bala e decoração de cruz dourada, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 3.78,
    "category": "candle",
    "image": "/images/products/SMC-038.png",
    "originalRow": {
      "packing": "白色三波浪子弹头+十字架\r\n5.3*15cm\r\n12PCS/展示盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-039",
    "name": "SMC-039",
    "descriptions": {
      "en": "5.3*12.5cm, Plastic Led Candle Plated by Metalic Gold/Silver/Gun Black, with Bullet shape flame, 12pcs/display box,working by 2*AA battery",
      "pl": "5,3*12,5 cm, plastikowa świeca LED pokryta metalicznym złotem/srebrem/czarnym pistoletem, z płomieniem w kształcie pocisku, 12 szt./pudełko ekspozycyjne, działa na 2 baterie AA",
      "de": "5,3 x 12,5 cm große LED-Kerze aus Kunststoff, metallbeschichtet in Gold/Silber/Gun Black, mit kugelförmiger Flamme, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico chapada en oro metálico, plata y negro pistola, de 5,3 x 12,5 cm, con forma de bala, 12 unidades por caja, funciona con 2 pilas AA.",
      "ru": "Светодиодная пластиковая свеча размером 5,3*12,5 см, покрытая металлическим золотом/серебром/черным цветом, с пламенем в форме пули, 12 штук в демонстрационной коробке, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 5,3*12,5 cm, placcata in oro/argento/nero metallizzato, con fiamma a forma di proiettile, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique plaqué or/argent/noir canon de fusil, 5,3 x 12,5 cm, flamme en forme de balle, 12 pièces par boîte présentoir, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico, 5,3 x 12,5 cm, banhada a metal dourado/prateado/preto, com chama em formato de bala, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 3.78,
    "category": "candle",
    "image": "/images/products/SMC-039.png",
    "originalRow": {
      "packing": "UV电镀金/银/枪黑\r\n三波浪子弹头\r\n5.3*12.5\r\n12PCS/展示盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-040",
    "name": "SMC-040",
    "descriptions": {
      "en": "5.3*15cm, Plastic Led Candle Plated by Metalic Gold/Silver/Gun Black, with Bullet shape flame, 12pcs/display box,working by 2*AA battery",
      "pl": "5,3*15 cm, plastikowa świeca LED pokryta metalicznym złotem/srebrem/czarnym pistoletem, z płomieniem w kształcie pocisku, 12 szt./pudełko ekspozycyjne, działa na 2 baterie AA",
      "de": "5,3 x 15 cm große LED-Kerze aus Kunststoff, metallbeschichtet in Gold/Silber/Gun Black, mit kugelförmiger Flamme, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de 5,3 x 15 cm, chapada en oro metálico, plata y negro pistola, con llama en forma de bala, 12 unidades por caja de presentación, funciona con 2 pilas AA.",
      "ru": "Светодиодная пластиковая свеча размером 5,3*15 см, покрытая металлическим золотом/серебром/черным цветом, с пламенем в форме пули, 12 штук в демонстрационной коробке, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 5,3*15 cm placcata in oro/argento/nero metallizzato, con fiamma a forma di proiettile, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique plaqué or/argent/noir métallisé, 5,3 x 15 cm, flamme en forme de balle, 12 pièces par boîte présentoir, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico, 5,3 x 15 cm, com revestimento metálico em dourado/prateado/preto, com chama em formato de bala, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 4.08,
    "category": "candle",
    "image": "/images/products/SMC-040.png",
    "originalRow": {
      "packing": "UV电镀金/银/枪黑\r\n三波浪子弹头\r\n5.3*15\r\n12PCS/展示盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-041",
    "name": "SMC-041",
    "descriptions": {
      "en": "5.3*17.5cm, Plastic Led Candle Plated by Metalic Gold/Silver/Gun Black, with Bullet shape flame, 12pcs/display box,working by 2*AA battery",
      "pl": "5,3*17,5 cm, plastikowa świeca LED pokryta metalicznym złotem/srebrem/czarnym pistoletem, z płomieniem w kształcie pocisku, 12 szt./pudełko ekspozycyjne, działa na 2 baterie AA",
      "de": "5,3 x 17,5 cm große LED-Kerze aus Kunststoff, metallbeschichtet in Gold/Silber/Gun Black, mit kugelförmiger Flamme, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico chapada en oro metálico, plata y negro pistola, de 5,3 x 17,5 cm, con forma de bala, 12 unidades por caja, funciona con 2 pilas AA.",
      "ru": "Светодиодная пластиковая свеча размером 5,3*17,5 см, покрытая металлическим золотом/серебром/черным цветом, с пламенем в форме пули, 12 штук в демонстрационной коробке, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 5,3*17,5 cm placcata in oro/argento/nero metallizzato, con fiamma a forma di proiettile, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique plaqué or/argent/noir canon de fusil, 5,3 x 17,5 cm, flamme en forme de balle, 12 pièces par boîte présentoir, fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico, 5,3 x 17,5 cm, banhada a metal dourado/prateado/preto, com chama em formato de bala, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 4.38,
    "category": "candle",
    "image": "/images/products/SMC-041.png",
    "originalRow": {
      "packing": "UV电镀金/银/枪黑\r\n三波浪子弹头\r\n5.3*17.5\r\n12PCS/展示盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-042",
    "name": "SMC-042",
    "descriptions": {
      "en": "5.3*12.5cm, Plastic Led Candle Plated by Metalic Gold/Silver/Gun Black with Cross decoration, Bullet shape flame, 12pcs/display box,working by 2*AA battery",
      "pl": "5,3*12,5 cm, plastikowa świeca LED pokryta metalicznym złotem/srebrem/czarnym pistoletem z dekoracją w kształcie krzyża, płomień w kształcie pocisku, 12 szt./pudełko ekspozycyjne, działa na 2 baterie AA",
      "de": "5,3 x 12,5 cm große LED-Kerze aus Kunststoff, metallbeschichtet in Gold/Silber/Gun-Schwarz mit Kreuzdekor, flammenförmiges Design, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico chapada en oro metálico, plata y negro pistola, de 5,3 x 12,5 cm, con decoración en forma de cruz y forma de bala, 12 unidades en caja de presentación. Funciona con 2 pilas AA.",
      "ru": "Светодиодная пластиковая свеча размером 5,3*12,5 см, покрытая металлическим золотом/серебром/черным металликом с крестообразным декором, пламя в форме пули, 12 штук в демонстрационной коробке, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica da 5,3*12,5 cm, placcata in oro/argento/nero metallizzato con decorazione a croce, fiamma a forma di proiettile, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique plaqué or/argent/noir canon de fusil, 5,3 x 12,5 cm, avec décoration en forme de croix et flamme en forme de balle. Vendue par boîte de 12. Fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico, 5,3 x 12,5 cm, banhada a metal dourado/prateado/preto-chumbo com decoração em cruz, chama em formato de bala, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 4.2,
    "category": "candle",
    "image": "/images/products/SMC-042.png",
    "originalRow": {
      "packing": "UV电镀金/银/枪黑+十字架\r\n三波浪子弹头\r\n5.3*12.5\r\n12PCS/展示盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-043",
    "name": "SMC-043",
    "descriptions": {
      "en": "5.3*15cm, Plastic Led Candle Plated by Metalic Gold/Silver/Gun Black with Cross decoration, Bullet shape flame, 12pcs/display box,working by 2*AA battery",
      "pl": "5,3*15 cm, plastikowa świeca LED pokryta metalicznym złotem/srebrem/czarnym pistoletem z dekoracją w kształcie krzyża, płomień w kształcie pocisku, 12 szt./pudełko ekspozycyjne, działa na 2 baterie AA",
      "de": "5,3 x 15 cm große LED-Kerze aus Kunststoff, metallbeschichtet in Gold/Silber/Gun-Schwarz mit Kreuzdekor, flammenförmiges Design, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico de 5,3 x 15 cm, chapada en oro metálico, plata y negro pistola con decoración en forma de cruz, llama en forma de bala, 12 unidades por caja de presentación, funciona con 2 pilas AA.",
      "ru": "Светодиодная пластиковая свеча размером 5,3*15 см, покрытая металлическим золотом/серебром/черным металликом с крестообразным декором, пламя в форме пули, 12 штук в коробке, работает от 2 батареек типа АА.",
      "it": "5,3*15 cm, candela a LED in plastica placcata in oro/argento/nero metallizzato con decorazione a croce, fiamma a forma di proiettile, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique plaqué or/argent/noir canon de fusil, 5,3 x 15 cm, avec décoration en forme de croix et flamme en forme de balle. Vendue par boîte de 12. Fonctionne avec 2 piles AA.",
      "pt": "Vela de LED de plástico, 5,3 x 15 cm, banhada a metal dourado/prateado/preto-chumbo com decoração em cruz, chama em formato de bala, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 4.56,
    "category": "candle",
    "image": "/images/products/SMC-043.png",
    "originalRow": {
      "packing": "UV电镀金/银/枪黑+十字架\r\n三波浪子弹头\r\n5.3*15",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-044",
    "name": "SMC-044",
    "descriptions": {
      "en": "7.5*10cm Solar Led Candle, Water proof, 1pc/color box",
      "pl": "Świeca solarna LED 7,5*10 cm, wodoodporna, 1 szt./kolorowe pudełko",
      "de": "7,5 x 10 cm große Solar-LED-Kerze, wasserdicht, 1 Stück/Farbbox",
      "es": "Vela LED solar de 7,5 x 10 cm, resistente al agua, 1 unidad/caja de color",
      "ru": "Солнечная светодиодная свеча 7,5*10 см, водонепроницаемая, 1 шт./цветная коробка",
      "it": "Candela solare a LED da 7,5*10 cm, impermeabile, 1 pezzo/scatola colorata",
      "fr": "Bougie solaire LED 7,5 x 10 cm, étanche, 1 pièce/boîte couleur",
      "pt": "Vela solar LED de 7,5 x 10 cm, à prova d'água, 1 unidade por caixa colorida."
    },
    "price": 9,
    "category": "candle",
    "image": "/images/products/SMC-044.png",
    "originalRow": {
      "packing": "太阳能蜡烛7.5*10cm\r\n1PC/盒",
      "light": "暖白",
      "power": "太阳能"
    }
  },
  {
    "id": "SMC-045",
    "name": "SMC-045",
    "descriptions": {
      "en": "7.5*12.5cm Solar Led Candle, Water proof, 1pc/color box",
      "pl": "Świeca solarna LED 7,5*12,5 cm, wodoodporna, 1 szt./kolorowe pudełko",
      "de": "7,5 x 12,5 cm Solar-LED-Kerze, wasserdicht, 1 Stück/Farbbox",
      "es": "Vela LED solar de 7,5 x 12,5 cm, resistente al agua, 1 unidad/caja de color",
      "ru": "Солнечная светодиодная свеча 7,5*12,5 см, водонепроницаемая, 1 шт./цветная коробка",
      "it": "Candela solare a LED da 7,5*12,5 cm, impermeabile, 1 pezzo/scatola colorata",
      "fr": "Bougie solaire LED 7,5 x 12,5 cm, étanche, 1 pièce/boîte couleur",
      "pt": "Vela solar LED de 7,5 x 12,5 cm, à prova d'água, 1 unidade por caixa colorida."
    },
    "price": 9.6,
    "category": "candle",
    "image": "/images/products/SMC-045.png",
    "originalRow": {
      "packing": "太阳能蜡烛7.5*12.5cm\r\n1PC/盒",
      "light": "暖白",
      "power": "太阳能"
    }
  },
  {
    "id": "SMC-046",
    "name": "SMC-046",
    "descriptions": {
      "en": "7.5*15cm Solar Led Candle, Water proof, 1pc/color box",
      "pl": "Świeca solarna LED 7,5*15 cm, wodoodporna, 1 szt./kolorowe pudełko",
      "de": "7,5 x 15 cm große Solar-LED-Kerze, wasserdicht, 1 Stück/Farbbox",
      "es": "Vela LED solar de 7,5 x 15 cm, resistente al agua, 1 unidad/caja de color",
      "ru": "Солнечная светодиодная свеча 7,5*15 см, водонепроницаемая, 1 шт./цветная коробка",
      "it": "Candela solare a LED da 7,5*15 cm, impermeabile, 1 pezzo/scatola colorata",
      "fr": "Bougie solaire LED 7,5 x 15 cm, étanche, 1 pièce/boîte couleur",
      "pt": "Vela solar LED de 7,5 x 15 cm, à prova d'água, 1 unidade por caixa colorida."
    },
    "price": 10.2,
    "category": "candle",
    "image": "/images/products/SMC-046.png",
    "originalRow": {
      "packing": "太阳能蜡烛7.5*15cm\r\n1PC/盒",
      "light": "暖白",
      "power": "太阳能"
    }
  },
  {
    "id": "SMC-047",
    "name": "SMC-047",
    "descriptions": {
      "en": "9.5*6.5cm Led Oil lamp, Gold/Silver/Gun Black Plated, 1pc/color box, working by 2*AA Battery",
      "pl": "Lampa naftowa LED 9,5*6,5 cm, platerowana złotem/srebrem/czarnym pistoletem, 1 szt./kolorowe pudełko, działa na 2 baterie AA",
      "de": "9,5 x 6,5 cm LED-Öllampe, gold-/silber-/anthrazitfarben beschichtet, 1 Stück/Farbbox, Betrieb mit 2 AA-Batterien",
      "es": "Lámpara de aceite LED de 9,5 x 6,5 cm, chapada en oro, plata y negro, 1 unidad/caja de color, funciona con 2 pilas AA.",
      "ru": "Светодиодная масляная лампа 9,5*6,5 см, покрытие золотом/серебром/черном, 1 шт./цветная коробка, работает от 2 батареек типа АА.",
      "it": "Lampada a olio a LED da 9,5*6,5 cm, placcata in oro/argento/nero, 1 pezzo/scatola colorata, funzionante con 2 batterie AA",
      "fr": "Lampe à huile LED 9,5 x 6,5 cm, plaquée or/argent/noir canon de fusil, 1 pièce/boîte couleur, fonctionne avec 2 piles AA",
      "pt": "Lâmpada de óleo LED de 9,5 x 6,5 cm, banhada a ouro/prata/preto-chumbo, 1 unidade por caixa colorida, funciona com 2 pilhas AA."
    },
    "price": 6,
    "category": "candle",
    "image": "/images/products/SMC-047.png",
    "originalRow": {
      "packing": "电镀油灯\r\n1PC/盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-048",
    "name": "SMC-048",
    "descriptions": {
      "en": "7.5*12.5Cm Led Candle with Marble base, 1pc/color box",
      "pl": "Świeca LED 7,5*12,5 cm z marmurową podstawą, 1 szt./kolorowe pudełko",
      "de": "7,5 x 12,5 cm LED-Kerze mit Marmorsockel, 1 Stück/Farbbox",
      "es": "Vela LED de 7,5 x 12,5 cm con base de mármol, 1 unidad/caja de color",
      "ru": "Светодиодная свеча 7,5*12,5 см с мраморным основанием, 1 шт./цветная коробка",
      "it": "Candela a LED da 7,5*12,5 cm con base in marmo, 1 scatola colorata",
      "fr": "Bougie LED 7,5 x 12,5 cm avec base en marbre, 1 pièce/boîte couleur",
      "pt": "Vela LED de 7,5 x 12,5 cm com base de mármore, 1 unidade por caixa colorida."
    },
    "price": 6.6,
    "category": "candle",
    "image": "/images/products/SMC-048.png",
    "originalRow": {
      "packing": "水泥灰蜡烛7.5*12.5     \r\n\r\n1PC/盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-049",
    "name": "SMC-049",
    "descriptions": {
      "en": "7.5*15Cm Led Candle with Marble base, 1pc/color box",
      "pl": "Świeca LED 7,5*15 cm z marmurową podstawą, 1 szt./kolorowe pudełko",
      "de": "7,5 x 15 cm LED-Kerze mit Marmorsockel, 1 Stück/Farbbox",
      "es": "Vela LED de 7,5 x 15 cm con base de mármol, 1 unidad/caja de color",
      "ru": "Светодиодная свеча 7,5*15 см с мраморным основанием, 1 шт./цветная коробка",
      "it": "Candela a LED da 7,5*15 cm con base in marmo, 1 scatola colorata",
      "fr": "Bougie LED 7,5 x 15 cm avec base en marbre, 1 pièce/boîte couleur",
      "pt": "Vela LED de 7,5 x 15 cm com base de mármore, 1 unidade por caixa colorida."
    },
    "price": 7.199999999999999,
    "category": "candle",
    "image": "/images/products/SMC-049.png",
    "originalRow": {
      "packing": "水泥灰蜡烛7.5*15     \r\n1PC/盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-050",
    "name": "SMC-050",
    "descriptions": {
      "en": "6.5*12cm Hexagonal Plastic Led Candle, 12pcs/Display box, working by 2*AA batttery\r\n",
      "pl": "Sześciokątna plastikowa świeca LED 6,5*12 cm, 12 szt./pudełko ekspozycyjne, zasilana 2 bateriami AA.",
      "de": "Sechseckige LED-Kerze aus Kunststoff, 6,5 x 12 cm, 12 Stück pro Displaybox, Betrieb mit 2 AA-Batterien\r\n\r\n",
      "es": "Vela LED hexagonal de plástico de 6,5 x 12 cm, 12 unidades en caja de presentación, funciona con 2 pilas AA.",
      "ru": "Пластиковые светодиодные свечи шестиугольной формы, 6,5*12 см, 12 шт./коробка для демонстрации, работают от 2 батареек типа АА.\r\n\r\n",
      "it": "Candela LED esagonale in plastica da 6,5 ​​x 12 cm, 12 pezzi/scatola espositiva, funzionante con 2 batterie AA\r\n",
      "fr": "Bougie LED hexagonale en plastique 6,5 x 12 cm, 12 pièces/boîte présentoir, fonctionne avec 2 piles AA.",
      "pt": "Vela LED hexagonal de plástico de 6,5 x 12 cm, 12 unidades por caixa expositora, funciona com 2 pilhas AA."
    },
    "price": 2.04,
    "category": "candle",
    "image": "/images/products/SMC-050.png",
    "originalRow": {
      "packing": "六边形蜡烛\r\n12PCS/盒",
      "light": "暖白",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-051",
    "name": "SMC-051",
    "descriptions": {
      "en": "17*6.5*4.5cm, LED Candle– Flame in the Shape of a Fire",
      "pl": "17*6,5*4,5 cm, Świeca LED – Płomień w kształcie ognia",
      "de": "17 x 6,5 x 4,5 cm, LED-Kerze – Flamme in Form eines Feuers",
      "es": "Vela LED de 17 x 6,5 x 4,5 cm con forma de llama de fuego.",
      "ru": "Светодиодная свеча размером 17*6,5*4,5 см – пламя в форме огня.",
      "it": "17*6,5*4,5 cm, candela LED – fiamma a forma di fuoco",
      "fr": "",
      "pt": ""
    },
    "price": 5.76,
    "category": "candle",
    "image": "/images/products/SMC-051.png",
    "originalRow": {
      "packing": "花型墓碑灯+十字架\r\n     \r\n1PC/盒",
      "light": "橘灯/冷白/红",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-052",
    "name": "SMC-052",
    "descriptions": {
      "en": "17*5*4.5cm, LED Candle– Flame in the Shape of a Fire",
      "pl": "17*5*4,5 cm, Świeca LED – Płomień w kształcie ognia",
      "de": "17 x 5 x 4,5 cm, LED-Kerze – Flamme in Form eines Feuers",
      "es": "Vela LED de 17 x 5 x 4,5 cm con forma de llama de fuego.",
      "ru": "Светодиодная свеча 17*5*4,5 см – пламя в форме огня.",
      "it": "Candela LED 17*5*4,5 cm – Fiamma a forma di fuoco",
      "fr": "Bougie LED 17 x 6,5 x 4,5 cm – Flamme en forme de feu",
      "pt": "Vela LED de 17*6,5*4,5cm – Chama em formato de fogo"
    },
    "price": 5.76,
    "category": "candle",
    "image": "/images/products/SMC-052.png",
    "originalRow": {
      "packing": "棺材板墓碑灯+十字架     \r\n1PC/盒",
      "light": "橘灯/冷白/红",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-053",
    "name": "SMC-053",
    "descriptions": {
      "en": "17*6.5*4.5cm, LED Candle with Solar Panel – Flame in the Shape of a Fire",
      "pl": "17*6,5*4,5 cm, świeca LED z panelem słonecznym – płomień w kształcie ognia",
      "de": "17 x 6,5 x 4,5 cm, LED-Kerze mit Solarpanel – Flamme in Form eines Feuers",
      "es": "Vela LED con panel solar (17 x 6,5 x 4,5 cm) con forma de llama de fuego.",
      "ru": "Светодиодная свеча с солнечной панелью, 17*6,5*4,5 см – пламя в форме огня.",
      "it": "Candela LED con pannello solare, 17*6,5*4,5 cm – Fiamma a forma di fuoco",
      "fr": "Bougie LED 17 x 5 x 4,5 cm – Flamme en forme de feu",
      "pt": "Vela LED de 17*5*4,5cm – Chama em formato de fogo"
    },
    "price": 7.56,
    "category": "candle",
    "image": "/images/products/SMC-053.png",
    "originalRow": {
      "packing": "太阳能墓碑灯     \r\n1PC/盒",
      "light": "橘灯/冷白/红",
      "power": "太阳能"
    }
  },
  {
    "id": "SMC-054",
    "name": "SMC-054",
    "descriptions": {
      "en": "7.5*10cm Gold Plated Plastic Led Candle, 1pc/color box, working by 2*AA Battery",
      "pl": "7,5*10 cm pozłacana plastikowa świeca LED, 1 szt./kolorowe pudełko, działająca na 2 baterie AA",
      "de": "7,5 x 10 cm große, vergoldete LED-Kerze aus Kunststoff, 1 Stück pro Farbbox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico chapada en oro de 7,5 x 10 cm, 1 unidad/caja de color, funciona con 2 pilas AA",
      "ru": "Светодиодная свеча из позолоченного пластика, 7,5*10 см, 1 шт./цветная коробка, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica placcata oro da 7,5*10 cm, 1 pz/scatola colorata, funzionante con 2 batterie AA",
      "fr": "Bougie LED 17 x 6,5 x 4,5 cm avec panneau solaire – Flamme en forme de feu",
      "pt": "Vela LED com painel solar, 17 x 6,5 x 4,5 cm – Chama em formato de fogo"
    },
    "price": 6.6,
    "category": "candle",
    "image": "/images/products/SMC-054.png",
    "originalRow": {
      "packing": "电镀金子弹头蜡烛     \r\n1PC/盒",
      "light": "暖灯",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-055",
    "name": "SMC-055",
    "descriptions": {
      "en": "7.5*12.5cm Gold Plated Plastic Led Candle, 1pc/color box, working by 2*AA Battery",
      "pl": "7,5*12,5 cm pozłacana plastikowa świeca LED, 1 szt./kolorowe pudełko, działająca na 2 baterie AA",
      "de": "7,5 x 12,5 cm große, vergoldete LED-Kerze aus Kunststoff, 1 Stück pro Farbbox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico chapada en oro de 7,5 x 12,5 cm, 1 unidad/caja de color, funciona con 2 pilas AA",
      "ru": "Светодиодная свеча из позолоченного пластика, 7,5*12,5 см, 1 шт./цветная коробка, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica placcata oro da 7,5*12,5 cm, 1 pezzo/scatola colorata, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique plaqué or 7,5 x 10 cm, 1 pièce/boîte couleur, fonctionne avec 2 piles AA",
      "pt": "Vela LED de plástico banhada a ouro, 7,5 x 10 cm, 1 unidade por caixa colorida, funciona com 2 pilhas AA."
    },
    "price": 7.199999999999999,
    "category": "candle",
    "image": "/images/products/SMC-055.png",
    "originalRow": {
      "packing": "电镀金子弹头蜡烛     \r\n1PC/盒",
      "light": "暖灯",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-056",
    "name": "SMC-056",
    "descriptions": {
      "en": "7.5*15cm Gold Plated Plastic Led Candle, 1pc/color box, working by 2*AA Battery",
      "pl": "7,5*15 cm pozłacana plastikowa świeca LED, 1 szt./kolorowe pudełko, działająca na 2 baterie AA",
      "de": "7,5 x 15 cm große, vergoldete LED-Kerze aus Kunststoff, 1 Stück pro Farbbox, Betrieb mit 2 AA-Batterien",
      "es": "Vela LED de plástico chapada en oro de 7,5 x 15 cm, 1 unidad/caja de color, funciona con 2 pilas AA",
      "ru": "Светодиодная свеча из позолоченного пластика, 7,5*15 см, 1 шт./цветная коробка, работает от 2 батареек типа АА.",
      "it": "Candela LED in plastica placcata oro da 7,5*15 cm, 1 pz/scatola colorata, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique plaqué or 7,5 x 12,5 cm, 1 pièce/boîte couleur, fonctionne avec 2 piles AA",
      "pt": "Vela LED de plástico banhada a ouro, 7,5 x 12,5 cm, 1 unidade por caixa colorida, funciona com 2 pilhas AA."
    },
    "price": 7.8,
    "category": "candle",
    "image": "/images/products/SMC-056.png",
    "originalRow": {
      "packing": "电镀金子弹头蜡烛     \r\n1PC/盒",
      "light": "暖灯",
      "power": "AA电池"
    }
  },
  {
    "id": "SMC-057",
    "name": "SMC-057",
    "descriptions": {
      "en": "15*6cm Plastic Led Flame Light, 1pc/color box, wokring by 2*AA Battery ",
      "pl": "15*6 cm plastikowa lampa LED w kształcie płomienia, 1 szt./kolorowe pudełko, działa na 2 baterie AA",
      "de": "15 x 6 cm große LED-Flammenleuchte aus Kunststoff, 1 Stück/Farbbox, Betrieb mit 2 AA-Batterien",
      "es": "Luz de llama LED de plástico de 15 x 6 cm, 1 unidad/caja de color, funciona con 2 pilas AA",
      "ru": "Пластиковый светодиодный светильник в виде пламени, 15*6 см, 1 шт./цветная коробка, работает от 2 батареек типа АА.",
      "it": "Luce a fiamma a LED in plastica da 15*6 cm, 1 scatola colorata, funzionante con 2 batterie AA",
      "fr": "Bougie LED en plastique plaqué or 7,5 x 15 cm, 1 pièce/boîte couleur, fonctionne avec 2 piles AA",
      "pt": "Vela LED de plástico banhada a ouro, 7,5 x 15 cm, 1 unidade por caixa colorida, funciona com 2 pilhas AA."
    },
    "price": 5.76,
    "category": "candle",
    "image": "/images/products/SMC-057.png",
    "originalRow": {
      "packing": "墓碑大火焰灯\r\n1PC/灯",
      "light": "橘灯",
      "power": "AA电池"
    }
  },
  {
    "id": "SMW-001",
    "name": "SMW-001",
    "descriptions": {
      "en": "8.5*26cm GLITTER WATER CANDLE, WARM WHITE LED LIGHT, WITH INSIDE DIFFERENT INNER SCENE, WORKING BY USB AND 3XAAA BATTERY",
      "pl": "8,5*26 cm ŚWIECA WODNA Z BROKATEM, CIEPŁE BIAŁE ŚWIATŁO LED, Z RÓŻNĄ WEWNĘTRZNĄ SCENĄ, DZIAŁA PRZEZ USB I 3 BATERIE AAA",
      "de": "8,5 x 26 cm Glitzer-Wasserkerze, warmweißes LED-Licht, mit verschiedenen Innenszenen, Betrieb über USB und 3 AAA-Batterien",
      "es": "VELA DE AGUA CON BRILLO DE 8,5*26 cm, LUZ LED BLANCA CÁLIDA, CON DIFERENTES ESCENAS INTERIORES, FUNCIONA POR USB Y 3 PILAS AAA",
      "ru": "Свеча с блестками, водяная, 8,5*26 см, теплый белый светодиодный свет, внутри разные декорации, работает от USB и 3 батареек AAA.",
      "it": "CANDELA CON GLITTER DA 8,5*26 cm, LUCE LED BIANCA CALDA, CON SCENA INTERNA DIVERSA ALL'INTERNO, FUNZIONANTE TRAMITE USB E 3 BATTERIE AAA",
      "fr": "",
      "pt": ""
    },
    "price": 25.2,
    "category": "water-lamp",
    "image": "/images/products/SMW-001.jpg",
    "originalRow": {
      "packing": "圣诞高款打水\r\n     1PC/盒",
      "light": "暖灯",
      "power": "AAA电池+USB"
    }
  },
  {
    "id": "SMW-002",
    "name": "SMW-002",
    "descriptions": {
      "en": "8.5*26cm GLITTER WATER CANDLE, MULTI COLOR LED LIGHT, WORKING BY USB AND 3XAAA BATTERY",
      "pl": "8,5*26 cm ŚWIECA WODNA Z BROKATEM, WIELOKOLOROWE ŚWIATŁO LED, DZIAŁA PRZEZ USB I 3 BATERIE AAA",
      "de": "8,5 x 26 cm Glitzer-Wasserkerze, mehrfarbiges LED-Licht, Betrieb über USB und 3 x AAA-Batterien",
      "es": "VELA DE AGUA CON BRILLO DE 8,5 x 26 cm, LUZ LED MULTICOLOR, FUNCIONA POR USB Y 3 PILAS AAA",
      "ru": "Водяная свеча с блестками, 8,5*26 см, многоцветная светодиодная подсветка, работает от USB и 3 батареек AAA.",
      "it": "CANDELA CON GLITTER DA 8,5*26 cm, LUCE LED MULTICOLORE, FUNZIONANTE TRAMITE USB E 3 BATTERIE AAA",
      "fr": "Bougie à eau pailletée 8,5 x 26 cm, lumière LED blanche chaude, avec différents décors intérieurs, fonctionne sur USB et avec 3 piles AAA.",
      "pt": "Vela de água com glitter de 8,5 x 26 cm, luz LED branca quente, com diferentes cenários internos, funciona com USB e 3 pilhas AA."
    },
    "price": 19.2,
    "category": "water-lamp",
    "image": "/images/products/SMW-002.jpg",
    "originalRow": {
      "packing": "高款打水     1PC/盒",
      "light": "暖灯",
      "power": "AAA电池+USB"
    }
  },
  {
    "id": "SMW-003",
    "name": "SMW-003",
    "descriptions": {
      "en": "16.8*9.5*40.5CM NATIVITY SCENE CHRISTMAS CHURCH LED LANTERN WITH MUSIC, working by USB and AA battery",
      "pl": "16,8*9,5*40,5 CM LATARNIA LED DO KOŚCIOŁA Z MUZYKĄ, działająca przez USB i baterię AA",
      "de": "16,8 x 9,5 x 40,5 cm große LED-Weihnachtslaterne mit Krippenmotiv und Musik, Betrieb über USB und AA-Batterien",
      "es": "LINTERNA LED DE NAVIDAD CON MÚSICA DE 16,8 x 9,5 x 40,5 CM, funciona con USB y pilas AA",
      "ru": "Светильник-фонарь в виде рождественской сцены для церкви, размером 16,8*9,5*40,5 см, со встроенной музыкой, работает от USB и батареек типа АА.",
      "it": "Lanterna a LED per chiesa di Natale con scena della natività da 16,8*9,5*40,5 cm con musica, funzionante tramite USB e batteria AA",
      "fr": "Bougie à eau pailletée 8,5 x 26 cm, lumière LED multicolore, fonctionne sur USB et avec 3 piles AAA",
      "pt": "Vela de água com glitter de 8,5 x 26 cm, luz LED multicolorida, funciona com USB e 3 pilhas AA."
    },
    "price": 122.39999999999999,
    "category": "water-lamp",
    "image": "/images/products/SMW-003.jpg",
    "originalRow": {
      "packing": "三间教堂     1PC/盒",
      "light": "暖灯",
      "power": "AA电池+USB"
    }
  },
  {
    "id": "SMW-004",
    "name": "SMW-004",
    "descriptions": {
      "en": "27*16.5*15CM CRYSTAL CHURCH CHRISTMAS ORNAMENT LED LANTERN WITH MUSIC,working by USB and AA battery",
      "pl": "27*16,5*15CM KRYSZTAŁOWA KOŚCIELNA OZDOBA ŚWIĄTECZNA LATARNIA LED Z MUZYKĄ, działająca przez USB i baterię AA",
      "de": "27 x 16,5 x 15 cm große LED-Weihnachtslaterne in Form einer Kristallkirche mit Musik, Betrieb über USB und AA-Batterien",
      "es": "LINTERNA LED DE ADORNO NAVIDEÑO DE CRISTAL DE 27*16,5*15 CM CON MÚSICA, funciona con USB y pilas AA",
      "ru": "Хрустальный рождественский фонарь для церкви, 27*16,5*15 см, со светодиодной подсветкой и музыкой, работает от USB и батареек типа АА.",
      "it": "Lanterna a LED con decorazione natalizia in cristallo da chiesa, 27*16,5*15 cm, con musica, funzionante tramite USB e batteria AA",
      "fr": "Lanterne LED de Noël avec musique, représentant une crèche (16,8 x 9,5 x 40,5 cm), fonctionnant sur USB et piles AA.",
      "pt": "Lanterna de Natal com LED e música, representando uma cena do presépio, medindo 16,8 x 9,5 x 40,5 cm, funciona com USB e pilhas AA."
    },
    "price": 78,
    "category": "water-lamp",
    "image": "/images/products/SMW-004.jpg",
    "originalRow": {
      "packing": "透明教堂 1PC/盒",
      "light": "暖灯",
      "power": "AA电池+USB"
    }
  },
  {
    "id": "SMW-005",
    "name": "SMW-005",
    "descriptions": {
      "en": "10.5*10.5*20 CHRISTMAS MUSIC SNOW GLOBE LANTERN WITH DIFFERENT INNER DECORATION, working by USB and AA battery",
      "pl": "10,5*10,5*20 ŚWIĄTECZNA MUZYCZNA LAMPION W KSZTAŁCIE ŚNIEŻNEJ KULI Z RÓŻNYMI DEKORACJAMI WEWNĘTRZNYMI, działająca przez USB i baterię AA",
      "de": "Weihnachtsmusik-Schneekugellaterne (10,5 x 10,5 x 20 cm) mit unterschiedlicher Innendekoration, Betrieb über USB und AA-Batterie",
      "es": "LINTERNA DE BOLA DE NIEVE NAVIDEÑA CON MÚSICA DE 10,5*10,5*20 CON DIFERENTE DECORACIÓN INTERIOR, funciona con USB y batería AA",
      "ru": "Рождественский музыкальный снежный шар-фонарь размером 10,5*10,5*20 см с различными внутренними украшениями, работает от USB и батареек типа АА.",
      "it": "LANTERNA GLOBO DI NEVE CON MUSICA NATALIZIA 10,5*10,5*20 CON DIVERSE DECORAZIONI INTERNE, funzionante tramite USB e batteria AA",
      "fr": "Lanterne de Noël LED en forme d'église en cristal (27 x 16,5 x 15 cm) avec musique, fonctionne sur USB et piles AA.",
      "pt": "Enfeite de Natal de cristal para igreja, lanterna LED com música, 27*16,5*15 cm, funciona com USB e pilha AA."
    },
    "price": 44.4,
    "category": "water-lamp",
    "image": "/images/products/SMW-005.jpg",
    "originalRow": {
      "packing": "小露营灯 1PC/盒",
      "light": "暖灯",
      "power": "AA电池+USB"
    }
  },
  {
    "id": "SMW-006",
    "name": "SMW-006",
    "descriptions": {
      "en": "13.5*8*28cm CHRISTMAS MUSIC CHURCH LANTERN WITH DIFFERENT INNER DECORATION, working by USB and AA battery",
      "pl": "13,5*8*28 cm KOŚCIELNA LAMPIONKA Z MUZYKĄ ŚWIĄTECZNĄ I RÓŻNĄ DEKORACJĄ WEWNĘTRZNĄ, działająca przez USB i baterię AA",
      "de": "Weihnachtsmusik-Kirchenlaterne (13,5 x 8 x 28 cm) mit unterschiedlicher Innendekoration, Betrieb über USB und AA-Batterie",
      "es": "LINTERNA DE IGLESIA CON MÚSICA NAVIDEÑA DE 13,5*8*28 cm CON DIFERENTE DECORACIÓN INTERIOR, funciona con USB y batería AA",
      "ru": "Рождественский музыкальный церковный фонарь размером 13,5*8*28 см с различным внутренним декором, работает от USB и батареек типа АА.",
      "it": "Lanterna da chiesa natalizia con musica natalizia da 13,5*8*28 cm con diverse decorazioni interne, funzionante tramite USB e batteria AA",
      "fr": "Lanterne boule à neige musicale de Noël 10,5 x 10,5 x 20 cm avec différentes décorations intérieures, fonctionne sur USB et piles AA.",
      "pt": "Globo de neve musical de Natal 10,5*10,5*20 com decoração interna variada, funciona com USB e pilha AA."
    },
    "price": 81.6,
    "category": "water-lamp",
    "image": "/images/products/SMW-006.jpg",
    "originalRow": {
      "packing": "新款教堂 1PC/盒",
      "light": "暖灯",
      "power": "AA电池+USB"
    }
  },
  {
    "id": "SMW-007",
    "name": "SMW-007",
    "descriptions": {
      "en": "24.5*10*34cm CHRISTMAS MUSICAL CASTLE DECORATION,working by USB and AA battery",
      "pl": "24,5*10*34 cm ŚWIĄTECZNA DEKORACJA ZAMKU Z MUZYKĄ, działająca przez USB i baterię AA",
      "de": "Weihnachts-Musikschloss-Dekoration, 24,5 x 10 x 34 cm, Betrieb über USB und AA-Batterie",
      "es": "DECORACIÓN DE CASTILLO MUSICAL NAVIDEÑO DE 24,5 x 10 x 34 cm, funciona con USB y pilas AA",
      "ru": "Музыкальное рождественское украшение в виде замка, 24,5*10*34 см, работает от USB и батареек типа АА.",
      "it": "DECORAZIONE CASTELLO MUSICALE NATALIZIO 24,5*10*34cm, funzionante tramite USB e batteria AA",
      "fr": "Lanterne musicale de Noël (13,5 x 8 x 28 cm) avec différentes décorations intérieures, fonctionne avec un câble USB et des piles AA.",
      "pt": "Lanterna de Natal Musical para Igreja, 13,5 x 8 x 28 cm, com decoração interna variada, funciona com USB e pilha AA."
    },
    "price": 162,
    "category": "water-lamp",
    "image": "/images/products/SMW-007.jpg",
    "originalRow": {
      "packing": "雪屋城堡 1PC/盒",
      "light": "暖灯",
      "power": "AA电池+USB"
    }
  },
  {
    "id": "SMW-008",
    "name": "SMW-008",
    "descriptions": {
      "en": "26*11*22cm MUSICAL RED ROYAL CARRIAGE WITH GLITTER AND WATER, working by USB and AA battery",
      "pl": "26*11*22 cm MUZYCZNA CZERWONA KRÓLEWSKA POWÓDKA Z BROKATEM I WODĄ, działająca przez USB i baterię AA",
      "de": "26 x 11 x 22 cm große, musikalische rote Königskutsche mit Glitzer und Wasser, Betrieb über USB und AA-Batterie",
      "es": "26*11*22cm CARRUAJE REAL ROJO MUSICAL CON BRILLO Y AGUA, funciona con USB y pila AA",
      "ru": "Музыкальная красная королевская карета размером 26*11*22 см с блестками и водой, работает от USB и батареек типа АА.",
      "it": "CARROZZA REALE MUSICALE ROSSA 26*11*22cm CON GLITTER E ACQUA, funzionante tramite USB e batteria AA",
      "fr": "Château musical décoratif de Noël (24,5 x 10 x 34 cm), fonctionne avec un câble USB et des piles AA.",
      "pt": "Castelo musical de Natal decorativo, 24,5 x 10 x 34 cm, funciona com USB e pilha AA."
    },
    "price": 138,
    "category": "water-lamp",
    "image": "/images/products/SMW-008.jpg",
    "originalRow": {
      "packing": "红色公主车 1PC/盒",
      "light": "暖灯",
      "power": "AA电池+USB"
    }
  },
  {
    "id": "SMW-009",
    "name": "SMW-009",
    "descriptions": {
      "en": "26*11*22cm MUSICAL GREEN ROYAL CARRIAGE WITH GLITTER AND WATER, working by USB and AA battery",
      "pl": "26*11*22cm MUZYCZNA ZIELONA KRÓLEWSKA POJAZDKA Z BROKATEM I WODĄ, działająca przez USB i baterię AA",
      "de": "26 x 11 x 22 cm große, musikalische grüne Königskutsche mit Glitzer und Wasser, Betrieb über USB und AA-Batterie",
      "es": "CARRUAJE REAL MUSICAL VERDE DE 26*11*22 cm CON BRILLO Y AGUA, funciona con USB y pila AA",
      "ru": "Музыкальная зеленая королевская карета размером 26*11*22 см с блестками и водой, работает от USB и батареек типа АА.",
      "it": "CARROZZA REALE MUSICALE VERDE 26*11*22cm CON GLITTER E ACQUA, funzionante tramite USB e batteria AA",
      "fr": "Carrosse royal rouge musical de 26 x 11 x 22 cm avec paillettes et eau, fonctionnant sur USB et piles AA.",
      "pt": "Carruagem Real Vermelha Musical de 26*11*22cm com Glitter e Água, funciona com USB e pilha AA"
    },
    "price": 138,
    "category": "water-lamp",
    "image": "/images/products/SMW-009.jpg",
    "originalRow": {
      "packing": "绿色公主车 1PC/盒",
      "light": "暖灯",
      "power": "AA电池+USB"
    }
  },
  {
    "id": "SMW-010",
    "name": "SMW-010",
    "descriptions": {
      "en": "26*11*22cm MUSICAL WHITE ROYAL CARRIAGE WITH GLITTER AND WATER, working by USB and AA battery",
      "pl": "26*11*22cm MUZYCZNA BIAŁA KRÓLEWSKA POJAZDKA Z BROKATEM I WODĄ, działająca przez USB i baterię AA",
      "de": "26 x 11 x 22 cm große, musikalische, weiße Königskutsche mit Glitzer und Wasser, Betrieb über USB und AA-Batterie",
      "es": "CARRUAJE REAL BLANCO MUSICAL CON BRILLO Y AGUA, 26*11*22cm, funciona con USB y pila AA",
      "ru": "Музыкальная белая королевская карета размером 26*11*22 см с блестками и водой, работает от USB и батареек типа АА.",
      "it": "CARROZZA REALE MUSICALE BIANCA 26*11*22cm CON GLITTER E ACQUA, funzionante tramite USB e batteria AA",
      "fr": "Carrosse royal musical vert de 26 x 11 x 22 cm avec paillettes et eau, fonctionnant sur USB et piles AA.",
      "pt": "Carruagem Real Musical Verde de 26*11*22cm com Glitter e Água, funciona com USB e pilha AA"
    },
    "price": 138,
    "category": "water-lamp",
    "image": "/images/products/SMW-010.jpg",
    "originalRow": {
      "packing": "白色公主车 1PC/盒",
      "light": "暖灯",
      "power": "AA电池+USB"
    }
  },
  {
    "id": "SMW-011",
    "name": "SMW-011",
    "descriptions": {
      "en": "15*9.5*30cm MUSICAL WATER GLITTER CANDLE DECORATION WITH DIFFERENT INNER SCENE, working by USB and AA battery ",
      "pl": "15*9,5*30 cm MUZYCZNA DEKORACJA W WODNEJ ŚWIECY Z BROKATEM I RÓŻNĄ SCENĄ WEWNĘTRZNĄ, działająca przez USB i baterię AA",
      "de": "Musikalische Wasserglitzerkerze (15 x 9,5 x 30 cm) mit verschiedenen inneren Szenen, Betrieb über USB und AA-Batterie",
      "es": "VELA MUSICAL CON BRILLO DE AGUA DE 15*9,5*30 cm, DECORACIÓN CON DIFERENTES ESCENAS INTERIORES, funciona con USB y pilas AA",
      "ru": "Музыкальная водяная свеча с блестками, размером 15*9,5*30 см, с различными внутренними сценами, работает от USB и батареек типа АА.",
      "it": "DECORAZIONE CANDELA MUSICALE CON ACQUA GLITTER 15*9,5*30cm CON DIVERSE SCENE INTERNE, funzionante tramite USB e batteria AA",
      "fr": "Carrosse royal blanc musical de 26 x 11 x 22 cm avec paillettes et eau, fonctionnant sur USB et piles AA.",
      "pt": "Carruagem Real Branca Musical de 26*11*22cm com Glitter e Água, funciona com USB e pilha AA"
    },
    "price": 70.8,
    "category": "water-lamp",
    "image": "/images/products/SMW-011.jpg",
    "originalRow": {
      "packing": "扁蜡烛宗教  1PC/盒",
      "light": "暖灯",
      "power": "AA电池+USB"
    }
  },
  {
    "id": "SMW-012",
    "name": "SMW-012",
    "descriptions": {
      "en": "21*21*31.5CM NATIVITY SCENE CHRISTMAS LED DECORATION WITH MUSIC, working by USB and AA battery",
      "pl": "21*21*31,5 CM ŚWIĄTECZNA DEKORACJA LED Z MUZYKĄ, działająca przez USB i baterię AA",
      "de": "21 x 21 x 31,5 cm große LED-Weihnachtskrippe mit Musik, Betrieb über USB und AA-Batterien",
      "es": "21*21*31,5 CM BELÉN DECORACIÓN NAVIDEÑA LED CON MÚSICA, funciona con USB y pila AA",
      "ru": "Рождественская светодиодная декорация в виде рождественского вертепа размером 21*21*31,5 см с музыкой, работающая от USB и батареек типа АА.",
      "it": "DECORAZIONE NATALIZIO A LED CON PRESEPE 21*21*31,5 CM CON MUSICA, funzionante tramite USB e batteria AA",
      "fr": "Bougie musicale à paillettes et à eau (15 x 9,5 x 30 cm) avec différents décors intérieurs, fonctionne sur USB et piles AA.",
      "pt": "Vela decorativa musical com glitter, medindo 15 x 9,5 x 30 cm, com diferentes cenários internos. Funciona com USB e pilha AA."
    },
    "price": 114,
    "category": "water-lamp",
    "image": "/images/products/SMW-012.jpg",
    "originalRow": {
      "packing": "亚克力宗教  1PC/盒",
      "light": "暖灯",
      "power": "AA电池+USB"
    }
  },
  {
    "id": "SMW-013",
    "name": "SMW-013",
    "descriptions": {
      "en": "21*21*31.5CM FLYING DEER MUSCIAL LANTERN DECORATION,working by USB and AA battery ",
      "pl": "21*21*31,5 CM LATAJĄCA DEKORACJA W FORMIE LATARNIKA Z JELENIEM, działająca przez USB i baterię AA",
      "de": "21 x 21 x 31,5 cm große, musikalische Laterne in Form eines fliegenden Hirsches, Betrieb über USB und AA-Batterie",
      "es": "LINTERNA MUSICAL DECORADA CON CIERVO VOLADOR DE 21*21*31,5 CM, funciona con USB y pilas AA",
      "ru": "Музыкальный фонарь в виде летающего оленя, 21*21*31,5 см, работает от USB и батареек типа АА.",
      "it": "Decorazione lanterna musicale a forma di cervo volante da 21*21*31,5 cm, funzionante tramite USB e batteria AA",
      "fr": "Décoration de Noël LED représentant une crèche (21 x 21 x 31,5 cm) avec musique, fonctionnant sur USB et piles AA.",
      "pt": "Presépio de Natal com iluminação LED e música, medindo 21 x 21 x 31,5 cm, funciona com USB e pilhas AA."
    },
    "price": 114,
    "category": "water-lamp",
    "image": "/images/products/SMW-013.jpg",
    "originalRow": {
      "packing": "亚克力飞天鹿  1PC/盒",
      "light": "暖灯",
      "power": "AA电池+USB"
    }
  },
  {
    "id": "SMW-014",
    "name": "SMW-014",
    "descriptions": {
      "en": "10.5*7*21CM CHRISTAMAS LED LIGHT DECORATION WITH MUSIC AND DIFFERENT INNER SCENE, working by USB and AA battery",
      "pl": "10,5*7*21CM ŚWIĄTECZNA DEKORACJA ŚWIETLNA LED Z MUZYKĄ I INNYMI ELEMENTAMI WEWNĘTRZNYMI, działająca przez USB i baterię AA",
      "de": "10,5 x 7 x 21 cm große LED-Weihnachtsbeleuchtung mit Musik und verschiedenen Innenszenen, Betrieb über USB und AA-Batterien",
      "es": "DECORACIÓN DE LUZ LED NAVIDEÑA DE 10,5*7*21 CM CON MÚSICA Y DIFERENTES ESCENAS INTERIORES, funciona con USB y batería AA",
      "ru": "Рождественская светодиодная декорация размером 10,5*7*21 см с музыкой и различными внутренними сценами, работающая от USB и батареек типа АА.",
      "it": "DECORAZIONE LUMINOSA A LED NATALIZIO 10,5*7*21CM CON MUSICA E DIVERSE SCENE INTERNE, funzionante tramite USB e batteria AA",
      "fr": "Lanterne musicale décorative Cerf volant (21 x 21 x 31,5 cm), fonctionne avec un câble USB et des piles AA.",
      "pt": "Lanterna musical decorativa em formato de veado voador, medindo 21 x 21 x 31,5 cm, funciona com USB e pilha AA."
    },
    "price": 57.599999999999994,
    "category": "water-lamp",
    "image": "/images/products/SMW-014.jpg",
    "originalRow": {
      "packing": "小房子打水  1PC/盒",
      "light": "暖灯",
      "power": "AA电池+USB"
    }
  },
  {
    "id": "SMW-015",
    "name": "SMW-015",
    "descriptions": {
      "en": "11*9*21CM 3 HEAD GLITTER WATER LED CANDLE WITH MUSIC, working by USB and AA battery",
      "pl": "11*9*21CM 3-GŁOWICOWA ŚWIECA WODNA LED Z BROKATEM I MUZYKĄ, działająca przez USB i baterię AA",
      "de": "11 x 9 x 21 cm große LED-Wasserleuchte mit drei Glitzerköpfen und Musik, Betrieb über USB und AA-Batterien",
      "es": "VELA LED DE AGUA CON BRILLO DE 3 CABEZAS DE 11*9*21 CM CON MÚSICA, funciona con USB y batería AA",
      "ru": "Светодиодная свеча с тремя плафонами, блестками, высотой 11*9*21 см, с музыкой, работает от USB и батареек типа АА.",
      "it": "Candela LED ad acqua glitterata a 3 teste da 11*9*21 cm con musica, funzionante tramite USB e batteria AA",
      "fr": "Décoration lumineuse LED de Noël 10,5 x 7 x 21 cm avec musique et différents effets lumineux, fonctionne sur USB et piles AA.",
      "pt": "Decoração de Natal com luzes LED, 10,5 x 7 x 21 cm, com música e diferentes cenários internos. Funciona com USB e pilhas AA."
    },
    "price": 58.8,
    "category": "water-lamp",
    "image": "/images/products/SMW-015.jpg",
    "originalRow": {
      "packing": "三支蜡烛打水  1PC/盒",
      "light": "暖灯",
      "power": "AA电池+USB"
    }
  },
  {
    "id": "SMW-016",
    "name": "SMW-016",
    "descriptions": {
      "en": "22*14*14CM GLITTER LED WATER LANTERN, WITH DIFFERENT INNER SCENE, working by USB and AA battery",
      "pl": "22*14*14CM LATARNIA WODNA LED Z BROKATEM, Z RÓŻNYMI EFEKTAMI WEWNĘTRZNYMI, działająca przez USB i baterię AA",
      "de": "22 x 14 x 14 cm große LED-Wasserlaterne mit Glitzer, verschiedenen Innenszenen, Betrieb über USB und AA-Batterien",
      "es": "LINTERNA DE AGUA LED BRILLANTE DE 22*14*14 CM, CON DIFERENTES ESCENAS INTERIORES, funciona con USB y batería AA",
      "ru": "Светодиодный водный фонарь с блестками, размером 22*14*14 см, с различными внутренними эффектами, работает от USB и батареек типа АА.",
      "it": "LANTERNA ACQUATICA A LED GLITTER 22*14*14CM, CON SCENA INTERNA DIVERSA, funzionante tramite USB e batteria AA",
      "fr": "Bougie LED à eau pailletée à 3 têtes (11 x 9 x 21 cm) avec musique, fonctionne sur USB et piles AA.",
      "pt": "Vela de LED com glitter e água, 3 cabeças, 11*9*21cm, com música, funciona com USB e pilha AA."
    },
    "price": 62.4,
    "category": "water-lamp",
    "image": "/images/products/SMW-016.jpg",
    "originalRow": {
      "packing": "六角风灯  1PC/盒",
      "light": "暖灯",
      "power": "AA电池+USB"
    }
  },
  {
    "id": "SMW-017",
    "name": "SMW-017",
    "descriptions": {
      "en": "27*10.5*10.5CM GLITTER LED WATER LANTERN, WITH DIFFERENT INNER SCENE, working by USB and AA battery",
      "pl": "27*10,5*10,5CM LATARNIA WODNA LED Z BROKATEM, Z RÓŻNYMI EFEKTAMI WEWNĘTRZNYMI, działająca przez USB i baterię AA",
      "de": "27 x 10,5 x 10,5 cm große LED-Wasserlaterne mit Glitzer, verschiedenen Innenszenen, Betrieb über USB und AA-Batterien",
      "es": "LINTERNA DE AGUA LED BRILLANTE DE 27*10,5*10,5 CM, CON DIFERENTES ESCENAS INTERIORES, funciona con USB y batería AA",
      "ru": "Светодиодный водный фонарь с блестками, размер 27*10,5*10,5 см, с различными внутренними эффектами, работает от USB и батареек типа АА.",
      "it": "LANTERNA AD ACQUA CON LED GLITTER 27*10,5*10,5 CM, CON DIVERSE SCENE INTERNE, funzionante tramite USB e batteria AA",
      "fr": "Lanterne à eau LED pailletée de 22 x 14 x 14 cm, avec différents décors intérieurs, fonctionnant sur USB et piles AA.",
      "pt": "Lanterna de água LED com glitter, 22*14*14cm, com diferentes cenários internos, funciona com USB e pilha AA."
    },
    "price": 51.6,
    "category": "water-lamp",
    "image": "/images/products/SMW-017.jpg",
    "originalRow": {
      "packing": "方形风灯  1PC/盒 ",
      "light": "暖灯",
      "power": "AA电池+USB"
    }
  },
  {
    "id": "SMW-018",
    "name": "SMW-018",
    "descriptions": {
      "en": "10.5*6*24CM GLITTER LED WATER LANTERN, WITH DIFFERENT INNER SCENE, working by USB and AA battery",
      "pl": "10,5*6*24CM LATARNIA WODNA LED Z BROKATEM, Z RÓŻNYMI EFEKTAMI WEWNĘTRZNYMI, działająca przez USB i baterię AA",
      "de": "10,5 x 6 x 24 cm große LED-Wasserlaterne mit Glitzer, verschiedenen Innenszenen, Betrieb über USB und AA-Batterien",
      "es": "LINTERNA DE AGUA LED BRILLANTE DE 10,5*6*24 CM, CON DIFERENTES ESCENAS INTERIORES, funciona con USB y batería AA",
      "ru": "Светодиодный водный фонарь с блестками, размером 10,5*6*24 см, с различными внутренними эффектами, работает от USB и батареек типа АА.",
      "it": "LANTERNA ACQUATICA A LED GLITTER 10,5*6*24CM, CON SCENA INTERNA DIVERSA, funzionante tramite USB e batteria AA",
      "fr": "Lanterne à eau LED pailletée de 27 x 10,5 x 10,5 cm, avec différents décors intérieurs, fonctionnant sur USB et piles AA.",
      "pt": "Lanterna de água LED com glitter, 27*10,5*10,5 cm, com diferentes cenários internos, funciona com USB e pilha AA."
    },
    "price": 57.599999999999994,
    "category": "water-lamp",
    "image": "/images/products/SMW-018.jpg",
    "originalRow": {
      "packing": "小扁水灯  1PC/盒",
      "light": "暖灯",
      "power": "AA电池+USB"
    }
  },
  {
    "id": "SMW-019",
    "name": "SMW-019",
    "descriptions": {
      "en": "8*8*23.5CM GLITTER LED WATER LANTERN, WITH DIFFERENT INNER SCENE, working by USB and AA battery",
      "pl": "8*8*23,5 CM LATARNIA WODNA LED Z BROKATEM, Z RÓŻNYMI WEWNĘTRZNYMI EFEKTAMI, działająca przez USB i baterię AA",
      "de": "8 x 8 x 23,5 cm große LED-Wasserlaterne mit Glitzer, verschiedenen Innenszenen, Betrieb über USB und AA-Batterien",
      "es": "LINTERNA DE AGUA LED BRILLANTE DE 8*8*23,5 CM, CON DIFERENTES ESCENAS INTERIORES, funciona con USB y batería AA",
      "ru": "Светодиодный водный фонарь с блестками, 8*8*23,5 см, с различными внутренними эффектами, работает от USB и батареек типа АА.",
      "it": "LANTERNA AD ACQUA CON LED GLITTER 8*8*23,5 CM, CON DIVERSE SCENE INTERNE, funzionante tramite USB e batteria AA",
      "fr": "Lanterne à eau LED pailletée de 10,5 x 6 x 24 cm, avec différents décors intérieurs, fonctionnant sur USB et piles AA.",
      "pt": "Lanterna de água LED com glitter, 10,5 x 6 x 24 cm, com diferentes cenários internos, funciona com USB e pilha AA."
    },
    "price": 36,
    "category": "water-lamp",
    "image": "/images/products/SMW-019.jpg",
    "originalRow": {
      "packing": "20cm小风灯  1PC/盒",
      "light": "暖灯",
      "power": "AA电池+USB"
    }
  },
  {
    "id": "SMW-020",
    "name": "SMW-020",
    "descriptions": {
      "en": "14.8*28CM GLITTER LED WATER XMAS TREE SHAPE LANTERN WITH DIFFERENT INNER SCENE, working by USB and AA battery",
      "pl": "14,8*28CM LAMPION WODNY W KSZTAŁCIE CHOINKI Z BROKATEM LED I RÓŻNĄ SCENOGRAFIĄ WEWNĘTRZNĄ, działający przez USB i baterię AA",
      "de": "14,8 x 28 cm große LED-Wasserlaterne in Form eines Weihnachtsbaums mit Glitzer und verschiedenen Innenszenen, Betrieb über USB und AA-Batterien",
      "es": "LINTERNA LED CON BRILLO EN FORMA DE ÁRBOL DE NAVIDAD DE AGUA DE 14,8 X 28 CM CON ESCENA INTERIOR DIFERENTE, funciona con USB y batería AA",
      "ru": "Светящийся светодиодный фонарь в форме водяной елки, размером 14,8*28 см, с блестками и различными внутренними сценами, работает от USB и батареек типа АА.",
      "it": "LANTERNA A FORMA DI ALBERO DI NATALE CON LED GLITTER DA 14,8*28 CM CON DIVERSE SCENE INTERNE, funzionante tramite USB e batteria AA",
      "fr": "Lanterne à eau LED pailletée 8 x 8 x 23,5 cm, avec différents décors intérieurs, fonctionnant sur USB et piles AA.",
      "pt": "Lanterna de água LED com glitter, 8*8*23,5 cm, com diferentes cenários internos, funciona com USB e pilha AA."
    },
    "price": 62.4,
    "category": "water-lamp",
    "image": "/images/products/SMW-020.jpg",
    "originalRow": {
      "packing": "圣诞扁树  1PC/盒",
      "light": "暖灯",
      "power": "AA电池+USB"
    }
  },
  {
    "id": "SMW-021",
    "name": "SMW-021",
    "descriptions": {
      "en": "15*8*25.5CM GLITTER LED WATER XMAS LANTERN WITH DIFFERENT INNER SCENE, working by USB and AA battery",
      "pl": "15*8*25,5CM BROKATOWA LAMPION WODNY LED Z RÓŻNYMI EFEKTAMI WEWNĘTRZNYMI, działający przez USB i baterię AA",
      "de": "15 x 8 x 25,5 cm große LED-Wasserlaterne mit Glitzer und verschiedenen Innenszenen, Betrieb über USB und AA-Batterien",
      "es": "LINTERNA NAVIDEÑA DE AGUA LED BRILLANTE DE 15*8*25,5 CM CON DIFERENTES ESCENAS INTERIORES, funciona con USB y batería AA",
      "ru": "Рождественский фонарь с блестками, светодиодной подсветкой, размером 15*8*25,5 см, с различными внутренними сценами, работает от USB и батареек типа АА.",
      "it": "LANTERNA DI NATALE A LED CON GLITTER ACQUA 15*8*25,5 CM CON DIVERSE SCENE INTERNE, funzionante tramite USB e batteria AA",
      "fr": "Lanterne de Noël à LED pailletées en forme de sapin (14,8 x 28 cm) avec différents décors intérieurs, fonctionnant sur USB et piles AA.",
      "pt": "Lanterna de Natal em formato de árvore de Natal com LED brilhante, 14,8 x 28 cm, com diferentes cenários internos, funciona com USB e pilha AA."
    },
    "price": 50.4,
    "category": "water-lamp",
    "image": "/images/products/SMW-021.jpg",
    "originalRow": {
      "packing": "扁圆  1PC/盒",
      "light": "暖灯",
      "power": "AA电池+USB"
    }
  },
  {
    "id": "SMW-022",
    "name": "SMW-022",
    "descriptions": {
      "en": "15*8*27.5CM GLITTER LED WATER XMAS LANTERN WITH DIFFERENT INNER SCENE,working by USB and AA battery",
      "pl": "15*8*27,5 CM BROKATOWA LAMPION WODNY LED Z RÓŻNYMI EFEKTAMI WEWNĘTRZNYMI, działający przez USB i baterię AA",
      "de": "15 x 8 x 27,5 cm große LED-Wasserlaterne mit Glitzer und verschiedenen Innenszenen, Betrieb über USB und AA-Batterien",
      "es": "LINTERNA NAVIDEÑA DE AGUA LED BRILLANTE DE 15*8*27,5 CM CON DIFERENTES ESCENAS INTERIORES, funciona con USB y batería AA",
      "ru": "Рождественский фонарь с блестками, светодиодной подсветкой, размером 15*8*27,5 см, с различными внутренними сценами, работает от USB и батареек типа АА.",
      "it": "LANTERNA DI NATALE A LED CON GLITTER ACQUA 15*8*27,5 CM CON DIVERSE SCENE INTERNE, funzionante tramite USB e batteria AA",
      "fr": "Lanterne de Noël à eau LED pailletée de 15 x 8 x 25,5 cm avec différents décors intérieurs, fonctionne sur USB et piles AA.",
      "pt": "Lanterna de Natal de LED com glitter, 15*8*25,5 cm, com diferentes cenários internos, funciona com USB e pilha AA."
    },
    "price": 57.599999999999994,
    "category": "water-lamp",
    "image": "/images/products/SMW-022.jpg",
    "originalRow": {
      "packing": "扁方  1PC/盒",
      "light": "暖灯",
      "power": "AA电池+USB"
    }
  },
  {
    "id": "SMW-023",
    "name": "SMW-023",
    "descriptions": {
      "en": "14.8*8.5*32CM MUSICAL CHRISTMAS GLITTER WATER LAMP ANGEL FIGURE COLLECTION,working by USB and AA battery",
      "pl": "14,8*8,5*32CM MUZYCZNA ŚWIĄTECZNA LAMPA WODNA Z BROKATEM, KOLEKCJA FIGURY ANIOŁA, działająca przez USB i baterię AA",
      "de": "Musikalische Weihnachts-Glitzer-Wasserlampe mit Engelsfigur (14,8 x 8,5 x 32 cm), Betrieb über USB und AA-Batterien",
      "es": "LÁMPARA DE AGUA CON BRILLO NAVIDEÑO MUSICAL DE 14,8 x 8,5 x 32 cm, COLECCIÓN DE FIGURAS DE ÁNGEL, funciona con USB y pilas AA",
      "ru": "Музыкальная рождественская блестящая водяная лампа в виде ангела, 14,8*8,5*32 см, из коллекции, работает от USB и батареек типа АА.",
      "it": "Lampada ad acqua natalizia musicale con brillantini, 14,8*8,5*32 cm, collezione di figure di angeli, funzionante tramite USB e batteria AA",
      "fr": "Lanterne de Noël à eau LED pailletée de 15 x 8 x 27,5 cm avec différents décors intérieurs, fonctionne sur USB et piles AA.",
      "pt": "Lanterna de Natal LED com glitter, 15*8*27,5 cm, com diferentes cenários internos, funciona com USB e pilha AA."
    },
    "price": 100.8,
    "category": "water-lamp",
    "image": "/images/products/SMW-023.jpg",
    "originalRow": {
      "packing": "天使马槽  1PC/盒",
      "light": "暖灯",
      "power": "AA电池+USB"
    }
  }
];
