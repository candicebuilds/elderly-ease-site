'use client';

import Image from "next/image";
import { useState } from 'react';
import { FiPhone, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import PageFooter from '@/components/PageFooter';

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@elderlyease.co.za');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
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

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="font-medium nav-link">About Us</a>
            <a href="#services" className="font-medium nav-link">Services</a>
            <a href="#why-us" className="font-medium nav-link">Why Us</a>
            <a href="#pricing" className="font-medium nav-link">Pricing</a>
            <a href="#team" className="font-medium nav-link">Meet the Team</a>
            <a href="#get-in-touch" className="font-medium nav-link">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: "#585858" }}>
                  Because asking for help should feel easy
                </h1>
              </div>
              <p className="text-xl leading-relaxed" style={{ color: "#585858" }}>
                Reliable support for elderly individuals, delivered with heart and connection.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="https://wa.me/27689292847?text=Hi%20Elderly%20Ease!%20I%20would%20love%20to%20chat%20about%20your%20services." target="_blank" rel="noopener noreferrer" className="text-white px-8 py-3 rounded-full font-medium transition transform hover:scale-105 inline-block" style={{ backgroundColor: "#7b3f7e" }}>
                  WhatsApp Us
                </a>
                <a href="#about" className="px-8 py-3 rounded-full font-medium transition hover:bg-gray-100 inline-block" style={{ borderWidth: "2px", borderColor: "#7b3f7e", color: "#7b3f7e" }}>
                  Learn More
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2F76cd867b1a0f46cf9c8c80c213245dd5"
                alt="Caregiver with elderly client and dog"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Leaf Divider */}
      <div className="w-full flex justify-center" style={{ backgroundColor: "#fffff0", padding: "20px 20px 40px 20px" }}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2Feb057c6ce10b4ef99209af4ba76d34a2"
          alt="Decorative leaf design"
          style={{ maxHeight: "150px", width: "auto", objectFit: "contain", opacity: 0.4, pointerEvents: "none" }}
        />
      </div>

      {/* About Us Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#e1a5af" }}>
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
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center" style={{ color: "#585858" }}>Services</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto text-lg" style={{ color: "#585858" }}>
            Comprehensive care tailored to your unique needs and lifestyle
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1: Home Management */}
            <div className="bg-white p-8 rounded-xl transition hover:shadow-lg" style={{ minHeight: "460px", borderRadius: "12px", boxShadow: "0 0 20px -5px rgba(0, 0, 0, 0.1)" }}>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#585858" }}>
                Home Management & Daily Living
              </h3>
              <p className="font-medium italic mb-4" style={{ color: "#6ec6ca" }}>
                Because home should feel safe and welcoming.
              </p>
              <ul className="space-y-2" style={{ color: "#585858" }}>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong>Housekeeping:</strong> Light cleaning such as rubbish removal, dishes, dusting, and laundry.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong>Meal Preparation:</strong> Support with planning, shopping, and cooking.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong>House Maintenance:</strong> Everyday fixes like oiling hinges, hanging pictures, or changing bulbs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong>Seasonal Prep:</strong> Patio furniture, wardrobe swaps, and organizing seasonal items.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong>Decluttering & Downsizing:</strong> Closet clean‑outs, donations, or packing boxes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong>Pet Care:</strong> Dog walking, litter box cleaning, and everyday pet support.</span>
                </li>
              </ul>
            </div>

            {/* Service 2: Concierge */}
            <div className="bg-white p-8 rounded-xl transition hover:shadow-lg" style={{ minHeight: "460px", borderRadius: "12px", boxShadow: "0 0 20px -5px rgba(0, 0, 0, 0.1)" }}>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#585858" }}>
                Personal Concierge & Logistics
              </h3>
              <p className="font-medium italic mb-4" style={{ color: "#6ec6ca" }}>
                Because life runs smoother with a helping hand.
              </p>
              <ul className="space-y-2" style={{ color: "#585858" }}>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong>Transportation:</strong> Safe, reliable trips for appointments, errands, and social outings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong>Shopping Assistance:</strong> Groceries, pharmacy pickups, and more.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong>Appointment Scheduling:</strong> Booking doctors, hairdressers, or home repairs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong>Gift Concierge:</strong> Selecting, wrapping, and mailing gifts for loved ones.</span>
                </li>
              </ul>
            </div>

            {/* Service 3: Technology */}
            <div className="bg-white p-8 rounded-xl transition hover:shadow-lg" style={{ minHeight: "460px", borderRadius: "12px", boxShadow: "0 0 20px -5px rgba(0, 0, 0, 0.1)" }}>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#585858" }}>
                Technology & Digital Confidence
              </h3>
              <p className="font-medium italic mb-4" style={{ color: "#6ec6ca" }}>
                Because staying connected should feel easy.
              </p>
              <ul className="space-y-2" style={{ color: "#585858" }}>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong>Digital Support:</strong> Guidance with phones, TVs, apps, and social media.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong>Cybersecurity Basics:</strong> Strong passwords and spotting phishing attempts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong>Digital Legacy:</strong> Digitizing photo albums and organizing memories to share with family.</span>
                </li>
              </ul>
            </div>

            {/* Service 4: Wellness */}
            <div className="bg-white p-8 rounded-xl transition hover:shadow-lg" style={{ minHeight: "460px", borderRadius: "12px", boxShadow: "0 0 20px -5px rgba(0, 0, 0, 0.1)" }}>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#585858" }}>
                Wellness, Companionship & Legacy
              </h3>
              <p className="font-medium italic mb-4" style={{ color: "#6ec6ca" }}>
                Because care should feel like connection.
              </p>
              <ul className="space-y-2" style={{ color: "#585858" }}>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong>Companionship:</strong> Friendly visits to ease isolation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong>Walking Buddy:</strong> Gentle exercise with a supportive partner.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong>Memoir & Legacy:</strong> Recording life stories, family recipes, or labeling heirlooms.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong>Hobbies & Pastimes:</strong> Gardening, puzzles, games, and activities that spark joy.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: "#7b3f7e" }}>
        <div className="leaf-bg-bottom absolute inset-0 opacity-10" />
        {/* Cream Vertical Leaves - Top Left */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2Fcf4a1c45728a4cbd9d9aab7f6b55e763"
          alt="Decorative cream leaves"
          className="absolute"
          style={{ top: "-40px", left: "-100px", width: "auto", height: "115%", zIndex: 0, opacity: 0.12, pointerEvents: "none", transform: "rotate(180deg)", mixBlendMode: "overlay" }}
        />
        {/* Cream Vertical Leaves - Bottom Right Accent */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2Fcf4a1c45728a4cbd9d9aab7f6b55e763"
          alt="Decorative cream leaves"
          className="absolute"
          style={{ right: "-100px", bottom: "-40px", width: "auto", height: "115%", zIndex: 0, opacity: 0.12, pointerEvents: "none", mixBlendMode: "overlay" }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Why Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 p-8 rounded-xl">
              <h3 className="text-xl mb-3" style={{ color: "#7b3f7e", fontFamily: "Poppins, sans-serif", fontWeight: "700", fontSize: "20px" }}>Dignity First</h3>
              <p style={{ color: "#585858", fontFamily: "Poppins, sans-serif", fontWeight: "400", fontSize: "16px", lineHeight: "1.6" }}>
                Every service is delivered with respect, care, and a focus on independence.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-xl">
              <h3 className="text-xl mb-3" style={{ color: "#7b3f7e", fontFamily: "Poppins, sans-serif", fontWeight: "700", fontSize: "20px" }}>Transparent & Reliable</h3>
              <p style={{ color: "#585858", fontFamily: "Poppins, sans-serif", fontWeight: "400", fontSize: "16px", lineHeight: "1.6" }}>
                Clear policies, fair pricing, and trustworthy support you can count on.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-xl">
              <h3 className="text-xl mb-3" style={{ color: "#7b3f7e", fontFamily: "Poppins, sans-serif", fontWeight: "700", fontSize: "20px" }}>Family‑Run with Heart</h3>
              <p style={{ color: "#585858", fontFamily: "Poppins, sans-serif", fontWeight: "400", fontSize: "16px", lineHeight: "1.6" }}>
                A local, family‑driven business built on compassion and community.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-xl">
              <h3 className="text-xl mb-3" style={{ color: "#7b3f7e", fontFamily: "Poppins, sans-serif", fontWeight: "700", fontSize: "20px" }}>Holistic Support</h3>
              <p style={{ color: "#585858", fontFamily: "Poppins, sans-serif", fontWeight: "400", fontSize: "16px", lineHeight: "1.6" }}>
                From daily tasks to companionship and hobbies, we make life easier and more joyful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center" style={{ color: "#585858" }}>
            Pricing
          </h2>
          <p className="text-center mb-12 text-lg" style={{ color: "#585858" }}>
            Flexible pricing designed to fit your needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Pricing Card 1 */}
            {/* Pricing Card 1 - Essential */}
            <div className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition border-t-4" style={{ borderTopColor: "#6ec6ca", boxShadow: "0 4px 6px -1px rgba(110, 198, 202, 0.2)" }}>
              <div className="p-8 flex flex-col h-full">
                <div className="mb-4 w-12 h-12">
                  <img src="https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2F2a1072e910434749b3a2591eb73ef5fb" alt="Essential icon" className="w-full h-full" />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#585858" }}>Essential Ease</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold" style={{ color: "#6ec6ca" }}>R900</span>
                  <span style={{ color: "#585858" }}>/month</span>
                </div>
                <p className="mb-4 text-sm" style={{ color: "#585858" }}>4 hours per month</p>
                <p className="mb-6 flex-grow" style={{ color: "#585858" }}>Perfect for light support and everyday tasks.</p>
                <a href="https://wa.me/27689292847?text=Hi!%20I'd%20like%20to%20chat%20about%20the%20Essential%20Ease%20package." target="_blank" rel="noopener noreferrer" className="w-full text-white py-2 rounded-lg font-medium transition mt-auto hover:opacity-90 block text-center" style={{ backgroundColor: "#6ec6ca" }}>
                  WhatsApp Us
                </a>
                <a href="mailto:hello@elderlyease.co.za?subject=Inquiry:%20Essential%20Ease%20Plan" target="_blank" rel="noopener noreferrer" className="w-full py-2 rounded-lg font-medium transition hover:bg-gray-100 block text-center mt-2" style={{ borderWidth: "2px", borderColor: "#6ec6ca", color: "#6ec6ca" }}>
                  Email Us
                </a>
              </div>
            </div>

            {/* Pricing Card 2 - Comfort */}
            <div className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition border-t-4" style={{ borderTopColor: "#e1a5af", boxShadow: "0 10px 15px -3px rgba(225, 165, 175, 0.2)" }}>
              <div className="p-8 bg-gradient-to-br from-gray-50 to-transparent flex flex-col h-full">
                <div className="mb-4 w-12 h-12">
                  <img src="https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2F9f16e47037ff4660a990da920ea1104e" alt="Comfort icon" className="w-full h-full" />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#585858" }}>Comfort Ease</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold" style={{ color: "#e1a5af" }}>R1350</span>
                  <span style={{ color: "#585858" }}>/month</span>
                </div>
                <p className="mb-4 text-sm" style={{ color: "#585858" }}>6 hours per month</p>
                <p className="mb-6 flex-grow" style={{ color: "#585858" }}>Ongoing support and peace of mind.</p>
                <a href="https://wa.me/27689292847?text=Hi!%20I'm%20interested%20in%20the%20Comfort%20Ease%20package." target="_blank" rel="noopener noreferrer" className="w-full text-white py-2 rounded-lg font-medium transition mt-auto hover:opacity-90 block text-center" style={{ backgroundColor: "#e1a5af" }}>
                  WhatsApp Us
                </a>
                <a href="mailto:hello@elderlyease.co.za?subject=Inquiry:%20Comfort%20Ease%20Plan" target="_blank" rel="noopener noreferrer" className="w-full py-2 rounded-lg font-medium transition hover:bg-gray-100 block text-center mt-2" style={{ borderWidth: "2px", borderColor: "#e1a5af", color: "#e1a5af" }}>
                  Email Us
                </a>
              </div>
            </div>

            {/* Pricing Card 3 - Complete */}
            <div className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition border-t-4" style={{ borderTopColor: "#7b3f7e", boxShadow: "0 4px 6px -1px rgba(123, 63, 126, 0.2)" }}>
              <div className="p-8 flex flex-col h-full">
                <div className="mb-4 w-12 h-12">
                  <img src="https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2Fbd6b916d4eb44083837597738dbb5cfb" alt="Complete icon" className="w-full h-full" />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#585858" }}>Complete Ease</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold" style={{ color: "#7b3f7e" }}>R1800</span>
                  <span style={{ color: "#585858" }}>/month</span>
                </div>
                <p className="mb-4 text-sm" style={{ color: "#585858" }}>8 hours per month</p>
                <p className="mb-6 flex-grow" style={{ color: "#585858" }}>Comprehensive care with connection and confidence.</p>
                <a href="https://wa.me/27689292847?text=Hi!%20I'd%20like%20to%20discuss%20the%20Complete%20Ease%20package." target="_blank" rel="noopener noreferrer" className="w-full text-white py-2 rounded-lg font-medium transition mt-auto hover:opacity-90 block text-center" style={{ backgroundColor: "#7b3f7e" }}>
                  WhatsApp Us
                </a>
                <a href="mailto:hello@elderlyease.co.za?subject=Inquiry:%20Complete%20Ease%20Plan" target="_blank" rel="noopener noreferrer" className="w-full py-2 rounded-lg font-medium transition hover:bg-gray-100 block text-center mt-2" style={{ borderWidth: "2px", borderColor: "#7b3f7e", color: "#7b3f7e" }}>
                  Email Us
                </a>
              </div>
            </div>
          </div>

          {/* Additional Pricing Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-2" style={{ color: "#585858" }}>Custom Ease</h3>
              <p className="mb-4" style={{ color: "#585858" }}>Tailored to your unique needs. Mix and match services.</p>
              <a href="mailto:hello@elderlyease.co.za?subject=Quote%20Request:%20Custom%20Ease%20Plan" target="_blank" rel="noopener noreferrer" className="w-full text-white py-2 rounded-lg font-medium transition mt-auto hover:opacity-90 block text-center" style={{ backgroundColor: "#585858" }}>
                Email Us
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-2" style={{ color: "#585858" }}>Hourly Ease</h3>
              <p className="mb-4" style={{ color: "#585858" }}>
                <span className="text-2xl font-bold" style={{ color: "#585858" }}>R250</span>/hour
              </p>
              <p className="text-sm mb-4" style={{ color: "#585858" }}>Flexible, transparent support for one‑off needs. A great way to try Elderly Ease before committing to a package.</p>
              <a href="mailto:hello@elderlyease.co.za?subject=Trial%20Inquiry:%20Simple%20Hourly%20Ease" target="_blank" rel="noopener noreferrer" className="w-full py-2 rounded-lg font-medium transition hover:bg-gray-100 block text-center" style={{ borderWidth: "2px", borderColor: "#7b3f7e", color: "#7b3f7e" }}>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#6ec6ca" }}>
        <div className="leaf-bg-top absolute inset-0 opacity-10" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center"><p>Meet the Team</p></h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white bg-opacity-95 rounded-xl overflow-hidden shadow-lg">
              <div className="overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2F60f6d8810c5f4b388b052201ab17fbc0"
                  alt="Candice"
                  className="w-full h-full object-cover"
                  style={{ borderRadius: "12px" }}
                />
              </div>
              <div className="px-6" style={{ paddingTop: "30px", paddingBottom: "24px" }}>
                <p className="text-gray-700" style={{ fontSize: "16px", fontFamily: "Poppins, sans-serif", fontWeight: "400", lineHeight: "1.6" }}>
                  <span style={{ color: "#585858", fontWeight: "700" }}>Candice</span> keeps the hinges oiled and the spirits lifted. From booking appointments to wrapping gifts and even wrangling tricky tech, she adds a dash of creativity to everyday fixes—making life run smoother with a smile.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white bg-opacity-95 rounded-xl overflow-hidden shadow-lg">
              <div className="overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2F1e0a4cb8f3444de7bd077a862211792a"
                  alt="Colleen"
                  className="w-full h-full object-cover"
                  style={{ borderRadius: "12px" }}
                />
              </div>
              <div className="px-6" style={{ paddingTop: "30px", paddingBottom: "24px" }}>
                <p className="text-gray-700" style={{ fontSize: "16px", fontFamily: "Poppins, sans-serif", fontWeight: "400", lineHeight: "1.6" }}>
                  <span style={{ color: "#585858", fontWeight: "700" }}>Colleen</span> is the sunshine in every visit. Whether she's tending gardens, puzzling over crosswords, or chauffeuring with care, she turns errands into adventures and companionship into laughter.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white bg-opacity-95 rounded-xl overflow-hidden shadow-lg">
              <div className="overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2F3ffcc08145614425a365ff4d97b85bfc"
                  alt="Carolyn"
                  className="w-full h-full object-cover"
                  style={{ borderRadius: "12px" }}
                />
              </div>
              <div className="px-6" style={{ paddingTop: "30px", paddingBottom: "24px" }}>
                <p className="text-gray-700" style={{ fontSize: "16px", fontFamily: "Poppins, sans-serif", fontWeight: "400", lineHeight: "1.6" }}>
                  <span style={{ color: "#585858", fontWeight: "700" }}>Carolyn</span> is happiest with paws pattering beside her. She's the walking buddy pets adore and the everyday helper households rely on—whether it's a wagging tail, a tidy corner, or a cherished story, Carolyn brings heart to every step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="get-in-touch" className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: "#585858" }}>Contact Us</h2>

          <div className="bg-white rounded-xl shadow-lg p-12 space-y-8">
            <h3 className="text-2xl font-bold" style={{ color: "#585858" }}>
              Let's make life easier together
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="text-4xl" style={{ color: "#6ec6ca" }}>
                  <FaWhatsapp />
                </div>
                <div>
                  <p className="font-medium mb-2" style={{ color: "#585858" }}>WhatsApp</p>
                  <a href="https://wa.me/27689292847" className="font-medium contact-link block mb-2">
                    Start Chat or Voice Note
                  </a>
                  <span className="inline-block text-xs font-medium px-2 py-1 rounded" style={{ backgroundColor: "#6ec6ca", color: "white", marginTop: "10px" }}>Fastest Response</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="text-4xl relative" style={{ color: "#6ec6ca", cursor: "pointer" }} onClick={handleCopyEmail}>
                  <FiMail />
                  {copied && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none">
                      Copied!
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-medium mb-2" style={{ color: "#585858" }}>Email</p>
                  <a href="mailto:hello@elderlyease.co.za" className="font-medium contact-link">
                    hello@elderlyease.co.za
                  </a>
                  <p className="text-sm mt-2" style={{ color: "#585858" }}>Best for custom quotes & non-urgent questions</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="text-4xl" style={{ color: "#6ec6ca" }}>
                  <FiPhone />
                </div>
                <div>
                  <p className="font-medium mb-2" style={{ color: "#585858" }}>Phone</p>
                  <a href="tel:0689292847" className="font-medium contact-link">
                    068 929 2847
                  </a>
                  <p className="text-sm mt-2" style={{ color: "#585858" }}>Best for urgent needs. Please leave a message if we are with a client.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageFooter />

    </div>
  );
}
