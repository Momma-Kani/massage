export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-3xl bg-slate-800/50 border border-teal-400/20 shadow-2xl backdrop-blur-md p-8">
        <span className="inline-block rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-teal-400 mb-4">
          Code Studio
        </span>
        <h1 className="text-4xl font-bold text-white mb-3">massage</h1>
        <p className="text-base leading-relaxed text-slate-400">
          Your project is ready. Describe what you want to build in chat and the preview will update automatically.
        </p>
      </div>
    </div>
  );
}
