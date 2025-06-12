import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import ApperIcon from '../components/ApperIcon';
import { quoteService, productService } from '../services';

const RequestQuote = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    // Customer Information
    customerName: '',
    company: '',
    email: '',
    phone: '',
    
    // Project Details
    projectName: '',
    timeline: '',
    budget: '',
    
    // Product Requirements
    products: [{ productId: '', quantity: '', specifications: '' }],
    
    // Additional Requirements
    requirements: '',
    drawings: null,
    certifications: [],
    
    // Delivery
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
        console.error('Failed to load products:', error);
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
      
      // Reset form
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
              Request a Quote
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Get a detailed quote for your manufacturing project. Our team will review 
              your requirements and provide competitive pricing within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-surface border-b border-gray-200 sticky top-16 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                  currentStep >= step.id 
                    ? 'bg-accent border-accent text-white' 
                    : 'border-gray-300 text-gray-400'
                }`}>
                  {currentStep > step.id ? (
                    <ApperIcon name="Check" className="w-5 h-5" />
                  ) : (
                    <ApperIcon name={step.icon} className="w-5 h-5" />
                  )}
                </div>
                <div className="ml-3 hidden md:block">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.id ? 'text-accent' : 'text-gray-500'
                  }`}>
                    Step {step.id}
                  </p>
                  <p className={`text-xs ${
                    currentStep >= step.id ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-accent' : 'bg-gray-300'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Contact Information */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="font-heading text-3xl text-primary mb-2">Contact Information</h2>
                  <p className="text-gray-600">Tell us about yourself and your company</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors ${
                        errors.customerName ? 'border-error' : 'border-gray-300'
                      }`}
                      placeholder="John Smith"
                    />
                    {errors.customerName && (
                      <p className="mt-1 text-sm text-error">{errors.customerName}</p>
                    )}
                  </div>

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
              </motion.div>
            )}

            {/* Step 2: Project Details */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="font-heading text-3xl text-primary mb-2">Project Details</h2>
                  <p className="text-gray-600">Provide information about your project</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Name *
                  </label>
                  <input
                    type="text"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors ${
                      errors.projectName ? 'border-error' : 'border-gray-300'
                    }`}
                    placeholder="Describe your project in a few words"
                  />
                  {errors.projectName && (
                    <p className="mt-1 text-sm text-error">{errors.projectName}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline *
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors ${
                        errors.timeline ? 'border-error' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.timeline && (
                      <p className="mt-1 text-sm text-error">{errors.timeline}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Address
                  </label>
                  <textarea
                    name="deliveryAddress"
                    value={formData.deliveryAddress}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none"
                    placeholder="Delivery address (if different from company address)"
                  />
                </div>
              </motion.div>
            )}

            {/* Step 3: Requirements */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="font-heading text-3xl text-primary mb-2">Requirements</h2>
                  <p className="text-gray-600">Specify your product and service requirements</p>
                </div>

                {/* Products */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Products Required *
                    </label>
                    <button
                      type="button"
                      onClick={addProduct}
                      className="text-accent hover:text-accent/80 font-medium text-sm flex items-center"
                    >
                      <ApperIcon name="Plus" className="w-4 h-4 mr-1" />
                      Add Product
                    </button>
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
                                <button
                                  type="button"
                                  onClick={() => removeProduct(index)}
                                  className="px-2 py-2 bg-error text-white rounded-r hover:bg-error/80 transition-colors"
                                >
                                  <ApperIcon name="X" className="w-4 h-4" />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.products && (
                    <p className="mt-1 text-sm text-error">{errors.products}</p>
                  )}
                </div>

                {/* Requirements */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Detailed Requirements *
                  </label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none ${
                      errors.requirements ? 'border-error' : 'border-gray-300'
                    }`}
                    placeholder="Please provide detailed requirements including:
• Specifications and tolerances
• Materials and finishes required
• Quality standards or certifications needed
• Any special processing requirements
• Quantity requirements and delivery schedule"
                  />
                  {errors.requirements && (
                    <p className="mt-1 text-sm text-error">{errors.requirements}</p>
                  )}
                </div>

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
                        <span className="text-sm text-gray-700">{cert}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Special Instructions */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Instructions
                  </label>
                  <textarea
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none"
                    placeholder="Any special handling, packaging, or delivery instructions..."
                  />
                </div>
              </motion.div>
            )}

            {/* Step 4: Review & Submit */}
            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="font-heading text-3xl text-primary mb-2">Review & Submit</h2>
                  <p className="text-gray-600">Please review your information before submitting</p>
                </div>

                <div className="bg-surface p-6 rounded-lg space-y-6">
                  {/* Contact Info */}
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-3">Contact Information</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div><strong>Name:</strong> {formData.customerName}</div>
                      <div><strong>Company:</strong> {formData.company}</div>
                      <div><strong>Email:</strong> {formData.email}</div>
                      <div><strong>Phone:</strong> {formData.phone || 'Not provided'}</div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-3">Project Details</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div><strong>Project:</strong> {formData.projectName}</div>
                      <div><strong>Timeline:</strong> {timelineOptions.find(t => t.value === formData.timeline)?.label}</div>
                      <div><strong>Budget:</strong> {budgetRanges.find(b => b.value === formData.budget)?.label || 'Not specified'}</div>
                    </div>
                  </div>

                  {/* Products */}
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-3">Products Required</h3>
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
                    <h3 className="font-semibold text-lg text-primary mb-3">Requirements</h3>
                    <p className="text-sm text-gray-700 whitespace-pre-wrap">{formData.requirements}</p>
                  </div>

                  {/* Certifications */}
                  {formData.certifications.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-lg text-primary mb-3">Required Certifications</h3>
                      <div className="flex flex-wrap gap-2">
                        {formData.certifications.map(cert => (
                          <span key={cert} className="bg-accent/10 text-accent px-2 py-1 rounded text-sm">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">What happens next?</h3>
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
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  currentStep === 1 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <ApperIcon name="ArrowLeft" className="w-4 h-4 mr-2 inline" />
                Previous
              </button>

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-3 cta-gradient text-white rounded-lg font-medium hover:scale-105 transition-transform duration-200"
                >
                  Next
                  <ApperIcon name="ArrowRight" className="w-4 h-4 ml-2 inline" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={submitting}
                  className={`px-8 py-3 cta-gradient text-white rounded-lg font-medium transition-all duration-200 ${
                    submitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                  }`}
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2 inline-block"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Quote Request
                      <ApperIcon name="Send" className="w-4 h-4 ml-2 inline" />
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RequestQuote;