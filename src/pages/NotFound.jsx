import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import ApperIcon from '../components/ApperIcon';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <ApperIcon name="AlertTriangle" className="w-12 h-12 text-accent" />
          </div>
          
          <h1 className="font-heading text-6xl text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="space-y-4">
            <NavLink
              to="/"
              className="inline-flex items-center cta-gradient text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform duration-200"
            >
              <ApperIcon name="Home" className="w-4 h-4 mr-2" />
              Go Home
            </NavLink>
            
            <div>
              <NavLink
                to="/contact"
                className="text-primary hover:text-accent transition-colors font-medium"
              >
                Contact Support
              </NavLink>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;