import React, { useState, useEffect } from 'react';
import {
  Download,
  FileText,
  ExternalLink,
  Mail,
  MapPin,
  Award,
  Briefcase,
  Layers,
  GraduationCap,
  Sun,
  Moon,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  X,
  Printer,
  ShieldCheck,
  Smartphone,
  Code2,
  ZoomIn,
  Copy,
  Check,
  Eye,
} from 'lucide-react';
import { profileData, PortfolioProject, getDecodedEmail } from './data/profileData';
import { ResumeSheet } from './components/ResumeSheet';

export function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [includePrivateContact, setIncludePrivateContact] = useState(true);
  const [includePortfolioAppendix, setIncludePortfolioAppendix] = useState(false);
  const [revealedEmail, setRevealedEmail] = useState<string | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    title: string;
  } | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<Record<string, number>>({});

  const handleRevealAndCopyEmail = async () => {
    const decoded = getDecodedEmail();
    setRevealedEmail(decoded);
    try {
      await navigator.clipboard.writeText(decoded);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2500);
    } catch {
      // Clipboard API fallback if blocked
    }
  };

  const handleOpenMailClient = () => {
    const decoded = getDecodedEmail();
    window.location.href = `mailto:${decoded}`;
  };

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const featuredProjects = profileData.projects.filter((p) => p.featured);
  const filteredProjects =
    selectedCategory === 'all'
      ? profileData.projects
      : profileData.projects.filter((p) => p.category === selectedCategory);

  const handlePrintPdf = () => {
    window.print();
  };

  const getActiveImage = (project: PortfolioProject) => {
    const idx = activeImageIndex[project.id] || 0;
    return project.images[idx] || project.images[0];
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
      {/* Main Website Content (Hidden when printing to PDF) */}
      <div className="no-print">
        {/* Top Ambient Glow */}
        <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[520px] overflow-hidden">
          <div className="absolute left-1/2 top-[-180px] h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-sky-500/15 via-indigo-500/10 to-emerald-500/10 blur-3xl" />
        </div>

        {/* Sticky Navigation */}
        <header className="sticky top-0 z-40 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3.5">
            <a href="#" className="flex items-center gap-3 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white font-bold text-sm shadow-md shadow-sky-500/20">
                KL
              </div>
              <div>
                <div className="text-sm font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                  {profileData.name}
                </div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  Senior iOS & Mobile Engineer
                </div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
              <a
                href="#case-studies"
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                Case Studies
              </a>
              <a
                href="#experience"
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                Experience
              </a>
              <a
                href="#archive"
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                App Archive ({profileData.projects.length})
              </a>
              <a
                href="#skills"
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                Skills & Awards
              </a>
            </nav>

            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle theme"
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer"
                title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setShowResumeModal(true)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-sky-500" />
                Preview Resume
              </button>

              <a
                href="Sai_Tat_Kelvin_Lam_Resume.pdf"
                download="Sai_Tat_Kelvin_Lam_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-lg shadow-sky-500/20 transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Resume (PDF)</span>
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-12 pb-16 sm:pt-20 sm:pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-medium text-sky-600 dark:text-sky-300 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>15+ Years Shipping High-Scale iOS & Mobile Systems</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              {profileData.name}
            </h1>
            <p className="mt-3 text-xl sm:text-2xl font-semibold bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              {profileData.title} — {profileData.subtitle}
            </p>

            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {profileData.summary}
            </p>

            {/* Location & Contact Pills */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-sky-500" />
                {profileData.publicLocation}
              </span>

              {revealedEmail ? (
                <div className="inline-flex items-center gap-2 rounded-lg border border-sky-500/30 bg-sky-500/10 px-2.5 py-1 text-slate-800 dark:text-slate-200">
                  <Mail className="w-3.5 h-3.5 text-sky-500" />
                  <button
                    type="button"
                    onClick={handleOpenMailClient}
                    className="font-mono font-medium hover:text-sky-500 dark:hover:text-sky-400 underline cursor-pointer"
                    title="Open default mail app"
                  >
                    {revealedEmail}
                  </button>
                  <button
                    type="button"
                    onClick={handleRevealAndCopyEmail}
                    className="inline-flex items-center gap-1 rounded bg-slate-200/80 dark:bg-slate-800 px-1.5 py-0.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300 hover:bg-sky-500 hover:text-slate-950 transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {emailCopied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleRevealAndCopyEmail}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 px-2.5 py-1 hover:border-sky-500/50 hover:text-sky-500 dark:hover:text-sky-400 transition-colors cursor-pointer font-medium"
                  title="Click to reveal and copy email address"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-500" />
                  <span>Click to Reveal Email</span>
                  <Eye className="w-3.5 h-3.5 opacity-70" />
                </button>
              )}

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-sky-500 dark:hover:text-sky-400 transition-colors font-medium"
              >
                <ExternalLink className="w-4 h-4 text-sky-500" />
                linkedin.com/in/lamsaitat
              </a>
            </div>

            {/* Hero Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="Sai_Tat_Kelvin_Lam_Resume.pdf"
                download="Sai_Tat_Kelvin_Lam_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-lg shadow-sky-500/25 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download Resume (PDF)
              </a>

              <button
                onClick={() => setShowResumeModal(true)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 hover:border-sky-500/50 text-slate-800 dark:text-slate-100 transition-all cursor-pointer"
              >
                <Printer className="w-4 h-4 text-sky-500" />
                Interactive Resume & Custom PDF
              </button>

              <a
                href="#case-studies"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              >
                View Flagship Work
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 4 Headline Metric Cards */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {profileData.metrics.map((metric) => (
              <div
                key={metric.label}
                className="relative overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900/60 p-5 shadow-sm hover:border-sky-500/40 transition-all"
              >
                <div
                  className={`h-1 w-12 rounded-full bg-gradient-to-r ${metric.accent} mb-3.5`}
                />
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white font-mono">
                  {metric.value}
                </div>
                <div className="mt-1 text-sm font-bold text-slate-800 dark:text-slate-200">
                  {metric.label}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Flagship Engineering Case Studies */}
        <section
          id="case-studies"
          className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-t border-slate-200/80 dark:border-slate-800/80"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
                <Layers className="w-4 h-4" />
                Flagship Engineering Case Studies
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                High-Scale Systems & Architectural Impact
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md">
              Deep-dive highlights from mission-critical banking, digital government identity, and national broadcast streaming platforms.
            </p>
          </div>

          <div className="space-y-10">
            {featuredProjects.map((project) => {
              const currentImg = getActiveImage(project);
              return (
                <div
                  key={project.id}
                  id={`project-${project.id}`}
                  className="group rounded-3xl border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-slate-900/50 overflow-hidden shadow-sm hover:border-sky-500/40 transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Left Content Column (7 cols) */}
                    <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="text-xs font-mono font-semibold text-sky-600 dark:text-sky-400">
                            {project.company} · {project.period}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {project.platforms.map((plat) => (
                              <span
                                key={plat}
                                className="px-2.5 py-0.5 text-[11px] font-mono font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                              >
                                {plat}
                              </span>
                            ))}
                          </div>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                          {project.name}
                        </h3>
                        <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                          {project.tagline}
                        </p>
                        <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Impact Metrics Pills */}
                        {project.metrics && project.metrics.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.metrics.map((m) => (
                              <span
                                key={m}
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                {m}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Engineering & Leadership Achievements */}
                        {project.achievements && project.achievements.length > 0 && (
                          <div className="mt-5 pt-5 border-t border-slate-100 dark:border-slate-800/80">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                              Key Engineering Contributions & Outcomes
                            </h4>
                            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                              {project.achievements.map((ach, i) => (
                                <li key={i} className="flex items-start gap-2.5">
                                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-500 shrink-0" />
                                  <span className="leading-relaxed">{ach}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Links Footer */}
                      {project.links.length > 0 && (
                        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap items-center gap-3">
                          {project.links.map((lk) => (
                            <a
                              key={lk.url}
                              href={lk.url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-slate-800 text-white hover:bg-sky-600 dark:hover:bg-sky-500 dark:hover:text-slate-950 transition-colors"
                            >
                              <Smartphone className="w-3.5 h-3.5" />
                              View on {lk.label}
                              <ExternalLink className="w-3 h-3 opacity-75" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Right Visual Showcase Column (5 cols) */}
                    <div className="lg:col-span-5 bg-slate-100/70 dark:bg-slate-950/70 border-t lg:border-t-0 lg:border-l border-slate-200/80 dark:border-slate-800/80 p-6 flex flex-col items-center justify-center">
                      <div
                        onClick={() =>
                          setLightboxImage({ src: currentImg, title: project.name })
                        }
                        className="relative group/img cursor-pointer rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900/40 shadow-lg max-h-[340px] flex items-center justify-center"
                      >
                        <img
                          src={currentImg}
                          alt={project.name}
                          className="max-h-[320px] w-auto object-contain transition-transform duration-300 group-hover/img:scale-[1.02]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-slate-950/0 group-hover/img:bg-slate-950/30 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover/img:opacity-100 transition-opacity inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-medium shadow-lg">
                            <ZoomIn className="w-3.5 h-3.5" />
                            Enlarge Screenshot
                          </span>
                        </div>
                      </div>

                      {/* Thumbnail Selector if Multiple Screenshots */}
                      {project.images.length > 1 && (
                        <div className="mt-4 flex items-center gap-2 overflow-x-auto max-w-full pb-1">
                          {project.images.map((img, idx) => {
                            const isSelected = (activeImageIndex[project.id] || 0) === idx;
                            return (
                              <button
                                key={img}
                                onClick={() =>
                                  setActiveImageIndex((prev) => ({
                                    ...prev,
                                    [project.id]: idx,
                                  }))
                                }
                                className={`h-12 w-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                                  isSelected
                                    ? 'border-sky-500 scale-105 shadow-sm'
                                    : 'border-slate-300 dark:border-slate-800 opacity-60 hover:opacity-100'
                                }`}
                              >
                                <img
                                  src={img}
                                  alt={`${project.name} thumbnail ${idx + 1}`}
                                  className="h-full w-full object-cover"
                                />
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Experience Timeline Section */}
        <section
          id="experience"
          className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-t border-slate-200/80 dark:border-slate-800/80"
        >
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
              <Briefcase className="w-4 h-4" />
              Career Trajectory (2010 – Present)
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              15+ Years of Engineering Leadership & Delivery
            </h2>
          </div>

          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 sm:ml-6 space-y-10">
            {profileData.experiences.map((exp, idx) => (
              <div key={exp.id} className="relative pl-6 sm:pl-8">
                {/* Timeline Dot */}
                <span
                  className={`absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 ${
                    idx === 0
                      ? 'border-sky-500 bg-sky-500 ring-4 ring-sky-500/20'
                      : 'border-slate-400 dark:border-slate-600 bg-white dark:bg-slate-950'
                  }`}
                />

                <div className="rounded-2xl border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-slate-900/40 p-5 sm:p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        {exp.role}{' '}
                        <span className="text-sky-600 dark:text-sky-400">@ {exp.company}</span>
                      </h3>
                      <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                        {exp.location}
                        {exp.type ? ` · ${exp.type}` : ''}
                      </div>
                    </div>
                    <span className="inline-flex items-center self-start sm:self-center px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {exp.period}
                    </span>
                  </div>

                  {exp.summary && (
                    <p className="mt-3 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                      {exp.summary}
                    </p>
                  )}

                  <ul className="mt-3.5 space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {exp.highlights.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-500 shrink-0" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/70 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Complete Shipped App Archive (All 16 Portfolio Projects) */}
        <section
          id="archive"
          className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-t border-slate-200/80 dark:border-slate-800/80"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
                <Smartphone className="w-4 h-4" />
                Complete Product Portfolio (2010 – 2026)
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                All Shipped Apps & Commercial Projects
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: `All (${profileData.projects.length})` },
                { id: 'fintech', label: 'Fintech & Enterprise' },
                { id: 'govtech', label: 'GovTech' },
                { id: 'media', label: 'Media & Publishing' },
                { id: 'consumer', label: 'Consumer & Award Winners' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-sky-500 text-slate-950 shadow-sm'
                      : 'bg-slate-200/70 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-300/70 dark:hover:bg-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-slate-900/50 overflow-hidden shadow-sm hover:border-sky-500/40 transition-all"
              >
                <div>
                  {/* Screenshot Header */}
                  {proj.images.length > 0 && (
                    <div
                      onClick={() =>
                        setLightboxImage({ src: proj.images[0], title: proj.name })
                      }
                      className="relative h-48 w-full bg-slate-100 dark:bg-slate-950 border-b border-slate-200/70 dark:border-slate-800/70 flex items-center justify-center p-3 cursor-pointer group/cardimg overflow-hidden"
                    >
                      <img
                        src={proj.images[0]}
                        alt={proj.name}
                        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover/cardimg:scale-105"
                        loading="lazy"
                      />
                      {proj.images.length > 1 && (
                        <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-slate-900/80 text-white text-[10px] font-mono">
                          +{proj.images.length - 1} more
                        </span>
                      )}
                    </div>
                  )}

                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-sky-600 dark:text-sky-400">
                      <span>{proj.company}</span>
                      <span>{proj.period}</span>
                    </div>

                    <h3 className="mt-1 text-base font-bold text-slate-900 dark:text-white">
                      {proj.name}
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {proj.description}
                    </p>

                    {proj.achievements && proj.achievements.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/70">
                        <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                          ★ {proj.achievements[0]}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-5 pb-4 pt-2 flex items-center justify-between gap-2 border-t border-slate-100 dark:border-slate-800/50">
                  <div className="flex flex-wrap gap-1">
                    {proj.platforms.slice(0, 2).map((pl) => (
                      <span
                        key={pl}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {pl}
                      </span>
                    ))}
                  </div>

                  {proj.links.length > 0 && (
                    <a
                      href={proj.links[0].url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                    >
                      {proj.links[0].label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills, Awards & Education Section */}
        <section
          id="skills"
          className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-t border-slate-200/80 dark:border-slate-800/80"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Technical Radar (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
                  <Code2 className="w-4 h-4" />
                  Technical Capabilities
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Skills & Engineering Stack
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profileData.skills.map((group) => (
                  <div
                    key={group.category}
                    className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-5"
                  >
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {group.category}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 mb-3.5">
                      {group.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards & Education (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-500 mb-2">
                  <Award className="w-4 h-4" />
                  Honours & Education
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Awards & Academic Foundation
                </h2>
              </div>

              {/* Education Card */}
              <div className="rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-500/10 via-transparent to-indigo-500/10 p-5">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-500 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-semibold text-sky-600 dark:text-sky-400">
                      {profileData.education.period}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                      {profileData.education.degree}
                    </h3>
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
                      {profileData.education.institution}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      {profileData.education.major}
                    </p>
                  </div>
                </div>
              </div>

              {/* Awards List */}
              <div className="space-y-3">
                {profileData.awards.map((award) => (
                  <div
                    key={award.title}
                    className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-4"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                        {award.project}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">
                        {award.year}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                      {award.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA & Footer */}
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Ready to discuss mobile architecture or senior engineering leadership?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Download a copy of my resume in PDF format or reach out directly via email or LinkedIn.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="Sai_Tat_Kelvin_Lam_Resume.pdf"
                download="Sai_Tat_Kelvin_Lam_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-md shadow-sky-500/20 transition-all"
              >
                <Download className="w-4 h-4" />
                Export Resume (PDF)
              </a>
              <button
                onClick={() => setShowResumeModal(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
              >
                <Printer className="w-4 h-4 text-sky-500" />
                Customize & Print PDF
              </button>

              {revealedEmail ? (
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border border-sky-500/40 bg-sky-500/10">
                  <Mail className="w-4 h-4 text-sky-500" />
                  <button
                    type="button"
                    onClick={handleOpenMailClient}
                    className="font-mono hover:text-sky-400 underline cursor-pointer"
                  >
                    {revealedEmail}
                  </button>
                  <button
                    type="button"
                    onClick={handleRevealAndCopyEmail}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[11px] hover:bg-sky-500 hover:text-slate-950 transition-colors cursor-pointer"
                  >
                    {emailCopied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-500" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleRevealAndCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-sky-500" />
                  Reveal & Copy Email
                </button>
              )}
            </div>
          </div>
        </footer>

        {/* Lightbox Modal for Screenshots */}
        {lightboxImage && (
          <div
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] flex flex-col items-center"
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-10 right-0 inline-flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" /> Close
              </button>
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="max-h-[82vh] w-auto rounded-2xl border border-slate-800 shadow-2xl object-contain bg-slate-900"
              />
              <div className="mt-3 text-sm font-semibold text-slate-200">
                {lightboxImage.title}
              </div>
            </div>
          </div>
        )}

        {/* Interactive Resume Preview & Custom PDF Export Modal */}
        {showResumeModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm overflow-y-auto p-3 sm:p-6">
            <div className="mx-auto max-w-4xl">
              {/* Control Bar */}
              <div className="sticky top-2 z-10 mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-700 bg-slate-900/95 px-4 py-3 text-white shadow-xl backdrop-blur-md">
                <div className="flex flex-wrap items-center gap-4 text-xs">
                  <label className="inline-flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={includePrivateContact}
                      onChange={(e) => setIncludePrivateContact(e.target.checked)}
                      className="rounded border-slate-600 text-sky-500 focus:ring-sky-500"
                    />
                    <span className="inline-flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Include Phone & Street Address on PDF
                    </span>
                  </label>

                  <label className="inline-flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={includePortfolioAppendix}
                      onChange={(e) => setIncludePortfolioAppendix(e.target.checked)}
                      className="rounded border-slate-600 text-sky-500 focus:ring-sky-500"
                    />
                    <span>Include Full Portfolio Appendix</span>
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="Sai_Tat_Kelvin_Lam_Resume.pdf"
                    download="Sai_Tat_Kelvin_Lam_Resume.pdf"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Direct Download PDF
                  </a>

                  <button
                    onClick={handlePrintPdf}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    Print / Save Custom PDF
                  </button>

                  <button
                    onClick={() => setShowResumeModal(false)}
                    className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Close Preview"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Rendered Resume Sheet */}
              <ResumeSheet
                includePrivateContact={includePrivateContact}
                includePortfolioAppendix={includePortfolioAppendix}
              />
            </div>
          </div>
        )}
      </div>

      {/* Dedicated Print-Only Resume Sheet (Always rendered when browser prints / exports PDF) */}
      <div className="hidden print-only">
        <ResumeSheet
          includePrivateContact={includePrivateContact}
          includePortfolioAppendix={includePortfolioAppendix}
        />
      </div>
    </div>
  );
}

