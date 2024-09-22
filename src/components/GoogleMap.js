import React from 'react';
import SlideWrapper from './SlideWrapper';

const GoogleMap = () => (
  <SlideWrapper title="Google-Map - High-level Solution Scope">
    <div className="flex justify-center items-center h-full">
      <img 
        src={`${process.env.PUBLIC_URL}/AIMS-NEOM-Tabuk-Map.png`}
        alt="AIMS NEOM Tabuk Map" 
        className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
      />
    </div>
  </SlideWrapper>
);

export default GoogleMap;