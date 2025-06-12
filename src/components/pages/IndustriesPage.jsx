import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import ApperIcon from '@/components/ApperIcon';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';
import Input from '@/components/atoms/Input';
import IndustryCard from '@/components/molecules/IndustryCard';
import IndustryDetailModal from '@/components/organisms/IndustryDetailModal';
import { industryService } from '@/services';

function IndustriesPage() {
  const [industries, setIndustries] = useState([]);
  const [filteredIndustries, setFilteredIndustries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    loadIndustries();
  }, []);

  useEffect(() => {
    filterIndustries();
  }, [industries, searchTerm]);

  const loadIndustries = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await industryService.getAll();
      setIndustries(data || []);
    } catch (err) {
      setError(err.message);
      toast.error('Failed to load industries');
      console.error('Error loading industries:', err);
    } finally {
      setLoading(false);
    }
  };

  const filterIndustries = () => {
    if (!searchTerm) {
      setFilteredIndustries(industries);
      return;
    }

    const filtered = industries.filter(industry =>
      industry.Name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      industry.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      industry.Tags?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredIndustries(filtered);
  };

  const handleIndustryClick = (industry) => {
    setSelectedIndustry(industry);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedIndustry(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-surface-50 dark:bg-surface-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <Text>Loading industries...</Text>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-surface-50 dark:bg-surface-900 flex items-center justify-center">
        <div className="text-center">
          <ApperIcon name="AlertCircle" className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <Text className="text-red-600 dark:text-red-400">{error}</Text>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface-50 dark:bg-surface-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Heading level="h1" className="text-4xl md:text-5xl font-bold mb-6">
              Industries We Serve
            </Heading>
            <Text className="text-xl text-white/90 max-w-3xl mx-auto">
              ForgeWorks Pro delivers precision manufacturing solutions across diverse industries, 
              bringing expertise and innovation to every sector we serve.
            </Text>
          </motion.div>
        </div>
      </section>

      {/* Search and Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="max-w-md mx-auto">
              <div className="relative">
                <ApperIcon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-surface-400" />
                <Input
                  type="text"
                  placeholder="Search industries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Industries Grid */}
          {filteredIndustries.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredIndustries.map((industry, index) => (
                <IndustryCard
                  key={industry.Id || index}
                  industry={industry}
                  index={index}
                  onClick={handleIndustryClick}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center py-12"
            >
              <ApperIcon name="Factory" className="w-16 h-16 text-surface-300 dark:text-surface-600 mx-auto mb-4" />
              <Heading level="h3" className="text-xl font-semibold text-surface-700 dark:text-surface-300 mb-2">
                {searchTerm ? 'No industries found' : 'No industries available'}
              </Heading>
              <Text className="text-surface-500 dark:text-surface-400">
                {searchTerm 
                  ? 'Try adjusting your search terms or browse all industries.' 
                  : 'Check back later for industry information.'}
              </Text>
            </motion.div>
          )}
        </div>
      </section>

      {/* Industry Detail Modal */}
      <IndustryDetailModal
        industry={selectedIndustry}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default IndustriesPage;