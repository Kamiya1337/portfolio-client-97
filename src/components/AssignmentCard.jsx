import { ArrowRight, FileText, Image as ImageIcon } from 'lucide-react';

const isAvailable = (value) => Boolean(value && value !== 'Sẽ cập nhật sau' && value !== 'Không yêu cầu');

export default function AssignmentCard({ project, onSelect }) {
  return (
    <article className="flex min-h-[540px] flex-col border border-border-dark bg-dark-surface p-6 text-ivory transition-transform duration-200 hover:-translate-y-1">
      <div className="flex items-center justify-between gap-3">
        <span className="dark-label-box">Assignment {String(project.id).padStart(2, '0')}</span>
        <span className="text-xs text-muted-light">{project.chapter}</span>
      </div>
      <div className="mt-7 aspect-[4/3] overflow-hidden bg-obsidian">
        {isAvailable(project.evidenceImg) ? <img src={project.evidenceImg} alt={`Minh chứng ${project.title}`} className="h-full w-full object-cover grayscale transition duration-300 hover:grayscale-0" /> : <div className="flex h-full items-center justify-center text-muted-light"><ImageIcon size={30} /></div>}
      </div>
      <h2 className="mt-7 text-xl font-extrabold leading-7 tracking-[-0.03em]">{project.title}</h2>
      <p className="mt-4 text-sm leading-7 text-muted-light">{project.shortDesc}</p>
      <div className="mt-6 flex flex-wrap gap-2">{project.skills?.slice(0, 3).map((skill) => <span key={skill} className="border border-border-dark px-2 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-muted-light">{skill}</span>)}</div>
      <div className="mt-auto pt-7">
        {isAvailable(project.report) ? <a href={project.report} target="_blank" rel="noreferrer" className="card-resource-link"><FileText size={13} /> Report</a> : <span className="card-resource-link opacity-50">Report pending</span>}
      </div>
      <button type="button" onClick={() => onSelect(project)} className="mt-3 flex min-h-12 items-center justify-between bg-ivory px-4 text-[11px] font-bold uppercase tracking-[0.12em] text-obsidian transition-colors hover:bg-taupe">View Case Study <ArrowRight size={16} /></button>
    </article>
  );
}
