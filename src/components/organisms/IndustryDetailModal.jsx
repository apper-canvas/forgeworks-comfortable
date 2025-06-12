import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import ApperIcon from '@/components/ApperIcon';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';

function IndustryDetailModal({ industry, isOpen, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!industry) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white dark:bg-surface-800 rounded-xl shadow-2xl max-h-[80vh] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-surface-200 dark:border-surface-700">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <ApperIcon name="Factory" className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <Heading level="h2" className="text-xl font-semibold text-surface-900 dark:text-surface-100">
                    {industry.Name}
                  </Heading>
                  {industry.Tags && (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {industry.Tags.split(',').map((tag, idx) => (
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
              
              <Button
                variant="ghost"
                onClick={onClose}
                className="p-2 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-lg"
              >
                <ApperIcon name="X" className="w-5 h-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
              {industry.description && (
                <div className="mb-6">
                  <Heading level="h3" className="text-lg font-medium text-surface-900 dark:text-surface-100 mb-3">
                    Industry Overview
                  </Heading>
                  <Text className="text-surface-600 dark:text-surface-400 leading-relaxed whitespace-pre-line">
                    {industry.description}
                  </Text>
                </div>
              )}

              {/* Additional Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-surface-200 dark:border-surface-700">
                {industry.Owner && (
                  <div>
                    <Text className="text-sm font-medium text-surface-900 dark:text-surface-100 mb-1">
                      Industry Owner
                    </Text>
                    <Text className="text-surface-600 dark:text-surface-400">
                      {industry.Owner}
                    </Text>
                  </div>
                )}
                
                {industry.CreatedOn && (
                  <div>
                    <Text className="text-sm font-medium text-surface-900 dark:text-surface-100 mb-1">
                      Added On
                    </Text>
                    <Text className="text-surface-600 dark:text-surface-400">
                      {new Date(industry.CreatedOn).toLocaleDateString()}
                    </Text>
                  </div>
                )}
                
                {industry.ModifiedOn && (
                  <div>
                    <Text className="text-sm font-medium text-surface-900 dark:text-surface-100 mb-1">
                      Last Updated
                    </Text>
                    <Text className="text-surface-600 dark:text-surface-400">
                      {new Date(industry.ModifiedOn).toLocaleDateString()}
                    </Text>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end space-x-3 p-6 border-t border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/50">
              <Button variant="secondary" onClick={onClose}>
                Close
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default IndustryDetailModal;