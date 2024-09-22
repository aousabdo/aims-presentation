import React from 'react';
import SlideWrapper from './SlideWrapper';
import { FileText, Layers, MapPin, Cpu, Zap, Users, Building, HelpCircle } from 'lucide-react';

const TableOfContents = () => (
  <SlideWrapper title="Table of Contents">
    <div className="grid grid-cols-2 gap-8 w-full max-w-7xl mx-auto p-10 bg-green-50 rounded-3xl shadow-xl">
    {[
        { icon: FileText, title: "Executive Summary" },
        { icon: Layers, title: "Proposed Solution Components" },
        { icon: MapPin, title: "Google Map: High-level Solution Scope" },
        { icon: Cpu, title: "Solution Architecture" },
        { icon: Zap, title: "Solution Features" },
        { icon: Users, title: "High-Level Operating Model" },
        { icon: Building, title: "About Analytica" },
        { icon: HelpCircle, title: "Q&A" }
      ].map(({ icon: Icon, title }, index) => (
        <div key={index} className="flex items-center bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 group">
          <div className="bg-white rounded-full p-4 mr-6 shadow-md group-hover:shadow-lg transition-all duration-300">
            <Icon size={32} className="text-green-600 group-hover:text-green-700 transition-colors duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-green-800 group-hover:text-green-900 transition-colors duration-300">{title}</span>
          </div>
        </div>
      ))}
    </div>
  </SlideWrapper>
);

export default TableOfContents;