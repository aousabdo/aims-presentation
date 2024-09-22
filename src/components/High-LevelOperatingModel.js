import React from 'react';
import { Smartphone, Users, Camera, Database, AlertCircle, Cpu, Map, Cloud, Shield } from 'lucide-react';
import SlideWrapper from './SlideWrapper';
import droneIcon from '../icons/drone-icon.png';

const OperatingModelStep = ({ icon: Icon, title, description, isCustomIcon = false }) => (
  <div className="flex flex-col items-center text-center bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
    <div className="bg-white rounded-full p-4 mb-4 shadow-md">
      {isCustomIcon ? (
        <img src={Icon} alt={title} className="w-8 h-8" />
      ) : Icon ? (
        <Icon size={32} className="text-green-600" />
      ) : null}
    </div>
    <h3 className="text-lg font-bold mb-3 text-green-800">{title}</h3>
    <p className="text-sm text-green-700">{description}</p>
  </div>
);

const HighLevelOperatingModel = () => (
  <SlideWrapper title="AIMS High-Level Operating Model">
    <div className="grid grid-cols-5 gap-8 w-full max-w-7xl mx-auto p-10 bg-green-50 rounded-3xl shadow-xl">
      <OperatingModelStep 
        icon={Smartphone} 
        title="Smart Departure" 
        description="Driver registration and ePass generation"
      />
      <OperatingModelStep 
        icon={Users} 
        title="Checkpoint Verification" 
        description="Officer scans ePass and verifies occupants"
      />
      <OperatingModelStep 
        icon={Camera} 
        title="AI Camera Network" 
        description="Continuous monitoring with edge AI processing"
      />
      <OperatingModelStep 
        icon={Map} 
        title="GPS Monitoring" 
        description="Real-time tracking and geofencing"
      />
      <OperatingModelStep 
        icon={droneIcon}
        isCustomIcon={true}
        title="Aerial Surveillance" 
        description="AI-controlled drones for rapid response"
      />
      <OperatingModelStep 
        icon={Cpu} 
        title="Edge Computing" 
        description="Local data processing for reduced latency"
      />
      <OperatingModelStep 
        icon={Database} 
        title="Central Data Processing" 
        description="AI/ML analysis and predictive modeling"
      />
      <OperatingModelStep 
        icon={Cloud} 
        title="Command Center" 
        description="Real-time monitoring and decision support"
      />
      <OperatingModelStep 
        icon={AlertCircle} 
        title="Alert Management" 
        description="AI-driven anomaly detection and alerts"
      />
      <OperatingModelStep 
        icon={Shield} 
        title="Security & Compliance" 
        description="Data encryption and privacy controls"
      />
    </div>
  </SlideWrapper>
);

export default HighLevelOperatingModel;