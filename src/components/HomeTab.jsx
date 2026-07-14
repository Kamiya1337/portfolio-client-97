import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Hero from './Hero';

const modules = [
  { number: '01', title: 'Coursework', copy: 'Assignments and applied academic work.', tab: 'projects' },
  { number: '02', title: 'Evidence', copy: 'Reports, media, and linked learning artifacts.', tab: 'evidence' },
  { number: '03', title: 'Rubric', copy: 'Evaluation criteria and portfolio readiness.', tab: 'rubric' },
  { number: '04', title: 'Reflection', copy: 'Personal insight, challenges, and next steps.', tab: 'summary' },
];

export default function HomeTab({ setActiveTab }) {
  const { student } = portfolioData;
  return (
    <div className="bg-ivory">
      <Hero student={student} setActiveTab={setActiveTab} />
      <section className="px-6 pb-20 sm:px-8 xl:px-16 xl:pb-24">
        <div className="mx-auto grid max-w-[1440px] gap-8 border-y border-border-light bg-paper px-7 py-10 md:grid-cols-12 md:gap-10 md:px-10 md:py-12">
          <div className="md:col-span-4">
            <p className="editorial-label">ĐỊNH VỊ CÁ NHÂN</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-charcoal sm:text-5xl">Digital Catalyst</h2>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-muted-dark">Data-driven Thinking × Digital Creativity</p>
          </div>
          <div className="border-t border-border-light pt-7 md:col-span-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <p className="max-w-3xl text-base leading-8 text-charcoal">Em là một người đam mê khám phá những tiềm năng của công nghệ và thế giới số. Định vị của em nằm ở sự kết hợp giữa tư duy logic dựa trên thực tế và sự sáng tạo không giới hạn. Em thích học hỏi cách các công cụ số vận hành, từ đó tìm cách tối ưu hóa chúng để tạo ra những sản phẩm sáng tạo, có thể chạm tới và mang lại giá trị cho người sử dụng. Portfolio này chính là cuốn nhật ký ghi lại hành trình em thử nghiệm, làm chủ các công cụ trong bộ môn Công nghệ số và AI, từng bước biến những kiến thức trên giảng đường thành sản phẩm thực tế.</p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-charcoal">Portfolio này không chỉ là tập hợp các bài tập bộ môn Công nghệ số và AI, mà còn là cuốn nhật ký ghi lại hành trình em khám phá, làm chủ công nghệ và từng bước chuyển hóa lý thuyết thành những sản phẩm mang tới cho công chúng.</p>
          </div>
        </div>
      </section>
      <section className="border-t border-border-light px-6 py-24 sm:px-8 xl:px-16 xl:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7"><p className="editorial-label">Portfolio Navigation</p><h2 className="mt-4 text-5xl font-black tracking-[-0.055em] sm:text-6xl">Module Explorer</h2></div>
            <p className="max-w-md text-sm leading-7 text-muted-dark lg:col-span-5 lg:justify-self-end">Navigate the academic journey through coursework, supporting evidence, assessment criteria, and reflection.</p>
          </div>
          <div className="mt-16 grid border-l border-t border-border-light sm:grid-cols-2 xl:grid-cols-4">
            {modules.map((item, index) => (
              <button type="button" key={item.number} onClick={() => setActiveTab(item.tab)} className={`group min-h-72 border-b border-r border-border-light bg-[#F6F3ED] p-7 text-left transition-colors hover:bg-paper ${index > 1 ? 'xl:translate-y-8' : ''}`}>
                <span className="text-6xl font-black tracking-[-0.05em] text-charcoal/10">{item.number}</span>
                <div className="mt-16 flex items-start justify-between gap-4"><div><h3 className="text-xl font-extrabold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-dark">{item.copy}</p></div><ArrowUpRight size={17} className="mt-1 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 pb-24 pt-8 sm:px-8 xl:px-16 xl:pb-32 xl:pt-16">
        <div className="mx-auto flex min-h-80 max-w-[1440px] items-center justify-center bg-charcoal p-10 text-center text-ivory">
          <div><p className="editorial-label text-muted-light">Academic Framework</p><p className="mt-6 max-w-4xl text-3xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">Strategy becomes credible when it is documented, reviewed, and reflected upon.</p></div>
        </div>
      </section>
    </div>
  );
}
