import { motion } from 'framer-motion';
import ApperIcon from '../components/ApperIcon';

const About = () => {
  const values = [
    {
      icon: 'Target',
      title: 'Precision',
      description: 'Every component meets exact specifications with tolerances that exceed industry standards.'
    },
    {
      icon: 'Clock',
      title: 'Reliability',
      description: 'On-time delivery and consistent quality you can depend on for critical projects.'
    },
    {
      icon: 'Users',
      title: 'Partnership',
      description: 'We work closely with clients to understand their needs and exceed expectations.'
    },
    {
      icon: 'Lightbulb',
      title: 'Innovation',
      description: 'Continuous investment in technology and processes to stay ahead of industry demands.'
    }
  ];

  const timeline = [
    { year: '1999', event: 'Founded ForgeWorks Pro with a focus on precision machining' },
    { year: '2005', event: 'Achieved ISO 9001 certification and expanded facility' },
    { year: '2010', event: 'Added aerospace capabilities with AS9100 certification' },
    { year: '2015', event: 'Invested in advanced 5-axis CNC technology' },
    { year: '2020', event: 'Implemented Industry 4.0 solutions and IoT monitoring' },
    { year: '2024', event: 'Celebrating 25 years of manufacturing excellence' }
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
              About ForgeWorks Pro
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              For over 25 years, we've been at the forefront of precision manufacturing, 
              combining traditional craftsmanship with cutting-edge technology to deliver 
              exceptional results for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To provide world-class manufacturing solutions that enable our clients to 
                achieve their goals through precision, innovation, and unwavering commitment 
                to quality. We believe that excellence is not just a goal, but a standard 
                we uphold in every project.
              </p>
              <div className="flex items-center text-accent">
                <ApperIcon name="Quote" className="w-6 h-6 mr-3" />
                <span className="font-medium">"Quality is never an accident; it is always the result of intelligent effort."</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-surface p-8 rounded-lg"
            >
              <h3 className="font-heading text-2xl text-primary mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                To be the premier manufacturing partner for companies that demand precision, 
                reliability, and innovation in their critical components and assemblies.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <ApperIcon name="CheckCircle" className="w-5 h-5 text-success mr-3" />
                  <span className="text-gray-700">Industry-leading quality standards</span>
                </div>
                <div className="flex items-center">
                  <ApperIcon name="CheckCircle" className="w-5 h-5 text-success mr-3" />
                  <span className="text-gray-700">Continuous technology advancement</span>
                </div>
                <div className="flex items-center">
                  <ApperIcon name="CheckCircle" className="w-5 h-5 text-success mr-3" />
                  <span className="text-gray-700">Sustainable manufacturing practices</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl text-primary mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every project we undertake.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <ApperIcon name={value.icon} className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading text-xl text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl text-primary mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">
              Key milestones in our commitment to manufacturing excellence
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-accent/30"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-md z-10"></div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="font-heading text-2xl text-accent mb-2">{item.year}</div>
                      <p className="text-gray-700">{item.event}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl text-primary mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Experienced professionals driving innovation and excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Michael Rodriguez',
                role: 'President & CEO',
                experience: '25+ years in manufacturing',
                icon: 'User'
              },
              {
                name: 'Sarah Chen',
                role: 'VP of Operations',
                experience: '20+ years in quality management',
                icon: 'User'
              },
              {
                name: 'David Thompson',
                role: 'Chief Technology Officer',
                experience: '18+ years in advanced manufacturing',
                icon: 'User'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name={member.icon} className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-primary mb-1">{member.name}</h3>
                <p className="text-accent font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;