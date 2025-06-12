import { motion } from 'framer-motion';
import QualityProcessStep from '@/components/molecules/QualityProcessStep';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';

const QualityProcessSection = ({ processSteps }) => {
  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Heading as="h2" className="text-4xl text-primary mb-4">Quality Control Process</Heading>
          <Text as="p" className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our systematic approach to quality control ensures every product
            meets or exceeds specifications at each stage of production.
          </Text>
        </motion.div>

        <div className="space-y-8">
          {processSteps.map((process, index) => (
            <QualityProcessStep key={process.step} process={process} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityProcessSection;