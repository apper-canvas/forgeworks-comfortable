import ProductCard from '@/components/molecules/ProductCard';

const ProductGrid = ({ products, onProductSelect, categories }) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onClick={onProductSelect}
              categories={categories}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;