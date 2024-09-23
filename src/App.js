import React, { useState, useEffect } from 'react';
import CoverPage from './components/CoverPage';
import TableOfContents from './components/TableOfContents';
import ExecutiveSummary from './components/ExecutiveSummary';
import ProposedSolutionComponents from './components/ProposedSolutionComponents';
import GoogleMap from './components/GoogleMap';
import SolutionArchitecture from './components/SolutionArchitecture';
import SolutionFeatures from './components/SolutionFeatures';
import HighLevelOperatingModel from './components/High-LevelOperatingModel';
import AboutAnalyticaOne from './components/AboutAnalyticaOne';
import AboutAnalyticaTwo from './components/AboutAnalyticaTwo';
import QnA from './components/QnA';
import AIMSRisksTitleSlide from './components/AIMSRisksTitleSlide';
import DataPrivacySecuritySlide from './components/DataPrivacySecurity';
import SystemReliabilitySlide from './components/SystemReliability';
import AIDetectionAccuracySlide from './components/AIDetectionAccuracy';
import EnvironmentalChallengesSlide from './components/EnvironmentalChallenges';
import UserAdoptionComplianceSlide from './components/UserAdoptionCompliance';
import AnalyticaTeamSlide from './components/AnalyticaTeam';
import ProjectCollaborationSlide from './components/ProjectCollaboration';
import TabukMunicipalitySlide from './components/TabukMunicipality';
import NEOMProjectSlide from './components/NEOMProject';
import AIMSCostAnalysis from './components/AIMSCostAnalysis';
import AIMSRunningCosts from './components/AIMSRunningCosts';
const slides = [
  { component: CoverPage, name: 'Cover' },
  { component: TableOfContents, name: 'Table of Contents' },
  { component: ExecutiveSummary, name: 'Executive Summary' },
  { component: ProposedSolutionComponents, name: 'Proposed Solution Components' },
  { component: GoogleMap, name: 'High-level Solution Scope' },
  { component: SolutionArchitecture, name: 'Solution Architecture' },
  { component: SolutionFeatures, name: 'Solution Features: AI Capabilities' },
  { component: HighLevelOperatingModel, name: 'High-Level Operating Model' },
  { component: AIMSCostAnalysis, name: 'AIMS Cost Analysis' },
  { component: AIMSRunningCosts, name: 'AIMS Yearly Running Costs' },
  { component: AboutAnalyticaOne, name: 'About Analytica' },
  { component: AboutAnalyticaTwo, name: 'Our Success Stories' },
  { component: QnA, name: 'Q&A' },
  { component: AIMSRisksTitleSlide, name: 'AIMS Project: High-Level Risks and Mitigations' },
  { component: DataPrivacySecuritySlide, name: 'Risk 1: Data Privacy and Security' },
  { component: SystemReliabilitySlide, name: 'Risk 2: System Reliability and Downtime' },
  { component: AIDetectionAccuracySlide, name: 'Risk 3: AI Detection Accuracy' },
  { component: EnvironmentalChallengesSlide, name: 'Risk 4: Environmental Challenges' },
  { component: UserAdoptionComplianceSlide, name: 'Risk 5: User Adoption and Compliance' },
  { component: AnalyticaTeamSlide, name: 'Our Team' },
  { component: ProjectCollaborationSlide, name: 'Project Collaboration' },
  { component: TabukMunicipalitySlide, name: 'Tabuk Municipality' },
  { component: NEOMProjectSlide, name: 'NEOM Project' },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' && currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (event.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="relative">
      <CurrentSlideComponent />
      <div className="absolute bottom-6 right-6 text-sm text-green-800 bg-white px-2 py-1 rounded">
        Slide {currentSlide + 1} of {slides.length}
      </div>
    </div>
  );
}

export default App;