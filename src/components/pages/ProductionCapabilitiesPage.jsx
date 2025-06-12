import { useState } from 'react';
import HeroSection from '@/components/organisms/HeroSection';
import CapabilityTabs from '@/components/organisms/CapabilityTabs';

const ProductionCapabilitiesPage = () => {
  const capabilities = {
    equipment: [
      {
        category: 'CNC Machining Centers',
        items: [
          { name: 'Haas VF-4SS 5-Axis', specs: 'Travel: 50" x 20" x 25", ±0.0001" accuracy' },
          { name: 'Mazak Integrex i-400', specs: 'Multi-tasking, 15" max diameter, Y-axis capability' },
          { name: 'DMG Mori NLX 2500', specs: '10" chuck, 25" max length, live tooling' },
          { name: 'Okuma Genos M560-V', specs: 'Vertical machining, 40 ATC, high-speed spindle' }
        ]
      },
      {
        category: 'Fabrication Equipment',
        items: [
          { name: 'Trumpf TruLaser 3030', specs: '6kW fiber laser, 1.5" max thickness' },
          { name: 'Amada HFE 170-4 Press Brake', specs: '187 ton capacity, 12\' bending length' },
          { name: 'Lincoln Electric Invertec V350-PRO', specs: 'TIG/Stick welding, pulse capability' },
          { name: 'Miller Dynasty 350 AC/DC', specs: 'Aluminum welding specialist' }
        ]
      },
      {
        category: 'Quality Inspection',
        items: [
          { name: 'Zeiss Contura G2 CMM', specs: 'RDS articulating probe head, PC-DMIS software' },
          { name: 'Keyence IM-8000 Series', specs: '3D profile measurement, ±0.1μm accuracy' },
          { name: 'Starrett Sigma Force Tester', specs: 'Material testing, 5000 lbf capacity' },
          { name: 'Olympus EPOCH 650 UT', specs: 'Ultrasonic flaw detection' }
        ]
      }
    ],
    
    processes: [
      {
        name: 'CNC Machining',
        description: 'Precision 3, 4, and 5-axis machining with tolerances to ±0.0001"',
        capabilities: [
          'Complex geometries and contours',
          'High-speed machining for production runs',
          'Multi-axis simultaneous machining',
          'In-process inspection and adjustment'
        ],
        materials: ['Aluminum alloys', 'Stainless steel', 'Carbon steel', 'Titanium', 'Inconel', 'Plastics']
      },
      {
        name: 'Metal Fabrication',
        description: 'Complete fabrication services from cutting to finishing',
        capabilities: [
          'Laser cutting up to 1.5" thickness',
          'Precision bending and forming',
          'TIG/MIG welding all positions',
          'Assembly and sub-assembly'
        ],
        materials: ['Sheet metal', 'Plate steel', 'Aluminum', 'Stainless steel', 'Exotic alloys']
      },
      {
        name: 'Quality Assurance',
        description: 'Comprehensive inspection and testing throughout production',
        capabilities: [
          'CMM inspection and reporting',
          'First article inspection (FAI)',
          'Material certification tracking',
          'Non-destructive testing (NDT)'
        ],
        materials: ['All manufactured components', 'Incoming materials', 'Finished assemblies']
      }
    ],

    capacity: [
      {
        metric: 'Production Volume',
        value: '10,000+ parts/month',
        description: 'Scalable from prototype to production quantities'
      },
      {
        metric: 'Facility Size',
        value: '45,000 sq ft',
        description: 'Climate-controlled manufacturing environment'
      },
      {
        metric: 'Machine Hours',
        value: '24/7 operation',
        description: 'Lights-out machining capability for high-volume orders'
      },
      {
        metric: 'Lead Times',
        value: '2-8 weeks typical',
        description: 'Expedited service available for critical projects'
      },
      {
        metric: 'Material Handling',
        value: '50,000 lbs',
        description: 'Overhead crane capacity for large assemblies'
      },
      {
        metric: 'Part Size Range',
        value: '0.1" to 120"',
        description: 'From miniature components to large structures'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Production Capabilities"
        subtitle="State-of-the-art equipment and advanced manufacturing processes deliver precision components that meet the most demanding specifications."
      />
      <CapabilityTabs capabilities={capabilities} />
    </div>
  );
};

export default ProductionCapabilitiesPage;