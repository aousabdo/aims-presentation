import React from 'react';
import { Camera, Smartphone, Monitor, Cpu, Shield, Wifi, Server, Zap } from 'lucide-react';
import SlideWrapper from './SlideWrapper';
import droneIcon from '../icons/drone-icon.png';

const SolutionComponent = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
    <div className="bg-white rounded-full p-3 mb-4 shadow-md">
      {typeof Icon === 'string' ? (
        <img src={Icon} alt={title} className="w-8 h-8" />
      ) : (
        <Icon size={32} className="text-green-600" />
      )}
    </div>
    <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
    <p className="text-sm text-green-700 text-center">{description}</p>
  </div>
);

const ProposedSolutionComponents = () => (
  <SlideWrapper title="Proposed Solution Components">
    <div className="grid grid-cols-3 gap-6">
      <SolutionComponent 
        icon={Camera} 
        title="Smart Camera Network" 
        description="AI-powered cameras for real-time monitoring and analysis"
      />
      <SolutionComponent 
        icon={Wifi} 
        title="Advanced Connectivity" 
        description="4G/5G and Starlink integration for seamless, high-speed data transmission"
      />
      <SolutionComponent 
        icon={Monitor} 
        title="Central Command and Control" 
        description="Centralized system for data management and decision-making"
      />
      <SolutionComponent 
        icon={Cpu} 
        title="AI-Powered Analytics" 
        description="Advanced algorithms for predictive insights and anomaly detection"
      />
      <SolutionComponent 
        icon={Smartphone} 
        title="Mobile App for Drivers" 
        description="User-friendly interface for route planning and communication"
      />
      <SolutionComponent 
        icon={Shield} 
        title="Data Security and Sovereignty" 
        description="Robust encryption and compliance with data protection regulations"
      />
      <SolutionComponent 
        icon={droneIcon}
        title="Drone Monitoring" 
        description="Aerial surveillance and data collection for enhanced situational awareness"
      />
      <SolutionComponent 
        icon={Server} 
        title="Edge Computing Nodes" 
        description="Lightning-fast local processing for real-time decisions and reduced latency"
      />
      <SolutionComponent 
        icon={Zap} 
        title="IoT Sensor Fusion" 
        description="Real-time data aggregation from diverse IoT sensors for comprehensive situational awareness"
      />
    </div>
  </SlideWrapper>
);

export default ProposedSolutionComponents;