import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';

const CertificationDetailCard = ({ cert, index }) => {
  return (
    <motion.div
      key={cert.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="certification-glow bg-white p-8 rounded-lg shadow-md"
    >
      <div className="flex items-start space-x-4 mb-6">
        <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <ApperIcon name="Award" className="w-8 h-8 text-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <Heading as="h3" className="text-xl text-primary mb-1">{cert.name}</Heading>
          <Text as="p" className="text-secondary font-medium mb-2">{cert.issuer}</Text>
          <div className="flex items-center text-sm text-gray-500">
            <ApperIcon name="Calendar" className="w-4 h-4 mr-1" />
            Valid until: {new Date(cert.validUntil).toLocaleDateString()}
          </div>
        </div>
      </div>

      <Text as="p" className="text-gray-600 mb-4">{cert.description}</Text>

      <div>
        <Heading as="h4" className="font-semibold text-primary mb-3">Key Benefits:</Heading>
        <ul className="space-y-2">
          {cert.benefits.map((benefit, benefitIndex) => (
            <li key={benefitIndex} className="flex items-center text-sm">
              <ApperIcon name="Check" className="w-4 h-4 text-success mr-3 flex-shrink-0" />
              <Text as="span" className="text-gray-700">{benefit}</Text>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default CertificationDetailCard;