import { ArrowLeft, ExternalLink, FileText, Image as ImageIcon, X } from 'lucide-react';

function EvidenceItem({ icon: Icon, label, value, type, onPreview }) {
  const isPending = !value || value === 'Sẽ cập nhật sau';
  const isNotRequired = value === 'Không yêu cầu';
  return (
    <div className="flex min-h-44 flex-col border border-border-light bg-[#F6F3ED] p-5">
      <Icon size={20} />
      <p className="mt-5 text-sm font-bold">{label}</p>
      <div className="mt-auto pt-5">
        {isPending && <span className="status-muted">Sẽ cập nhật sau</span>}
        {isNotRequired && <span className="status-muted">Không yêu cầu</span>}
        {!isPending && !isNotRequired && <a href={value} onClick={(event) => onPreview(event, value, type)} className="button-secondary">Xem {type === 'pdf' ? 'báo cáo' : 'hình ảnh'} <ExternalLink size={14} /></a>}
      </div>
    </div>
  );
}

export default function AssignmentDetail({ project, onBack, previewData, onPreview, onClosePreview }) {
  return (
    <div className="min-h-screen bg-ivory px-6 py-10 sm:px-8 xl:px-16 xl:py-16">
      {previewData.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 sm:p-6" role="dialog" aria-modal="true" aria-label="Xem trước minh chứng">
          <div className="flex h-[90vh] w-full max-w-6xl flex-col border border-border-light bg-ivory">
            <div className="flex items-center justify-between border-b border-border-light px-5 py-4"><div><p className="editorial-label">Preview</p><h3 className="mt-1 text-xl font-extrabold">{previewData.type === 'pdf' ? 'Báo cáo PDF' : 'Ảnh minh chứng'}</h3></div><div className="flex items-center gap-2"><a href={previewData.url} target="_blank" rel="noreferrer" className="button-secondary">Mở thẻ mới</a><button type="button" aria-label="Đóng xem trước" onClick={onClosePreview} className="icon-button-dark"><X size={18} /></button></div></div>
            <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-paper p-4">{previewData.type === 'pdf' ? <iframe src={previewData.url} title="PDF Preview" className="h-full w-full border-0 bg-white" /> : <img src={previewData.url} alt="Minh chứng" className="max-h-full max-w-full object-contain" />}</div>
          </div>
        </div>
      )}

      <button type="button" onClick={onBack} className="button-secondary"><ArrowLeft size={17} /> Quay lại danh sách</button>
      <article className="mx-auto mt-8 max-w-[1440px] border border-border-light bg-paper">
        <header className="grid gap-8 border-b border-border-light p-7 lg:grid-cols-12 lg:p-12">
          <div className="lg:col-span-3"><p className="editorial-label">Assignment {String(project.id).padStart(2, '0')}</p><p className="mt-2 text-sm text-muted-dark">{project.chapter}</p></div>
          <div className="lg:col-span-8"><h1 className="text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.95] tracking-[-0.055em]">{project.title}</h1><p className="mt-6 max-w-3xl text-base leading-8 text-muted-dark">{project.shortDesc}</p></div>
        </header>
        <div className="grid gap-px bg-border-light lg:grid-cols-2"><section className="bg-ivory p-7 lg:p-10"><p className="editorial-label">Mục tiêu nhiệm vụ</p><p className="mt-5 text-base leading-8">{project.target}</p></section><section className="bg-ivory p-7 lg:p-10"><p className="editorial-label">Kỹ năng áp dụng</p><p className="mt-5 text-base italic leading-8">{project.skills?.join(', ')}</p></section></div>
        <section className="border-t border-border-light p-7 lg:p-12"><p className="editorial-label">Quá trình thực hiện</p><p className="mt-6 max-w-4xl text-base leading-8">{project.process}</p></section>
        <section className="border-t border-border-light p-7 lg:p-12"><p className="editorial-label">Sản phẩm & Minh chứng</p><div className="mt-7 grid gap-4 md:grid-cols-2"><EvidenceItem icon={FileText} label="Báo cáo (PDF/Word)" value={project.report} type="pdf" onPreview={onPreview} /><EvidenceItem icon={ImageIcon} label="Ảnh chụp màn hình" value={project.evidenceImg} type="img" onPreview={onPreview} /></div></section>
      </article>
    </div>
  );
}
