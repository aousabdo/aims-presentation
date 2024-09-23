import React from 'react';
import SlideWrapper from './SlideWrapper';

const GoogleMap = () => (
  <SlideWrapper title="AIMS High-level Cost Analysis">
    <div className="flex justify-center items-center h-full">
      <img 
        src={`${process.env.PUBLIC_URL}/AIMS-Cost-Analysis.png`}
        alt="AIMS NEOM Tabuk Map" 
        className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
      />
    </div>
  </SlideWrapper>
);

export default GoogleMap;