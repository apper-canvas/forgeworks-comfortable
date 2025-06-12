import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const Button = ({ 
  children, 
  onClick, 
  className = '', 
  type = 'button', 
  disabled = false, 
  isLoading = false,
  iconName,
  ...restProps 
}) => {
  const commonClasses = 'px-6 py-3 rounded-lg font-medium transition-all duration-200';
  const loadingClasses = 'opacity-50 cursor-not-allowed';

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      whileHover={{ scale: (disabled || isLoading) ? 1 : 1.02 }}
      whileTap={{ scale: (disabled || isLoading) ? 1 : 0.98 }}
      className={`${commonClasses} ${className} ${isLoading ? loadingClasses : ''}`}
      {...restProps}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
          Loading...
        </div>
      ) : (
        <div className="flex items-center justify-center">
          {children}
          {iconName && <ApperIcon name={iconName} className="w-4 h-4 ml-2 inline" />}
        </div>
      )}
    </motion.button>
  );
};

export default Button;