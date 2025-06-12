import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';

const ContactInfoCard = ({ info, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-md text-center"
    >
      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <ApperIcon name={info.icon} className="w-8 h-8 text-accent" />
      </div>
      <Heading as="h3" className="text-lg text-primary mb-4 font-semibold">{info.title}</Heading>
      <div className="space-y-2">
        {info.details.map((detail, detailIndex) => (
          <div key={detailIndex} className="text-sm">
            <Text as="div" className="font-medium text-gray-900">{detail.label}</Text>
            <Text as="div" className="text-gray-600">{detail.value}</Text>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactInfoCard;