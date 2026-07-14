import { BookOpen, CheckSquare, FileCheck, Home, Menu, MessageSquare, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { id: 'home', icon: Home, label: 'Overview' },
  { id: 'projects', icon: BookOpen, label: 'Assignments' },
  { id: 'evidence', icon: FileCheck, label: 'Evidence' },
  { id: 'rubric', icon: CheckSquare, label: 'Rubric' },
  { id: 'summary', icon: MessageSquare, label: 'Reflection' },
];

export default function Sidebar({ activeTab, setActiveTab, isMobileOpen, setIsMobileOpen }) {
  const { student } = portfolioData;
  const selectTab = (id) => {
    setActiveTab(id);
    setIsMobileOpen(false);
  };

  return (
    <>
      <header className="portfolio-mobile-header sticky top-0 z-[60] flex h-16 items-center justify-between border-b border-border-light bg-ivory px-5 md:hidden">
        <div>
          <p className="text-sm font-extrabold">{student.name}</p>
          <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.16em] text-muted-dark">Transnational Cultural & Media Studies Portfolio</p>
        </div>
        <button type="button" aria-label={isMobileOpen ? 'Đóng menu' : 'Mở menu'} aria-expanded={isMobileOpen} onClick={() => setIsMobileOpen(!isMobileOpen)} className="icon-button-dark">
          {isMobileOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </header>

      <aside className={`portfolio-sidebar fixed inset-y-0 left-0 z-50 flex w-[min(300px,88vw)] flex-col border-r border-border-dark bg-obsidian text-ivory transition-transform duration-200 md:w-sidebar md:translate-x-0 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="border-b border-border-dark px-6 py-8">
          <p className="text-2xl font-black tracking-[-0.04em]">Portfolio</p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-light">Academic Year {student.academicYear}</p>
          <div className="mt-9 space-y-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-light">
            <p className="text-ivory">{student.name}</p>
            <p>{student.major}</p>
            <p>{student.shortUniversity}</p>
          </div>
        </div>

        <nav className="flex-1 px-4 py-8" aria-label="Portfolio sections">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = item.id === activeTab;
            return (
              <button type="button" key={item.id} onClick={() => selectTab(item.id)} className={`group flex w-full items-center gap-3 border-l-2 px-4 py-4 text-left text-[11px] font-bold uppercase tracking-[0.13em] transition-colors ${isActive ? 'border-ivory text-ivory' : 'border-transparent text-muted-light hover:text-ivory'}`}>
                <Icon size={17} strokeWidth={1.7} />
                <span>{String(index + 1).padStart(2, '0')} {item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="border-t border-border-dark px-6 py-6">
          <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-light">Editorial Academic Archive</p>
        </div>
      </aside>

      {isMobileOpen && <button type="button" aria-label="Đóng menu" className="portfolio-mobile-overlay fixed inset-0 z-40 bg-black/60 md:hidden" onClick={() => setIsMobileOpen(false)} />}
    </>
  );
}
