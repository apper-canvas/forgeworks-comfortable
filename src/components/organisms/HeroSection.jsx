import { motion } from 'framer-motion';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';

const HeroSection = ({ title, subtitle, children, className = '', titleClassName = '', subtitleClassName = '', initialY = 30 }) => {
  return (
    <section className={`py-24 bg-gradient-to-br from-primary to-secondary text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: initialY }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <Heading as="h1" className={`text-5xl md:text-6xl mb-6 ${titleClassName}`}>
            {title}
          </Heading>
          <Text as="p" className={`text-xl md:text-2xl text-gray-200 leading-relaxed ${subtitleClassName}`}>
            {subtitle}
          </Text>
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;