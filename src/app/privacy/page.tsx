export default function PrivacyNotice() {
  return (
    <div className="w-full bg-amber-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-amber-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2Faad9320e5dd04b1db64483a555c1c5eb"
              alt="Elderly Ease Logo"
              className="w-10 h-10"
            />
            <span className="font-bold" style={{ color: "#7b3f7e" }}>Elderly Ease</span>
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-12" style={{ color: "#585858" }}>Privacy Notice (POPIA Compliance)</h1>

          <div className="space-y-6 text-lg leading-relaxed" style={{ color: "#585858" }}>
            <p>
              Elderly Ease respects your privacy. We only collect the personal information necessary to provide your service (such as your name, address, and emergency contacts). We keep this info secure and will never share it with third parties unless required for a medical emergency. You may ask to see or delete your info at any time.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-300">
            <a href="/" className="font-medium hover:opacity-80 transition" style={{ color: "#6ec6ca" }}>
              ← Back to Home
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2Faad9320e5dd04b1db64483a555c1c5eb"
                  alt="Elderly Ease Logo"
                  className="w-8 h-8"
                />
                <span className="font-bold" style={{ color: "#e1a5af" }}>Elderly Ease</span>
              </div>
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
                <li><a href="/#contact" className="footer-link">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm">© 2024 Elderly Ease. All rights reserved.</p>
              <a href="https://facebook.com/ElderlyEase" className="hover:text-white transition text-sm">
                🔵 facebook.com/ElderlyEase
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
