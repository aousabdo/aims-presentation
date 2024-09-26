import React from 'react';
import { Camera, Shield, Car, Brain, Database, Cloud } from 'lucide-react';
import SlideWrapper from './SlideWrapper';
import { Calendar, CheckSquare, AlertTriangle, Clock, Users, Server, Code, Cog, Truck, Wrench, BarChart2 } from 'lucide-react';

const Card = ({ title, children, icon: Icon }) => (
    <div className="bg-white shadow-md rounded-lg p-4 duration-300 hover:shadow-2xl hover:scale-105">
      <h2 className="text-xl font-semibold mb-2 flex items-center">
        <Icon size={24} className="mr-2" />
        {title}
      </h2>
      {children}
    </div>
  );
  
  const PhaseCard = ({ phase, title, duration, icon: Icon }) => (
    <Card title={`Phase ${phase}: ${title}`} icon={Icon}>
      <p className="text-lg">Duration: {duration}</p>
    </Card>
  );
  


const ImplementationStrategyOneSlide = () => (
    <SlideWrapper title="AIMS Implementation Strategy">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PhaseCard phase={1} title="Assessment and Planning" duration="3 months" icon={CheckSquare} />
        <PhaseCard phase={2} title="Pilot Deployment" duration="4 months" icon={Truck} />
        <PhaseCard phase={3} title="Infrastructure Setup" duration="5 months" icon={Server} />
        <PhaseCard phase={4} title="Software Development" duration="12 months" icon={Code} />
        <PhaseCard phase={5} title="System Integration" duration="6 months" icon={Cog} />
        <PhaseCard phase={6} title="Training and Calibration" duration="3 months" icon={Users} />
        <PhaseCard phase={7} title="Full-Scale Rollout" duration="5 months" icon={Truck} />
        <PhaseCard phase={8} title="Maintenance and Support" duration="Ongoing" icon={Wrench} />
      </div>
    </SlideWrapper>
  );

  export default ImplementationStrategyOneSlide;