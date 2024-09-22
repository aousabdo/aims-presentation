import React from 'react';
import { Calendar, Users, Eye, Cpu, Shield } from 'lucide-react';

const AIMonitoringIcon = () => (
  <div className="relative w-32 h-32">
    <div className="absolute inset-0 bg-green-300 rounded-full opacity-20"></div>
    <Eye size={64} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-300" />
    <Cpu size={38} className="absolute top-0 left-0 text-green-300" />
    <Shield size={38} className="absolute bottom-0 right-0 text-green-300" />
  </div>
);

const CoverPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white p-8">
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 shadow-2xl w-[1280px] h-[800px] flex flex-col justify-between">
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mb-8">
          <AIMonitoringIcon />
          <h1 className="text-8xl font-bold leading-tight ml-6">
            AIMS
          </h1>
        </div>
        <h2 className="text-5xl font-light mb-8 text-center">
          AI-Powered Monitoring System
        </h2>

        <h3 className="text-3xl mb-12 text-center font-medium">Technical Solution Proposal</h3>
      </div>
      
      <div className="border-t border-green-300/30 pt-8 flex justify-between items-center">
        <div className="flex items-center">
          <Users size={32} className="text-green-300 mr-3" />
          <p className="text-2xl font-semibold">Presented by Analytica</p>
        </div>
        <div className="flex items-center">
          <Calendar size={32} className="text-green-300 mr-3" />
          <p className="text-2xl">September XX, 2024</p>
        </div>
      </div>
    </div>
    <div className="mt-8 text-sm text-green-300">Confidential & Proprietary</div>
  </div>
);

export default CoverPage;