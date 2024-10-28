import React from 'react';
import { DollarSign, BarChart2, Code, HardDrive, Puzzle, Cloud } from 'lucide-react';
import SlideWrapper from './SlideWrapper';

const CostItem = ({ title, icon: Icon }) => (
  <div className="flex items-center py-4 border-b last:border-b-0 hover:bg-green-50 transition-colors">
    <div className="bg-green-100 p-3 rounded-full mr-4">
      <Icon size={24} className="text-green-600" />
    </div>
    <span className="text-xl font-semibold text-gray-700">{title}</span>
  </div>
);

const CostAnalysisSlide = () => (
  <SlideWrapper title="AIMS Project Cost Analysis">
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 max-w-4xl mx-auto rounded-3xl shadow-xl">
      <h1 className="text-3xl font-bold mb-8 text-center flex items-center justify-center text-gray-800">
        <DollarSign size={32} className="mr-2 text-green-600" />
        Cost Categories
      </h1>
      
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <CostItem title="Software Development" icon={Code} />
        <CostItem title="Hardware" icon={HardDrive} />
        <CostItem title="Cloud Infrastructure" icon={Cloud} />
        <CostItem title="Optional Modules" icon={Puzzle} />
      </div>
    </div>
  </SlideWrapper>
);

export default CostAnalysisSlide;