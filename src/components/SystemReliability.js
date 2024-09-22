import React from 'react';
import { Server } from 'lucide-react';
import SlideWrapper from './SlideWrapper';

const SystemReliabilitySlide = () => (
  <SlideWrapper title="Risk 2: System Reliability and Downtime">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-green-100 rounded-full p-8 mb-8 shadow-lg">
        <Server size={100} className="text-green-600" />
      </div>
      <h2 className="text-4xl font-bold mb-6 text-green-800">System Reliability and Downtime</h2>
      <p className="text-2xl text-center max-w-3xl text-green-700 mb-8">
        Ensuring continuous operation and preventing critical system failures.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-green-700">Mitigations:</h3>
        <ul className="list-disc pl-8 text-green-600 text-xl">
          <li>Implement redundant systems and failover mechanisms</li>
          <li>Regular maintenance and proactive monitoring</li>
          <li>Comprehensive disaster recovery plan</li>
          <li>Periodic stress tests to ensure system resilience</li>
        </ul>
      </div>
    </div>
  </SlideWrapper>
);

export default SystemReliabilitySlide;