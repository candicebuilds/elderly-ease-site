export default function TermsOfService() {
  return (
    <div className="w-full bg-amber-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-amber-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2Ff80b81fa14ff4302a105d54b0aece452)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}
            >
              <span className="text-white font-bold text-sm hidden">EE</span>
            </div>
            <span className="font-bold" style={{ color: "#7b3f7e" }}>Elderly Ease</span>
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12">Terms of Service</h1>
          
          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: "#7b3f7e" }}>Rates</h2>
              <p className="text-lg leading-relaxed">
                Our standard service rate is R250 per hour.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: "#7b3f7e" }}>Expenses</h2>
              <p className="text-lg leading-relaxed">
                We will invoice you for any agreed reimbursements (e.g., groceries or light bulbs) alongside our service fee.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: "#7b3f7e" }}>Payment Methods</h2>
              <p className="text-lg leading-relaxed">
                For your convenience, we accept Cash, EFT, or Card (via our mobile card machine).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: "#7b3f7e" }}>Cancellations</h2>
              <p className="text-lg leading-relaxed">
                Please provide 24 hours' notice for cancellations to avoid a 50% late-cancellation fee.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: "#7b3f7e" }}>Payments</h2>
              <p className="text-lg leading-relaxed">
                Invoices are payable within 7 days of the invoice date.
              </p>
            </div>
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
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2Ff80b81fa14ff4302a105d54b0aece452)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                >
                  <span className="text-white font-bold text-xs hidden">EE</span>
                </div>
                <span className="font-bold text-white">Elderly Ease</span>
              </div>
              <p className="text-sm">Reliable support for elderly individuals, delivered with heart and connection.</p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/#about" className="transition footer-link" style={{ color: "inherit" }}>About Us</a></li>
                <li><a href="/#services" className="transition footer-link" style={{ color: "inherit" }}>Services</a></li>
                <li><a href="/#why-us" className="transition footer-link" style={{ color: "inherit" }}>Why Us</a></li>
                <li><a href="/#pricing" className="transition footer-link" style={{ color: "inherit" }}>Pricing</a></li>
                <li><a href="/#team" className="transition footer-link" style={{ color: "inherit" }}>Meet the Team</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/terms" className="transition footer-link" style={{ color: "inherit" }}>Terms of Service</a></li>
                <li><a href="/privacy" className="transition footer-link" style={{ color: "inherit" }}>Privacy Notice</a></li>
                <li><a href="/transport" className="transition footer-link" style={{ color: "inherit" }}>Transport Policy</a></li>
                <li><a href="/#contact" className="transition footer-link" style={{ color: "inherit" }}>Contact</a></li>
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
