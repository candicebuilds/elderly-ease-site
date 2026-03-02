export default function PageHeader() {
  return (
    <nav className="sticky top-0 z-50 bg-amber-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-1 hover:opacity-80 transition">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2Faad9320e5dd04b1db64483a555c1c5eb"
            alt="Elderly Ease Logo"
            className="w-10 h-10"
          />
          <span className="font-bold" style={{ color: "#7b3f7e" }}>Elderly Ease</span>
        </a>
      </div>
    </nav>
  );
}
