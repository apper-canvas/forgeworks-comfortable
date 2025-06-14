import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ApperIcon from '@/components/ApperIcon';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';

const ProductDetailModal = ({ product, onClose }) => {
  const navigate = useNavigate();

const handleRequestQuote = () => {
    onClose();
    // Navigate to quote page with product pre-selected
    navigate(`/quote?product=${encodeURIComponent(product.name)}&productId=${product.id}`);
    toast.success('Redirecting to quote request...');
  };

  const handleDownloadSpecs = async () => {
    try {
      // Create downloadable specification file
      const specContent = `
PRODUCT SPECIFICATIONS
=====================

Product: ${product.name}
Category: ${product.category}
${product.description}

Key Features:
${product.keyFeatures ? product.keyFeatures.map(feature => `• ${feature}`).join('\n') : '• Contact us for detailed specifications'}

Applications:
${product.applications ? product.applications.map(app => `• ${app}`).join('\n') : '• Various industrial applications'}

For detailed technical specifications and custom requirements, 
please contact our engineering team.

ForgeWorks Pro Manufacturing
Email: info@forgeworkspro.com
Phone: (555) 123-4567
`;

      const blob = new Blob([specContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${product.name.replace(/\s+/g, '_')}_Specifications.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      toast.success('Specifications downloaded successfully!');
    } catch (error) {
      console.error('Download error:', error);
      toast.error('Failed to download specifications. Please try again.');
    }
  };
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <Heading as="h2" className="text-2xl text-primary">{product.name}</Heading>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ApperIcon name="X" className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-6">
            <ApperIcon name="Package" className="w-24 h-24 text-gray-400" />
          </div>
          
          <div className="space-y-6">
            <div>
              <Heading as="h3" className="text-lg mb-2 font-semibold">Description</Heading>
              <Text as="p" className="text-gray-600">{product.description}</Text>
            </div>
            
            {product.specifications && (
              <div>
                <Heading as="h3" className="text-lg mb-2 font-semibold">Specifications</Heading>
                <div className="bg-surface p-4 rounded-lg">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-1">
                      <Text as="span" className="font-medium">{key}:</Text>
                      <Text as="span" className="text-gray-600">{value}</Text>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {product.materials && (
              <div>
                <Heading as="h3" className="text-lg mb-2 font-semibold">Materials & Features</Heading>
                <ul className="space-y-2">
                  {product.materials.map((material, idx) => (
                    <li key={idx} className="flex items-center">
                      <ApperIcon name="Check" className="w-4 h-4 text-success mr-3" />
                      <Text as="span">{material}</Text>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
<div className="flex gap-3 pt-4">
              <Button 
                onClick={handleRequestQuote}
                className="flex-1 cta-gradient text-white py-3"
              >
                Request Quote
              </Button>
              <Button 
                onClick={handleDownloadSpecs}
                className="flex-1 bg-gray-100 text-gray-700 py-3 hover:bg-gray-200"
              >
                Download Specs
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetailModal;