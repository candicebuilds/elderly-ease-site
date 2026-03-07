export default function LegalPageHeader() {
  return (
    <>
      {/* Skip to main content link (WCAG 2.4.1) */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-[9999] focus:bg-purple-600 focus:text-white focus:px-4 focus:py-2" style={{ padding: "8px 16px" }}>
        Skip to main content
      </a>

      <nav className="sticky top-0 z-50 bg-amber-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center hover:opacity-80 transition" style={{ gap: "2px" }}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2F98028f76e4674fc9aa08d301a72839b6"
              alt="Elderly Ease Logo"
              className="w-10 h-10"
            />
            <span className="font-bold" style={{ color: "#7b3f7e" }}>Elderly Ease</span>
          </a>
        </div>
      </nav>
    </>
  );
}
