import React, { Suspense } from 'react';
import ProductContent from '@/components/ProductContent';

export default function ProductPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white"></div>}>
      <ProductContent />
    </Suspense>
  );
}
