import React from "react";

const PageWrapper = ({ title, children }) => {
  return (
    <section className="min-h-screen bg-black text-gray-300 px-6 py-20 sm:px-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 border-b border-emerald-500/40 pb-2">
          {title}
        </h1>
        <div className="text-gray-400 leading-relaxed space-y-4">{children}</div>
      </div>
    </section>
  );
};

export default PageWrapper;
