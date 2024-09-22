import React from 'react';
import { Users, Brain, Shield } from 'lucide-react';
import SlideWrapper from './SlideWrapper';

const AnalyticaTeamSlide = () => (
  <SlideWrapper title="AIMS Project: Analytica's Expert Team">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-blue-100 rounded-full p-8 mb-8 shadow-lg">
        <Users size={100} className="text-blue-600" />
      </div>
      <h2 className="text-4xl font-bold mb-6 text-blue-800">Analytica's PhD Team of Specialists</h2>
      <p className="text-2xl text-center max-w-3xl text-blue-700 mb-8">
        Our diverse team of experts brings cutting-edge knowledge to the AIMS project.
      </p>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <Brain size={24} className="text-blue-500 mr-2" />
            <span className="text-blue-700 font-bold">AI and Data Scientists</span>
          </div>
          <ul className="list-disc pl-6 text-blue-600">
            <li>Advanced machine learning algorithms</li>
            <li>Computer vision specialists</li>
            <li>Natural language processing experts</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <Shield size={24} className="text-blue-500 mr-2" />
            <span className="text-blue-700 font-bold">Cybersecurity Specialists</span>
          </div>
          <ul className="list-disc pl-6 text-blue-600">
            <li>Network security experts</li>
            <li>Encryption and data protection</li>
            <li>Threat detection and prevention</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <Users size={24} className="text-blue-500 mr-2" />
            <span className="text-blue-700 font-bold">Domain Experts</span>
          </div>
          <ul className="list-disc pl-6 text-blue-600">
            <li>Transportation systems specialists</li>
            <li>Human behavior analysts</li>
            <li>Privacy and compliance experts</li>
          </ul>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

export default AnalyticaTeamSlide;