import React from 'react';
import { Building, Map, Users } from 'lucide-react';
import SlideWrapper from './SlideWrapper';

const TabukMunicipalitySlide = () => (
  <SlideWrapper title="AIMS Project: Tabuk Municipality Stakeholders">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-amber-100 rounded-full p-8 mb-8 shadow-lg">
        <Building size={100} className="text-amber-600" />
      </div>
      <h2 className="text-4xl font-bold mb-6 text-amber-800">Tabuk Municipality</h2>
      <p className="text-2xl text-center max-w-3xl text-amber-700 mb-8">
        A key stakeholder in modernizing urban transportation and safety systems.
      </p>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <Map size={24} className="text-amber-500 mr-2" />
            <span className="text-amber-700 font-bold">Regional Significance</span>
          </div>
          <ul className="list-disc pl-6 text-amber-600">
            <li>Capital of Tabuk Region</li>
            <li>Strategic location in northwestern Saudi Arabia</li>
            <li>Gateway to NEOM and the Red Sea</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <Users size={24} className="text-amber-500 mr-2" />
            <span className="text-amber-700 font-bold">Project Objectives</span>
          </div>
          <ul className="list-disc pl-6 text-amber-600">
            <li>Enhance public transportation safety</li>
            <li>Improve urban mobility efficiency</li>
            <li>Support Vision 2030 smart city initiatives</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <Building size={24} className="text-amber-500 mr-2" />
            <span className="text-amber-700 font-bold">Municipal Involvement</span>
          </div>
          <ul className="list-disc pl-6 text-amber-600">
            <li>Project oversight and coordination</li>
            <li>Local regulation alignment</li>
            <li>Community engagement and feedback</li>
          </ul>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

export default TabukMunicipalitySlide;