import LegalPageHeader from '@/components/LegalPageHeader';
import PageFooter from '@/components/PageFooter';

export default function TermsOfService() {
  return (
    <div className="w-full bg-amber-50">
      <LegalPageHeader />

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-bold mb-12" style={{ color: "#585858", fontSize: "24px" }}>Terms of Service</h1>

          <div className="space-y-8" style={{ color: "#585858" }}>
            <div>
              <h2 className="font-bold mb-3" style={{ color: "#585858", fontSize: "18px" }}>Rates</h2>
              <p className="leading-relaxed" style={{ fontSize: "16px" }}>
                Our standard service rate is R250 per hour.
              </p>
            </div>

            <div>
              <h2 className="font-bold mb-3" style={{ color: "#585858", fontSize: "18px" }}>Expenses</h2>
              <p className="leading-relaxed" style={{ fontSize: "16px" }}>
                We will invoice you for any agreed reimbursements (e.g., groceries or light bulbs) alongside our service fee.
              </p>
            </div>

            <div>
              <h2 className="font-bold mb-3" style={{ color: "#585858", fontSize: "18px" }}>Payment Methods</h2>
              <p className="leading-relaxed" style={{ fontSize: "16px" }}>
                For your convenience, we accept Cash, EFT, or Card (via our mobile card machine).
              </p>
            </div>

            <div>
              <h2 className="font-bold mb-3" style={{ color: "#585858", fontSize: "18px" }}>Cancellations</h2>
              <p className="leading-relaxed" style={{ fontSize: "16px" }}>
                Please provide 24 hours' notice for cancellations to avoid a 50% late-cancellation fee.
              </p>
            </div>

            <div>
              <h2 className="font-bold mb-3" style={{ color: "#585858", fontSize: "18px" }}>Payments</h2>
              <p className="leading-relaxed" style={{ fontSize: "16px" }}>
                Invoices are payable within 7 days of the invoice date.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-300">
            <a href="/" className="font-medium footer-link" style={{ color: "#585858" }}>
              ← Back to Home
            </a>
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
