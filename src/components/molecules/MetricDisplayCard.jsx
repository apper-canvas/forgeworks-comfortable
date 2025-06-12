import { motion } from 'framer-motion';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';

const MetricDisplayCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-md text-center"
    >
      <Heading as="h3" className="text-lg text-primary mb-2 font-semibold">{item.metric}</Heading>
      <Text as="div" className="font-heading text-3xl text-accent mb-2">{item.value}</Text>
      <Text as="div" className="text-sm text-gray-500">Target: {item.target}</Text>
      <div className="mt-3 bg-gray-200 rounded-full h-2">
        <div
          className="bg-success h-2 rounded-full"
          style={{ width: `${parseFloat(item.value)}%` }}
        ></div>
      </div>
    </motion.div>
  );
};

export default MetricDisplayCard;