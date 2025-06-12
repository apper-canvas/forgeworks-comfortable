import { useState } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import { routeArray } from '@/config/routes';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <NavLink to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <ApperIcon name="Zap" className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-heading text-xl text-primary">ForgeWorks Pro</h1>
                <p className="text-xs text-gray-500">Precision Manufacturing</p>
              </div>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {routeArray.map(route => (
                <NavLink
                  key={route.id}
                  to={route.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium transition-all duration-200 relative ${
                      isActive
                        ? 'text-primary border-b-2 border-accent'
                        : 'text-gray-700 hover:text-primary hover:border-b-2 hover:border-accent/50'
                    }`
                  }
                >
                  {route.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <NavLink
                to="/quote"
                className="cta-gradient text-white px-4 py-2 rounded-md text-sm font-medium hover:scale-105 transition-transform duration-200"
              >
                Get Quote
              </NavLink>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors duration-200"
            >
              <ApperIcon name={isMobileMenuOpen ? "X" : "Menu"} className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40"
                onClick={toggleMobileMenu}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed top-16 right-0 bottom-0 w-64 bg-white shadow-xl z-50 overflow-y-auto"
              >
                <div className="p-4 space-y-4">
                  {routeArray.map(route => (
                    <NavLink
                      key={route.id}
                      to={route.path}
                      onClick={toggleMobileMenu}
                      className={({ isActive }) =>
                        `block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                          isActive
                            ? 'text-primary bg-accent/10'
                            : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                        }`
                      }
                    >
                      {route.label}
                    </NavLink>
                  ))}
                  <div className="pt-4 border-t border-gray-200">
                    <NavLink
                      to="/quote"
                      onClick={toggleMobileMenu}
                      className="block w-full cta-gradient text-white px-4 py-2 rounded-md text-center font-medium"
                    >
                      Get Quote
                    </NavLink>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="min-h-screen">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <ApperIcon name="Zap" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-xl">ForgeWorks Pro</h3>
                  <p className="text-sm text-gray-300">Precision Manufacturing</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Leading the industry in precision manufacturing with over 20 years of experience. 
                We deliver quality components that exceed expectations.
              </p>
              <div className="flex space-x-4">
                <ApperIcon name="Linkedin" className="w-5 h-5 text-gray-300 hover:text-accent cursor-pointer transition-colors" />
                <ApperIcon name="Twitter" className="w-5 h-5 text-gray-300 hover:text-accent cursor-pointer transition-colors" />
                <ApperIcon name="Facebook" className="w-5 h-5 text-gray-300 hover:text-accent cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {routeArray.slice(0, 4).map(route => (
                  <li key={route.id}>
                    <NavLink 
                      to={route.path} 
                      className="text-gray-300 hover:text-accent transition-colors"
                    >
                      {route.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-2">
                  <ApperIcon name="Phone" className="w-4 h-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ApperIcon name="Mail" className="w-4 h-4" />
                  <span>info@forgeworkspro.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ApperIcon name="MapPin" className="w-4 h-4" />
                  <span>123 Industrial Ave<br />Manufacturing District, MD 12345</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 ForgeWorks Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;