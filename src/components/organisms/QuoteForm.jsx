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
    <>
      <section className="py-8 bg-surface border-b border-gray-200 sticky top-16 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <ProgressStepItem 
                key={step.id} 
                step={step} 
                currentStep={currentStep} 
                index={index} 
                totalSteps={steps.length} 
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit}>
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <Heading as="h2" className="text-3xl text-primary mb-2">Contact Information</Heading>
                  <Text as="p" className="text-gray-600">Tell us about yourself and your company</Text>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Full Name *"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleInputChange}
                    placeholder="John Smith"
                    error={errors.customerName}
                  />
                  <FormField
                    label="Company *"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company Name"
                    error={errors.company}
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
                  <FormField
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567"
                  />
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <Heading as="h2" className="text-3xl text-primary mb-2">Project Details</Heading>
                  <Text as="p" className="text-gray-600">Provide information about your project</Text>
                </div>

                <FormField
                  label="Project Name *"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleInputChange}
                  placeholder="Describe your project in a few words"
                  error={errors.projectName}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Timeline *"
                    type="select"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    options={timelineOptions}
                    placeholder="Select timeline"
                    error={errors.timeline}
                  />
                  <FormField
                    label="Budget Range"
                    type="select"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    options={budgetRanges}
                    placeholder="Select budget range"
                  />
                </div>

                <FormField
                  label="Delivery Address"
                  type="textarea"
                  name="deliveryAddress"
                  value={formData.deliveryAddress}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Delivery address (if different from company address)"
                />
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <Heading as="h2" className="text-3xl text-primary mb-2">Requirements</Heading>
                  <Text as="p" className="text-gray-600">Specify your product and service requirements</Text>
                </div>

                {/* Products */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Products Required *
                    </label>
                    <Button
                      type="button"
                      onClick={addProduct}
                      className="text-accent hover:text-accent/80 font-medium text-sm !p-0 !py-0 !px-0"
                      iconName="Plus"
                    >
                      Add Product
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {formData.products.map((product, index) => (
                      <div key={index} className="bg-surface p-4 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">
                              Product/Service
                            </label>
                            <select
                              value={product.productId}
                              onChange={(e) => handleProductChange(index, 'productId', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-sm"
                            >
                              <option value="">Select product</option>
                              {products.map(prod => (
                                <option key={prod.id} value={prod.id}>
                                  {prod.name}
                                </option>
                              ))}
                              <option value="custom">Custom/Other</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">
                              Quantity
                            </label>
                            <input
                              type="text"
                              value={product.quantity}
                              onChange={(e) => handleProductChange(index, 'quantity', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-sm"
                              placeholder="e.g., 100 pcs"
                            />
                          </div>

                          <div className="relative">
                            <label className="block text-xs font-medium text-gray-600 mb-1">
                              Specifications
                            </label>
                            <div className="flex">
                              <input
                                type="text"
                                value={product.specifications}
                                onChange={(e) => handleProductChange(index, 'specifications', e.target.value)}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-l focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-sm"
                                placeholder="Brief specs"
                              />
                              {index > 0 && (
                                <Button
                                  type="button"
                                  onClick={() => removeProduct(index)}
                                  className="px-2 py-2 bg-error text-white rounded-r hover:bg-error/80 transition-colors !p-2 !py-2 !px-2"
                                  iconName="X"
                                ></Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.products && (
                    <Text as="p" className="mt-1 text-sm text-error">{errors.products}</Text>
                  )}
                </div>

                {/* Requirements */}
                <FormField
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
                />

                {/* Certifications */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Required Certifications
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {certificationOptions.map(cert => (
                      <label key={cert} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.certifications.includes(cert)}
                          onChange={() => handleCertificationChange(cert)}
                          className="mr-2 rounded text-accent focus:ring-accent"
                        />
                        <Text as="span" className="text-sm text-gray-700">{cert}</Text>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Special Instructions */}
                <FormField
                  label="Special Instructions"
                  type="textarea"
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Any special handling, packaging, or delivery instructions..."
                />
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <Heading as="h2" className="text-3xl text-primary mb-2">Review & Submit</Heading>
                  <Text as="p" className="text-gray-600">Please review your information before submitting</Text>
                </div>

                <div className="bg-surface p-6 rounded-lg space-y-6">
                  {/* Contact Info */}
                  <div>
                    <Heading as="h3" className="text-lg text-primary mb-3 font-semibold">Contact Information</Heading>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div><strong>Name:</strong> {formData.customerName}</div>
                      <div><strong>Company:</strong> {formData.company}</div>
                      <div><strong>Email:</strong> {formData.email}</div>
                      <div><strong>Phone:</strong> {formData.phone || 'Not provided'}</div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <Heading as="h3" className="text-lg text-primary mb-3 font-semibold">Project Details</Heading>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div><strong>Project:</strong> {formData.projectName}</div>
                      <div><strong>Timeline:</strong> {timelineOptions.find(t => t.value === formData.timeline)?.label}</div>
                      <div><strong>Budget:</strong> {budgetRanges.find(b => b.value === formData.budget)?.label || 'Not specified'}</div>
                    </div>
                  </div>

                  {/* Products */}
                  <div>
                    <Heading as="h3" className="text-lg text-primary mb-3 font-semibold">Products Required</Heading>
                    {formData.products.map((product, index) => (
                      <div key={index} className="mb-2 text-sm">
                        <strong>Product {index + 1}:</strong> {
                          product.productId === 'custom' ? 'Custom/Other' : 
                          products.find(p => p.id === product.productId)?.name || 'Not selected'
                        } - Qty: {product.quantity} - {product.specifications}
                      </div>
                    ))}
                  </div>

                  {/* Requirements */}
                  <div>
                    <Heading as="h3" className="text-lg text-primary mb-3 font-semibold">Requirements</Heading>
                    <Text as="p" className="text-sm text-gray-700 whitespace-pre-wrap">{formData.requirements}</Text>
                  </div>

                  {/* Certifications */}
                  {formData.certifications.length > 0 && (
                    <div>
                      <Heading as="h3" className="text-lg text-primary mb-3 font-semibold">Required Certifications</Heading>
                      <div className="flex flex-wrap gap-2">
                        {formData.certifications.map(cert => (
                          <Text as="span" key={cert} className="bg-accent/10 text-accent px-2 py-1 rounded text-sm">
                            {cert}
                          </Text>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg">
                  <Heading as="h3" className="text-lg mb-2 font-semibold">What happens next?</Heading>
                  <ul className="space-y-1 text-sm text-gray-200">
                    <li>• We'll review your requirements within 2-4 hours</li>
                    <li>• Our engineering team will assess feasibility and develop pricing</li>
                    <li>• You'll receive a detailed quote within 24 hours</li>
                    <li>• We may contact you for clarification if needed</li>
                  </ul>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8 border-t border-gray-200">
              <Button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`bg-gray-200 text-gray-700 ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
                iconName="ArrowLeft"
              >
                Previous
              </Button>

              {currentStep < 4 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="cta-gradient text-white hover:scale-105"
                  iconName="ArrowRight"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  isLoading={submitting}
                  className="cta-gradient text-white hover:scale-105"
                  iconName="Send"
                >
                  Submit Quote Request
                </Button>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default QuoteForm;