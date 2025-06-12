import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import ApperIcon from '@/components/ApperIcon';
import HeroSection from '@/components/organisms/HeroSection';
import StatsSection from '@/components/organisms/StatsSection';
import MainFeature from '@/components/organisms/MainFeature';
import CertificationsSection from '@/components/organisms/CertificationsSection';
import CtaSection from '@/components/organisms/CtaSection';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';

const HomePage = () => {
  const stats = [
    { label: 'Years of Experience', value: '25+' },
    { label: 'Projects Completed', value: '10,000+' },
    { label: 'Quality Certifications', value: '12' },
    { label: 'Client Satisfaction', value: '99.8%' }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', issuer: 'Quality Management' },
    { name: 'AS9100D', issuer: 'Aerospace Standard' },
    { name: 'ISO 14001', issuer: 'Environmental Management' },
    { name: 'IATF 16949', issuer: 'Automotive Quality' }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(144)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: i * 0.01 }}
                className="bg-white/20 rounded"
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading as="h1" className="text-6xl md:text-7xl lg:text-8xl mb-6 leading-tight">
              Precision Manufacturing
              <Text as="span" className="block text-accent">Excellence</Text>
            </Heading>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto"
          >
            Delivering reliable, efficient manufacturing solutions with uncompromising
            quality standards for over two decades.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <NavLink
              to="/quote"
              className="inline-flex items-center cta-gradient text-white px-8 py-4 rounded-lg text-lg font-medium hover:scale-105 transition-transform duration-200"
            >
              Request Quote
              <ApperIcon name="ArrowRight" className="w-5 h-5 ml-2" />
            </NavLink>
            
            <NavLink
              to="/products"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/20 transition-all duration-200 border border-white/20"
            >
              View Products
              <ApperIcon name="Package" className="w-5 h-5 ml-2" />
            </NavLink>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white/60"
          >
            <ApperIcon name="ChevronDown" className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      <StatsSection stats={stats} />
      <MainFeature />
      <CertificationsSection certifications={certifications} />
      <CtaSection
        title="Ready to Start Your Project?"
        subtitle="Get a detailed quote for your manufacturing needs. Our team of experts is ready to bring your vision to life with precision and quality."
        ctaLink="/quote"
        ctaLabel="Get Your Quote Today"
        ctaIconName="ArrowRight"
      />
    </div>
  );
};

export default HomePage;