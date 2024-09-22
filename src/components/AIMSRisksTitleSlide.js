import React from 'react';
import { AlertTriangle } from 'lucide-react';
import SlideWrapper from './SlideWrapper';

const AIMSRisksTitleSlide = () => (
  <SlideWrapper title="AIMS Project: High-Level Risks and Mitigations">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-red-100 rounded-full p-8 mb-8 shadow-lg">
        <AlertTriangle size={100} className="text-red-600" />
      </div>
      <h2 className="text-4xl font-bold mb-6 text-red-800">Key Risks and Mitigations</h2>
      <p className="text-2xl text-center max-w-3xl text-red-700 mb-8">
        An overview of potential challenges in the AI-Powered Monitoring System (AIMS) and our strategies to address them.
      </p>
    </div>
  </SlideWrapper>
);

export default AIMSRisksTitleSlide;