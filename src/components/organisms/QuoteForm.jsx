import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import ApperIcon from '@/components/ApperIcon';
import { quoteService, productService } from '@/services';
import FormField from '@/components/molecules/FormField';
import Button from '@/components/atoms/Button';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';
import ProgressStepItem from '@/components/molecules/ProgressStepItem';

const QuoteForm = () => {
  const [products, setProducts] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    customerName: '',
    company: '',
    email: '',
    phone: '',
    projectName: '',
    timeline: '',
    budget: '',
    products: [{ productId: '', quantity: '', specifications: '' }],
    requirements: '',
    drawings: null,
    certifications: [],
    deliveryAddress: '',
    specialInstructions: ''
  });

  const steps = [
    { id: 1, title: 'Contact Info', icon: 'User' },
    { id: 2, title: 'Project Details', icon: 'FileText' },
    { id: 3, title: 'Requirements', icon: 'Settings' },
    { id: 4, title: 'Review & Submit', icon: 'Check' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP (Rush order)' },
    { value: '1-2weeks', label: '1-2 weeks' },
    { value: '3-4weeks', label: '3-4 weeks' },
    { value: '1-2months', label: '1-2 months' },
    { value: '3+months', label: '3+ months' },
    { value: 'flexible', label: 'Flexible timing' }
  ];

  const budgetRanges = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-25k', label: '$5,000 - $25,000' },
    { value: '25k-100k', label: '$25,000 - $100,000' },
    { value: '100k-500k', label: '$100,000 - $500,000' },
    { value: 'over-500k', label: 'Over $500,000' },
    { value: 'discuss', label: 'Prefer to discuss' }
  ];

  const certificationOptions = [
    'ISO 9001:2015',
    'AS9100D',
    'IATF 16949',
    'ISO 14001',
    'NADCAP',
    'First Article Inspection (FAI)',
    'Material Certifications',
    'Dimensional Reports'
  ];

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const result = await productService.getAll();
        setProducts(result);
      } catch (error) {
        console.error('Failed to load products for quote form:', error);
      }
    };
    loadProducts();
  }, []);

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!formData.customerName.trim()) newErrors.customerName = 'Name is required';
        if (!formData.company.trim()) newErrors.company = 'Company is required';
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Email is invalid';
        }
        break;

      case 2:
        if (!formData.projectName.trim()) newErrors.projectName = 'Project name is required';
        if (!formData.timeline) newErrors.timeline = 'Timeline is required';
        break;

      case 3:
        if (formData.products.some(p => !p.productId || !p.quantity)) {
          newErrors.products = 'Please select products and specify quantities';
        }
        if (!formData.requirements.trim()) {
          newErrors.requirements = 'Please describe your requirements';
        }
        break;
      default:
        break;
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

  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...formData.products];
    updatedProducts[index] = { ...updatedProducts[index], [field]: value };
    setFormData(prev => ({
      ...prev,
      products: updatedProducts
    }));
  };

  const addProduct = () => {
    setFormData(prev => ({
      ...prev,
      products: [...prev.products, { productId: '', quantity: '', specifications: '' }]
    }));
  };

  const removeProduct = (index) => {
    if (formData.products.length > 1) {
      const updatedProducts = formData.products.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        products: updatedProducts
      }));
    }
  };

  const handleCertificationChange = (certification) => {
    const updatedCertifications = formData.certifications.includes(certification)
      ? formData.certifications.filter(c => c !== certification)
      : [...formData.certifications, certification];
    
    setFormData(prev => ({
      ...prev,
      certifications: updatedCertifications
    }));
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    } else {
      toast.error('Please correct the errors before continuing');
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(currentStep)) {
      toast.error('Please correct all errors before submitting');
      return;
    }

    setSubmitting(true);
    try {
      await quoteService.create(formData);
      toast.success('Quote request submitted successfully! We\'ll contact you within 24 hours.');
      
      setFormData({
        customerName: '',
        company: '',
        email: '',
        phone: '',
        projectName: '',
        timeline: '',
        budget: '',
        products: [{ productId: '', quantity: '', specifications: '' }],
        requirements: '',
        drawings: null,
        certifications: [],
        deliveryAddress: '',
        specialInstructions: ''
      });
      setCurrentStep(1);
      
    } catch (error) {
      toast.error('Failed to submit quote request. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    &lt;&gt;
      &lt;section className="py-8 bg-surface border-b border-gray-200 sticky top-16 z-30"&gt;
        &lt;div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"&gt;
          &lt;div className="flex items-center justify-between"&gt;
            {steps.map((step, index) => (
              &lt;ProgressStepItem 
                key={step.id} 
                step={step} 
                currentStep={currentStep} 
                index={index} 
                totalSteps={steps.length} 
              /&gt;
            ))}
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      &lt;section className="py-16"&gt;
        &lt;div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"&gt;
          &lt;form onSubmit={handleSubmit}&gt;
            {currentStep === 1 && (
              &lt;motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              &gt;
                &lt;div className="text-center mb-8"&gt;
                  &lt;Heading as="h2" className="text-3xl text-primary mb-2"&gt;Contact Information&lt;/Heading&gt;
                  &lt;Text as="p" className="text-gray-600"&gt;Tell us about yourself and your company&lt;/Text&gt;
                &lt;/div&gt;

                &lt;div className="grid grid-cols-1 md:grid-cols-2 gap-6"&gt;
                  &lt;FormField
                    label="Full Name *"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleInputChange}
                    placeholder="John Smith"
                    error={errors.customerName}
                  /&gt;
                  &lt;FormField
                    label="Company *"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company Name"
                    error={errors.company}
                  /&gt;
                  &lt;FormField
                    label="Email Address *"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    error={errors.email}
                  /&gt;
                  &lt;FormField
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567"
                  /&gt;
                &lt;/div&gt;
              &lt;/motion.div&gt;
            )}

            {currentStep === 2 && (
              &lt;motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              &gt;
                &lt;div className="text-center mb-8"&gt;
                  &lt;Heading as="h2" className="text-3xl text-primary mb-2"&gt;Project Details&lt;/Heading&gt;
                  &lt;Text as="p" className="text-gray-600"&gt;Provide information about your project&lt;/Text&gt;
                &lt;/div&gt;

                &lt;FormField
                  label="Project Name *"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleInputChange}
                  placeholder="Describe your project in a few words"
                  error={errors.projectName}
                /&gt;

                &lt;div className="grid grid-cols-1 md:grid-cols-2 gap-6"&gt;
                  &lt;FormField
                    label="Timeline *"
                    type="select"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    options={timelineOptions}
                    placeholder="Select timeline"
                    error={errors.timeline}
                  /&gt;
                  &lt;FormField
                    label="Budget Range"
                    type="select"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    options={budgetRanges}
                    placeholder="Select budget range"
                  /&gt;
                &lt;/div&gt;

                &lt;FormField
                  label="Delivery Address"
                  type="textarea"
                  name="deliveryAddress"
                  value={formData.deliveryAddress}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Delivery address (if different from company address)"
                /&gt;
              &lt;/motion.div&gt;
            )}

            {currentStep === 3 && (
              &lt;motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              &gt;
                &lt;div className="text-center mb-8"&gt;
                  &lt;Heading as="h2" className="text-3xl text-primary mb-2"&gt;Requirements&lt;/Heading&gt;
                  &lt;Text as="p" className="text-gray-600"&gt;Specify your product and service requirements&lt;/Text&gt;
                &lt;/div&gt;

                {/* Products */}
                &lt;div&gt;
                  &lt;div className="flex items-center justify-between mb-4"&gt;
                    &lt;label className="block text-sm font-medium text-gray-700"&gt;
                      Products Required *
                    &lt;/label&gt;
                    &lt;Button
                      type="button"
                      onClick={addProduct}
                      className="text-accent hover:text-accent/80 font-medium text-sm !p-0 !py-0 !px-0"
                      iconName="Plus"
                    &gt;
                      Add Product
                    &lt;/Button&gt;
                  &lt;/div&gt;

                  &lt;div className="space-y-4"&gt;
                    {formData.products.map((product, index) => (
                      &lt;div key={index} className="bg-surface p-4 rounded-lg"&gt;
                        &lt;div className="grid grid-cols-1 md:grid-cols-3 gap-4"&gt;
                          &lt;div&gt;
                            &lt;label className="block text-xs font-medium text-gray-600 mb-1"&gt;
                              Product/Service
                            &lt;/label&gt;
                            &lt;select
                              value={product.productId}
                              onChange={(e) => handleProductChange(index, 'productId', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-sm"
                            &gt;
                              &lt;option value=""&gt;Select product&lt;/option&gt;
                              {products.map(prod => (
                                &lt;option key={prod.id} value={prod.id}&gt;
                                  {prod.name}
                                &lt;/option&gt;
                              ))}
                              &lt;option value="custom"&gt;Custom/Other&lt;/option&gt;
                            &lt;/select&gt;
                          &lt;/div&gt;

                          &lt;div&gt;
                            &lt;label className="block text-xs font-medium text-gray-600 mb-1"&gt;
                              Quantity
                            &lt;/label&gt;
                            &lt;input
                              type="text"
                              value={product.quantity}
                              onChange={(e) => handleProductChange(index, 'quantity', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-sm"
                              placeholder="e.g., 100 pcs"
                            /&gt;
                          &lt;/div&gt;

                          &lt;div className="relative"&gt;
                            &lt;label className="block text-xs font-medium text-gray-600 mb-1"&gt;
                              Specifications
                            &lt;/label&gt;
                            &lt;div className="flex"&gt;
                              &lt;input
                                type="text"
                                value={product.specifications}
                                onChange={(e) => handleProductChange(index, 'specifications', e.target.value)}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-l focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-sm"
                                placeholder="Brief specs"
                              /&gt;
                              {index &gt; 0 && (
                                &lt;Button
                                  type="button"
                                  onClick={() => removeProduct(index)}
                                  className="px-2 py-2 bg-error text-white rounded-r hover:bg-error/80 transition-colors !p-2 !py-2 !px-2"
                                  iconName="X"
                                &gt;&lt;/Button&gt;
                              )}
                            &lt;/div&gt;
                          &lt;/div&gt;
                        &lt;/div&gt;
                      &lt;/div&gt;
                    ))}
                  &lt;/div&gt;
                  {errors.products && (
                    &lt;Text as="p" className="mt-1 text-sm text-error"&gt;{errors.products}&lt;/Text&gt;
                  )}
                &lt;/div&gt;

                {/* Requirements */}
                &lt;FormField
                  label="Detailed Requirements *"
                  type="textarea"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Please provide detailed requirements including:
• Specifications and tolerances
• Materials and finishes required
• Quality standards or certifications needed
• Any special processing requirements
• Quantity requirements and delivery schedule"
                  error={errors.requirements}
                /&gt;

                {/* Certifications */}
                &lt;div&gt;
                  &lt;label className="block text-sm font-medium text-gray-700 mb-3"&gt;
                    Required Certifications
                  &lt;/label&gt;
                  &lt;div className="grid grid-cols-2 md:grid-cols-3 gap-3"&gt;
                    {certificationOptions.map(cert => (
                      &lt;label key={cert} className="flex items-center"&gt;
                        &lt;input
                          type="checkbox"
                          checked={formData.certifications.includes(cert)}
                          onChange={() => handleCertificationChange(cert)}
                          className="mr-2 rounded text-accent focus:ring-accent"
                        /&gt;
                        &lt;Text as="span" className="text-sm text-gray-700"&gt;{cert}&lt;/Text&gt;
                      &lt;/label&gt;
                    ))}
                  &lt;/div&gt;
                &lt;/div&gt;

                {/* Special Instructions */}
                &lt;FormField
                  label="Special Instructions"
                  type="textarea"
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Any special handling, packaging, or delivery instructions..."
                /&gt;
              &lt;/motion.div&gt;
            )}

            {currentStep === 4 && (
              &lt;motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              &gt;
                &lt;div className="text-center mb-8"&gt;
                  &lt;Heading as="h2" className="text-3xl text-primary mb-2"&gt;Review & Submit&lt;/Heading&gt;
                  &lt;Text as="p" className="text-gray-600"&gt;Please review your information before submitting&lt;/Text&gt;
                &lt;/div&gt;

                &lt;div className="bg-surface p-6 rounded-lg space-y-6"&gt;
                  {/* Contact Info */}
                  &lt;div&gt;
                    &lt;Heading as="h3" className="text-lg text-primary mb-3 font-semibold"&gt;Contact Information&lt;/Heading&gt;
                    &lt;div className="grid grid-cols-2 gap-4 text-sm"&gt;
                      &lt;div&gt;&lt;strong&gt;Name:&lt;/strong&gt; {formData.customerName}&lt;/div&gt;
                      &lt;div&gt;&lt;strong&gt;Company:&lt;/strong&gt; {formData.company}&lt;/div&gt;
                      &lt;div&gt;&lt;strong&gt;Email:&lt;/strong&gt; {formData.email}&lt;/div&gt;
                      &lt;div&gt;&lt;strong&gt;Phone:&lt;/strong&gt; {formData.phone || 'Not provided'}&lt;/div&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;

                  {/* Project Details */}
                  &lt;div&gt;
                    &lt;Heading as="h3" className="text-lg text-primary mb-3 font-semibold"&gt;Project Details&lt;/Heading&gt;
                    &lt;div className="grid grid-cols-2 gap-4 text-sm"&gt;
                      &lt;div&gt;&lt;strong&gt;Project:&lt;/strong&gt; {formData.projectName}&lt;/div&gt;
                      &lt;div&gt;&lt;strong&gt;Timeline:&lt;/strong&gt; {timelineOptions.find(t => t.value === formData.timeline)?.label}&lt;/div&gt;
                      &lt;div&gt;&lt;strong&gt;Budget:&lt;/strong&gt; {budgetRanges.find(b => b.value === formData.budget)?.label || 'Not specified'}&lt;/div&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;

                  {/* Products */}
                  &lt;div&gt;
                    &lt;Heading as="h3" className="text-lg text-primary mb-3 font-semibold"&gt;Products Required&lt;/Heading&gt;
                    {formData.products.map((product, index) => (
                      &lt;div key={index} className="mb-2 text-sm"&gt;
                        &lt;strong&gt;Product {index + 1}:&lt;/strong&gt; {
                          product.productId === 'custom' ? 'Custom/Other' : 
                          products.find(p => p.id === product.productId)?.name || 'Not selected'
                        } - Qty: {product.quantity} - {product.specifications}
                      &lt;/div&gt;
                    ))}
                  &lt;/div&gt;

                  {/* Requirements */}
                  &lt;div&gt;
                    &lt;Heading as="h3" className="text-lg text-primary mb-3 font-semibold"&gt;Requirements&lt;/Heading&gt;
                    &lt;Text as="p" className="text-sm text-gray-700 whitespace-pre-wrap"&gt;{formData.requirements}&lt;/Text&gt;
                  &lt;/div&gt;

                  {/* Certifications */}
                  {formData.certifications.length &gt; 0 && (
                    &lt;div&gt;
                      &lt;Heading as="h3" className="text-lg text-primary mb-3 font-semibold"&gt;Required Certifications&lt;/Heading&gt;
                      &lt;div className="flex flex-wrap gap-2"&gt;
                        {formData.certifications.map(cert => (
                          &lt;Text as="span" key={cert} className="bg-accent/10 text-accent px-2 py-1 rounded text-sm"&gt;
                            {cert}
                          &lt;/Text&gt;
                        ))}
                      &lt;/div&gt;
                    &lt;/div&gt;
                  )}
                &lt;/div&gt;

                &lt;div className="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg"&gt;
                  &lt;Heading as="h3" className="text-lg mb-2 font-semibold"&gt;What happens next?&lt;/Heading&gt;
                  &lt;ul className="space-y-1 text-sm text-gray-200"&gt;
                    &lt;li&gt;• We'll review your requirements within 2-4 hours&lt;/li&gt;
                    &lt;li&gt;• Our engineering team will assess feasibility and develop pricing&lt;/li&gt;
                    &lt;li&gt;• You'll receive a detailed quote within 24 hours&lt;/li&gt;
                    &lt;li&gt;• We may contact you for clarification if needed&lt;/li&gt;
                  &lt;/ul&gt;
                &lt;/div&gt;
              &lt;/motion.div&gt;
            )}

            {/* Navigation Buttons */}
            &lt;div className="flex justify-between pt-8 border-t border-gray-200"&gt;
              &lt;Button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`bg-gray-200 text-gray-700 ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
                iconName="ArrowLeft"
              &gt;
                Previous
              &lt;/Button&gt;

              {currentStep &lt; 4 ? (
                &lt;Button
                  type="button"
                  onClick={nextStep}
                  className="cta-gradient text-white hover:scale-105"
                  iconName="ArrowRight"
                &gt;
                  Next
                &lt;/Button&gt;
              ) : (
                &lt;Button
                  type="submit"
                  isLoading={submitting}
                  className="cta-gradient text-white hover:scale-105"
                  iconName="Send"
                &gt;
                  Submit Quote Request
                &lt;/Button&gt;
              )}
            &lt;/div&gt;
          &lt;/form&gt;
        &lt;/div&gt;
      &lt;/section&gt;
    &lt;/&gt;
  );
};

export default QuoteForm;