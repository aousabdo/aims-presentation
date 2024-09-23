import React from 'react';
import { DollarSign, BarChart2, Server, HardDrive, Cloud, Wrench, Repeat } from 'lucide-react';
import SlideWrapper from './SlideWrapper';

// Simple Card component
const Card = ({ children, className = '' }) => (
  <div className={`bg-white shadow-md rounded-lg p-4 ${className} duration-300 hover:shadow-2xl hover:scale-105`}>
    {children}
  </div>
);

const CostAnalysisSlide = () => {
  const totalCost = 32002200;
  const sectorCosts = [
    { name: 'Software Development', cost: 19950000, icon: <Wrench size={24} /> },
    { name: 'Hardware', cost: 5167500, icon: <HardDrive size={24} /> },
    { name: 'Cloud Infrastructure', cost: 1551000, icon: <Cloud size={24} /> },
  ];
  const developmentCost = sectorCosts.reduce((sum, sector) => sum + sector.cost, 0);
  const runningCost = 3851000;
  const runningCostYear3 = 2500000;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  return (
    <SlideWrapper title="AIMS Project High-level Cost Analysis">
      <div className="bg-green-50 p-12 max-w-7xl mx-auto rounded-3xl shadow-xl">
        <h1 className="text-3xl font-bold mb-6 text-center flex items-center justify-center">
          <BarChart2 size={32} className="mr-2" />
          AIMS Project Cost Analysis
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <DollarSign size={24} className="mr-2" />
              Total Project Cost
            </h2>
            <p className="text-4xl font-bold text-green-600">
              {formatCurrency(totalCost)}
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <Repeat size={24} className="mr-2" />
              Yearly Running Cost
            </h2>
            <p className="text-4xl font-bold text-blue-600">
              {formatCurrency(runningCost)}
            </p>
          </Card>
        </div>

        <Card className="mb-6">
          <h2 className="text-xl font-semibold mb-2 flex items-center">
            <Server size={24} className="mr-2" />
            Cost Breakdown by Sector
          </h2>
          <ul className="list-none">
            {sectorCosts.map((sector) => (
              <li key={sector.name} className="flex justify-between items-center py-2 border-b last:border-b-0">
                <span className="text-lg flex items-center">
                  {sector.icon}
                  <span className="ml-2">{sector.name}</span>
                </span>
                <span className="text-lg font-semibold">{formatCurrency(sector.cost)}</span>
              </li>
            ))}
          </ul>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <Wrench size={24} className="mr-2" />
              Development Cost
            </h2>
            <p className="text-3xl font-bold text-purple-600">
              {formatCurrency(developmentCost)}
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <Repeat size={24} className="mr-2" />
              Running Cost (Starting Year 3)
            </h2>
            <p className="text-3xl font-bold text-orange-600">
              {formatCurrency(runningCostYear3)}
            </p>
          </Card>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default CostAnalysisSlide;