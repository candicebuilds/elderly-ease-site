'use client';

import { FiFacebook } from 'react-icons/fi';

export default function PageFooter() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#585858" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center gap-8 mb-8" style={{ gap: "30px" }}>
          <a href="/terms" style={{ color: "white", fontWeight: "400" }} className="hover:opacity-80 transition">Terms of Service</a>
          <a href="/privacy" style={{ color: "white", fontWeight: "400" }} className="hover:opacity-80 transition">Privacy Notice</a>
          <a href="/transport" style={{ color: "white", fontWeight: "400" }} className="hover:opacity-80 transition">Transport Policy</a>
        </div>

        <div className="pt-8" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: "white" }}>© 2026 Elderly Ease. All rights reserved.</p>
            <a href="https://facebook.com/ElderlyEase" className="hover:opacity-80 transition text-sm flex items-center gap-2" style={{ color: "white" }}>
              <FiFacebook className="w-4 h-4" style={{ color: "white" }} />
              facebook.com/ElderlyEase
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
