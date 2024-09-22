import React from 'react';
import { Cloud } from 'lucide-react';
import SlideWrapper from './SlideWrapper';

const EnvironmentalChallengesSlide = () => (
  <SlideWrapper title="Risk 4: Environmental Challenges">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-orange-100 rounded-full p-8 mb-8 shadow-lg">
        <Cloud size={100} className="text-orange-600" />
      </div>
      <h2 className="text-4xl font-bold mb-6 text-orange-800">Environmental Challenges</h2>
      <p className="text-2xl text-center max-w-3xl text-orange-700 mb-8">
        Addressing harsh weather conditions affecting system performance.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-orange-700">Mitigations:</h3>
        <ul className="list-disc pl-8 text-orange-600 text-xl">
          <li>Use of weather-resistant hardware</li>
          <li>Implement redundant monitoring methods</li>
          <li>AI models that account for various conditions</li>
          <li>Regular maintenance of outdoor equipment</li>
        </ul>
      </div>
    </div>
  </SlideWrapper>
);

export default EnvironmentalChallengesSlide;