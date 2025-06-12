import HeroSection from '@/components/organisms/HeroSection';
import MissionVisionSection from '@/components/organisms/MissionVisionSection';
import ValuesSection from '@/components/organisms/ValuesSection';
import TimelineSection from '@/components/organisms/TimelineSection';
import TeamSection from '@/components/organisms/TeamSection';

const AboutPage = () => {
  const values = [
    {
      icon: 'Target',
      title: 'Precision',
      description: 'Every component meets exact specifications with tolerances that exceed industry standards.'
    },
    {
      icon: 'Clock',
      title: 'Reliability',
      description: 'On-time delivery and consistent quality you can depend on for critical projects.'
    },
    {
      icon: 'Users',
      title: 'Partnership',
      description: 'We work closely with clients to understand their needs and exceed expectations.'
    },
    {
      icon: 'Lightbulb',
      title: 'Innovation',
      description: 'Continuous investment in technology and processes to stay ahead of industry demands.'
    }
  ];

  const timeline = [
    { year: '1999', event: 'Founded ForgeWorks Pro with a focus on precision machining' },
    { year: '2005', event: 'Achieved ISO 9001 certification and expanded facility' },
    { year: '2010', event: 'Added aerospace capabilities with AS9100 certification' },
    { year: '2015', event: 'Invested in advanced 5-axis CNC technology' },
    { year: '2020', event: 'Implemented Industry 4.0 solutions and IoT monitoring' },
    { year: '2024', event: 'Celebrating 25 years of manufacturing excellence' }
  ];

  const teamMembers = [
    {
      name: 'Michael Rodriguez',
      role: 'President & CEO',
      experience: '25+ years in manufacturing',
      icon: 'User'
    },
    {
      name: 'Sarah Chen',
      role: 'VP of Operations',
      experience: '20+ years in quality management',
      icon: 'User'
    },
    {
      name: 'David Thompson',
      role: 'Chief Technology Officer',
      experience: '18+ years in advanced manufacturing',
      icon: 'User'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="About ForgeWorks Pro"
        subtitle="For over 25 years, we've been at the forefront of precision manufacturing, combining traditional craftsmanship with cutting-edge technology to deliver exceptional results for our clients."
      />
      <MissionVisionSection />
      <ValuesSection values={values} />
      <TimelineSection timeline={timeline} />
      <TeamSection teamMembers={teamMembers} />
    </div>
  );
};

export default AboutPage;