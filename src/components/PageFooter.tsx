'use client';

import { FiFacebook } from 'react-icons/fi';

export default function PageFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2F76a62c25dc484c81aa5bde198ada56bc"
                alt="Elderly Ease Logo"
                className="w-8 h-8"
              />
              <span className="font-bold" style={{ color: "white" }}>Elderly Ease</span>
            </a>
            <p className="text-sm">Reliable support for elderly individuals, delivered with heart and connection.</p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#about" className="footer-link">About Us</a></li>
              <li><a href="/#services" className="footer-link">Services</a></li>
              <li><a href="/#why-us" className="footer-link">Why Us</a></li>
              <li><a href="/#pricing" className="footer-link">Pricing</a></li>
              <li><a href="/#team" className="footer-link">Meet the Team</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/terms" className="footer-link">Terms of Service</a></li>
              <li><a href="/privacy" className="footer-link">Privacy Notice</a></li>
              <li><a href="/transport" className="footer-link">Transport Policy</a></li>
              <li><a href="/#get-in-touch" className="footer-link">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2026 Elderly Ease. All rights reserved.</p>
            <a href="https://facebook.com/ElderlyEase" className="hover:text-white transition text-sm flex items-center gap-2">
              <FiFacebook className="w-4 h-4" style={{ color: "white" }} />
              facebook.com/ElderlyEase
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
