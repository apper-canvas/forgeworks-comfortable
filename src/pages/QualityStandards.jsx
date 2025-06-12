import { motion } from 'framer-motion';
import ApperIcon from '../components/ApperIcon';

const QualityStandards = () => {
  const certifications = [
    {
      name: 'ISO 9001:2015',
      issuer: 'International Organization for Standardization',
      validUntil: '2025-12-31',
      description: 'Quality Management Systems - Requirements for consistent quality and customer satisfaction.',
      benefits: [
        'Continuous improvement processes',
        'Customer focus and satisfaction',
        'Risk-based thinking approach',
        'Regular management reviews'
      ]
    },
    {
      name: 'AS9100D',
      issuer: 'Aerospace Quality Management',
      validUntil: '2025-08-15',
      description: 'Aerospace standard built on ISO 9001 with additional aerospace-specific requirements.',
      benefits: [
        'Aerospace industry compliance',
        'Enhanced risk management',
        'Configuration management',
        'Traceability requirements'
      ]
    },
    {
      name: 'ISO 14001',
      issuer: 'Environmental Management',
      validUntil: '2025-06-30',
      description: 'Environmental Management Systems standard for sustainable operations.',
      benefits: [
        'Environmental impact reduction',
        'Waste minimization programs',
        'Energy efficiency improvements',
        'Regulatory compliance'
      ]
    },
    {
      name: 'IATF 16949',
      issuer: 'Automotive Quality',
      validUntil: '2025-11-15',
      description: 'Automotive Quality Management System standard for the automotive industry.',
      benefits: [
        'Automotive industry compliance',
        'Defect prevention focus',
        'Supply chain management',
        'Customer-specific requirements'
      ]
    }
  ];

  const qualityProcess = [
    {
      step: '01',
      title: 'Incoming Inspection',
      description: 'All materials and components undergo thorough inspection upon receipt to ensure compliance with specifications.',
      details: [
        'Material certification verification',
        'Dimensional inspection',
        'Visual quality assessment',
        'Documentation review'
      ]
    },
    {
      step: '02',
      title: 'In-Process Quality Control',
      description: 'Continuous monitoring and inspection throughout the manufacturing process.',
      details: [
        'First article inspection (FAI)',
        'Statistical process control (SPC)',
        'Real-time quality monitoring',
        'Process capability studies'
      ]
    },
    {
      step: '03',
      title: 'Final Inspection',
      description: 'Comprehensive final inspection ensures all products meet specifications before shipment.',
      details: [
        'CMM dimensional verification',
        'Functional testing',
        'Surface finish inspection',
        'Packaging quality check'
      ]
    },
    {
      step: '04',
      title: 'Documentation & Traceability',
      description: 'Complete documentation package with full traceability for all manufactured parts.',
      details: [
        'Inspection reports',
        'Material certifications',
        'Process traveler cards',
        'Quality management records'
      ]
    }
  ];

  const qualityMetrics = [
    { metric: 'On-Time Delivery', value: '99.2%', target: '≥99%' },
    { metric: 'Customer Satisfaction', value: '99.8%', target: '≥98%' },
    { metric: 'First Pass Yield', value: '97.5%', target: '≥95%' },
    { metric: 'Defect Rate', value: '0.12%', target: '≤0.5%' },
    { metric: 'Supplier Quality', value: '98.9%', target: '≥98%' },
    { metric: 'Corrective Actions', value: '100%', target: '100%' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-heading text-5xl md:text-6xl mb-6">
              Quality Standards
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Our commitment to excellence is demonstrated through rigorous quality 
              management systems and industry-leading certifications that ensure 
              consistent, reliable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl text-primary mb-4">Quality Performance</h2>
            <p className="text-lg text-gray-600">
              Our quality metrics demonstrate consistent excellence across all operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityMetrics.map((item, index) => (
              <motion.div
                key={item.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <h3 className="font-semibold text-lg text-primary mb-2">{item.metric}</h3>
                <div className="font-heading text-3xl text-accent mb-2">{item.value}</div>
                <div className="text-sm text-gray-500">Target: {item.target}</div>
                <div className="mt-3 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-success h-2 rounded-full"
                    style={{ width: `${parseFloat(item.value)}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl text-primary mb-4">Industry Certifications</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our certifications validate our commitment to quality and demonstrate 
              compliance with the most stringent industry standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="certification-glow bg-white p-8 rounded-lg shadow-md"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ApperIcon name="Award" className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-xl text-primary mb-1">{cert.name}</h3>
                    <p className="text-secondary font-medium mb-2">{cert.issuer}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <ApperIcon name="Calendar" className="w-4 h-4 mr-1" />
                      Valid until: {new Date(cert.validUntil).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{cert.description}</p>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {cert.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm">
                        <ApperIcon name="Check" className="w-4 h-4 text-success mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl text-primary mb-4">Quality Control Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our systematic approach to quality control ensures every product 
              meets or exceeds specifications at each stage of production.
            </p>
          </motion.div>

          <div className="space-y-8">
            {qualityProcess.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-heading text-xl mr-4">
                      {process.step}
                    </div>
                    <h3 className="font-heading text-2xl text-primary">{process.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{process.description}</p>
                  
                  <ul className="space-y-2">
                    {process.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center">
                        <ApperIcon name="Check" className="w-4 h-4 text-success mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-16 flex-shrink-0 flex justify-center">
                  <div className="w-0.5 h-24 bg-accent/30"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl mb-6">Our Quality Commitment</h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Quality isn't just a department at ForgeWorks Pro—it's embedded in our culture. 
              Every team member is empowered and responsible for maintaining the highest 
              standards of excellence in everything we do.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name="Shield" className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Zero Defect Goal</h3>
                <p className="text-gray-200">Continuous improvement toward perfection</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name="Users" className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Customer Focus</h3>
                <p className="text-gray-200">Exceeding expectations every time</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name="TrendingUp" className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Continuous Improvement</h3>
                <p className="text-gray-200">Always evolving, always improving</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QualityStandards;