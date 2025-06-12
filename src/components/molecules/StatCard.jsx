import { motion } from 'framer-motion';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';

const StatCard = ({ stat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="text-center"
    >
      <Heading as="div" className="text-4xl md:text-5xl text-accent mb-2">
        {stat.value}
      </Heading>
      <Text as="div" className="text-gray-600 font-medium">
        {stat.label}
      </Text>
    </motion.div>
  );
};

export default StatCard;