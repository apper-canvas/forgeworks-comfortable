import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ApperIcon from '../components/ApperIcon';

const ProductionCapabilities = () => {
  const [activeTab, setActiveTab] = useState('equipment');

  const capabilities = {
    equipment: [
      {
        category: 'CNC Machining Centers',
        items: [
          { name: 'Haas VF-4SS 5-Axis', specs: 'Travel: 50" x 20" x 25", ±0.0001" accuracy' },
          { name: 'Mazak Integrex i-400', specs: 'Multi-tasking, 15" max diameter, Y-axis capability' },
          { name: 'DMG Mori NLX 2500', specs: '10" chuck, 25" max length, live tooling' },
          { name: 'Okuma Genos M560-V', specs: 'Vertical machining, 40 ATC, high-speed spindle' }
        ]
      },
      {
        category: 'Fabrication Equipment',
        items: [
          { name: 'Trumpf TruLaser 3030', specs: '6kW fiber laser, 1.5" max thickness' },
          { name: 'Amada HFE 170-4 Press Brake', specs: '187 ton capacity, 12\' bending length' },
          { name: 'Lincoln Electric Invertec V350-PRO', specs: 'TIG/Stick welding, pulse capability' },
          { name: 'Miller Dynasty 350 AC/DC', specs: 'Aluminum welding specialist' }
        ]
      },
      {
        category: 'Quality Inspection',
        items: [
          { name: 'Zeiss Contura G2 CMM', specs: 'RDS articulating probe head, PC-DMIS software' },
          { name: 'Keyence IM-8000 Series', specs: '3D profile measurement, ±0.1μm accuracy' },
          { name: 'Starrett Sigma Force Tester', specs: 'Material testing, 5000 lbf capacity' },
          { name: 'Olympus EPOCH 650 UT', specs: 'Ultrasonic flaw detection' }
        ]
      }
    ],
    
    processes: [
      {
        name: 'CNC Machining',
        description: 'Precision 3, 4, and 5-axis machining with tolerances to ±0.0001"',
        capabilities: [
          'Complex geometries and contours',
          'High-speed machining for production runs',
          'Multi-axis simultaneous machining',
          'In-process inspection and adjustment'
        ],
        materials: ['Aluminum alloys', 'Stainless steel', 'Carbon steel', 'Titanium', 'Inconel', 'Plastics']
      },
      {
        name: 'Metal Fabrication',
        description: 'Complete fabrication services from cutting to finishing',
        capabilities: [
          'Laser cutting up to 1.5" thickness',
          'Precision bending and forming',
          'TIG/MIG welding all positions',
          'Assembly and sub-assembly'
        ],
        materials: ['Sheet metal', 'Plate steel', 'Aluminum', 'Stainless steel', 'Exotic alloys']
      },
      {
        name: 'Quality Assurance',
        description: 'Comprehensive inspection and testing throughout production',
        capabilities: [
          'CMM inspection and reporting',
          'First article inspection (FAI)',
          'Material certification tracking',
          'Non-destructive testing (NDT)'
        ],
        materials: ['All manufactured components', 'Incoming materials', 'Finished assemblies']
      }
    ],

    capacity: [
      {
        metric: 'Production Volume',
        value: '10,000+ parts/month',
        description: 'Scalable from prototype to production quantities'
      },
      {
        metric: 'Facility Size',
        value: '45,000 sq ft',
        description: 'Climate-controlled manufacturing environment'
      },
      {
        metric: 'Machine Hours',
        value: '24/7 operation',
        description: 'Lights-out machining capability for high-volume orders'
      },
      {
        metric: 'Lead Times',
        value: '2-8 weeks typical',
        description: 'Expedited service available for critical projects'
      },
      {
        metric: 'Material Handling',
        value: '50,000 lbs',
        description: 'Overhead crane capacity for large assemblies'
      },
      {
        metric: 'Part Size Range',
        value: '0.1" to 120"',
        description: 'From miniature components to large structures'
      }
    ]
  };

  const tabs = [
    { id: 'equipment', label: 'Equipment', icon: 'Settings' },
    { id: 'processes', label: 'Processes', icon: 'Cog' },
    { id: 'capacity', label: 'Capacity', icon: 'BarChart3' }
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
              Production Capabilities
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              State-of-the-art equipment and advanced manufacturing processes 
              deliver precision components that meet the most demanding specifications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-surface border-b border-gray-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-lg p-1 shadow-md">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-accent text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <ApperIcon name={tab.icon} className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Tab */}
      {activeTab === 'equipment' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl text-primary mb-4">Manufacturing Equipment</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our facility houses advanced machinery capable of handling complex projects 
                with precision and efficiency.
              </p>
            </motion.div>

            <div className="space-y-12">
              {capabilities.equipment.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >
                  <h3 className="font-heading text-2xl text-primary mb-6 industrial-line pl-4">
                    {category.category}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <ApperIcon name="Tool" className="w-6 h-6 text-accent" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-lg text-primary mb-2">{item.name}</h4>
                            <p className="text-gray-600 text-sm">{item.specs}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Processes Tab */}
      {activeTab === 'processes' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl text-primary mb-4">Manufacturing Processes</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive manufacturing capabilities from initial concept through 
                final inspection and delivery.
              </p>
            </motion.div>

            <div className="space-y-8">
              {capabilities.processes.map((process, index) => (
                <motion.div
                  key={process.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mr-6">
                        <ApperIcon name="Cog" className="w-8 h-8 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-heading text-2xl text-primary mb-2">{process.name}</h3>
                        <p className="text-gray-600">{process.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                      <div>
                        <h4 className="font-semibold text-lg text-primary mb-3">Capabilities</h4>
                        <ul className="space-y-2">
                          {process.capabilities.map((capability, capIndex) => (
                            <li key={capIndex} className="flex items-center">
                              <ApperIcon name="Check" className="w-4 h-4 text-success mr-3 flex-shrink-0" />
                              <span className="text-gray-700">{capability}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg text-primary mb-3">Materials</h4>
                        <div className="flex flex-wrap gap-2">
                          {process.materials.map((material, matIndex) => (
                            <span
                              key={matIndex}
                              className="bg-surface text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {material}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Capacity Tab */}
      {activeTab === 'capacity' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl text-primary mb-4">Production Capacity</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Scalable manufacturing capacity designed to meet both prototype 
                and high-volume production requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.capacity.map((item, index) => (
                <motion.div
                  key={item.metric}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name="BarChart3" className="w-8 h-8 text-accent" />
                  </div>
                  
                  <h3 className="font-heading text-xl text-primary mb-2">{item.metric}</h3>
                  <div className="font-semibold text-2xl text-accent mb-3">{item.value}</div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Additional Capacity Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-16 bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg"
            >
              <div className="text-center max-w-4xl mx-auto">
                <h3 className="font-heading text-3xl mb-4">Scalable Solutions</h3>
                <p className="text-xl text-gray-200 mb-6">
                  From single prototypes to thousands of production parts, our flexible 
                  manufacturing approach adapts to your specific volume and timeline requirements.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="font-heading text-3xl text-accent mb-2">1-10</div>
                    <div className="text-gray-200">Prototype Quantities</div>
                  </div>
                  <div className="text-center">
                    <div className="font-heading text-3xl text-accent mb-2">10-1K</div>
                    <div className="text-gray-200">Small Batch Production</div>
                  </div>
                  <div className="text-center">
                    <div className="font-heading text-3xl text-accent mb-2">1K+</div>
                    <div className="text-gray-200">High Volume Manufacturing</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductionCapabilities;