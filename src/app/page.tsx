import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-amber-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-amber-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-rose-300 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">EE</span>
            </div>
            <span className="font-bold text-purple-900">Elderly Ease</span>
          </div>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full font-medium transition">
            Contact Us
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <p className="text-teal-600 font-medium text-lg mb-2">Welcome to Elderly Ease</p>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                  Because asking for help should feel easy
                </h1>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Reliable support for elderly individuals, delivered with heart and connection.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="bg-purple-800 hover:bg-purple-900 text-white px-8 py-3 rounded-full font-medium transition transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border-2 border-purple-800 text-purple-800 hover:bg-purple-50 px-8 py-3 rounded-full font-medium transition">
                  Learn More
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 bg-gradient-to-br from-rose-200 to-teal-200 rounded-2xl overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <span className="text-center">
                  <p className="text-2xl mb-2">📸</p>
                  <p className="text-sm">Hero Image</p>
                  <p className="text-xs mt-1">(Update with your image)</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#e1a5af" }}>
        <div className="leaf-bg-top absolute inset-0 opacity-10" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">About Us</h2>
          
          <div className="space-y-6 text-white text-lg leading-relaxed">
            <p>
              At Elderly Ease, our mission is to provide reliable, non-personal care assistance to elderly individuals who are independent but need help with everyday tasks. We are deeply committed to supporting seniors with compassion, respect, and dignity, ensuring they maintain their independence while receiving the practical help they need.
            </p>
            
            <p>
              As a family-run service rooted in our local community, we prioritize transparency, trust, and genuine connections. Our approach blends professional support with a warm, personal touch, making every client feel valued and understood.
            </p>
            
            <p>
              We believe that aging with ease means having dependable assistance tailored to your unique lifestyle, empowering you to live comfortably and confidently every day.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Comprehensive care tailored to your unique needs and lifestyle
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1: Home Management */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-purple-800 mb-3">
                Home Management & Daily Living
              </h3>
              <p className="text-teal-600 font-medium italic mb-4">
                Because home should feel safe and welcoming.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold">•</span>
                  <span><strong>Housekeeping:</strong> Light cleaning such as rubbish removal, dishes, dusting, and laundry.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold">•</span>
                  <span><strong>Meal Preparation:</strong> Support with planning, shopping, and cooking.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold">•</span>
                  <span><strong>House Maintenance:</strong> Everyday fixes like oiling hinges, hanging pictures, or changing bulbs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold">•</span>
                  <span><strong>Seasonal Prep:</strong> Patio furniture, wardrobe swaps, and organizing seasonal items.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold">•</span>
                  <span><strong>Decluttering & Downsizing:</strong> Closet clean‑outs, donations, or packing boxes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold">•</span>
                  <span><strong>Pet Care:</strong> Dog walking, litter box cleaning, and everyday pet support.</span>
                </li>
              </ul>
            </div>

            {/* Service 2: Concierge */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-purple-800 mb-3">
                Personal Concierge & Logistics
              </h3>
              <p className="text-teal-600 font-medium italic mb-4">
                Because life runs smoother with a helping hand.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold">•</span>
                  <span><strong>Transportation:</strong> Safe, reliable trips for appointments, errands, and social outings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold">•</span>
                  <span><strong>Shopping Assistance:</strong> Groceries, pharmacy pickups, and more.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold">•</span>
                  <span><strong>Appointment Scheduling:</strong> Booking doctors, hairdressers, or home repairs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold">•</span>
                  <span><strong>Gift Concierge:</strong> Selecting, wrapping, and mailing gifts for loved ones.</span>
                </li>
              </ul>
            </div>

            {/* Service 3: Technology */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-purple-800 mb-3">
                Technology & Digital Confidence
              </h3>
              <p className="text-teal-600 font-medium italic mb-4">
                Because staying connected should feel easy.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold">•</span>
                  <span><strong>Digital Support:</strong> Guidance with phones, TVs, apps, and social media.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold">•</span>
                  <span><strong>Cybersecurity Basics:</strong> Strong passwords and spotting phishing attempts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold">•</span>
                  <span><strong>Digital Legacy:</strong> Digitizing photo albums and organizing memories to share with family.</span>
                </li>
              </ul>
            </div>

            {/* Service 4: Wellness */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-purple-800 mb-3">
                Wellness, Companionship & Legacy
              </h3>
              <p className="text-teal-600 font-medium italic mb-4">
                Because care should feel like connection.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold">•</span>
                  <span><strong>Companionship:</strong> Friendly visits to ease isolation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold">•</span>
                  <span><strong>Walking Buddy:</strong> Gentle exercise with a supportive partner.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold">•</span>
                  <span><strong>Memoir & Legacy:</strong> Recording life stories, family recipes, or labeling heirlooms.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold">•</span>
                  <span><strong>Hobbies & Pastimes:</strong> Gardening, puzzles, games, and activities that spark joy.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#7b3f7e" }}>
        <div className="leaf-bg-bottom absolute inset-0 opacity-10" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Why Choose Elderly Ease
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-rose-200 mb-3">Dignity First</h3>
              <p className="text-white">
                Every service is delivered with respect, care, and a focus on independence.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-rose-200 mb-3">Transparent & Reliable</h3>
              <p className="text-white">
                Clear policies, fair pricing, and trustworthy support you can count on.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-rose-200 mb-3">Family‑Run with Heart</h3>
              <p className="text-white">
                A local, family‑driven business built on compassion and community.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-rose-200 mb-3">Holistic Support</h3>
              <p className="text-white">
                From daily tasks to companionship and hobbies, we make life easier and more joyful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Elderly Ease Pricing Guide
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Flexible pricing designed to fit your needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Pricing Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition border-t-4" style={{ borderTopColor: "#e1a5af" }}>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-purple-800 mb-2">Essential Ease</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-teal-600">R900</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-700 mb-4 text-sm">4 hours per month</p>
                <p className="text-gray-600 mb-6">Perfect for light support and everyday tasks.</p>
                <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg font-medium transition">
                  Choose Plan
                </button>
              </div>
            </div>

            {/* Pricing Card 2 - Highlighted */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition border-t-4 transform md:scale-105" style={{ borderTopColor: "#7b3f7e" }}>
              <div className="p-8 bg-gradient-to-br from-purple-50 to-transparent">
                <div className="mb-2 inline-block bg-purple-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-purple-800 mb-2">Comfort Ease</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-teal-600">R1350</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-700 mb-4 text-sm">6 hours per month</p>
                <p className="text-gray-600 mb-6">Ongoing support and peace of mind.</p>
                <button className="w-full bg-purple-800 hover:bg-purple-900 text-white py-2 rounded-lg font-medium transition">
                  Choose Plan
                </button>
              </div>
            </div>

            {/* Pricing Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition border-t-4" style={{ borderTopColor: "#6ec6ca" }}>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-purple-800 mb-2">Complete Ease</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-teal-600">R1800</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-700 mb-4 text-sm">8 hours per month</p>
                <p className="text-gray-600 mb-6">Comprehensive care with connection and confidence.</p>
                <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg font-medium transition">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>

          {/* Additional Pricing Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-purple-800 mb-2">Custom Ease</h3>
              <p className="text-gray-600 mb-4">Tailored to your unique needs. Mix and match services.</p>
              <button className="text-teal-600 hover:text-teal-700 font-medium">Get Custom Quote →</button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-purple-800 mb-2">Simple Hourly Ease</h3>
              <p className="text-gray-600 mb-4">
                <span className="text-2xl font-bold text-teal-600">R250</span> / hour
              </p>
              <p className="text-gray-600 text-sm mb-4">Flexible, transparent support for one‑off needs. A great way to try Elderly Ease before committing to a package.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#6ec6ca" }}>
        <div className="leaf-bg-top absolute inset-0 opacity-10" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">Meet The Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white bg-opacity-95 rounded-xl overflow-hidden shadow-lg">
              <div className="h-64 bg-gradient-to-br from-rose-200 to-purple-200 flex items-center justify-center">
                <span className="text-6xl">👩‍💼</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-purple-800 mb-3">Candice</h3>
                <p className="text-gray-700">
                  Candice keeps the hinges oiled and the spirits lifted. From booking appointments to wrapping gifts and even wrangling tricky tech, she adds a dash of creativity to everyday fixes—making life run smoother with a smile.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white bg-opacity-95 rounded-xl overflow-hidden shadow-lg">
              <div className="h-64 bg-gradient-to-br from-teal-200 to-purple-200 flex items-center justify-center">
                <span className="text-6xl">👩‍🌾</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-purple-800 mb-3">Colleen</h3>
                <p className="text-gray-700">
                  Colleen is the sunshine in every visit. Whether she's tending gardens, puzzling over crosswords, or chauffeuring with care, she turns errands into adventures and companionship into laughter.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white bg-opacity-95 rounded-xl overflow-hidden shadow-lg">
              <div className="h-64 bg-gradient-to-br from-rose-200 to-teal-200 flex items-center justify-center">
                <span className="text-6xl">🐕‍🦺</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-purple-800 mb-3">Carolyn</h3>
                <p className="text-gray-700">
                  Carolyn is happiest with paws pattering beside her. She's the walking buddy pets adore and the everyday helper households rely on—whether it's a wagging tail, a tidy corner, or a cherished story, Carolyn brings heart to every step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Get In Touch</h2>

          <div className="bg-white rounded-xl shadow-lg p-12 space-y-8">
            <h3 className="text-2xl font-bold text-purple-800">
              Let's make life easier together
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="text-4xl">💬</div>
                <div>
                  <p className="font-medium text-gray-700 mb-2">WhatsApp</p>
                  <a href="https://wa.me/27689292847" className="text-teal-600 hover:text-teal-700 font-medium">
                    Start Chat
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="text-4xl">📧</div>
                <div>
                  <p className="font-medium text-gray-700 mb-2">Email</p>
                  <a href="mailto:hello@elderlyease.co.za" className="text-teal-600 hover:text-teal-700 font-medium">
                    hello@elderlyease.co.za
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="text-4xl">📞</div>
                <div>
                  <p className="font-medium text-gray-700 mb-2">Phone</p>
                  <a href="tel:0689292847" className="text-teal-600 hover:text-teal-700 font-medium">
                    068 929 2847
                  </a>
                </div>
              </div>
            </div>

            <button className="bg-purple-800 hover:bg-purple-900 text-white px-8 py-3 rounded-full font-medium transition mx-auto block">
              Schedule A Call
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-rose-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">EE</span>
                </div>
                <span className="font-bold text-white">Elderly Ease</span>
              </div>
              <p className="text-sm">Reliable support for elderly individuals, delivered with heart and connection.</p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#team" className="hover:text-white transition">Meet The Team</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#terms" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#privacy" className="hover:text-white transition">Privacy Notice</a></li>
                <li><a href="#transport" className="hover:text-white transition">Transport Policy</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
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

      {/* Terms & Policies Sections (Hidden by default, can be shown via modal/page) */}
      <div id="legal-sections" className="hidden">
        {/* Terms of Service */}
        <section id="terms" className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Rates</h3>
              <p>Our standard service rate is R250 per hour.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Expenses</h3>
              <p>We will invoice you for any agreed reimbursements (e.g., groceries or light bulbs) alongside our service fee.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Payment Methods</h3>
              <p>For your convenience, we accept Cash, EFT, or Card (via our mobile card machine).</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Cancellations</h3>
              <p>Please provide 24 hours' notice for cancellations to avoid a 50% late-cancellation fee.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Payments</h3>
              <p>Invoices are payable within 7 days of the invoice date.</p>
            </div>
          </div>
        </section>

        {/* Transport Policy */}
        <section id="transport" className="py-20 px-4 sm:px-6 lg:px-8 bg-white max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Transport Policy</h2>
          <p className="text-gray-700 mb-6">
            To ensure every journey is safe and comfortable, the following rules apply:
          </p>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Vehicle Condition</h3>
              <p>We use roadworthy vehicles that are regularly maintained and insured.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Safety First</h3>
              <p>Drivers hold valid SA licenses. Seatbelts must be worn at all times.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Using Your Vehicle</h3>
              <p>If you request that we drive your personal vehicle, you confirm that the vehicle is roadworthy and that your insurance covers a third-party driver.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Incidents</h3>
              <p>In the event of a breakdown or accident, we will immediately secure your safety and contact your emergency representative.</p>
            </div>
          </div>
        </section>

        {/* Privacy Notice */}
        <section id="privacy" className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Privacy Notice (POPIA Compliance)</h2>
          <p className="text-gray-700 leading-relaxed">
            Elderly Ease respects your privacy. We only collect the personal information necessary to provide your service (such as your name, address, and emergency contacts). We keep this info secure and will never share it with third parties unless required for a medical emergency. You may ask to see or delete your info at any time.
          </p>
        </section>
      </div>
    </div>
  );
}
