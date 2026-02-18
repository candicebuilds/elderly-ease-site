import PageHeader from '@/components/PageHeader';
import PageFooter from '@/components/PageFooter';

export default function TransportPolicy() {
  return (
    <div className="w-full bg-amber-50">
      <PageHeader />

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-12" style={{ color: "#585858" }}>Transport Policy</h1>

          <div className="space-y-8" style={{ color: "#585858" }}>
            <p className="text-lg leading-relaxed">
              To ensure every journey is safe and comfortable, the following rules apply:
            </p>

            <div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: "#7b3f7e" }}>Vehicle Condition</h2>
              <p className="text-lg leading-relaxed">
                We use roadworthy vehicles that are regularly maintained and insured.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: "#7b3f7e" }}>Safety First</h2>
              <p className="text-lg leading-relaxed">
                Drivers hold valid SA licenses. Seatbelts must be worn at all times.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: "#7b3f7e" }}>Using Your Vehicle</h2>
              <p className="text-lg leading-relaxed">
                If you request that we drive your personal vehicle, you confirm that the vehicle is roadworthy and that your insurance covers a third-party driver.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: "#7b3f7e" }}>Incidents</h2>
              <p className="text-lg leading-relaxed">
                In the event of a breakdown or accident, we will immediately secure your safety and contact your emergency representative.
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

      <PageFooter />
    </div>
  );
}
