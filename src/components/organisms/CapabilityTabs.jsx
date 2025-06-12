import { useState } from 'react';
import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import CategoryFilter from '@/components/molecules/CategoryFilter';
import EquipmentSection from './EquipmentSection';
import ProcessesSection from './ProcessesSection';
import CapacitySection from './CapacitySection';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';

const CapabilityTabs = ({ capabilities }) => {
  const [activeTab, setActiveTab] = useState('equipment');

  const tabs = [
    { id: 'equipment', label: 'Equipment', icon: 'Settings' },
    { id: 'processes', label: 'Processes', icon: 'Cog' },
    { id: 'capacity', label: 'Capacity', icon: 'BarChart3' }
  ];

  return (
    &lt;&gt;
      &lt;section className="py-8 bg-surface border-b border-gray-200 sticky top-16 z-30"&gt;
        &lt;div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"&gt;
          &lt;div className="flex justify-center"&gt;
            &lt;div className="bg-white rounded-lg p-1 shadow-md flex"&gt;
              {tabs.map((tab) => (
                &lt;button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-accent text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                &gt;
                  &lt;ApperIcon name={tab.icon} className="w-4 h-4 mr-2" /&gt;
                  {tab.label}
                &lt;/button&gt;
              ))}
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {activeTab === 'equipment' && (
        &lt;EquipmentSection equipmentData={capabilities.equipment} /&gt;
      )}

      {activeTab === 'processes' && (
        &lt;ProcessesSection processesData={capabilities.processes} /&gt;
      )}

      {activeTab === 'capacity' && (
        &lt;CapacitySection capacityData={capabilities.capacity} /&gt;
      )}
    &lt;/&gt;
  );
};

export default CapabilityTabs;