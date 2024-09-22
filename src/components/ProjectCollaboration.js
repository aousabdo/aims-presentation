import React from 'react';
import { Users, Target, Heart } from 'lucide-react';
import SlideWrapper from './SlideWrapper';

const ProjectCollaborationSlide = () => (
  <SlideWrapper title="AIMS Project: Collaboration and Partnership">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-green-100 rounded-full p-8 mb-8 shadow-lg">
        <Users size={100} className="text-green-600" />
      </div>
      <h2 className="text-4xl font-bold mb-6 text-green-800">Collaborative Excellence</h2>
      <p className="text-2xl text-center max-w-3xl text-green-700 mb-8">
        Partnering with Method to ensure project success and client satisfaction.
      </p>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Target size={32} className="text-green-500 mr-3" />
            <h3 className="text-2xl font-bold text-green-700">Project Management</h3>
          </div>
          <ul className="list-disc pl-8 text-green-600 text-xl">
            <li>Agile methodology implementation</li>
            <li>Risk management and mitigation</li>
            <li>Timeline and resource optimization</li>
            <li>Seamless communication channels</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Heart size={32} className="text-green-500 mr-3" />
            <h3 className="text-2xl font-bold text-green-700">Client Happiness</h3>
          </div>
          <ul className="list-disc pl-8 text-green-600 text-xl">
            <li>Regular client feedback integration</li>
            <li>Tailored solutions to client needs</li>
            <li>Transparent progress reporting</li>
            <li>Post-implementation support</li>
          </ul>
        </div>
      </div>
      <p className="text-xl text-center max-w-3xl text-green-700 mt-8">
        Together, Analytica and Method deliver a powerful combination of technical expertise and project management excellence.
      </p>
    </div>
  </SlideWrapper>
);

export default ProjectCollaborationSlide;