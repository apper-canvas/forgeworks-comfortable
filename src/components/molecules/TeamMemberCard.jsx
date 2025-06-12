import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';

const TeamMemberCard = ({ member, index }) => {
  return (
    <motion.div
      key={member.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-md text-center"
    >
      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <ApperIcon name={member.icon} className="w-10 h-10 text-primary" />
      </div>
      <Heading as="h3" className="text-lg text-primary mb-1 font-semibold">{member.name}</Heading>
      <Text as="p" className="text-accent font-medium mb-2">{member.role}</Text>
      <Text as="p" className="text-sm text-gray-600">{member.experience}</Text>
    </motion.div>
  );
};

export default TeamMemberCard;