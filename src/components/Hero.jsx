import { ArrowRight, FileCheck2 } from 'lucide-react';

export default function Hero({ student, setActiveTab }) {
  return (
    <section className="px-6 pb-24 pt-12 sm:px-8 md:pt-20 xl:px-16 xl:pb-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-9">
            <h1 className="max-w-5xl text-[2.55rem] font-black leading-[0.92] tracking-[-0.06em] text-charcoal sm:text-[clamp(3rem,8vw,6.5rem)] sm:leading-[0.9] sm:tracking-[-0.065em]">
                            Transnational <br/>Cultural &amp; <br/> Media Studies<br/> Portfolio
            </h1>
            <div className="mt-10 space-y-3" aria-hidden="true">
              <div className="h-px w-full bg-border-light" />
              <div className="h-px w-2/3 bg-border-light opacity-70" />
              <div className="h-px w-1/3 bg-border-light opacity-40" />
            </div>
            <div className="mt-12 max-w-3xl bg-charcoal p-8 text-ivory sm:p-12">
              <p className="text-xl font-bold leading-relaxed sm:text-2xl">Portfolio môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={() => setActiveTab('projects')} className="button-light">Mục bài tập <ArrowRight size={16} /></button>
                <button type="button" onClick={() => setActiveTab('evidence')} className="button-dark-outline">Minh chứng <FileCheck2 size={16} /></button>
              </div>
            </div>
          </div>

          <aside className="border border-border-light bg-paper p-4 lg:col-span-3 lg:self-end">
            <img
              src="/avatar-dinh-thai-son.jpg"
              alt="Bùi Yến Ngọc portfolio owner"
              className="aspect-[5/5] w-full object-cover object-center"
            />
            <p className="editorial-label mt-8">Portfolio Owner</p>
            <h2 className="mt-2 text-2xl font-extrabold leading-tight">{student.name}</h2>
            <dl className="mt-8 space-y-6">
              <div><dt className="editorial-label">Major</dt><dd className="mt-2 text-sm font-bold leading-6">{student.major}</dd></div>
              <div><dt className="editorial-label">Institution</dt><dd className="mt-2 text-sm font-bold">{student.shortUniversity}</dd><dd className="mt-1 text-xs leading-5 text-muted-dark">{student.university}</dd></div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
