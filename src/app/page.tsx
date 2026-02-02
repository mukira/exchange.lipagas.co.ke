"use client";

import { useState } from "react";

export default function GoogleFormEmbed() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-purple-50 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-4xl bg-white backdrop-blur-lg rounded-2xl border border-gray-200 shadow-2xl overflow-hidden relative py-8">
        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-gray-900/50">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        )}

        {/* Form Iframe */}
        <div className="relative w-full h-[1450px]">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe3ijW3lXAy7wRePo61zc-DeuR_xbVj_1sfnSEgiDfwQSeLqQ/viewform?embedded=true"
            className="absolute inset-0 w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
            title="Mpesa API Integration Form"
            scrolling="no"
          >
            Loading…
          </iframe>
        </div>
      </div>


    </div>
  );
}
