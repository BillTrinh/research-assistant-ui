import React, { useState } from "react";
import {
  BookOpen,
  FileText,
  UploadCloud,
  Search,
  Send,
  CheckCircle2,
  Circle,
  Sparkles,
  Library,
  Plus,
  MoreHorizontal,
  Clock3,
  Quote,
  PanelRight,
  Moon,
  Sun,
} from "lucide-react";

const documents = [
  {
    title: "Proposal.pdf",
    type: "PDF",
    size: "3.6 MB",
    status: "Indexed",
    lightStatus: "bg-emerald-50 text-emerald-700 border-emerald-100",
    darkStatus: "bg-emerald-500/10 text-emerald-300 border-emerald-400/20",
  },
  {
    title: "Dataset Notes.pdf",
    type: "PDF",
    size: "360 KB",
    status: "Ready",
    lightStatus: "bg-blue-50 text-blue-700 border-blue-100",
    darkStatus: "bg-blue-500/10 text-blue-300 border-blue-400/20",
  },
  {
    title: "Small Dataset.csv",
    type: "CSV",
    size: "36 KB",
    status: "Review",
    lightStatus: "bg-amber-50 text-amber-700 border-amber-100",
    darkStatus: "bg-amber-500/10 text-amber-300 border-amber-400/20",
  },
];

const starterTasks = [
  { id: 1, label: "Upload proposal", done: true },
  { id: 2, label: "Ask assistant to summarize sources", done: true },
  { id: 3, label: "Extract key research gaps", done: false },
  { id: 4, label: "Find reference materials", done: false },
];

const messages = [
  {
    role: "assistant",
    text: "Welcome to Fabscholar! I’m here to help you reach new heights in academic research. ",
  },
  {
    role: "user",
    text: "Brilliant !!!",
  },
  {
    role: "assistant",
    text: "Hihi, I’m excited to assist you with your literature review. You can ask me to summarize your sources, compare arguments, identify research gaps, and more. Just let me know how I can help with your research journey!",
  },
];

const projects = [
  "Academic Paper",
  "Literature Review",
  "Academic Paper Review",
  "Strategy Report",
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ResearchAssistantUI() {
  const [tasks, setTasks] = useState(starterTasks);
  const [input, setInput] = useState("");
  const [isDark, setIsDark] = useState(false);

  const toggleTask = (id) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const theme = {
    appBg: isDark ? "bg-[#07111F] text-slate-100" : "bg-[#F7F4EC] text-slate-900",
    softBlobOne: isDark ? "bg-[#1C4B52] opacity-35" : "bg-[#DDEFE8] opacity-70",
    softBlobTwo: isDark ? "bg-[#1F365C] opacity-35" : "bg-[#DCE7F6] opacity-70",
    softBlobThree: isDark ? "bg-[#5B4B1F] opacity-25" : "bg-[#EFE3C8] opacity-60",
    panel: isDark
      ? "border-white/10 bg-[#0D1A2B]/82 shadow-black/20"
      : "border-white/70 bg-white/65 shadow-slate-200/70",
    mainPanel: isDark
      ? "border-white/10 bg-[#0D1A2B]/82 shadow-black/20"
      : "border-white/70 bg-white/75 shadow-slate-200/70",
    border: isDark ? "border-white/10" : "border-slate-200/70",
    title: isDark ? "text-slate-50" : "text-[#243B53]",
    muted: isDark ? "text-slate-400" : "text-slate-500",
    mutedStrong: isDark ? "text-slate-300" : "text-slate-600",
    primaryButton: isDark
      ? "bg-[#5E8C7B] text-white hover:bg-[#6EA08E]"
      : "bg-[#243B53] text-white hover:bg-[#1D3146]",
    card: isDark ? "border-white/10 bg-[#111F32]" : "border-slate-200 bg-white",
    cardSoft: isDark ? "border-white/10 bg-[#101C2D]" : "border-[#DDEFE8] bg-[#F7FBF9]",
    input: isDark
      ? "border-white/10 bg-[#101C2D] text-slate-100 placeholder:text-slate-500 focus:border-[#5E8C7B] focus:ring-[#5E8C7B]/20"
      : "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#8AA6A3] focus:ring-[#DDEFE8]",
  };

  return (
    <div className={cn("min-h-screen transition-colors duration-300", theme.appBg)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={cn("absolute -top-24 left-20 h-72 w-72 rounded-full blur-3xl", theme.softBlobOne)} />
        <div className={cn("absolute top-32 right-16 h-80 w-80 rounded-full blur-3xl", theme.softBlobTwo)} />
        <div className={cn("absolute bottom-0 left-1/3 h-72 w-72 rounded-full blur-3xl", theme.softBlobThree)} />
      </div>

      <main className="relative mx-auto flex min-h-screen max-w-[1500px] gap-5 p-5">
        <aside className={cn("hidden w-72 shrink-0 flex-col rounded-[2rem] border p-5 shadow-sm backdrop-blur xl:flex", theme.panel)}>
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl overflow-hidden bg-white shadow-sm">
              <img 
                src={`${import.meta.env.BASE_URL}Fabscholar.png`} 
                alt="Fabscholar logo" 
                className="h-full w-full object-contain" 
              />
            </div>
            <div>
              <h1 className={cn("text-base font-semibold tracking-tight", theme.title)}>Fabscholar</h1>
              <p className={cn("text-xs", theme.muted)}>Multi-Agent Research Assistant</p>
            </div>
          </div>

          <button className={cn("mb-5 flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium shadow-sm transition", theme.primaryButton)}>
            <Plus size={17} /> New Research Chat
          </button>

          <div className="relative mb-6">
            <Search className={cn("absolute left-3 top-1/2 -translate-y-1/2", isDark ? "text-slate-500" : "text-slate-400")} size={16} />
            <input
              className={cn("w-full rounded-2xl border py-3 pl-9 pr-3 text-sm outline-none transition focus:ring-4", theme.input)}
              placeholder="Search projects..."
            />
          </div>

          <div className="space-y-2">
            <p className={cn("px-2 text-xs font-semibold uppercase tracking-[0.18em]", isDark ? "text-slate-500" : "text-slate-400")}>Recent Projects</p>
            {projects.map((item, index) => (
              <button
                key={item}
                className={cn(
                  "flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left text-sm transition",
                  index === 1
                    ? isDark
                      ? "bg-[#173C3F] text-slate-50"
                      : "bg-[#EAF1EF] text-[#243B53]"
                    : isDark
                      ? "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                      : "text-slate-600 hover:bg-white/70"
                )}
              >
                <Library size={17} />
                <span className="truncate">{item}</span>
              </button>
            ))}
          </div>

          <div className={cn("mt-auto rounded-3xl border p-4", isDark ? "border-[#E7D39A]/20 bg-[#E7D39A]/8" : "border-[#E9DEC5] bg-[#FBF7EC]")}>
            <div className={cn("mb-2 flex items-center gap-2 text-sm font-semibold", isDark ? "text-[#E7D39A]" : "text-[#574B2A]")}>
              <Sparkles size={16} /> Research Mode
            </div>
            <p className={cn("text-xs leading-5", theme.muted)}>
              The assistant can cite documents, compare arguments, create outlines, and summarize sources.
            </p>
          </div>
        </aside>

        <section className={cn("flex min-w-0 flex-1 flex-col rounded-[2rem] border shadow-sm backdrop-blur", theme.mainPanel)}>
          <header className={cn("flex items-center justify-between border-b px-6 py-4", theme.border)}>
            <div>
              <p className={cn("text-xs font-semibold uppercase tracking-[0.18em]", isDark ? "text-[#8BC6BA]" : "text-[#8AA6A3]")}>Current Research Session</p>
              <h2 className={cn("mt-1 text-xl font-semibold tracking-tight", theme.title)}>Literature Review Assistant</h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsDark((current) => !current)}
                className={cn(
                  "flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm font-medium transition",
                  isDark
                    ? "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                )}
                aria-label="Toggle light and dark mode"
              >
                {isDark ? <Moon size={16} /> : <Sun size={16} />}
                {isDark ? "Dark" : "Light"}
              </button>
              <button className={cn("hidden rounded-2xl border px-4 py-2 text-sm transition sm:block", isDark ? "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10" : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50")}>
                Export Notes
              </button>
              <button className={cn("rounded-2xl border p-2.5 transition", isDark ? "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10" : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50")}>
                <PanelRight size={18} />
              </button>
            </div>
          </header>

          <div
            className="flex-1 space-y-5 overflow-y-auto bg-cover bg-center px-5 py-6 md:px-8"
            style={{
              backgroundImage: isDark
                ? `linear-gradient(rgba(7,17,31,0.82), rgba(7,17,31,0.82)), url('${import.meta.env.BASE_URL}background.png')`
                : `linear-gradient(rgba(255,255,255,0.82), rgba(255,255,255,0.82)), url('${import.meta.env.BASE_URL}background.png')`,
            }}
          >
            <div className={cn("mx-auto max-w-3xl rounded-3xl border p-5", theme.cardSoft)}>
              <div className={cn("mb-2 flex items-center gap-2 text-sm font-semibold", isDark ? "text-[#8BC6BA]" : "text-[#286159]")}>
                <Quote size={17} /> Suggested Research Prompt
              </div>
              <p className={cn("text-sm leading-6", theme.mutedStrong)}>
                “Compare the arguments across my uploaded sources and identify the strongest research gap with supporting citations.”
              </p>
            </div>

            <div className="mx-auto flex max-w-3xl flex-col gap-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
                >
                  <div
                    className={cn(
                      "max-w-[82%] rounded-3xl px-5 py-4 text-sm leading-6 shadow-sm",
                      message.role === "user"
                        ? isDark
                          ? "bg-[#1F6B68] text-white"
                          : "bg-[#243B53] text-white"
                        : isDark
                          ? "border border-white/10 bg-[#111F32] text-slate-200"
                          : "border border-slate-200 bg-white text-slate-600"
                    )}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="p-5"
            style={{
              background: isDark
                ? "linear-gradient(rgba(7,17,31,0.82), rgba(7,17,31,0.82)), url('/chat-bg.png')"
                : "linear-gradient(rgba(255,255,255,0.82), rgba(255,255,255,0.82)), url('/chat-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className={cn("mx-auto flex max-w-3xl items-end gap-3 rounded-3xl border p-3 shadow-sm focus-within:ring-4", theme.input)}>
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                rows={1}
                className="max-h-32 min-h-[44px] flex-1 resize-none bg-transparent px-2 py-3 text-sm outline-none"
                placeholder="Ask about your research documents..."
              />
              <button className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white transition", isDark ? "bg-[#4E7CFF] hover:bg-[#6B91FF]" : "bg-[#8AA6A3] hover:bg-[#789690]")}>
                <Send size={18} />
              </button>
            </div>
            </div>
        </section>

        <aside className="hidden w-96 shrink-0 flex-col gap-5 lg:flex">
          <section className={cn("rounded-[2rem] border p-5 shadow-sm backdrop-blur", theme.mainPanel)}>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className={cn("text-xs font-semibold uppercase tracking-[0.18em]", isDark ? "text-[#8BC6BA]" : "text-[#8AA6A3]")}>Research Library</p>
                <h3 className={cn("mt-1 text-lg font-semibold", theme.title)}>Relevant Documents</h3>
              </div>
              <button className={cn("rounded-2xl border p-2 transition", isDark ? "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10" : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50")}>
                <MoreHorizontal size={18} />
              </button>
            </div>

            <div className={cn("mb-4 rounded-3xl border-2 border-dashed p-5 text-center transition", isDark ? "border-[#5E8C7B]/40 bg-[#0F2231] hover:bg-[#13293B]" : "border-[#B9CAC6] bg-[#F6FAF8] hover:bg-[#EEF7F4]")}>
              <div className={cn("mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm", isDark ? "bg-white/8 text-[#8BC6BA]" : "bg-white text-[#5E817D]")}>
                <UploadCloud size={24} />
              </div>
              <p className={cn("text-sm font-medium", theme.title)}>Drop research files here</p>
              <p className={cn("mt-1 text-xs", theme.muted)}>PDF, DOCX, TXT, CSV, or links</p>
            </div>

            <div className="space-y-3">
              {documents.map((doc) => (
                <div key={doc.title} className={cn("rounded-3xl border p-4 shadow-sm", theme.card)}>
                  <div className="flex gap-3">
                    <div className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl", isDark ? "bg-white/8 text-[#8BC6BA]" : "bg-[#F0F4F8] text-[#243B53]")}>
                      <FileText size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className={cn("truncate text-sm font-semibold", isDark ? "text-slate-100" : "text-slate-800")}>{doc.title}</p>
                      <div className={cn("mt-1 flex items-center gap-2 text-xs", theme.muted)}>
                        <span>{doc.type}</span>
                        <span>•</span>
                        <span>{doc.size}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className={cn("rounded-full border px-2.5 py-1 text-xs font-medium", isDark ? doc.darkStatus : doc.lightStatus)}>
                      {doc.status}
                    </span>
                    <button className={cn("text-xs font-medium", isDark ? "text-[#8BC6BA] hover:text-slate-100" : "text-[#5E817D] hover:text-[#243B53]")}>Use in chat</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={cn("flex-1 rounded-[2rem] border p-5 shadow-sm backdrop-blur", theme.mainPanel)}>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className={cn("text-xs font-semibold uppercase tracking-[0.18em]", isDark ? "text-[#8BC6BA]" : "text-[#8AA6A3]")}>Progress Notes</p>
                <h3 className={cn("mt-1 text-lg font-semibold", theme.title)}>Research Checklist</h3>
              </div>
              <div className={cn("flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium", isDark ? "bg-[#E7D39A]/10 text-[#E7D39A]" : "bg-[#FBF7EC] text-[#806A2C]")}>
                <Clock3 size={14} /> Today
              </div>
            </div>

            <div className="space-y-3">
              {tasks.map((task) => (
                <button
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={cn("flex w-full items-start gap-3 rounded-2xl border p-3 text-left transition", isDark ? "border-white/10 bg-[#111F32] hover:border-[#5E8C7B]/40 hover:bg-[#13293B]" : "border-slate-200 bg-white hover:border-[#B9CAC6] hover:bg-[#F9FCFB]")}
                >
                  {task.done ? (
                    <CheckCircle2 className={cn("mt-0.5 shrink-0", isDark ? "text-[#8BC6BA]" : "text-[#5E817D]")} size={19} />
                  ) : (
                    <Circle className={cn("mt-0.5 shrink-0", isDark ? "text-slate-600" : "text-slate-300")} size={19} />
                  )}
                  <span className={cn("text-sm leading-5", task.done ? isDark ? "text-slate-500 line-through" : "text-slate-400 line-through" : isDark ? "text-slate-300" : "text-slate-700")}>
                    {task.label}
                  </span>
                </button>
              ))}
            </div>

            <div className={cn("mt-5 rounded-3xl border p-4", isDark ? "border-[#E7D39A]/20 bg-[#E7D39A]/8" : "border-[#E9DEC5] bg-[#FBF7EC]")}>
              <p className={cn("mb-2 text-sm font-semibold", isDark ? "text-[#E7D39A]" : "text-[#574B2A]")}>Quick Note</p>
              <textarea
                className={cn("h-28 w-full resize-none rounded-2xl border p-3 text-sm leading-5 outline-none focus:ring-4", isDark ? "border-[#E7D39A]/20 bg-[#0D1A2B]/80 text-slate-200 placeholder:text-slate-500 focus:border-[#E7D39A]/40 focus:ring-[#E7D39A]/10" : "border-[#E9DEC5] bg-white/80 text-slate-700 placeholder:text-slate-400 focus:border-[#BCA96C] focus:ring-[#EFE3C8]")}
                placeholder="Write a short reminder, question, or research idea..."
              />
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
}
