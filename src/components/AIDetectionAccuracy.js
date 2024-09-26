import React from 'react';
import { Brain } from 'lucide-react';
import SlideWrapper from './SlideWrapper';

const AIDetectionAccuracySlide = () => (
  <SlideWrapper title="Risk 3: AI Detection Accuracy">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-purple-100 rounded-full p-8 mb-8 shadow-lg">
        <Brain size={100} className="text-purple-600" />
      </div>
      <h2 className="text-4xl font-bold mb-6 text-purple-800">AI Detection Accuracy</h2>
      <p className="text-2xl text-center max-w-3xl text-purple-700 mb-8">
        Minimizing false positives/negatives in AI-based detection systems.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-purple-700">Mitigations:</h3>
        <ul className="list-disc pl-8 text-purple-600 text-xl">
          <li>Continuous training and refinement of AI models</li>
          <li>Multi-modal verification (e.g., camera + IR Camera + IoT sensors + GPS data)</li>
          <li>Regular performance evaluations and adjustments</li>
          <li>Human oversight for critical decisions</li>
        </ul>
      </div>
    </div>
  </SlideWrapper>
);

export default AIDetectionAccuracySlide;