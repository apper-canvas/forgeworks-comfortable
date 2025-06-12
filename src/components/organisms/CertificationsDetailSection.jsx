import { motion } from 'framer-motion';
import CertificationDetailCard from '@/components/molecules/CertificationDetailCard';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';

const CertificationsDetailSection = ({ certifications }) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Heading as="h2" className="text-4xl text-primary mb-4">Industry Certifications</Heading>
          <Text as="p" className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our certifications validate our commitment to quality and demonstrate
            compliance with the most stringent industry standards.
          </Text>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <CertificationDetailCard key={cert.name} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsDetailSection;