import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import ApperIcon from '@/components/ApperIcon';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';

const CtaSection = ({ title, subtitle, ctaLink, ctaLabel, ctaIconName }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Heading as="h2" className="text-4xl md:text-5xl text-white mb-6">
            {title}
          </Heading>
          <Text as="p" className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </Text>
          <NavLink
            to={ctaLink}
            className="inline-flex items-center cta-gradient text-white px-8 py-4 rounded-lg text-lg font-medium hover:scale-105 transition-transform duration-200"
          >
            {ctaLabel}
            {ctaIconName && <ApperIcon name={ctaIconName} className="w-5 h-5 ml-2" />}
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;