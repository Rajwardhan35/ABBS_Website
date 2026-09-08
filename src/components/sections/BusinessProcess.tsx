import { ArrowRight, ChevronRight, FileText, CheckCircle2, MessageSquare, ClipboardCheck } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { procurementSteps } from '../../data/process';

const stepIcons = [MessageSquare, FileText, CheckCircle2, ClipboardCheck];

export function BusinessProcess() {
  return (
    <section id="process" className="section-space bg-[#f7f6f2]">
      <div className="page-width">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Introduction */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Enquiry Process"
              title={
                <>
                  A structured <br />
                  <em>enquiry process.</em>
                </>
              }
              description="Steps for submitting and coordinating wholesale enquiries with ABSS Global Corporation."
            />

            <div className="mt-8">
              <a href="#contact" className="button button-red">
                <span>Discuss Your Requirements</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: 4-Step Process List */}
          <div className="lg:col-span-7 divide-y divide-[#dedbd2] border-t border-b border-[#dedbd2]">
            {procurementSteps.map((step, index) => {
              const Icon = stepIcons[index] || FileText;
              return (
                <div
                  key={step.stepNumber}
                  className="py-8 sm:py-10 flex flex-col sm:flex-row sm:items-start gap-6 group hover:bg-[#ece9e1]/40 px-4 transition-colors"
                >
                  <div className="flex items-center gap-4 sm:flex-col sm:items-start flex-none">
                    <span className="font-mono text-xs text-[#d9282f] tracking-widest font-bold">
                      {step.stepNumber}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#ece9e1] text-[#202322] flex items-center justify-center group-hover:bg-[#d9282f] group-hover:text-white transition-colors">
                      <Icon size={18} strokeWidth={1.75} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-[#202322] tracking-tight">
                        {step.title}
                      </h3>
                      <ChevronRight
                        size={18}
                        className="text-[#9ba49b] group-hover:text-[#d9282f] group-hover:translate-x-1 transition-all hidden sm:block"
                      />
                    </div>
                    <p className="text-sm text-[#5e635f] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
