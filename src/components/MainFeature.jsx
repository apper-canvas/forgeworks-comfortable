import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import ApperIcon from './ApperIcon';

const MainFeature = () => {
  const capabilities = [
    {
      icon: 'Cog',
      title: 'CNC Machining',
      description: 'Precision 3, 4, and 5-axis CNC machining with tolerances up to ±0.0001"',
      specs: ['Multi-axis capability', 'High precision', 'Complex geometries']
    },
    {
      icon: 'Flame',
      title: 'Metal Fabrication',
      description: 'Comprehensive welding, cutting, and forming services for all metal types',
      specs: ['TIG/MIG welding', 'Laser cutting', 'Sheet metal forming']
    },
    {
      icon: 'Zap',
      title: 'Assembly Services',
      description: 'Complete sub-assembly and final assembly with quality testing',
      specs: ['Sub-assembly', 'Final assembly', 'Quality testing']
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl text-primary mb-4"
          >
            Manufacturing Excellence
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            State-of-the-art equipment and decades of expertise combine to deliver 
            precision components that meet the most demanding specifications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                  <ApperIcon name={capability.icon} className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading text-xl text-primary">
                  {capability.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-4">
                {capability.description}
              </p>
              
              <ul className="space-y-2">
                {capability.specs.map((spec, specIndex) => (
                  <li key={specIndex} className="flex items-center text-sm text-gray-500">
                    <ApperIcon name="Check" className="w-4 h-4 text-success mr-2" />
                    {spec}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <NavLink
            to="/capabilities"
            className="inline-flex items-center cta-gradient text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform duration-200"
          >
            View All Capabilities
            <ApperIcon name="ArrowRight" className="w-4 h-4 ml-2" />
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
};

export default MainFeature;