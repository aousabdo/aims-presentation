import React from 'react';
import SlideWrapper from './SlideWrapper';
import { CheckCircle, Target, MapPin, Clock, Repeat, Shield, Brain, Lock, Bell, Zap } from 'lucide-react';

const ExecutiveSummary = () => (
  <SlideWrapper title="Executive Summary">
    <div className="space-y-8 text-lg text-green-900">
      <section className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-green-800 border-b-2 border-green-500 pb-2">Problem Statement</h2>
        <p className="mb-4 text-xl italic text-green-700">Need for a comprehensive vehicle monitoring system along a specific route that ensures:</p>
        <ul className="grid grid-cols-2 gap-4">
          {[
            { icon: CheckCircle, text: "Accurate occupant counting and route verification" },
            { icon: MapPin, text: "Route adherence within 1 km of the main road" },
            { icon: Clock, text: "Monitoring of stop durations" },
            { icon: Repeat, text: "Bi-directional monitoring capabilities" },
            { icon: Shield, text: "Special handling for white-listed vehicles" }
          ].map(({ icon: Icon, text }, index) => (
            <li key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105">
              <Icon size={24} className="mr-3 text-green-600" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-gradient-to-r from-green-100 to-green-50 p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-green-800 border-b-2 border-green-500 pb-2">Objectives</h2>
        <ul className="grid grid-cols-2 gap-4">
          {[
            { icon: Brain, text: "Implement an AI-driven integrated monitoring system" },
            { icon: Lock, text: "Ensure data sovereignty and security compliance" },
            { icon: Bell, text: "Provide real-time analytics and alerts" },
            { icon: Zap, text: "Optimize existing infrastructure and introduce cutting-edge technologies" }
          ].map(({ icon: Icon, text }, index) => (
            <li key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105">
              <Icon size={24} className="mr-3 text-green-600" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </SlideWrapper>
);

export default ExecutiveSummary;