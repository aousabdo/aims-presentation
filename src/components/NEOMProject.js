import React from 'react';
import { Globe, Zap, Leaf } from 'lucide-react';
import SlideWrapper from './SlideWrapper';

const NEOMProjectSlide = () => (
  <SlideWrapper title="AIMS Project: NEOM Stakeholders">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-cyan-100 rounded-full p-8 mb-8 shadow-lg">
        <Globe size={100} className="text-cyan-600" />
      </div>
      <h2 className="text-4xl font-bold mb-6 text-cyan-800">NEOM Project</h2>
      <p className="text-2xl text-center max-w-3xl text-cyan-700 mb-8">
        Integrating AIMS with NEOM's futuristic vision for sustainable, AI-driven urban development.
      </p>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <Zap size={24} className="text-cyan-500 mr-2" />
            <span className="text-cyan-700 font-bold">Innovation Hub</span>
          </div>
          <ul className="list-disc pl-6 text-cyan-600">
            <li>$500 billion mega-city project</li>
            <li>Testbed for advanced technologies</li>
            <li>AI-driven urban planning and management</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <Leaf size={24} className="text-cyan-500 mr-2" />
            <span className="text-cyan-700 font-bold">Sustainability Focus</span>
          </div>
          <ul className="list-disc pl-6 text-cyan-600">
            <li>100% renewable energy goal</li>
            <li>Smart mobility solutions</li>
            <li>Environmental conservation initiatives</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <Globe size={24} className="text-cyan-500 mr-2" />
            <span className="text-cyan-700 font-bold">AIMS Integration</span>
          </div>
          <ul className="list-disc pl-6 text-cyan-600">
            <li>Cutting-edge transportation monitoring</li>
            <li>Data-driven decision making</li>
            <li>Seamless integration with smart city infrastructure</li>
          </ul>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

export default NEOMProjectSlide;