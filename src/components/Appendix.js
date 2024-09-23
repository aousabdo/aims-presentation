import React from 'react';
import SlideWrapper from './SlideWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faExclamationTriangle, faUsers, faHandshake } from '@fortawesome/free-solid-svg-icons';

const AppendixSlide = () => {
  return (
    <SlideWrapper title="Appendix">
      <div className="bg-green-50 p-12 max-w-7xl mx-auto rounded-3xl shadow-xl h-[65vh] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 h-48 flex items-center">
            <h2 className="text-3xl font-semibold flex items-center">
              <FontAwesomeIcon icon={faFileAlt} className="mr-2 text-blue-600" />
              Detailed slides to support our solution
            </h2>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 h-48 flex items-center">
            <h2 className="text-3xl font-semibold flex items-center">
              <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2 text-red-600" />
              High-level risks and mitigations
            </h2>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 h-48 flex items-center">
            <h2 className="text-3xl font-semibold flex items-center">
              <FontAwesomeIcon icon={faUsers} className="mr-2 text-green-600" />
              Project team
            </h2>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 h-48 flex items-center">
            <h2 className="text-3xl font-semibold flex items-center">
              <FontAwesomeIcon icon={faHandshake} className="mr-2 text-yellow-600" />
              Main stakeholders and providers
            </h2>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default AppendixSlide;