import React from 'react';
import { Shield } from 'lucide-react';
import SlideWrapper from './SlideWrapper';

const DataPrivacySecuritySlide = () => (
  <SlideWrapper title="Risk 1: Data Privacy and Security">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-blue-100 rounded-full p-8 mb-8 shadow-lg">
        <Shield size={100} className="text-blue-600" />
      </div>
      <h2 className="text-4xl font-bold mb-6 text-blue-800">Data Privacy and Security</h2>
      <p className="text-2xl text-center max-w-3xl text-blue-700 mb-8">
        Protecting sensitive vehicle and occupant data from unauthorized access.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-blue-700">Mitigations:</h3>
        <ul className="list-disc pl-8 text-blue-600 text-xl">
          <li>End-to-end encryption for all data</li>
          <li>Multi-factor authentication for system access</li>
          <li>Regular security audits and penetration testing</li>
          <li>Strict compliance with local data protection laws</li>
        </ul>
      </div>
    </div>
  </SlideWrapper>
);

export default DataPrivacySecuritySlide;