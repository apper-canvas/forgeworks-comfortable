import ContactInfoCard from '@/components/molecules/ContactInfoCard';

const ContactInfoSection = ({ contactInfo }) => {
  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <ContactInfoCard key={info.title} info={info} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;