import React from 'react';
import { Brain, Eye, Map, Clock, AlertTriangle, MessageSquare, Camera, RefreshCw, Layers } from 'lucide-react';
import SlideWrapper from './SlideWrapper';

const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
    <div className="bg-white rounded-full p-3 mb-4 shadow-md">
      <Icon size={32} className="text-green-600" />
    </div>
    <h3 className="text-xl font-semibold text-green-800 mb-2 text-center">{title}</h3>
    <p className="text-sm text-green-700 text-center">{description}</p>
  </div>
);

const SolutionFeatures = () => (
  <SlideWrapper title="Solution Features: AI Capabilities">
    <div className="grid grid-cols-3 gap-8">
      <FeatureItem 
        icon={Brain} 
        title="Advanced AI Processing" 
        description="Edge computing with NVIDIA Jetson for real-time analysis"
      />
      <FeatureItem 
        icon={Layers} 
        title="Multi-Sensor Fusion" 
        description="Integrating data from cameras, GPS, and other sensors for comprehensive monitoring"
      />
      <FeatureItem 
        icon={Camera} 
        title="AI-Enhanced Vision Systems" 
        description="ALPR and vehicle re-identification across camera networks"
      />
      <FeatureItem 
        icon={Eye} 
        title="Intelligent Occupant Detection" 
        description="Deep learning models for accurate counting and verification"
      />
      <FeatureItem 
        icon={Map} 
        title="Dynamic Route Monitoring" 
        description="AI-powered geofencing and anomaly detection"
      />
      <FeatureItem 
        icon={Clock} 
        title="Smart Stop Analysis" 
        description="Context-aware algorithms for detecting unusual stops"
      />
      <FeatureItem 
        icon={AlertTriangle} 
        title="Predictive Analytics" 
        description="Machine learning for forecasting and risk assessment"
      />
      <FeatureItem 
        icon={MessageSquare} 
        title="Advanced NLP Capabilities" 
        description="LLM-powered incident reporting and operator assistance"
      />
      <FeatureItem 
        icon={RefreshCw} 
        title="Self-Improving AI Models" 
        description="Continuous learning from new data for enhanced accuracy"
      />
    </div>
  </SlideWrapper>
);

export default SolutionFeatures;