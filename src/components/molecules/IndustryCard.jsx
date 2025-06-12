import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';
import { useState } from 'react';

function IndustryCard({ industry, index, onClick }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpanded = (e) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const getPreviewText = (text, maxLength = 120) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-surface-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
      onClick={() => onClick && onClick(industry)}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <ApperIcon name="Factory" className="w-6 h-6 text-primary" />
            </div>
            <div>
              <Heading level="h3" className="text-lg font-semibold text-surface-900 dark:text-surface-100 group-hover:text-primary transition-colors">
                {industry.Name}
              </Heading>
              {industry.Tags && (
                <div className="flex flex-wrap gap-1 mt-1">
                  {industry.Tags.split(',').slice(0, 2).map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 text-xs bg-surface-100 dark:bg-surface-700 text-surface-600 dark:text-surface-300 rounded-full"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {industry.description && (
          <div className="space-y-2">
            <Text className="text-surface-600 dark:text-surface-400 leading-relaxed">
              {isExpanded ? industry.description : getPreviewText(industry.description)}
            </Text>
            
            {industry.description.length > 120 && (
              <button
                onClick={toggleExpanded}
                className="text-primary hover:text-primary-dark text-sm font-medium transition-colors"
              >
                {isExpanded ? 'Read less' : 'Read more'}
              </button>
            )}
          </div>
        )}
        
        <div className="mt-4 pt-4 border-t border-surface-200 dark:border-surface-700">
          <div className="flex items-center justify-between text-sm text-surface-500 dark:text-surface-400">
            <span>Click to view details</span>
            <ApperIcon name="ArrowRight" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default IndustryCard;