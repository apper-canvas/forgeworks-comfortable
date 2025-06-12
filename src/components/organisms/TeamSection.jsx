import { motion } from 'framer-motion';
import TeamMemberCard from '@/components/molecules/TeamMemberCard';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';

const TeamSection = ({ teamMembers }) => {
  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Heading as="h2" className="text-4xl text-primary mb-4">Leadership Team</Heading>
          <Text as="p" className="text-lg text-gray-600">
            Experienced professionals driving innovation and excellence
          </Text>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;