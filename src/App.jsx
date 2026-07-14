import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import HomeTab from './components/HomeTab';
import ProjectsTab from './components/ProjectsTab';
import EvidenceTable from './components/EvidenceTable';
import RubricTable from './components/RubricTable';
import Summary from './components/Summary';

const tabTitles = {
  home: 'Overview / Tổng quan',
  projects: 'Assignments / Bài tập & Dự án',
  evidence: 'Evidence / Minh chứng',
  rubric: 'Rubric / Tiêu chí',
  summary: 'Reflection / Tổng kết',
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomeTab setActiveTab={setActiveTab} />;
      case 'projects': return <ProjectsTab />;
      case 'evidence': return <EvidenceTable />;
      case 'rubric': return <RubricTable />;
      case 'summary': return <Summary />;
      default: return <HomeTab setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="portfolio-app min-h-screen bg-ivory text-charcoal md:flex">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />
      <div className="portfolio-main min-w-0 flex-1 md:ml-sidebar">
        <header className="portfolio-topbar sticky top-0 z-30 hidden h-20 items-center justify-between border-b border-border-light bg-ivory px-8 md:flex xl:px-16">
          <h1 className="text-xl font-extrabold uppercase tracking-[-0.04em]">{tabTitles[activeTab]}</h1>
          <span className="editorial-label">Academic Year 2025–26</span>
        </header>
        <main>{renderContent()}</main>
      </div>
    </div>
  );
}
