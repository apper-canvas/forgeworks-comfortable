import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import CapacityMetricCard from '@/components/molecules/CapacityMetricCard';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';

const CapacitySection = ({ capacityData }) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Heading as="h2" className="text-4xl text-primary mb-4">Production Capacity</Heading>
          <Text as="p" className="text-lg text-gray-600 max-w-2xl mx-auto">
            Scalable manufacturing capacity designed to meet both prototype
            and high-volume production requirements.
          </Text>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capacityData.map((item, index) => (
            <CapacityMetricCard key={item.metric} item={item} index={index} />
          ))}
        </div>

        {/* Additional Capacity Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg"
        >
          <div className="text-center max-w-4xl mx-auto">
            <Heading as="h3" className="text-3xl mb-4">Scalable Solutions</Heading>
            <Text as="p" className="text-xl text-gray-200 mb-6">
              From single prototypes to thousands of production parts, our flexible
              manufacturing approach adapts to your specific volume and timeline requirements.
            </Text>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Heading as="div" className="text-3xl text-accent mb-2">1-10</Heading>
                <Text as="div" className="text-gray-200">Prototype Quantities</Text>
              </div>
              <div className="text-center">
                <Heading as="div" className="text-3xl text-accent mb-2">10-1K</Heading>
                <Text as="div" className="text-gray-200">Small Batch Production</Text>
              </div>
              <div className="text-center">
                <Heading as="div" className="text-3xl text-accent mb-2">1K+</Heading>
                <Text as="div" className="text-gray-200">High Volume Manufacturing</Text>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CapacitySection;