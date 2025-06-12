import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';

const CapabilityItem = ({ item, index, categoryIndex }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: (categoryIndex * 0.1) + (index * 0.05) }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <ApperIcon name="Tool" className="w-6 h-6 text-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <Heading as="h4" className="text-lg text-primary mb-2 font-semibold">
            {item.name}
          </Heading>
          <Text as="p" className="text-gray-600 text-sm">{item.specs}</Text>
        </div>
      </div>
    </motion.div>
  );
};

export default CapabilityItem;