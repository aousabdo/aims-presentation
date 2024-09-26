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
  
  // const PhaseCard = ({ phase, title, duration, icon: Icon }) => (
  //   <Card title={`Phase ${phase}: ${title}`} icon={Icon}>
  //     <p className="text-lg">Duration: {duration}</p>
  //   </Card>
  // );

  const PhaseCard = ({ phase, title, duration, icon: Icon }) => (
    <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 h-22 flex items-center">
      <div className="w-full">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <Icon size={24} className="mr-2" />
          Phase {phase}: {title}
        </h2>
        <p className="text-lg">Duration: {duration}</p>
      </div>
    </div>
  );


  const TimelineSlide = () => (
    <SlideWrapper title="AIMS Implementation Timeline">
      <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 h-22 flex items-center">
        <div className="w-full">
          <h2 className="text-2xl font-semibold mb-2 flex items-center">
            <Calendar size={24} className="mr-2" />
            Project Duration
          </h2>
          <p className="text-2xl font-bold text-green-600 mb-2">24 months (2 years)</p>
          <p className="text-lg">From initial assessment to full-scale rollout completion</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 h-22 flex items-center">
          <div className="w-full">
            <h2 className="text-2xl font-semibold mb-2 flex items-center">
              <CheckSquare size={24} className="mr-2" />
              Key Milestones
            </h2>
            <ul className="list-disc list-inside text-lg">
              <li>Pilot deployment completion: Month 7</li>
              <li>Infrastructure setup completion: Month 12</li>
              <li>Software development completion: Month 19</li>
              <li>System integration completion: Month 22</li>
              <li>Full-scale rollout completion: Month 24</li>
            </ul>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 h-22 flex items-center">
          <div className="w-full">
            <h2 className="text-2xl font-semibold mb-2 flex items-center">
              <AlertTriangle size={24} className="mr-2" />
              Critical Path and Potential Delays
            </h2>
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
          </div>
        </div>
      </div>
    </SlideWrapper>
  );

  export default TimelineSlide;