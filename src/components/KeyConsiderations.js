import React from 'react';
import SlideWrapper from './SlideWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faCheckSquare, faUsers, faExclamationTriangle, faChartBar, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const ConsiderationCard = ({ title, description, icon }) => (
  <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 h-38 flex items-center">
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-2 flex items-center">
        <div className="bg-white p-2 rounded-full mr-2">
          <FontAwesomeIcon icon={icon} className="text-green-600" />
        </div>
        {title}
      </h2>
      <p className="text-lg">{description}</p>
    </div>
  </div>
);

const KeyConsiderationsSlide = () => (
  <SlideWrapper title="Key Implementation Considerations">
    <div className="bg-green-50 p-12 max-w-7xl mx-auto rounded-3xl shadow-xl h-[65vh] flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <ConsiderationCard
          title="Iterative Development"
          description="Implement agile methodologies for continuous improvement throughout the project"
          icon={faCog}
        />
        <ConsiderationCard
          title="Extensive Testing"
          description="Allocate sufficient time for thorough testing of AI models and integrated systems"
          icon={faCheckSquare}
        />
        <ConsiderationCard
          title="Stakeholder Management"
          description="Regular communication and alignment with stakeholders to manage expectations"
          icon={faUsers}
        />
        <ConsiderationCard
          title="Regulatory Compliance"
          description="Ensure ongoing compliance with evolving data protection and privacy regulations"
          icon={faExclamationTriangle}
        />
        <ConsiderationCard
          title="Scalability Planning"
          description="Design the system architecture to accommodate future expansion and increased data loads"
          icon={faChartBar}
        />
        <ConsiderationCard
          title="Knowledge Transfer"
          description="Develop comprehensive documentation and training programs for long-term system maintenance"
          icon={faGraduationCap}
        />
      </div>
    </div>
  </SlideWrapper>
);

export default KeyConsiderationsSlide;