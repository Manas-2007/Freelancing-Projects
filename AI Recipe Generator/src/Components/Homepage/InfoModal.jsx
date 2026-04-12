import { useEffect } from "react";

export function InfoModal({ isOpen, onClose, title, children }) {

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

      {/* 🔹 Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* 🔹 Modal Box */}
      <div className="
        relative z-10 w-full max-w-2xl
        bg-gradient-to-br from-blue-900/40 to-black/70
        border border-blue-400/30
        rounded-2xl
        shadow-[0_0_40px_rgba(59,130,246,0.3)]
        animate-[fadeInScale_0.3s_ease]
      ">

        {/* Header */}
        <div className="px-6 pt-6 pb-4">
          <h2 className="text-white text-xl sm:text-2xl font-bold">
            {title}
          </h2>
          <div className="h-[1px] w-full mt-3 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
        </div>

        {/* ✅ Content (FIXED CLASS NAME) */}
        <div className="
          px-6 pr-3
          max-h-[60vh] 
          overflow-y-auto 
          text-white/80 
          text-sm sm:text-base 
          leading-relaxed 
          space-y-4
          modal-scroll
        ">
          {children}
        </div>

        {/* ✅ Inline Scrollbar Styling */}
        <style>
        {`
          .modal-scroll::-webkit-scrollbar {
            width: 6px;
          }

          .modal-scroll::-webkit-scrollbar-track {
            background: transparent;
          }

          .modal-scroll::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #3b82f6, #60a5fa);
            border-radius: 10px;
          }

          .modal-scroll::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, #2563eb, #3b82f6);
          }
        `}
        </style>

        {/* Footer */}
        <div className="px-6 py-5 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-white/20 text-white/70 hover:text-white hover:border-white transition"
          >
            OK
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg transition"
          >
            Understood
          </button>
        </div>

      </div>
    </div>
  );
}