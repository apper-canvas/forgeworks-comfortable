import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';

const CertificationCard = ({ cert, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="certification-glow bg-white p-6 rounded-lg shadow-md text-center border border-gray-100"
    >
      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <ApperIcon name="Award" className="w-8 h-8 text-accent" />
      </div>
      <Heading as="h3" className="font-semibold text-primary mb-1">{cert.name}</Heading>
      <Text as="p" className="text-sm text-gray-500">{cert.issuer}</Text>
    </motion.div>
  );
};

export default CertificationCard;