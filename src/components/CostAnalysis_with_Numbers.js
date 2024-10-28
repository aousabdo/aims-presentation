import React from 'react';
import { DollarSign, BarChart2 } from 'lucide-react';
import SlideWrapper from './SlideWrapper';

const CostItem = ({ title, cost }) => (
  <div className="flex justify-between items-center py-2 border-b last:border-b-0">
    <span className="text-xl font-semibold">{title}</span>
    <span className="text-xl font-bold">{cost}</span>
  </div>
);

const CostAnalysisSlide = () => (
  <SlideWrapper title="AIMS Project Cost Analysis">
    <div className="bg-green-50 p-8 max-w-4xl mx-auto rounded-3xl shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-center flex items-center justify-center">
        <BarChart2 size={32} className="mr-2" />
        Cost Breakdown Structure
      </h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <CostItem title="Software Development" cost="$19,950,000" />
        <CostItem title="Hardware" cost="$5,167,000" />
        <CostItem title="Optional Modules" cost="$4,000,000" />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center">
          <DollarSign size={28} className="mr-2" />
          Grand Total
        </h2>
        <p className="text-4xl font-bold text-center text-green-600">
          $29,117,000
        </p>
      </div>
    </div>
  </SlideWrapper>
);

export default CostAnalysisSlide;