import { motion } from 'framer-motion';
import CapabilityItem from '@/components/molecules/CapabilityItem';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';

const EquipmentSection = ({ equipmentData }) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Heading as="h2" className="text-4xl text-primary mb-4">Manufacturing Equipment</Heading>
          <Text as="p" className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our facility houses advanced machinery capable of handling complex projects
            with precision and efficiency.
          </Text>
        </motion.div>

        <div className="space-y-12">
          {equipmentData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <Heading as="h3" className="text-2xl text-primary mb-6 industrial-line pl-4">
                {category.category}
              </Heading>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <CapabilityItem 
                    key={item.name} 
                    item={item} 
                    index={itemIndex} 
                    categoryIndex={categoryIndex} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;