import React from 'react';
import SlideWrapper from './SlideWrapper';

const GoogleMap = () => (
  <SlideWrapper title="AIMS Yearly Running Costs">
    <div className="flex justify-center items-center h-full">
      <img 
        src={`${process.env.PUBLIC_URL}/AIMS-Running-Costs.png`}
        alt="AIMS NEOM Tabuk Map" 
        className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
      />
    </div>
  </SlideWrapper>
);

export default GoogleMap;