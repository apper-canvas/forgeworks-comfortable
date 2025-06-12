import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';

const CapacityMetricCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
    >
      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <ApperIcon name="BarChart3" className="w-8 h-8 text-accent" />
      </div>
      
      <Heading as="h3" className="text-xl text-primary mb-2">{item.metric}</Heading>
      <Text as="div" className="font-semibold text-2xl text-accent mb-3">{item.value}</Text>
      <Text as="p" className="text-gray-600 text-sm">{item.description}</Text>
    </motion.div>
  );
};

export default CapacityMetricCard;