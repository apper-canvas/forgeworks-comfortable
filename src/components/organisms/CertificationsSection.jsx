import { motion } from 'framer-motion';
import CertificationCard from '@/components/molecules/CertificationCard';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';

const CertificationsSection = ({ certifications }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Heading as="h2" className="text-4xl md:text-5xl text-primary mb-4">
            Quality Certifications
          </Heading>
          <Text as="p" className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence is validated by industry-leading certifications
            and quality management systems.
          </Text>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.name} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;