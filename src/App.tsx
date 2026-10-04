/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  ExternalLink,
  Copy,
  Check,
  Terminal,
  Cpu,
  ShieldCheck,
  Activity,
  Layers,
  ArrowUpRight,
  Sparkles,
  Zap,
  Award,
  BookOpen,
  UserCheck,
  Play,
  CheckCircle2,
  Code2,
  Globe2,
  Database,
  RefreshCw,
  TrendingDown,
  Clock
} from 'lucide-react';

interface ToastState {
  show: boolean;
  message: string;
}

export default function App() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [toast, setToast] = useState<ToastState>({ show: false, message: '' });
  const [simRunning, setSimRunning] = useState<boolean>(false);
  const [simStep, setSimStep] = useState<number>(0);
  const [showCodeModal, setShowCodeModal] = useState<boolean>(false);
  const [codeCopied, setCodeCopied] = useState<boolean>(false);

  useEffect(() => {
    const aos = (window as unknown as { AOS?: { init: (opts: Record<string, unknown>) => void; refresh: () => void } }).AOS;
    if (aos) {
      aos.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
      });
      aos.refresh();
    }
  }, []);

  const triggerToast = (msg: string) => {
    setToast({ show: true, message: msg });
    setTimeout(() => setToast({ show: false, message: '' }), 2500);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(label);
      triggerToast(`Copied ${label} to clipboard!`);
      setTimeout(() => setCopiedKey(null), 2000);
    });
  };

  const runTestSimulation = () => {
    if (simRunning) return;
    setSimRunning(true);
    setSimStep(1);
    setTimeout(() => setSimStep(2), 700);
    setTimeout(() => setSimStep(3), 1400);
    setTimeout(() => setSimStep(4), 2100);
    setTimeout(() => {
      setSimStep(5);
      setSimRunning(false);
      triggerToast('ATS3 Regression Test Suite: 100% Passed (0 Failures)');
    }, 2800);
  };

  const standaloneHtmlCode = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DOAN PHUONG ANH | QA Engineer — Fintech & AI Testing</title>
  <meta name="description" content="Portfolio of Doan Phuong Anh - QA Engineer breaking software before business does. Specializing in Capital Markets, Test Automation, and AI Systems." />
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Syne:wght@600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" />
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            display: ['Syne', 'sans-serif'],
            heading: ['Outfit', 'sans-serif'],
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          }
        }
      }
    }
  </script>
  <style>
    body { background-color: #07090E; color: #F1F5F9; font-family: 'Plus Jakarta Sans', sans-serif; }
    .font-display { font-family: 'Syne', sans-serif; }
    .font-heading { font-family: 'Outfit', sans-serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; font-variant-numeric: tabular-nums; }
    .glow-cyan { box-shadow: 0 0 30px -5px rgba(6, 182, 212, 0.35); }
    .glow-blue { box-shadow: 0 0 30px -5px rgba(59, 130, 246, 0.35); }
    .glow-purple { box-shadow: 0 0 35px -5px rgba(139, 92, 246, 0.35); }
  </style>
</head>
<body class="bg-[#07090E] text-[#F1F5F9] antialiased selection:bg-[#3B82F6] selection:text-white">
  <!-- Interactive Navigation, Hero, Bento Box, Journey & Contacts included -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
  <script>AOS.init({ duration: 800, once: true });</script>
</body>
</html>`;

  return (
    <div className="min-h-screen bg-[#07090E] text-[#F1F5F9] relative overflow-x-hidden selection:bg-[#3B82F6] selection:text-white">
      {/* Background Ambient Glow Orbs */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed top-1/3 right-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-10 left-1/3 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#0F1424] text-white px-4 py-3 rounded-lg shadow-2xl border border-cyan-500/30 text-xs tracking-wide animate-in fade-in slide-in-from-bottom-2 duration-200">
          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
          <span className="font-medium">{toast.message}</span>
        </div>
      )}

      {/* Top Bar Navigation */}
      <header className="sticky top-0 z-40 bg-[#07090E]/80 backdrop-blur-xl border-b border-[#1E293B]/80 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-display font-bold text-white text-base shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
              PA
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-tight text-white text-base leading-tight group-hover:text-cyan-400 transition-colors">
                DOAN PHUONG ANH
              </span>
              <span className="text-[10px] font-mono text-cyan-400/90 tracking-wider uppercase">
                QA Engineer · Fintech & AI
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider uppercase text-slate-400">
            <a href="#philosophy" className="hover:text-white transition-colors hover:text-cyan-400">
              Manifesto
            </a>
            <a href="#bento" className="hover:text-white transition-colors hover:text-cyan-400">
              Arsenal
            </a>
            <a href="#journey" className="hover:text-white transition-colors hover:text-cyan-400">
              Impact
            </a>
            <a href="#projects" className="hover:text-white transition-colors hover:text-cyan-400">
              Systems
            </a>
            <a href="#credentials" className="hover:text-white transition-colors hover:text-cyan-400">
              Credentials
            </a>
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowCodeModal(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 bg-[#0F1424] hover:bg-[#1E293B] border border-slate-800 hover:border-slate-700 transition-all"
              title="Inspect Single-File HTML"
            >
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>HTML Source</span>
            </button>
            <a
              href="mailto:doanphuonganh19@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-blue-500/25 transition-all transform hover:scale-[1.03] whitespace-nowrap"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-28">
        
        {/* HERO SECTION: High-Impact Split-Screen Storytelling */}
        <section id="hero" className="pt-8 pb-12" data-aos="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Bold Statement */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>IN SPRINT · CAPITAL MARKETS QUALITY ASSURANCE</span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
                I break software <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
                  so your business doesn't.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
                Hi, I'm <strong className="font-semibold text-white">Doan Phuong Anh</strong>. A Quality Assurance Engineer
                obsessed with bulletproofing financial systems, engineering automated regression suites with Python and C#,
                and deploying autonomous AI agents to eliminate defects before production.
              </p>

              {/* Interactive Contact Link Bar */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:doanphuonganh19@gmail.com"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#0E1322] hover:bg-[#151D33] border border-blue-500/30 hover:border-blue-400 text-xs font-mono text-slate-200 transition-all transform hover:scale-[1.02] shadow-md shadow-blue-950/40"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>doanphuonganh19@gmail.com</span>
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard('doanphuonganh19@gmail.com', 'email')}
                  className="p-2.5 rounded-xl bg-[#0E1322] hover:bg-[#151D33] border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
                  title="Copy Email"
                >
                  {copiedKey === 'email' ? <Check className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4" />}
                </button>

                <a
                  href="tel:+84966973004"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#0E1322] hover:bg-[#151D33] border border-slate-800 hover:border-slate-700 text-xs font-mono text-slate-200 transition-all transform hover:scale-[1.02]"
                >
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span>+84 966 973 004</span>
                </a>

                <a
                  href="https://linkedin.com/in/doan-phuong-anh-1440b1272"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0E1322] hover:bg-[#151D33] border border-slate-800 hover:border-cyan-500/50 text-xs font-medium text-slate-200 transition-all transform hover:scale-[1.02]"
                >
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right Column: High-Tech Stylized Avatar & Live Testing Terminal Card */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full relative group">
                {/* Glow ring behind avatar */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 opacity-30 blur-xl group-hover:opacity-60 transition duration-700" />

                {/* Profile Card Container */}
                <div className="relative rounded-2xl bg-[#0B0F1C]/90 border border-slate-800 p-6 backdrop-blur-xl space-y-6">
                  {/* Top Header with Avatar */}
                  <div className="flex items-center gap-4">
                    {/* Stylized Profile Avatar Placeholder */}
                    <div className="relative">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-700 to-cyan-400 flex items-center justify-center p-0.5 shadow-xl shadow-blue-500/20">
                        <div className="w-full h-full bg-[#0B0F1C] rounded-[14px] flex flex-col items-center justify-center">
                          <span className="font-display font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                            PA
                          </span>
                          <span className="text-[9px] font-mono text-slate-400 uppercase tracking-tighter">QA · FINTECH</span>
                        </div>
                      </div>
                      <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#0B0F1C] shadow-md" title="Active in Sprints" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h2 className="font-heading font-bold text-lg text-white">Doan Phuong Anh</h2>
                        <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      </div>
                      <p className="text-xs text-slate-400">QA Engineer @ AllianceBernstein</p>
                      <p className="text-[11px] font-mono text-cyan-400">ATS3 · Python · SQL · Playwright</p>
                    </div>
                  </div>

                  {/* Interactive Live Automated Test Simulator */}
                  <div className="rounded-xl bg-[#060810] border border-slate-800/80 p-4 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        <span className="text-[10px] text-slate-500 ml-2">ats3_runner.py</span>
                      </div>
                      <button
                        type="button"
                        onClick={runTestSimulation}
                        disabled={simRunning}
                        className="inline-flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 font-semibold disabled:opacity-50 transition-colors"
                      >
                        {simRunning ? (
                          <>
                            <RefreshCw className="w-3 h-3 animate-spin" />
                            <span>Running...</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3 h-3 fill-current" />
                            <span>Run Suite</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="space-y-1.5 text-[11px] text-slate-300 min-h-[90px]">
                      <div className="text-slate-500">$ python test_capital_ledger.py --strict</div>
                      {simStep >= 1 && (
                        <div className="text-blue-400">→ [INIT] Loading ATS3 Financial Harness... OK</div>
                      )}
                      {simStep >= 2 && (
                        <div className="text-purple-400">→ [DB] Validating SQL backend ledger integrity... ZERO DRIFT</div>
                      )}
                      {simStep >= 3 && (
                        <div className="text-cyan-400">→ [API] Verifying REST Trade Endpoints... 200 OK</div>
                      )}
                      {simStep >= 4 && (
                        <div className="text-emerald-400 font-bold">✔ 200+ Regression Scenarios Verified. 0 Defects.</div>
                      )}
                      {simStep === 0 && (
                        <div className="text-slate-500 italic">Click "Run Suite" to trigger verification harness...</div>
                      )}
                    </div>
                  </div>

                  {/* Quick Stat Pill Bar */}
                  <div className="grid grid-cols-3 gap-2 text-center pt-1 border-t border-slate-800/80">
                    <div>
                      <p className="font-mono font-bold text-lg text-white">200+</p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Test Cases</p>
                    </div>
                    <div>
                      <p className="font-mono font-bold text-lg text-cyan-400">100+</p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Automations</p>
                    </div>
                    <div>
                      <p className="font-mono font-bold text-lg text-purple-400">60+</p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Sprints</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION: MANIFESTO & PHILOSOPHY */}
        <section id="philosophy" className="py-8" data-aos="fade-up">
          <div className="rounded-3xl bg-gradient-to-b from-[#0F1426] to-[#080B14] border border-blue-500/20 p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The QA Manifesto</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                "Quality isn't an afterthought gate. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  It's a foundational architecture."
                </span>
              </h2>

              <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                <p>
                  In the financial technology landscape, a calculation discrepancy or an untested edge case isn't just an inconvenience—it's capital risk and damaged reputation.
                </p>
                <p>
                  My engineering philosophy focuses on predictive, full-spectrum validation. From designing 100+ automated regression test suites in Python and C# to interrogating complex database records with SQL, I bridge the gap between engineering velocity and ironclad accuracy.
                </p>
                <p className="text-sm text-cyan-300/90 font-mono">
                  Today, I integrate AI agents, Anthropic models, and Playwright automation into modern CI/CD pipelines to ensure enterprise software is resilient before day zero.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: EXPERTISE IN BENTO BOX UI */}
        <section id="bento" className="space-y-8" data-aos="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                The Arsenal
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-1">
                Technical Bento Box
              </h2>
            </div>
            <p className="text-xs font-mono text-slate-400">
              Interactive Architectural Capabilities
            </p>
          </div>

          {/* Bento Box Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            
            {/* Bento Card 1: Test Automation Engine (Span 2) */}
            <div className="md:col-span-2 rounded-2xl bg-[#0D1222]/90 border border-slate-800 p-7 hover:border-blue-500/60 transition-all duration-300 space-y-5 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Terminal className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-blue-950 text-blue-400 border border-blue-800/60">
                  Primary Engine
                </span>
              </div>

              <div>
                <h3 className="font-heading font-bold text-xl text-white group-hover:text-blue-400 transition-colors">
                  Test Automation Engineering
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Building scalable automated regression harnesses in Python and C# under the ATS3 framework, complemented by Playwright for modern web validation and high-throughput API automation.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                {['Python', 'C#', 'ATS3 Framework', 'Playwright', 'API Automation', 'Regression Suites'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-md bg-[#131B30] text-slate-300 border border-slate-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bento Card 2: AI & Emerging Agents */}
            <div className="rounded-2xl bg-[#0D1222]/90 border border-slate-800 p-7 hover:border-purple-500/60 transition-all duration-300 space-y-5 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10 group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-800/60">
                  Anthropic Cert
                </span>
              </div>

              <div>
                <h3 className="font-heading font-bold text-xl text-white group-hover:text-purple-400 transition-colors">
                  AI & Agentic Testing
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Leveraging Claude Code, Anthropic API, Model Context Protocol (MCP), and multi-agent workflows to accelerate test scenario authoring and automated anomaly detection.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                {['Claude Code', 'Anthropic API', 'MCP', 'AI Agents', 'C++'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-md bg-[#131B30] text-purple-300/90 border border-purple-900/40">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bento Card 3: Deep Data & SQL Backend Integrity */}
            <div className="rounded-2xl bg-[#0D1222]/90 border border-slate-800 p-7 hover:border-cyan-500/60 transition-all duration-300 space-y-5 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Database className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                  Zero Drift
                </span>
              </div>

              <div>
                <h3 className="font-heading font-bold text-xl text-white group-hover:text-cyan-400 transition-colors">
                  Database & API Validation
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Complex SQL backend queries, data reconciliation between ledger records and client displays, and Postman API contract testing.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                {['SQL', 'Postman', 'REST APIs', 'Data Validation', 'Discrepancy Triage'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-md bg-[#131B30] text-cyan-300/90 border border-cyan-900/40">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bento Card 4: Global Agile & CI/CD Pipelines (Span 2) */}
            <div className="md:col-span-2 rounded-2xl bg-[#0D1222]/90 border border-slate-800 p-7 hover:border-emerald-500/60 transition-all duration-300 space-y-5 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10 group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Globe2 className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                  Global Scale
                </span>
              </div>

              <div>
                <h3 className="font-heading font-bold text-xl text-white group-hover:text-emerald-400 transition-colors">
                  Global Delivery & DevOps Ecosystem
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Embedded across 60+ continuous Agile sprints collaborating directly with international financial engineering teams in Europe and the United States. Proficient in Git, Azure CI/CD pipelines, Jira, and Confluence.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                {['Azure CI/CD', 'Git / GitHub', 'Jira', 'Confluence', 'Agile / Scrum', 'SDLC', 'Cross-Border Collaboration'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-md bg-[#131B30] text-slate-300 border border-slate-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bento Card 5: Core Testing Methodologies (Span 2) */}
            <div className="md:col-span-2 rounded-2xl bg-[#0D1222]/90 border border-slate-800 p-7 hover:border-blue-500/60 transition-all duration-300 space-y-5 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-blue-950 text-blue-400 border border-blue-800/60">
                  Core Discipline
                </span>
              </div>

              <div>
                <h3 className="font-heading font-bold text-xl text-white group-hover:text-blue-400 transition-colors">
                  Root Cause Analysis & QA Lifecycle
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  End-to-end defect management, systematic test case design, regression impact scoping, and comprehensive root cause analysis to eliminate recurring defects at source.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                {['Functional Testing', 'Regression Testing', 'Integration Testing', 'E2E Testing', 'Defect Management', 'Root Cause Analysis'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-md bg-[#131B30] text-slate-300 border border-slate-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* SECTION: THE JOURNEY (EXPERIENCE AS IMPACT CASE STUDIES) */}
        <section id="journey" className="space-y-10" data-aos="fade-up">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Proven Track Record
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-1">
              The Journey & Quantitative Impact
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Where code verification met measurable business metrics.
            </p>
          </div>

          <div className="space-y-8">
            
            {/* Case Study 1: AllianceBernstein */}
            <div className="rounded-3xl bg-[#0D1222]/90 border border-slate-800 p-8 sm:p-10 relative overflow-hidden group hover:border-blue-500/40 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    <span>Capital Markets Financial Systems</span>
                    <span aria-hidden="true">·</span>
                    <span>Jan 2026 — Present</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                    AllianceBernstein (AB)
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">Role: Quality Assurance Engineer · Ha Noi, Vietnam</p>
                </div>

                <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-300">
                  <span className="px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/80 text-blue-300">
                    ATS3 Automation
                  </span>
                  <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300">
                    EU/US Sprints
                  </span>
                </div>
              </div>

              {/* Bold Metric Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-b border-slate-800/60">
                <div className="space-y-1">
                  <p className="font-display font-extrabold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    200+
                  </p>
                  <p className="text-xs text-slate-400 leading-tight">Functional, regression & data validation test cases</p>
                </div>
                <div className="space-y-1">
                  <p className="font-display font-extrabold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                    100+
                  </p>
                  <p className="text-xs text-slate-400 leading-tight">Automated regression scenarios in Python & C#</p>
                </div>
                <div className="space-y-1">
                  <p className="font-display font-extrabold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    150+
                  </p>
                  <p className="text-xs text-slate-400 leading-tight">Defects resolved via SQL and root-cause analysis</p>
                </div>
                <div className="space-y-1">
                  <p className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                    60+
                  </p>
                  <p className="text-xs text-slate-400 leading-tight">Continuous Agile sprints with international teams</p>
                </div>
              </div>

              {/* Narrative Summary */}
              <div className="pt-6 space-y-3 text-sm text-slate-300 leading-relaxed font-light">
                <p>
                  Safeguarding complex financial applications by executing comprehensive end-to-end, API, backend, and database test suites. Developed and maintained robust automated regression scenarios within the ATS3 framework, drastically improving regression coverage and reducing manual testing overhead.
                </p>
                <p>
                  Employed SQL to validate backend calculations and investigate financial discrepancies. Collaborated across 60+ sprints with international engineering and business teams in the US and Europe using Jira, Git, and Azure tools, while exploring Playwright for next-generation web testing.
                </p>
              </div>
            </div>

            {/* Case Study 2: CMC Global */}
            <div className="rounded-3xl bg-[#0D1222]/90 border border-slate-800 p-8 sm:p-10 relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    <span>Enterprise Workflow Platforms</span>
                    <span aria-hidden="true">·</span>
                    <span>Sep 2024 — Jan 2025</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                    CMC Global
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">Role: Low-Code Developer Intern · Hanoi, Vietnam</p>
                </div>

                <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-300">
                  <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300">
                    Power Apps & Mendix
                  </span>
                </div>
              </div>

              {/* Bold Metric Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-b border-slate-800/60">
                <div className="space-y-1">
                  <p className="font-display font-extrabold text-3xl sm:text-4xl text-cyan-400 flex items-center">
                    <TrendingDown className="w-6 h-6 mr-1 text-cyan-400" />
                    40%
                  </p>
                  <p className="text-xs text-slate-400 leading-tight">Reduction in Employee Onboarding Time (Power Apps)</p>
                </div>
                <div className="space-y-1">
                  <p className="font-display font-extrabold text-3xl sm:text-4xl text-blue-400 flex items-center">
                    <TrendingDown className="w-6 h-6 mr-1 text-blue-400" />
                    50%
                  </p>
                  <p className="text-xs text-slate-400 leading-tight">Reduction in HR Leave Processing Duration</p>
                </div>
                <div className="space-y-1">
                  <p className="font-display font-extrabold text-3xl sm:text-4xl text-emerald-400 flex items-center">
                    <TrendingDown className="w-6 h-6 mr-1 text-emerald-400" />
                    80%
                  </p>
                  <p className="text-xs text-slate-400 leading-tight">Decrease in Payroll Discrepancies (Mendix HR)</p>
                </div>
              </div>

              {/* Narrative Summary */}
              <div className="pt-6 space-y-3 text-sm text-slate-300 leading-relaxed font-light">
                <p>
                  <strong className="text-white font-medium">Employee Onboarding System:</strong> Performed functional and black-box testing to validate business rules and process automation, boosting process efficiency by 50% and slashing onboarding time by 40%.
                </p>
                <p>
                  <strong className="text-white font-medium">HR Leave Management System:</strong> Acted as Business Liaison between stakeholders and dev teams, analyzing complex leave accrual rules to eradicate 80% of payroll reconciliation discrepancies.
                </p>
              </div>
            </div>

            {/* Case Study 3: CEC Teaching Assistant */}
            <div className="rounded-3xl bg-[#0D1222]/90 border border-slate-800 p-8 sm:p-10 relative overflow-hidden group hover:border-purple-500/40 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider">
                    <span>Engineering Pedagogy & Mentorship</span>
                    <span aria-hidden="true">·</span>
                    <span>Jan 2023 — Dec 2025</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                    CEC — Teaching Assistant
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">Ha Noi, Vietnam</p>
                </div>
                <span className="font-mono text-xs text-purple-400">50+ Students Mentored</span>
              </div>

              <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed font-light">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <p>
                    Guided <strong className="text-white font-medium">50+ students</strong> through rigorous programming exercises and live debugging sessions, sharpening algorithmic problem-solving and clean code discipline.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <p>
                    Reviewed and evaluated <strong className="text-white font-medium">100+ programming assignments</strong>, pinpointing logic flaws, runtime errors, and performance bottlenecks to deliver personalized technical feedback.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION: PROJECTS & AI RESEARCH */}
        <section id="projects" className="space-y-8" data-aos="fade-up">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Applied Machine Learning
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Featured Research & AI Systems
            </h2>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[#0F1528] via-[#0A0E1A] to-[#070A12] border border-blue-500/30 p-8 sm:p-10 relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/10 transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  Deep Learning · 1D-CNN · Sensor Telemetry
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  Human Activity Recognition & Fall Detection System
                </h3>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-blue-950 border border-blue-800 text-blue-300 text-xs font-mono whitespace-nowrap">
                Real-Time Fall AI
              </span>
            </div>

            <div className="py-6 space-y-4 text-sm text-slate-300 leading-relaxed font-light max-w-4xl">
              <p>
                Developed an AI-powered detection system utilizing smartphone inertial sensor data (accelerometer and gyroscope) coupled with a custom <strong className="text-white font-medium">1D-CNN (Convolutional Neural Network) architecture</strong> to capture temporal movement dynamics and identify abrupt human fall incidents in real time.
              </p>
              <p>
                Spearheaded the full engineering lifecycle: from raw sensor data acquisition and signal filtering to neural network training, validation benchmarking, and comprehensive technical documentation authored as an in-depth <strong className="text-white font-medium">5-chapter engineering thesis</strong>.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded bg-[#131B30] text-cyan-300 border border-slate-800">1D-CNN Deep Learning</span>
              <span className="px-2.5 py-1 rounded bg-[#131B30] text-slate-300 border border-slate-800">Smartphone Sensors</span>
              <span className="px-2.5 py-1 rounded bg-[#131B30] text-slate-300 border border-slate-800">Time-Series Processing</span>
              <span className="px-2.5 py-1 rounded bg-[#131B30] text-slate-300 border border-slate-800">5-Chapter Thesis</span>
            </div>
          </div>
        </section>

        {/* SECTION: CREDENTIALS & EDUCATION */}
        <section id="credentials" className="space-y-8" data-aos="fade-up">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Certifications & Academic Foundation
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Verified Credentials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Certification Card */}
            <div className="rounded-2xl bg-[#0D1222]/90 border border-purple-500/30 p-8 space-y-5 hover:border-purple-400 transition-all hover:shadow-xl hover:shadow-purple-500/10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-purple-400">May 2026</span>
              </div>

              <div>
                <h3 className="font-heading font-bold text-xl text-white">
                  Anthropic Certified Associate
                </h3>
                <p className="text-xs text-slate-400 mt-1">Issued by Anthropic</p>
              </div>

              <div className="p-3 rounded-xl bg-[#080B14] border border-purple-900/40 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Credential ID:</span>
                <span className="text-purple-300 font-bold select-all">cn9968wjp3bb</span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Verified expertise in deploying Anthropic models, building prompt architectures, leveraging Model Context Protocol (MCP), and engineering autonomous AI workflows.
              </p>
            </div>

            {/* Education Card */}
            <div className="rounded-2xl bg-[#0D1222]/90 border border-blue-500/30 p-8 space-y-5 hover:border-blue-400 transition-all hover:shadow-xl hover:shadow-blue-500/10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-blue-400">Oct 2022 — Jun 2026</span>
              </div>

              <div>
                <h3 className="font-heading font-bold text-xl text-white">
                  BSc in Information Technology
                </h3>
                <p className="text-xs text-slate-400 mt-1">Electric Power University — Dai Hoc Dien Luc</p>
              </div>

              <div className="space-y-2 text-xs text-slate-300 font-light pt-2 border-t border-slate-800">
                <p><strong className="text-white font-medium">Relevant Coursework:</strong> Software Engineering, Database Management (SQL), Software Testing, Data Structures & Algorithms, Business Process Modeling.</p>
                <p><strong className="text-white font-medium">Competencies:</strong> Requirements engineering, technical specifications, and Agile software development lifecycles.</p>
              </div>
            </div>

          </div>

          {/* Languages & Reference Banner */}
          <div className="rounded-2xl bg-[#090D18] border border-slate-800 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Language Proficiency</p>
              <p className="font-heading font-bold text-base text-white">English — Professional Working Proficiency</p>
            </div>
            <div className="space-y-1 text-center sm:text-right border-t sm:border-t-0 sm:border-l border-slate-800 pt-4 sm:pt-0 sm:pl-6">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">Professional Reference</p>
              <p className="font-heading font-bold text-base text-white">Quyen Phan · Project Lead</p>
              <a href="mailto:QuyenNhan.Phan@alliancebernstein.com" className="text-xs font-mono text-cyan-400 hover:underline">
                QuyenNhan.Phan@alliancebernstein.com (AB)
              </a>
            </div>
          </div>
        </section>

        {/* SECTION: INTERACTIVE CONTACT & DIALOGUE */}
        <section id="contact" className="py-12" data-aos="fade-up">
          <div className="rounded-3xl bg-gradient-to-b from-[#0F1426] via-[#0A0D1A] to-[#07090E] border border-cyan-500/30 p-8 sm:p-14 relative overflow-hidden text-center space-y-8">
            <div className="max-w-2xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
                <Zap className="w-3.5 h-3.5" />
                <span>Ready for High-Impact QA</span>
              </span>

              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                Let's build zero-defect software together.
              </h2>

              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                Whether you need automated test frameworks for financial platforms, database verification harnesses, or AI-driven quality assurance, my inbox is open.
              </p>
            </div>

            {/* Glowing Interactive Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-2">
              <a
                href="mailto:doanphuonganh19@gmail.com"
                className="p-6 rounded-2xl bg-[#0D1222] border border-slate-800 hover:border-cyan-400 transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mx-auto group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <p className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">Direct Email</p>
                  <p className="font-mono text-xs font-medium text-white truncate">doanphuonganh19@gmail.com</p>
                </div>
                <span className="text-xs text-cyan-400 font-semibold mt-4 flex items-center justify-center gap-1">
                  <span>Send Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>

              <a
                href="tel:+84966973004"
                className="p-6 rounded-2xl bg-[#0D1222] border border-slate-800 hover:border-purple-400 transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10 group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mx-auto group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <p className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">Call / WhatsApp</p>
                  <p className="font-mono text-xs font-medium text-white">+84 966 973 004</p>
                </div>
                <span className="text-xs text-purple-400 font-semibold mt-4 flex items-center justify-center gap-1">
                  <span>Initiate Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>

              <a
                href="https://linkedin.com/in/doan-phuong-anh-1440b1272"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-[#0D1222] border border-slate-800 hover:border-blue-400 transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mx-auto group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <p className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">Professional Network</p>
                  <p className="font-mono text-xs font-medium text-white truncate">doan-phuong-anh</p>
                </div>
                <span className="text-xs text-blue-400 font-semibold mt-4 flex items-center justify-center gap-1">
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 bg-[#060810] text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-white">DOAN PHUONG ANH</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>QA Engineer (Fintech & AI)</span>
          </div>

          <div className="flex items-center gap-6 font-mono text-[11px]">
            <a href="mailto:doanphuonganh19@gmail.com" className="hover:text-cyan-400 transition-colors">
              doanphuonganh19@gmail.com
            </a>
            <a href="tel:+84966973004" className="hover:text-cyan-400 transition-colors">
              +84 966 973 004
            </a>
            <a
              href="https://linkedin.com/in/doan-phuong-anh-1440b1272"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>

          <div className="text-[11px]">
            © {new Date().getFullYear()} Doan Phuong Anh. Engineered with Precision.
          </div>
        </div>
      </footer>

      {/* Standalone HTML Inspection Modal */}
      {showCodeModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0B0F1C] border border-slate-800 rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl">
            <div className="p-5 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="font-heading font-bold text-lg text-white">Standalone Single-File HTML Code</h3>
                <p className="text-xs text-slate-400">Complete self-contained portfolio with Tailwind CDN, Google Fonts & AOS</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(standaloneHtmlCode);
                    setCodeCopied(true);
                    triggerToast('Complete HTML code copied to clipboard!');
                    setTimeout(() => setCodeCopied(false), 2000);
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-black transition-colors"
                >
                  {codeCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{codeCopied ? 'Copied!' : 'Copy Full HTML'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowCodeModal(false)}
                  className="px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-auto p-5 bg-[#05070D] font-mono text-xs text-slate-300 leading-relaxed">
              <pre className="whitespace-pre-wrap">{standaloneHtmlCode}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
