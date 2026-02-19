export default function PageHeader() {
  return (
    <nav className="sticky top-0 z-50 bg-amber-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2F98028f76e4674fc9aa08d301a72839b6"
            alt="Elderly Ease Logo"
            className="w-10 h-10"
          />
          <span className="font-bold" style={{ color: "#7b3f7e" }}>Elderly Ease</span>
        </a>
      </div>
    </nav>
  );
}
