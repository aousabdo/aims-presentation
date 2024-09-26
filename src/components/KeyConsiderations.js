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



  const RevisedKeyConsiderationsSlide = () => (
    <SlideWrapper title="Key Implementation Considerations">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Iterative Development" icon={Cog}>
          <p className="text-lg">Implement agile methodologies for continuous improvement throughout the project</p>
        </Card>
        <Card title="Extensive Testing" icon={CheckSquare}>
          <p className="text-lg">Allocate sufficient time for thorough testing of AI models and integrated systems</p>
        </Card>
        <Card title="Stakeholder Management" icon={Users}>
          <p className="text-lg">Regular communication and alignment with stakeholders to manage expectations</p>
        </Card>
        <Card title="Regulatory Compliance" icon={AlertTriangle}>
          <p className="text-lg">Ensure ongoing compliance with evolving data protection and privacy regulations</p>
        </Card>
        <Card title="Scalability Planning" icon={BarChart2}>
          <p className="text-lg">Design the system architecture to accommodate future expansion and increased data loads</p>
        </Card>
        <Card title="Knowledge Transfer" icon={Users}>
          <p className="text-lg">Develop comprehensive documentation and training programs for long-term system maintenance</p>
        </Card>
      </div>
    </SlideWrapper>
  );

  export default RevisedKeyConsiderationsSlide;