import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';

const ProductCard = ({ product, index, onClick, categories }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
      onClick={() => onClick(product)}
    >
      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <ApperIcon name="Package" className="w-16 h-16 text-gray-400" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <Heading as="h3" className="text-lg text-primary">{product.name}</Heading>
          <Text as="span" className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
            {categories.find(cat => cat.id === product.category)?.label || product.category}
          </Text>
        </div>
        
        <Text as="p" className="text-gray-600 mb-4 line-clamp-3">{product.description}</Text>
        
        <div className="space-y-2">
          <Heading as="h4" className="font-medium text-sm text-gray-900">Key Features:</Heading>
          <ul className="space-y-1">
            {product.materials?.slice(0, 3).map((material, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-600">
                <ApperIcon name="Check" className="w-3 h-3 text-success mr-2 flex-shrink-0" />
                {material}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Button className="w-full bg-primary/10 text-primary py-2 hover:bg-primary/20" onClick={() => onClick(product)}>
            View Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;