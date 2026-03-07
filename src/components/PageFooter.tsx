'use client';

import dynamic from 'next/dynamic';

const FiFacebook = dynamic(() => import('react-icons/fi').then(mod => ({ default: mod.FiFacebook })), { ssr: false });

export default function PageFooter() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#585858" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p style={{ color: "white", fontSize: "14px", lineHeight: "22px", fontFamily: "Poppins, sans-serif" }}>
            <strong style={{ fontWeight: "500" }}>Service Areas</strong>
            <br />
            Based in Hurlyvale, we provide heart-centered support to families within a 10km radius, including: Edenvale Central, Greenstone Hill, Modderfontein, Bedfordview, Morninghill, Dowerglen, Dunvegan, Highway Gardens, Buurendal, Illiondale, and Isandovale.
          </p>
        </div>

        <div className="flex justify-center gap-8 mb-8" style={{ gap: "30px" }}>
          <a href="/terms" style={{ color: "white", fontWeight: "400" }} className="footer-link">Terms of Service</a>
          <a href="/privacy" style={{ color: "white", fontWeight: "400" }} className="footer-link">Privacy Notice</a>
          <a href="/transport" style={{ color: "white", fontWeight: "400" }} className="footer-link">Transport Policy</a>
        </div>

        <div className="pt-8" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: "white" }}>© 2026 Elderly Ease. All rights reserved.</p>
            <a href="https://facebook.com/ElderlyEase" className="footer-link text-sm flex items-center gap-2" style={{ color: "white" }} aria-label="Visit Elderly Ease on Facebook">
              <FiFacebook className="w-4 h-4" style={{ color: "white" }} aria-hidden="true" />
              facebook.com/ElderlyEase
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
