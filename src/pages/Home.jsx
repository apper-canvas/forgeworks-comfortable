import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import ApperIcon from '../components/ApperIcon';
import MainFeature from '../components/MainFeature';

const Home = () => {
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
      {/* Hero Section */}
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
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-6xl md:text-7xl lg:text-8xl mb-6 leading-tight"
          >
            Precision Manufacturing
            <span className="block text-accent">Excellence</span>
          </motion.h1>
          
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

      {/* Stats Section */}
      <section className="py-16 bg-white industrial-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-4xl md:text-5xl text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features */}
      <MainFeature />

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4">
              Quality Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence is validated by industry-leading certifications 
              and quality management systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="certification-glow bg-white p-6 rounded-lg shadow-md text-center border border-gray-100"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name="Award" className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-primary mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-500">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Get a detailed quote for your manufacturing needs. Our team of experts 
              is ready to bring your vision to life with precision and quality.
            </p>
            <NavLink
              to="/quote"
              className="inline-flex items-center cta-gradient text-white px-8 py-4 rounded-lg text-lg font-medium hover:scale-105 transition-transform duration-200"
            >
              Get Your Quote Today
              <ApperIcon name="ArrowRight" className="w-5 h-5 ml-2" />
            </NavLink>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;