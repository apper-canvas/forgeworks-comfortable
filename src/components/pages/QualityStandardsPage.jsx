import HeroSection from '@/components/organisms/HeroSection';
import QualityMetricsSection from '@/components/organisms/QualityMetricsSection';
import CertificationsDetailSection from '@/components/organisms/CertificationsDetailSection';
import QualityProcessSection from '@/components/organisms/QualityProcessSection';
import QualityCommitmentSection from '@/components/organisms/QualityCommitmentSection';

const QualityStandardsPage = () => {
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
      <HeroSection
        title="Quality Standards"
        subtitle="Our commitment to excellence is demonstrated through rigorous quality management systems and industry-leading certifications that ensure consistent, reliable results."
      />
      <QualityMetricsSection metrics={qualityMetrics} />
      <CertificationsDetailSection certifications={certifications} />
      <QualityProcessSection processSteps={qualityProcess} />
      <QualityCommitmentSection />
    </div>
  );
};

export default QualityStandardsPage;