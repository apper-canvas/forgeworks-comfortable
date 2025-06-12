import HeroSection from '@/components/organisms/HeroSection';
import ContactInfoSection from '@/components/organisms/ContactInfoSection';
import ContactForm from '@/components/organisms/ContactForm';
import LocationInfo from '@/components/organisms/LocationInfo';

const ContactPage = () => {
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

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Contact Us"
        subtitle="Ready to discuss your manufacturing needs? Our team of experts is here to help you find the perfect solution for your project requirements."
      />
      <ContactInfoSection contactInfo={contactInfo} />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <LocationInfo />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;