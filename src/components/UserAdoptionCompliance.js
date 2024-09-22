import React from 'react';
import { Users } from 'lucide-react';
import SlideWrapper from './SlideWrapper';

const UserAdoptionComplianceSlide = () => (
  <SlideWrapper title="Risk 5: User Adoption and Compliance">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-teal-100 rounded-full p-8 mb-8 shadow-lg">
        <Users size={100} className="text-teal-600" />
      </div>
      <h2 className="text-4xl font-bold mb-6 text-teal-800">User Adoption and Compliance</h2>
      <p className="text-2xl text-center max-w-3xl text-teal-700 mb-8">
        Ensuring high adoption rates and compliance with the AIMS mobile app.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-teal-700">Mitigations:</h3>
        <ul className="list-disc pl-8 text-teal-600 text-xl">
          <li>Develop a user-friendly interface with intuitive design</li>
          <li>Implement incentive programs for app usage</li>
          <li>Provide comprehensive training and support</li>
          <li>Continuous improvement based on user feedback</li>
        </ul>
      </div>
    </div>
  </SlideWrapper>
);

export default UserAdoptionComplianceSlide;