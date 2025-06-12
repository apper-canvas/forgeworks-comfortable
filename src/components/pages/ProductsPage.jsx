import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import ApperIcon from '@/components/ApperIcon';
import { productService } from '@/services';
import HeroSection from '@/components/organisms/HeroSection';
import CategoryFilter from '@/components/molecules/CategoryFilter';
import ProductGrid from '@/components/organisms/ProductGrid';
import ProductDetailModal from '@/components/organisms/ProductDetailModal';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'precision-parts', label: 'Precision Parts' },
    { id: 'assemblies', label: 'Assemblies' },
    { id: 'components', label: 'Components' },
    { id: 'custom', label: 'Custom Solutions' }
  ];

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await productService.getAll();
        setProducts(result);
      } catch (err) {
        setError(err.message || 'Failed to load products');
        toast.error('Failed to load products');
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <HeroSection title="Our Products" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="animate-pulse">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <ApperIcon name="AlertCircle" className="w-12 h-12 text-error mx-auto mb-4" />
          <Heading as="h2" className="text-2xl font-semibold text-gray-900 mb-2">Error Loading Products</Heading>
          <Text as="p" className="text-gray-600 mb-4">{error}</Text>
          <Button
            onClick={() => window.location.reload()}
            className="cta-gradient text-white"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <HeroSection title="Our Products" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <ApperIcon name="Package" className="w-16 h-16 text-gray-300 mx-auto mb-6" />
          <Heading as="h2" className="text-2xl font-semibold text-gray-900 mb-4">Products Coming Soon</Heading>
          <Text as="p" className="text-gray-600 mb-8">
            We're updating our product catalog. Please contact us directly for current offerings.
          </Text>
          <Button className="cta-gradient text-white">
            Contact Sales
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Our Products"
        subtitle="Precision-engineered components and assemblies designed to meet the most demanding specifications across multiple industries."
      />
      <section className="py-8 bg-surface border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryFilter 
            categories={categories} 
            selectedCategory={selectedCategory} 
            onSelect={setSelectedCategory} 
          />
        </div>
      </section>

      <ProductGrid 
        products={filteredProducts} 
        onProductSelect={setSelectedProduct} 
        categories={categories} 
      />

      <ProductDetailModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
};

export default ProductsPage;