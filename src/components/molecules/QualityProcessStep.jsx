import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';

const QualityProcessStep = ({ process, index }) => {
  return (
    <motion.div
      key={process.step}
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`flex items-center ${
        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-heading text-xl mr-4">
            {process.step}
          </div>
          <Heading as="h3" className="text-2xl text-primary">{process.title}</Heading>
        </div>
        
        <Text as="p" className="text-gray-600 mb-4">{process.description}</Text>
        
        <ul className="space-y-2">
          {process.details.map((detail, detailIndex) => (
            <li key={detailIndex} className="flex items-center">
              <ApperIcon name="Check" className="w-4 h-4 text-success mr-3 flex-shrink-0" />
              <Text as="span" className="text-gray-700">{detail}</Text>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-16 flex-shrink-0 flex justify-center">
        <div className="w-0.5 h-24 bg-accent/30"></div>
      </div>
    </motion.div>
  );
};

export default QualityProcessStep;