import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import ApperIcon from '../components/ApperIcon';
import { contactService } from '../services';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Phone',
      details: [
        { label: 'Main Office', value: '(555) 123-4567' },
        { label: 'Sales', value: '(555) 123-4568' },
        { label: 'Support', value: '(555) 123-4569' }
      ]
    },
    {
      icon: 'Mail',
      title: 'Email',
      details: [
        { label: 'General', value: 'info@forgeworkspro.com' },
        { label: 'Sales', value: 'sales@forgeworkspro.com' },
        { label: 'Quality', value: 'quality@forgeworkspro.com' }
      ]
    },
    {
      icon: 'MapPin',
      title: 'Location',
      details: [
        { label: 'Address', value: '123 Industrial Avenue' },
        { label: 'City', value: 'Manufacturing District, MD 12345' },
        { label: 'Hours', value: 'Mon-Fri: 7:00 AM - 6:00 PM' }
      ]
    },
    {
      icon: 'Clock',
      title: 'Business Hours',
      details: [
        { label: 'Monday - Friday', value: '7:00 AM - 6:00 PM' },
        { label: 'Saturday', value: '8:00 AM - 2:00 PM' },
        { label: 'Emergency', value: '24/7 Support Available' }
      ]
    }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please correct the errors in the form');
      return;
    }

    setLoading(true);
    try {
      await contactService.create(formData);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Ready to discuss your manufacturing needs? Our team of experts is here 
              to help you find the perfect solution for your project requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name={info.icon} className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg text-primary mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="text-sm">
                      <div className="font-medium text-gray-900">{detail.label}</div>
                      <div className="text-gray-600">{detail.value}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl text-primary mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Have a question about our services or want to discuss a project? 
                Fill out the form below and we'll respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors ${
                        errors.name ? 'border-error' : 'border-gray-300'
                      }`}
                      placeholder="John Smith"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-error">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors ${
                        errors.email ? 'border-error' : 'border-gray-300'
                      }`}
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-error">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors ${
                        errors.company ? 'border-error' : 'border-gray-300'
                      }`}
                      placeholder="Your Company Name"
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-error">{errors.company}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none ${
                      errors.message ? 'border-error' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your project requirements, timeline, and any specific questions you have..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-error">{errors.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className={`w-full cta-gradient text-white py-4 rounded-lg font-medium transition-all duration-200 ${
                    loading ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'
                  }`}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Sending Message...
                    </div>
                  ) : (
                    <>
                      Send Message
                      <ApperIcon name="Send" className="w-4 h-4 ml-2 inline" />
                    </>
                  )}
                </motion.button>

                <p className="text-sm text-gray-500 text-center">
                  * Required fields. We typically respond within 24 hours.
                </p>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl text-primary mb-6">Visit Our Facility</h2>
              
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-64 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <ApperIcon name="MapPin" className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">123 Industrial Avenue</p>
                </div>
              </div>

              {/* Facility Info */}
              <div className="bg-surface p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-lg text-primary mb-4">Facility Tours Available</h3>
                <p className="text-gray-600 mb-4">
                  We welcome visitors to tour our 45,000 sq ft manufacturing facility. 
                  See our advanced equipment and quality processes in action.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ApperIcon name="Check" className="w-4 h-4 text-success mr-3" />
                    <span className="text-gray-700">Advanced CNC machining centers</span>
                  </li>
                  <li className="flex items-center">
                    <ApperIcon name="Check" className="w-4 h-4 text-success mr-3" />
                    <span className="text-gray-700">Quality inspection laboratory</span>
                  </li>
                  <li className="flex items-center">
                    <ApperIcon name="Check" className="w-4 h-4 text-success mr-3" />
                    <span className="text-gray-700">Clean manufacturing environment</span>
                  </li>
                  <li className="flex items-center">
                    <ApperIcon name="Check" className="w-4 h-4 text-success mr-3" />
                    <span className="text-gray-700">Meeting rooms for project discussions</span>
                  </li>
                </ul>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-accent/10 to-accent/5 p-6 rounded-lg border-l-4 border-accent">
                <div className="flex items-center mb-2">
                  <ApperIcon name="AlertCircle" className="w-5 h-5 text-accent mr-2" />
                  <h3 className="font-semibold text-accent">Emergency Support</h3>
                </div>
                <p className="text-gray-700 text-sm mb-2">
                  For urgent production issues or quality concerns:
                </p>
                <p className="font-medium text-gray-900">(555) 123-4567 ext. 911</p>
                <p className="text-sm text-gray-600">Available 24/7 for existing customers</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;