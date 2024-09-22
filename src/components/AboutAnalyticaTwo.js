import React from 'react';
import { Camera, Shield, Car, Brain, Database, Cloud } from 'lucide-react';
import SlideWrapper from './SlideWrapper';

const ExpertiseCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
    <div className="flex items-center mb-4">
      <div className="bg-white rounded-full p-3 mr-4">
        <Icon size={32} className="text-green-600" />
      </div>
      <h3 className="text-xl font-semibold text-green-800">{title}</h3>
    </div>
    <p className="text-md text-green-700 mb-3">{description}</p>
  </div>
);

const AboutAnalytica2 = () => (
  <SlideWrapper title="Our Expertise Relevant to AIMS">
    <div className="grid grid-cols-2 gap-8 w-full max-w-7xl mx-auto p-10 bg-green-50 rounded-3xl shadow-xl">
    <ExpertiseCard 
        icon={Camera}
        title="AI-Powered Monitoring" 
        description="Expertise in developing AI-driven monitoring systems for complex environments, including storm damage prediction for electric grids."
      />
      <ExpertiseCard 
        icon={Shield}
        title="Predictive Analytics for Security" 
        description="Advanced predictive models to enhance security and preparedness, as demonstrated in our work predicting natural disaster impacts on the US economy."
      />
      <ExpertiseCard 
        icon={Car}
        title="Vehicle Behavior Analysis" 
        description="Proven track record in analyzing driver behavior using AI, achieving 87% accuracy in driver profiling for a major client."
      />
      <ExpertiseCard 
        icon={Brain}
        title="Custom AI/ML Solutions" 
        description="Tailored AI and machine learning solutions for diverse sectors, including real estate, travel, and environmental studies."
      />
      <ExpertiseCard 
        icon={Database}
        title="Big Data Management" 
        description="Expertise in handling and analyzing large datasets, crucial for projects involving extensive monitoring and data collection."
      />
      <ExpertiseCard 
        icon={Cloud}
        title="Cloud-Based Analytics Platforms" 
        description="Development of secure, cloud-based analytics dashboards for real-time data visualization and decision support."
      />
    </div>
  </SlideWrapper>
);

export default AboutAnalytica2;