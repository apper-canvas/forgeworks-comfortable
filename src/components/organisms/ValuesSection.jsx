import { motion } from 'framer-motion';
import ValueCard from '@/components/molecules/ValueCard';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';

const ValuesSection = ({ values }) => {
  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Heading as="h2" className="text-4xl text-primary mb-4">Our Core Values</Heading>
          <Text as="p" className="text-lg text-gray-600 max-w-2xl mx-auto">
            These principles guide every decision we make and every project we undertake.
          </Text>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;