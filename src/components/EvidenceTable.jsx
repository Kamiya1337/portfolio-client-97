import { useState } from 'react';
import { Check, Maximize2, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

function isComplete(value) {
  return Boolean(value && value !== 'Sẽ cập nhật sau' && value !== 'Không yêu cầu');
}

export default function EvidenceTable() {
  const { projects } = portfolioData;
  const [previewData, setPreviewData] = useState({ isOpen: false, url: '', type: '' });
  const completed = projects.filter((project) => isComplete(project.report) && isComplete(project.evidenceImg)).length;

  const openPreview = (event, url, type) => {
    event.preventDefault();
    setPreviewData({ isOpen: true, url, type });
  };
  const EvidenceLink = ({ value, label, type }) => {
    if (!value || value === 'Sẽ cập nhật sau') return <span className="ledger-status">Đang chờ</span>;
    if (value === 'Không yêu cầu') return <span className="ledger-status">Không yêu cầu</span>;
    return <a href={value} target="_blank" rel="noreferrer" onClick={(event) => openPreview(event, value, type)} className="ledger-link">{label}<Maximize2 size={13} /></a>;
  };
  const StatusBadge = ({ project }) => {
    const complete = isComplete(project.report) && isComplete(project.evidenceImg);
    return complete ? <span className="ledger-status ledger-status-complete"><Check size={12} /> Đã nộp</span> : <span className="ledger-status">Thiếu minh chứng</span>;
  };

  return (
    <div className="min-h-screen bg-ivory">
      {previewData.isOpen && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 sm:p-6" role="dialog" aria-modal="true" aria-label="Xem trước minh chứng"><div className="flex h-[90vh] w-full max-w-6xl flex-col border border-border-light bg-ivory"><div className="flex items-center justify-between border-b border-border-light px-5 py-4"><div><p className="editorial-label">Evidence Preview</p><h3 className="mt-1 text-xl font-extrabold">{previewData.type === 'pdf' ? 'Báo cáo PDF' : 'Ảnh minh chứng'}</h3></div><div className="flex gap-2"><a href={previewData.url} target="_blank" rel="noreferrer" className="button-secondary">Mở thẻ mới</a><button type="button" aria-label="Đóng xem trước" onClick={() => setPreviewData({ isOpen: false, url: '', type: '' })} className="icon-button-dark"><X size={18} /></button></div></div><div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-paper p-4">{previewData.type === 'pdf' ? <iframe src={previewData.url} title="PDF Preview" className="h-full w-full border-0 bg-white" /> : <img src={previewData.url} alt="Minh chứng" className="max-h-full max-w-full object-contain" />}</div></div></div>}
      <header className="page-intro"><p className="editorial-label">Submission Repository</p><h1 className="page-title max-w-5xl">A curated archive of academic milestones.</h1><p className="page-copy">Bảng tổng hợp giữ nguyên báo cáo, hình ảnh minh chứng và trạng thái thực tế của từng bài tập.</p></header>
      <section className="px-6 pb-28 sm:px-8 xl:px-16">
        <div className="mx-auto max-w-[1440px] overflow-hidden border border-border-dark bg-dark-surface text-ivory">
          <div className="divide-y divide-border-dark md:hidden">{projects.map((project) => <article key={project.id} className="p-6"><div className="flex items-start justify-between gap-4"><div><p className="dark-editorial-label">Assignment {String(project.id).padStart(2, '0')}</p><h2 className="mt-3 text-xl font-extrabold">{project.title}</h2></div><StatusBadge project={project} /></div><div className="mt-6 grid grid-cols-2 gap-2"><EvidenceLink value={project.report} label="Report" type="pdf" /><EvidenceLink value={project.evidenceImg} label="Image" type="img" /></div></article>)}</div>
          <div className="hidden overflow-x-auto md:block"><table className="w-full min-w-[760px] border-collapse text-left"><thead><tr className="border-b border-border-dark text-[11px] font-bold uppercase tracking-[0.14em] text-muted-light"><th className="px-7 py-6">Assignment</th><th className="px-7 py-6">Report File</th><th className="px-7 py-6">Evidence Image</th><th className="px-7 py-6">Status</th></tr></thead><tbody>{projects.map((project) => <tr key={project.id} className="border-b border-border-dark transition-colors hover:bg-charcoal"><td className="px-7 py-8"><p className="font-extrabold">{project.title}</p><p className="mt-2 text-xs uppercase tracking-wider text-muted-light">{project.chapter}</p></td><td className="px-7 py-8"><EvidenceLink value={project.report} label="Xem báo cáo" type="pdf" /></td><td className="px-7 py-8"><EvidenceLink value={project.evidenceImg} label="Xem ảnh" type="img" /></td><td className="px-7 py-8"><StatusBadge project={project} /></td></tr>)}</tbody></table></div>
          <div className="flex items-center justify-between border-t border-border-dark bg-obsidian px-7 py-5"><p className="dark-editorial-label">Showing {projects.length} academic records</p><p className="text-sm text-muted-light">{completed}/{projects.length} complete</p></div>
        </div>
        <div className="mx-auto mt-12 grid max-w-[1440px] gap-5 md:grid-cols-3"><div className="border border-border-light bg-paper p-8 md:col-span-2"><p className="editorial-label">Integrity Check</p><h2 className="mt-5 text-2xl font-extrabold">Submission Accuracy</h2><p className="mt-5 max-w-xl text-sm leading-7 text-muted-dark">Mỗi trạng thái được tính trực tiếp từ dữ liệu báo cáo và hình ảnh minh chứng hiện có.</p><p className="mt-10 text-6xl font-black">{Math.round((completed / projects.length) * 100)}%</p></div><div className="border border-border-light bg-[#F6F3ED] p-8"><p className="editorial-label">Archive Health</p><p className="mt-10 text-5xl font-black">{projects.length}</p><p className="mt-2 text-xs uppercase tracking-widest text-muted-dark">assignment records</p></div></div>
      </section>
    </div>
  );
}
