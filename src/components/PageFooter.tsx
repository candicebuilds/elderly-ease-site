'use client';

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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ color: "white" }}>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              facebook.com/ElderlyEase
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
