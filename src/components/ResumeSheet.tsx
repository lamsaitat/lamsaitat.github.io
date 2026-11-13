import React from 'react';
import { profileData, getDecodedEmailParts, getDecodedEmail } from '../data/profileData';

interface ResumeSheetProps {
  includePrivateContact: boolean;
  includePortfolioAppendix: boolean;
}

export const ResumeSheet: React.FC<ResumeSheetProps> = ({
  includePrivateContact,
  includePortfolioAppendix,
}) => {
  const { user, domain } = getDecodedEmailParts();

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${getDecodedEmail()}`;
  };

  const renderObfuscatedEmail = () => (
    <button
      type="button"
      onClick={handleEmailClick}
      className="text-sky-700 underline cursor-pointer bg-transparent border-0 p-0 font-inherit inline"
    >
      <span>{user}</span>
      <span className="hidden select-none" aria-hidden="true">
        .nospam.invalid
      </span>
      <span>&#64;</span>
      <span className="hidden select-none" aria-hidden="true">
        ignore.
      </span>
      <span>{domain}</span>
    </button>
  );

  return (
    <div className="bg-white text-slate-900 p-6 sm:p-10 max-w-[210mm] mx-auto shadow-2xl print:shadow-none print:p-0 print:max-w-none rounded-xl print:rounded-none border border-slate-200 print:border-none">
      {/* Header */}
      <header className="border-b-2 border-slate-900 pb-3 mb-3.5 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
            {profileData.resumeName}
          </h1>
          <p className="text-sm font-semibold text-sky-700 mt-0.5">
            {profileData.title} — {profileData.subtitle}
          </p>
        </div>

        <div className="text-xs sm:text-right text-slate-700 space-y-0.5 font-medium">
          {includePrivateContact ? (
            <>
              <div>{profileData.privateContact.address}</div>
              <div>
                <span className="font-semibold">{profileData.privateContact.phone}</span> ·{' '}
                {renderObfuscatedEmail()}
              </div>
            </>
          ) : (
            <div>
              {profileData.publicLocation} · {renderObfuscatedEmail()}
            </div>
          )}
          <div>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sky-700 underline"
            >
              linkedin.com/in/lamsaitat
            </a>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="mb-3.5">
        <p className="text-xs leading-relaxed text-slate-700">
          {profileData.resumeSummary}
        </p>
      </section>

      {/* Key Impact Highlights Bar */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 bg-slate-50 border border-slate-200 rounded-lg p-2.5 print-break-inside-avoid">
        {profileData.metrics.map((m) => (
          <div key={m.label} className="border-l-2 border-sky-600 pl-2">
            <div className="text-xs sm:text-sm font-extrabold text-slate-950">{m.value}</div>
            <div className="text-[10.5px] font-semibold text-slate-600 leading-tight">{m.label}</div>
          </div>
        ))}
      </section>

      {/* Main Two-Column Resume Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 print:grid-cols-12 gap-5">
        {/* Left / Main Column: Experience (8 cols) */}
        <div className="md:col-span-8 print:col-span-8 space-y-3">
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2.5">
              Professional Experience
            </h2>

            <div className="space-y-3">
              {profileData.experiences.map((exp) => (
                <div key={exp.id} className="print-break-inside-avoid">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                    <h3 className="text-[12.5px] font-bold text-slate-950">
                      {exp.company}, {exp.location.replace(', Australia', '')}{' '}
                      <span className="font-semibold text-sky-800">— {exp.role}</span>
                    </h3>
                    <span className="text-[10.5px] font-mono font-medium text-slate-600">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-1 space-y-0.5 list-disc list-outside ml-4 text-[11px] leading-snug text-slate-700">
                    {exp.highlights.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right / Sidebar Column: Skills, Awards & Education (4 cols) */}
        <div className="md:col-span-4 print:col-span-4 space-y-4">
          <div className="print-break-inside-avoid">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2.5">
              Skills & Technologies
            </h2>
            <div className="space-y-2.5">
              {profileData.skills.map((group) => (
                <div key={group.category}>
                  <h3 className="text-[11px] font-bold text-slate-900 mb-1">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-block text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-800 rounded border border-slate-200 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="print-break-inside-avoid">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2.5">
              Awards & Recognition
            </h2>
            <div className="space-y-2">
              {profileData.awards.map((award) => (
                <div key={award.title} className="text-[11px]">
                  <div className="font-bold text-slate-900 leading-snug">
                    {award.project}{' '}
                    <span className="font-mono text-[10px] text-slate-500">({award.year})</span>
                  </div>
                  <div className="text-slate-700 leading-snug mt-0.5">{award.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="print-break-inside-avoid">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2">
              Education
            </h2>
            <h3 className="text-[11.5px] font-bold text-slate-950 leading-snug">
              {profileData.education.institution}
            </h3>
            <p className="text-[11px] font-semibold text-sky-800 mt-0.5">
              {profileData.education.degree}
            </p>
            <p className="text-[10.5px] text-slate-700 mt-0.5 leading-snug">
              {profileData.education.major}
            </p>
            <div className="text-[10px] font-mono font-medium text-slate-500 mt-0.5">
              {profileData.education.period}
            </div>
          </div>
        </div>
      </div>

      {/* Optional Portfolio Appendix */}
      {includePortfolioAppendix && (
        <div className="mt-8 pt-6 border-t-2 border-slate-900">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-950 mb-3">
            Selected Portfolio Case Studies & Shipped Applications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {profileData.projects.map((proj) => (
              <div
                key={proj.id}
                className="border border-slate-200 rounded-lg p-3 print-break-inside-avoid bg-slate-50/50"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-xs font-bold text-slate-950">{proj.name}</h3>
                  <span className="text-[10px] font-mono text-slate-500 shrink-0">
                    {proj.period}
                  </span>
                </div>
                <div className="text-[10.5px] font-semibold text-sky-800 mt-0.5">
                  {proj.company} · {proj.platforms.join(', ')}
                </div>
                <p className="text-[11px] text-slate-700 mt-1 leading-snug">{proj.description}</p>
                {proj.achievements && proj.achievements.length > 0 && (
                  <ul className="mt-1.5 list-disc list-inside text-[10.5px] text-slate-700 space-y-0.5">
                    {proj.achievements.slice(0, 2).map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
