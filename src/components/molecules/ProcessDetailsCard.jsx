import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';

const ProcessDetailsCard = ({ process, index }) => {
  return (
    <motion.div
      key={process.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="p-8">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mr-6">
            <ApperIcon name="Cog" className="w-8 h-8 text-accent" />
          </div>
          <div>
            <Heading as="h3" className="text-2xl text-primary mb-2">{process.name}</Heading>
            <Text as="p" className="text-gray-600">{process.description}</Text>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          <div>
            <Heading as="h4" className="font-semibold text-lg text-primary mb-3">Capabilities</Heading>
            <ul className="space-y-2">
              {process.capabilities.map((capability, capIndex) => (
                <li key={capIndex} className="flex items-center">
                  <ApperIcon name="Check" className="w-4 h-4 text-success mr-3 flex-shrink-0" />
                  <Text as="span" className="text-gray-700">{capability}</Text>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Heading as="h4" className="font-semibold text-lg text-primary mb-3">Materials</Heading>
            <div className="flex flex-wrap gap-2">
              {process.materials.map((material, matIndex) => (
                <Text
                  as="span"
                  key={matIndex}
                  className="bg-surface text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {material}
                </Text>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProcessDetailsCard;