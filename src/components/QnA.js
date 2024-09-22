import React from 'react';
import { MessageCircle, HelpCircle, Users } from 'lucide-react';
import SlideWrapper from './SlideWrapper';

const QASlide = () => (
  <SlideWrapper title="Q&A">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-green-100 rounded-full p-8 mb-8 shadow-lg">
        <MessageCircle size={100} className="text-green-600" />
      </div>
      <h2 className="text-4xl font-bold mb-6 text-green-800">We're Here to Help</h2>
      <p className="text-2xl text-center max-w-3xl text-green-700 mb-8">
        Thank you for your attention. We welcome any questions you may have about the AI-Powered Monitoring System (AIMS) or Analytica's capabilities.
      </p>
      <div className="flex space-x-8">
        <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
          <HelpCircle size={24} className="text-green-500 mr-2" />
          <span className="text-green-700">Ask about AIMS</span>
        </div>
        <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
          <Users size={24} className="text-green-500 mr-2" />
          <span className="text-green-700">Learn about Analytica</span>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

export default QASlide;