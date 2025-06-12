import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';

const LocationInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <Heading as="h2" className="text-3xl text-primary mb-6">Visit Our Facility</Heading>
      
      {/* Map Placeholder */}
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-64 mb-6 flex items-center justify-center">
        <div className="text-center">
          <ApperIcon name="MapPin" className="w-12 h-12 text-gray-400 mx-auto mb-2" />
          <Text as="p" className="text-gray-600">Interactive Map</Text>
          <Text as="p" className="text-sm text-gray-500">123 Industrial Avenue</Text>
        </div>
      </div>

      {/* Facility Info */}
      <div className="bg-surface p-6 rounded-lg mb-6">
        <Heading as="h3" className="text-lg text-primary mb-4 font-semibold">Facility Tours Available</Heading>
        <Text as="p" className="text-gray-600 mb-4">
          We welcome visitors to tour our 45,000 sq ft manufacturing facility.
          See our advanced equipment and quality processes in action.
        </Text>
        <ul className="space-y-2">
          <li className="flex items-center">
            <ApperIcon name="Check" className="w-4 h-4 text-success mr-3" />
            <Text as="span" className="text-gray-700">Advanced CNC machining centers</Text>
          </li>
          <li className="flex items-center">
            <ApperIcon name="Check" className="w-4 h-4 text-success mr-3" />
            <Text as="span" className="text-gray-700">Quality inspection laboratory</Text>
          </li>
          <li className="flex items-center">
            <ApperIcon name="Check" className="w-4 h-4 text-success mr-3" />
            <Text as="span" className="text-gray-700">Clean manufacturing environment</Text>
          </li>
          <li className="flex items-center">
            <ApperIcon name="Check" className="w-4 h-4 text-success mr-3" />
            <Text as="span" className="text-gray-700">Meeting rooms for project discussions</Text>
          </li>
        </ul>
      </div>

      {/* Emergency Contact */}
      <div className="bg-gradient-to-r from-accent/10 to-accent/5 p-6 rounded-lg border-l-4 border-accent">
        <div className="flex items-center mb-2">
          <ApperIcon name="AlertCircle" className="w-5 h-5 text-accent mr-2" />
          <Heading as="h3" className="text-accent font-semibold">Emergency Support</Heading>
        </div>
        <Text as="p" className="text-gray-700 text-sm mb-2">
          For urgent production issues or quality concerns:
        </Text>
        <Text as="p" className="font-medium text-gray-900">(555) 123-4567 ext. 911</Text>
        <Text as="p" className="text-sm text-gray-600">Available 24/7 for existing customers</Text>
      </div>
    </motion.div>
  );
};

export default LocationInfo;