import { motion } from 'framer-motion';
import StatCard from '@/components/molecules/StatCard';

const StatsSection = ({ stats }) => {
  return (
    <section className="py-16 bg-white industrial-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;