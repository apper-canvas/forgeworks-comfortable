import HeroSection from '@/components/organisms/HeroSection';
import QuoteForm from '@/components/organisms/QuoteForm';

const RequestQuotePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Request a Quote"
        subtitle="Get a detailed quote for your manufacturing project. Our team will review your requirements and provide competitive pricing within 24 hours."
      />
      <QuoteForm />
    </div>
  );
};

export default RequestQuotePage;