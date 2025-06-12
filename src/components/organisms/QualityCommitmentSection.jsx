import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';

const QualityCommitmentSection = () => {
  const commitments = [
    { icon: 'Shield', title: 'Zero Defect Goal', description: 'Continuous improvement toward perfection' },
    { icon: 'Users', title: 'Customer Focus', description: 'Exceeding expectations every time' },
    { icon: 'TrendingUp', title: 'Continuous Improvement', description: 'Always evolving, always improving' }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Heading as="h2" className="text-4xl md:text-5xl mb-6">Our Quality Commitment</Heading>
          <Text as="p" className="text-xl text-gray-200 mb-8 leading-relaxed">
            Quality isn't just a department at ForgeWorks Pro—it's embedded in our culture.
            Every team member is empowered and responsible for maintaining the highest
            standards of excellence in everything we do.
          </Text>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {commitments.map((commitment, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name={commitment.icon} className="w-8 h-8 text-accent" />
                </div>
                <Heading as="h3" className="text-lg mb-2 font-semibold">{commitment.title}</Heading>
                <Text as="p" className="text-gray-200">{commitment.description}</Text>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QualityCommitmentSection;