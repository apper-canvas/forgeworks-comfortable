import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';

const MissionVisionSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Heading as="h2" className="text-4xl text-primary mb-6">Our Mission</Heading>
            <Text as="p" className="text-lg text-gray-600 mb-6 leading-relaxed">
              To provide world-class manufacturing solutions that enable our clients to
              achieve their goals through precision, innovation, and unwavering commitment
              to quality. We believe that excellence is not just a goal, but a standard
              we uphold in every project.
            </Text>
            <div className="flex items-center text-accent">
              <ApperIcon name="Quote" className="w-6 h-6 mr-3" />
              <Text as="span" className="font-medium">"Quality is never an accident; it is always the result of intelligent effort."</Text>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface p-8 rounded-lg"
          >
            <Heading as="h3" className="text-2xl text-primary mb-4">Our Vision</Heading>
            <Text as="p" className="text-gray-600 mb-6">
              To be the premier manufacturing partner for companies that demand precision,
              reliability, and innovation in their critical components and assemblies.
            </Text>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <ApperIcon name="CheckCircle" className="w-5 h-5 text-success mr-3" />
                <Text as="span" className="text-gray-700">Industry-leading quality standards</Text>
              </div>
              <div className="flex items-center">
                <ApperIcon name="CheckCircle" className="w-5 h-5 text-success mr-3" />
                <Text as="span" className="text-gray-700">Continuous technology advancement</Text>
              </div>
              <div className="flex items-center">
                <ApperIcon name="CheckCircle" className="w-5 h-5 text-success mr-3" />
                <Text as="span" className="text-gray-700">Sustainable manufacturing practices</Text>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;