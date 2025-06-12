import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';

const ValueCard = ({ value, index }) => {
  return (
    <motion.div
      key={value.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
        <ApperIcon name={value.icon} className="w-8 h-8 text-accent" />
      </div>
      <Heading as="h3" className="text-xl text-primary mb-3">{value.title}</Heading>
      <Text as="p" className="text-gray-600">{value.description}</Text>
    </motion.div>
  );
};

export default ValueCard;