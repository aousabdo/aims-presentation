import React from 'react';
import SlideWrapper from './SlideWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck, faTruck, faServer, faCode, faCog, faUsers, faWrench } from '@fortawesome/free-solid-svg-icons';

const PhaseCard = ({ phase, title, duration, icon }) => (
  <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 h-28 flex items-center">
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-2 flex items-center">
        <div className="bg-white p-2 rounded-full mr-2">
          <FontAwesomeIcon icon={icon} className="text-green-600" />
        </div>
        Phase {phase}: {title}
      </h2>
      <p className="text-xl">Duration: {duration}</p>
    </div>
  </div>
);

const ImplementationStrategyOneSlide = () => (
  <SlideWrapper title="AIMS Implementation Strategy">
    <div className="bg-green-50 p-12 max-w-7xl mx-auto rounded-3xl shadow-xl h-[65vh] flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <PhaseCard phase={1} title="Assessment and Planning" duration="6 months" icon={faClipboardCheck} />
        <PhaseCard phase={2} title="Pilot Deployment" duration="6 months" icon={faTruck} />
        <PhaseCard phase={3} title="Infrastructure Setup" duration="12 months" icon={faServer} />
        <PhaseCard phase={4} title="Software Development" duration="18 months" icon={faCode} />
        <PhaseCard phase={5} title="System Integration" duration="6 months" icon={faCog} />
        <PhaseCard phase={6} title="Training and Calibration" duration="6 months" icon={faUsers} />
        <PhaseCard phase={7} title="Full-Scale Rollout" duration="6 months" icon={faTruck} />
        <PhaseCard phase={8} title="Maintenance and Support" duration="Ongoing" icon={faWrench} />
      </div>
    </div>
  </SlideWrapper>
);

export default ImplementationStrategyOneSlide;