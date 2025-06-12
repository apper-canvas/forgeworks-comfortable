import { motion } from 'framer-motion';
import ProcessDetailsCard from '@/components/molecules/ProcessDetailsCard';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';

const ProcessesSection = ({ processesData }) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Heading as="h2" className="text-4xl text-primary mb-4">Manufacturing Processes</Heading>
          <Text as="p" className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive manufacturing capabilities from initial concept through
            final inspection and delivery.
          </Text>
        </motion.div>

        <div className="space-y-8">
          {processesData.map((process, index) => (
            <ProcessDetailsCard key={process.name} process={process} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessesSection;