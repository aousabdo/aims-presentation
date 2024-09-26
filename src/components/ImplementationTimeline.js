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


  const TimelineSlide = () => (
    <SlideWrapper title="AIMS Implementation Timeline">
      <Card title="Project Duration" icon={Calendar}>
        <p className="text-2xl font-bold text-green-600 mb-2">24 months (2 years)</p>
        <p className="text-lg">From initial assessment to full-scale rollout completion</p>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card title="Key Milestones" icon={CheckSquare}>
          <ul className="list-disc list-inside">
            <li>Pilot deployment completion: Month 7</li>
            <li>Infrastructure setup completion: Month 12</li>
            <li>Software development completion: Month 19</li>
            <li>System integration completion: Month 22</li>
            <li>Full-scale rollout completion: Month 24</li>
          </ul>
        </Card>
        <Card title="Critical Path and Potential Delays" icon={AlertTriangle}>
          <p className="text-lg">Critical path includes:</p>
          <ul className="list-disc list-inside">
            <li>Infrastructure setup</li>
            <li>Software development</li>
            <li>System integration</li>
          </ul>
          <p className="text-lg mt-2">Potential delays may occur due to:</p>
          <ul className="list-disc list-inside">
            <li>Complex AI model development and training</li>
            <li>Integration challenges with existing systems</li>
            <li>Regulatory approval processes</li>
          </ul>
        </Card>
      </div>
    </SlideWrapper>
  );

  export default TimelineSlide;