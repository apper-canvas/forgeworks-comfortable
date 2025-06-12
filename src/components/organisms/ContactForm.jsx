import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import ApperIcon from '@/components/ApperIcon';
import { contactService } from '@/services';
import FormField from '@/components/molecules/FormField';
import Button from '@/components/atoms/Button';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

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
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <Heading as="h2" className="text-3xl text-primary mb-6">Send Us a Message</Heading>
      <Text as="p" className="text-gray-600 mb-8">
        Have a question about our services or want to discuss a project?
        Fill out the form below and we'll respond within 24 hours.
      </Text>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="Full Name *"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="John Smith"
            error={errors.name}
          />
          <FormField
            label="Email Address *"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="john@company.com"
            error={errors.email}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="Company *"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Your Company Name"
            error={errors.company}
          />
          <FormField
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="(555) 123-4567"
          />
        </div>

        <FormField
          label="Message *"
          type="textarea"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={6}
          placeholder="Tell us about your project requirements, timeline, and any specific questions you have..."
          error={errors.message}
        />

        <Button
          type="submit"
          isLoading={loading}
          iconName="Send"
          className="w-full cta-gradient text-white py-4"
        >
          Send Message
        </Button>

        <Text as="p" className="text-sm text-gray-500 text-center">
          * Required fields. We typically respond within 24 hours.
        </Text>
      </form>
    </motion.div>
  );
};

export default ContactForm;