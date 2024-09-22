import React from 'react';
import { Brain, Users, Globe, Award, Briefcase, Rocket } from 'lucide-react';
import SlideWrapper from './SlideWrapper';

const AboutAnalytica1 = () => (
  <SlideWrapper title="About Analytica">
    <div className="flex flex-col justify-center items-center h-full">
      <div className="grid grid-cols-3 gap-6 w-full max-w-6xl mb-8">
        {[
          { icon: Brain, title: "AI Pioneers", description: "Leading AI innovation since 2014 with cutting-edge solutions in Data Science, AI, and Big Data" },
          { icon: Users, title: "Elite Expertise", description: "Team of Ph.D. level scientists from diverse fields including Physics, Mathematics, and Computer Science" },
          { icon: Globe, title: "Impactful Solutions", description: "Serving government agencies, Fortune 500 companies, and clients across various sectors globally" },
          { icon: Award, title: "Industry Recognition", description: "Multiple awards and publications in prestigious journals like Science and Nature" },
          { icon: Briefcase, title: "Diverse Portfolio", description: "Expertise in sectors including DoD, NOAA, Homeland Security, Banking, Energy, and Healthcare" },
          { icon: Rocket, title: "Innovative Approach", description: "Proprietary ML algorithms and custom AI solutions tailored to each client's unique challenges" }
        ].map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex flex-col items-center text-center p-5 bg-gradient-to-r from-green-50 to-green-100 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <div className="bg-white rounded-full p-3 mb-3">
              <Icon size={40} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-green-800">{title}</h3>
            <p className="text-ms text-green-700">{description}</p>
          </div>
        ))}
      </div>
      <div className="text-center text-green-800 max-w-4xl">
        <p className="text-lg font-semibold mb-2">
          "From Data to Actionable Insights"
        </p>
        <p className="text-sm">
          At Analytica, we combine expertise from business leaders, highly skilled data scientists, and cutting-edge technologies to help our clients make sense of their data and gain actionable business insights.
        </p>
      </div>
    </div>
  </SlideWrapper>
);

export default AboutAnalytica1;