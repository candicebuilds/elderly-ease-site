import PageHeader from '@/components/PageHeader';
import PageFooter from '@/components/PageFooter';

export default function PrivacyNotice() {
  return (
    <div className="w-full bg-amber-50">
      <PageHeader />

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

      <PageFooter />
    </div>
  );
}
