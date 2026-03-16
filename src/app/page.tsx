'use client';

import Image from "next/image";
import { useState } from 'react';
import dynamic from 'next/dynamic';
import PageFooter from '@/components/PageFooter';

const FaWhatsapp = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaWhatsapp })), { ssr: false });

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    // Open Gmail compose with the email
    window.open('https://mail.google.com/mail/?view=cm&to=hello@elderlyease.co.za', '_blank');
    // Show "Copied!" feedback for familiarity
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="w-full" style={{ backgroundColor: "#fffff0" }}>
      {/* Skip to main content link (WCAG 2.4.1) */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-[9999] focus:bg-purple-600 focus:text-white focus:px-4 focus:py-2" style={{ padding: "8px 16px" }}>
        Skip to main content
      </a>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-200" style={{ backgroundColor: "#fffff0" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center hover:opacity-80 transition" style={{ gap: "2px" }}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2F320526f00a274e6b86caadcfb5be1417"
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
      <section id="main-content" className="relative overflow-visible py-20 px-4 sm:px-6 lg:px-8" style={{ zIndex: 10, backgroundColor: "#fffff0" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h1 className="text-5xl font-bold mb-4 leading-tight" style={{ color: "#585858" }}>
                  Because asking for help should feel easy
                </h1>
              </div>
              <h2 className="text-xl leading-tight" style={{ color: "#585858" }}>
                Reliable support for elderly individuals in Edenvale and surrounds, delivered with heart and connection.
              </h2>
              <div className="flex gap-4 pt-4">
                <a href="https://wa.me/27689292847?text=Hi%20Elderly%20Ease!%20I%20would%20love%20to%20chat%20about%20your%20services." target="_blank" rel="noopener noreferrer" className="text-white px-6 py-3 rounded-full font-medium transition transform hover:scale-105 inline-block" style={{ backgroundColor: "#7b3f7e" }}>
                  WhatsApp Us
                </a>
                <a href="#about" className="px-6 py-3 rounded-full font-medium transition hover:bg-gray-100 inline-block" style={{ borderWidth: "2px", borderColor: "#7b3f7e", color: "#7b3f7e" }}>
                  Learn More
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2F7ebb4de5d94d42da9c27cd67e871feb6"
                alt="Caregiver with elderly client and dog"
                className="w-full h-full object-cover"
                style={{ objectPosition: "75% center" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Background Leaf Pattern */}
      <div className="opacity-40" style={{ position: "absolute", left: "15%", top: "-450px", width: "100%", zIndex: 99, right: "auto", bottom: "auto" }} />

      {/* About Us Section */}
      <section id="about" className="relative px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: "#9D737A", marginTop: "-50px", position: "relative", overflow: "visible", zIndex: 10, scrollMarginTop: "70px" }}>
        <style>{`@media (min-width: 768px) { #about { margin-top: -60px !important; scroll-margin-top: 80px; } }`}</style>
        <div className="mx-auto relative z-10" style={{ maxWidth: "800px", paddingTop: "50px", paddingBottom: "60px" }}>
          <h2 className="text-3xl font-bold text-center leading-tight sm:text-4xl" style={{ color: "white", fontSize: "36px", fontWeight: "700", lineHeight: "40px", marginBottom: "24px" }}>About Us</h2>
          <style>{`@media (min-width: 640px) { #about h2 { font-size: 36px; } }`}</style>

          <div className="space-y-6" style={{ lineHeight: "24px" }}>
      <p style={{ fontSize: "16px", color: "white", lineHeight: "24px" }}>
        At Elderly Ease, we believe that growing older shouldn't mean losing your connection to the community you love. Based in the quiet streets of Hurlyvale, our mission is simple: to provide reliable, compassionate support that makes daily living feel effortless again. Whether it's navigating new technology, tending to a beloved garden, or simply having a friendly face to share a cup of tea with, we are here to bridge the gap between needing help and receiving it with dignity.
      </p>

      <p style={{ fontSize: "16px", color: "white", lineHeight: "24px" }}>
        We understand that every individual has a unique story. That's why our team—Candice, Colleen, and Carolyn—focuses on more than just tasks; we focus on heart and connection. Serving Edenvale and surrounds, including Greenstone Hill, Bedfordview, and Dowerglen, we take pride in being the local support system that families can trust. We aren't just a service provider; we are your neighbors, dedicated to ensuring that our seniors feel seen, heard, and supported right here at home.
      </p>
    </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#fffff0" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center" style={{ color: "#585858" }}>Services</h2>
          <p className="text-center mb-6 text-lg" style={{ color: "#585858" }}>
            Comprehensive care tailored to your unique needs and lifestyle
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1: Home Management */}
            <div className="bg-white p-8 rounded-xl transition hover:shadow-lg" style={{ minHeight: "460px", borderRadius: "12px", boxShadow: "0 0 20px -5px rgba(0, 0, 0, 0.1)" }}>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#585858", fontWeight: "600" }}>
                Home Management & Daily Living
              </h3>
              <p className="font-medium italic mb-4" style={{ color: "#585858" }}>
                Because staying connected should feel easy.
              </p>
              <ul className="space-y-2" style={{ color: "#585858" }}>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong style={{ fontWeight: "600" }}>Housekeeping:</strong> Light cleaning such as rubbish removal, dishes, dusting, and laundry.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong style={{ fontWeight: "600" }}>Meal Preparation:</strong> Support with planning, shopping, and cooking.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong style={{ fontWeight: "600" }}>House Maintenance:</strong> Everyday fixes like oiling hinges, hanging pictures, or changing bulbs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong style={{ fontWeight: "600" }}>Seasonal Prep:</strong> Patio furniture, wardrobe swaps, and organizing seasonal items.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong style={{ fontWeight: "600" }}>Decluttering & Downsizing:</strong> Closet clean‑outs, donations, or packing boxes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong style={{ fontWeight: "600" }}>Pet Care:</strong> Dog walking, litter box cleaning, and everyday pet support.</span>
                </li>
              </ul>
            </div>

            {/* Service 2: Concierge */}
            <div className="bg-white p-8 rounded-xl transition hover:shadow-lg" style={{ minHeight: "460px", borderRadius: "12px", boxShadow: "0 0 20px -5px rgba(0, 0, 0, 0.1)" }}>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#585858", fontWeight: "600" }}>
                Personal Concierge & Logistics
              </h3>
              <p className="font-medium italic mb-4" style={{ color: "#585858" }}>
                Because life runs smoother with a helping hand.
              </p>
              <ul className="space-y-2" style={{ color: "#585858" }}>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong style={{ fontWeight: "600" }}>Transportation:</strong> Safe, reliable trips for appointments, errands, and social outings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong style={{ fontWeight: "600" }}>Shopping Assistance:</strong> Groceries, pharmacy pickups, and more.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong style={{ fontWeight: "600" }}>Appointment Scheduling:</strong> Booking doctors, hairdressers, or home repairs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong style={{ fontWeight: "600" }}>Gift Concierge:</strong> Selecting, wrapping, and mailing gifts for loved ones.</span>
                </li>
              </ul>
            </div>

            {/* Service 3: Technology */}
            <div className="bg-white p-8 rounded-xl transition hover:shadow-lg" style={{ minHeight: "460px", borderRadius: "12px", boxShadow: "0 0 20px -5px rgba(0, 0, 0, 0.1)" }}>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#585858", fontWeight: "600" }}>
                Technology & Digital Confidence
              </h3>
              <p className="font-medium italic mb-4" style={{ color: "#585858" }}>
                Because staying connected should feel easy.
              </p>
              <ul className="space-y-2" style={{ color: "#585858" }}>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong style={{ fontWeight: "600" }}>Digital Support:</strong> Guidance with phones, TVs, apps, and social media.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong style={{ fontWeight: "600" }}>Cybersecurity Basics:</strong> Strong passwords and spotting phishing attempts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong style={{ fontWeight: "600" }}>Digital Legacy:</strong> Digitizing photo albums and organizing memories to share with family.</span>
                </li>
              </ul>
            </div>

            {/* Service 4: Wellness */}
            <div className="bg-white p-8 rounded-xl transition hover:shadow-lg" style={{ minHeight: "460px", borderRadius: "12px", boxShadow: "0 0 20px -5px rgba(0, 0, 0, 0.1)" }}>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#585858", fontWeight: "600" }}>
                Wellness, Companionship & Legacy
              </h3>
              <p className="font-medium italic mb-4" style={{ color: "#585858" }}>
                Because care should feel like connection.
              </p>
              <ul className="space-y-2" style={{ color: "#585858" }}>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong style={{ fontWeight: "600" }}>Companionship:</strong> Friendly visits to ease isolation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong style={{ fontWeight: "600" }}>Walking Buddy:</strong> Gentle exercise with a supportive partner.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong style={{ fontWeight: "600" }}>Memoir & Legacy:</strong> Recording life stories, family recipes, or labeling heirlooms.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: "#585858" }}>•</span>
                  <span><strong style={{ fontWeight: "600" }}>Hobbies & Pastimes:</strong> Gardening, puzzles, games, and activities that spark joy.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: "#7b3f7e" }}>
        <div className="leaf-bg-top absolute inset-0 opacity-10" />
        {/* Cream Circle Leaves - Top Left */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2F2340e3d29060413dab8205bc6847cfbe"
          alt="Decorative cream circle leaves"
          className="absolute"
          style={{ top: "-100px", left: "-100px", width: "400px", height: "400px", zIndex: 0, opacity: 0.1, pointerEvents: "none" }}
        />
        {/* Cream Circle Leaves - Bottom Right */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2F2340e3d29060413dab8205bc6847cfbe"
          alt="Decorative cream circle leaves"
          className="absolute"
          style={{ bottom: "-100px", right: "-100px", width: "400px", height: "400px", zIndex: 0, opacity: 0.1, pointerEvents: "none" }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">
            Why Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl mb-3" style={{ color: "#585858", fontFamily: "Poppins, sans-serif", fontSize: "24px", fontWeight: "600", lineHeight: "32px" }}>Dignity First</h3>
              <p style={{ color: "#585858", fontFamily: "Poppins, sans-serif", fontWeight: "400", fontSize: "16px", lineHeight: "24px" }}>
                Every service is delivered with respect, care, and a focus on independence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl mb-3" style={{ color: "#585858", fontFamily: "Poppins, sans-serif", fontSize: "24px", fontWeight: "600", lineHeight: "32px" }}>Transparent & Reliable</h3>
              <p style={{ color: "#585858", fontFamily: "Poppins, sans-serif", fontWeight: "400", fontSize: "16px", lineHeight: "24px" }}>
                Clear policies, fair pricing, and trustworthy support you can count on.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl mb-3" style={{ color: "#585858", fontFamily: "Poppins, sans-serif", fontSize: "24px", fontWeight: "600", lineHeight: "32px" }}>Family‑Run with Heart</h3>
              <p style={{ color: "#585858", fontFamily: "Poppins, sans-serif", fontWeight: "400", fontSize: "16px", lineHeight: "24px" }}>
                A local, family‑driven business built on compassion and community.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl mb-3" style={{ color: "#585858", fontFamily: "Poppins, sans-serif", fontSize: "24px", fontWeight: "600", lineHeight: "32px" }}>Holistic Support</h3>
              <p style={{ color: "#585858", fontFamily: "Poppins, sans-serif", fontWeight: "400", fontSize: "16px", lineHeight: "24px" }}>
                From daily tasks to companionship and hobbies, we make life easier and more joyful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#fffff0" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center" style={{ color: "#585858" }}>
            Pricing
          </h2>
          <p className="text-center mb-6 text-lg" style={{ color: "#585858" }}>
            Flexible pricing designed to fit your needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Pricing Card 1 */}
            {/* Pricing Card 1 - Essential */}
            <div className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition border-t-4" style={{ borderTopColor: "#6ec6ca", boxShadow: "0 4px 6px -1px rgba(110, 198, 202, 0.2)" }}>
              <div className="p-8 flex flex-col h-full">
                <div className="mb-4 w-full flex justify-center">
                  <img src="https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2F2a1072e910434749b3a2591eb73ef5fb" alt="Essential icon" className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#585858" }}>Essential Ease</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold" style={{ color: "#6ec6ca" }}>R900</span>
                  <span style={{ color: "#585858" }}>/month</span>
                </div>
                <p className="mb-4 text-sm" style={{ color: "#585858", fontWeight: "500" }}>4 hours per month</p>
                <p className="mb-6 flex-grow" style={{ color: "#585858" }}>Perfect for light support and everyday tasks.</p>
                <a href="https://wa.me/27689292847?text=Hi!%20I'd%20like%20to%20chat%20about%20the%20Essential%20Ease%20package." target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-medium transition mt-auto hover:opacity-90 block text-center" style={{ backgroundColor: "#6ec6ca", color: "#585858", width: "207px", marginLeft: "auto", marginRight: "auto" }}>
                  WhatsApp Us
                </a>
                <a href="https://mail.google.com/mail/?view=cm&to=hello@elderlyease.co.za&su=I%27d%20like%20to%20chat%20about%20the%20Essential%20Ease%20package" target="_blank" rel="noopener noreferrer" className="px-6 rounded-lg font-medium transition hover:bg-gray-100 text-center mt-2" style={{ borderWidth: "2px", borderColor: "#6ec6ca", color: "#6ec6ca", height: "48px", lineHeight: "48px", display: "block", paddingTop: "0", paddingBottom: "0", width: "207px", marginLeft: "auto", marginRight: "auto" }}>
                  Email Us
                </a>
              </div>
            </div>

            {/* Pricing Card 2 - Comfort */}
            <div className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition border-t-4" style={{ borderTopColor: "#e1a5af", boxShadow: "0 10px 15px -3px rgba(225, 165, 175, 0.2)" }}>
              <div className="p-8 bg-gradient-to-br from-gray-50 to-transparent flex flex-col h-full">
                <div className="mb-4 w-full flex justify-center">
                  <img src="https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2F9f16e47037ff4660a990da920ea1104e" alt="Comfort icon" className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#585858" }}>Comfort Ease</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold" style={{ color: "#e1a5af" }}>R1350</span>
                  <span style={{ color: "#585858" }}>/month</span>
                </div>
                <p className="mb-4 text-sm" style={{ color: "#585858", fontWeight: "500" }}>6 hours per month</p>
                <p className="mb-6 flex-grow" style={{ color: "#585858" }}>Ongoing support and peace of mind.</p>
                <a href="https://wa.me/27689292847?text=Hi!%20I'm%20interested%20in%20the%20Comfort%20Ease%20package." target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-medium transition mt-auto hover:opacity-90 block text-center" style={{ backgroundColor: "#e1a5af", color: "#585858", width: "207px", marginLeft: "auto", marginRight: "auto" }}>
                  WhatsApp Us
                </a>
                <a href="https://mail.google.com/mail/?view=cm&to=hello@elderlyease.co.za&su=I%27m%20interested%20in%20the%20Comfort%20Ease%20package" target="_blank" rel="noopener noreferrer" className="px-6 rounded-lg font-medium transition hover:bg-gray-100 text-center mt-2" style={{ borderWidth: "2px", borderColor: "#e1a5af", color: "#e1a5af", height: "48px", lineHeight: "48px", display: "block", paddingTop: "0", paddingBottom: "0", width: "207px", marginLeft: "auto", marginRight: "auto" }}>
                  Email Us
                </a>
              </div>
            </div>

            {/* Pricing Card 3 - Complete */}
            <div className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition border-t-4" style={{ borderTopColor: "#7b3f7e", boxShadow: "0 4px 6px -1px rgba(123, 63, 126, 0.2)" }}>
              <div className="p-8 flex flex-col h-full">
                <div className="mb-4 w-full flex justify-center">
                  <img src="https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2Fbd6b916d4eb44083837597738dbb5cfb" alt="Complete icon" className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#585858" }}>Complete Ease</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold" style={{ color: "#7b3f7e" }}>R1800</span>
                  <span style={{ color: "#585858" }}>/month</span>
                </div>
                <p className="mb-4 text-sm" style={{ color: "#585858", fontWeight: "500" }}>8 hours per month</p>
                <p className="mb-6 flex-grow" style={{ color: "#585858" }}>Comprehensive care with connection and confidence.</p>
                <a href="https://wa.me/27689292847?text=Hi!%20I'd%20like%20to%20discuss%20the%20Complete%20Ease%20package." target="_blank" rel="noopener noreferrer" className="text-white px-6 py-3 rounded-lg font-medium transition mt-auto hover:opacity-90 block text-center" style={{ backgroundColor: "#7b3f7e", width: "207px", marginLeft: "auto", marginRight: "auto" }}>
                  WhatsApp Us
                </a>
                <a href="https://mail.google.com/mail/?view=cm&to=hello@elderlyease.co.za&su=I%27d%20like%20to%20discuss%20the%20Complete%20Ease%20package" target="_blank" rel="noopener noreferrer" className="px-6 rounded-lg font-medium transition hover:bg-gray-100 text-center mt-2" style={{ borderWidth: "2px", borderColor: "#7b3f7e", color: "#7b3f7e", height: "48px", lineHeight: "48px", display: "block", paddingTop: "0", paddingBottom: "0", width: "207px", marginLeft: "auto", marginRight: "auto" }}>
                  Email Us
                </a>
              </div>
            </div>
          </div>

          {/* Additional Pricing Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
            <div className="bg-white rounded-xl shadow-md h-full">
              <div className="p-8 flex flex-col h-full text-center">
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#585858" }}>Custom Ease</h3>
                <div className="mb-4">
                  <p className="text-4xl font-bold" style={{ color: "#585858" }}>Individually Quoted</p>
                </div>
                <p className="mb-4 flex-grow" style={{ color: "#585858" }}>Tailored to your unique needs. Mix and match services.</p>
                <a href="https://mail.google.com/mail/?view=cm&to=hello@elderlyease.co.za&subject=Quote%20Request%3A%20Custom%20Ease%20Plan" target="_blank" rel="noopener noreferrer" className="text-white px-6 rounded-lg font-medium transition hover:opacity-90 text-center mt-2" style={{ backgroundColor: "#585858", height: "48px", lineHeight: "48px", display: "block", paddingTop: "0", paddingBottom: "0", width: "207px", marginLeft: "auto", marginRight: "auto" }}>
                  Email Us
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md h-full">
              <div className="p-8 flex flex-col h-full text-center">
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#585858" }}>Hourly Ease</h3>
                <p className="mb-4" style={{ color: "#585858" }}>
                  <span className="text-4xl font-bold" style={{ color: "#585858" }}>R250</span>/hour
                </p>
                <p className="mb-4 flex-grow" style={{ color: "#585858" }}>Flexible, transparent support for one‑off needs. A great way to try Elderly Ease before committing to a package.</p>
                <a href="https://mail.google.com/mail/?view=cm&to=hello@elderlyease.co.za&subject=Trial%20Inquiry%3A%20Simple%20Hourly%20Ease" target="_blank" rel="noopener noreferrer" className="text-white px-6 rounded-lg font-medium transition hover:opacity-90 text-center mt-2" style={{ backgroundColor: "#585858", height: "48px", lineHeight: "48px", display: "block", paddingTop: "0", paddingBottom: "0", width: "207px", marginLeft: "auto", marginRight: "auto" }}>
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: "#6ec6ca" }}>
        <div className="leaf-bg-top absolute inset-0 opacity-10" />
        {/* Cream Circle Leaves - Top Left */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2F2340e3d29060413dab8205bc6847cfbe"
          alt="Decorative cream circle leaves"
          className="absolute"
          style={{ top: "-100px", left: "-100px", width: "400px", height: "400px", zIndex: 0, opacity: 0.2, pointerEvents: "none" }}
        />
        {/* Cream Circle Leaves - Bottom Right */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2F2340e3d29060413dab8205bc6847cfbe"
          alt="Decorative cream circle leaves"
          className="absolute"
          style={{ bottom: "-100px", right: "-100px", width: "400px", height: "400px", zIndex: 0, opacity: 0.2, pointerEvents: "none" }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: "#585858" }}><p style={{ margin: "0 0 24px" }}>Meet the Team</p></h2>

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
                <p className="text-gray-700" style={{ fontSize: "16px", fontFamily: "Poppins, sans-serif", fontWeight: "400", lineHeight: "24px" }}>
                  <span style={{ color: "#585858", fontWeight: "600" }}>Candice</span> keeps the hinges oiled and the spirits lifted. From booking appointments to wrapping gifts and even wrangling tricky tech, she adds a dash of creativity to everyday fixes—making life run smoother with a smile.
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
                <p className="text-gray-700" style={{ fontSize: "16px", fontFamily: "Poppins, sans-serif", fontWeight: "400", lineHeight: "24px" }}>
                  <span style={{ color: "#585858", fontWeight: "600" }}>Colleen</span> is the sunshine in every visit. Whether she's tending gardens, puzzling over crosswords, or chauffeuring with care, she turns errands into adventures and companionship into laughter.
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
                <p className="text-gray-700" style={{ fontSize: "16px", fontFamily: "Poppins, sans-serif", fontWeight: "400", lineHeight: "24px" }}>
                  <span style={{ color: "#585858", fontWeight: "600" }}>Carolyn</span> is happiest with paws pattering beside her. She's the walking buddy pets adore and the everyday helper households rely on—whether it's a wagging tail, a tidy corner, or a cherished story, Carolyn brings heart to every step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="get-in-touch" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#fffff0" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: "#585858" }}>Contact Us</h2>

          <div className="bg-white rounded-xl shadow-lg p-12 space-y-8">
            <h3 className="text-2xl font-bold" style={{ color: "#585858", fontWeight: "600" }}>
              Let's make life easier together
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="text-4xl" style={{ color: "#585858" }}>
                  <FaWhatsapp aria-label="WhatsApp icon" />
                </div>
                <div>
                  <a href="https://wa.me/27689292847" target="_blank" rel="noopener noreferrer" className="font-medium contact-link block mb-2">
                    Start Chat or Voice Note
                  </a>
                  <span className="inline-block text-sm font-medium px-2 py-1 rounded" style={{ backgroundColor: "#6ec6ca", color: "#585858", marginTop: "10px" }}>Fastest Response</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <button className="text-4xl relative" style={{ color: "#585858", cursor: "pointer", background: "none", border: "none", padding: 0 }} onClick={handleCopyEmail} aria-label="Copy email address to clipboard" title="Click to copy email address">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  {copied && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none" role="status" aria-live="polite">
                      Copied!
                    </div>
                  )}
                </button>
                <div>
                  <p className="font-medium mb-2" style={{ color: "#585858" }}>Email</p>
                  <a href="https://mail.google.com/mail/?view=cm&to=hello@elderlyease.co.za" target="_blank" rel="noopener noreferrer" className="font-medium contact-link">
                    hello@elderlyease.co.za
                  </a>
                  <p className="text-sm mt-2" style={{ color: "#585858", lineHeight: "22px" }}>Best for custom quotes & non-urgent questions.</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="text-4xl" style={{ color: "#585858" }} aria-hidden="false">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-label="Phone icon">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium mb-2" style={{ color: "#585858" }}>Phone</p>
                  <a href="https://wa.me/27689292847" target="_blank" rel="noopener noreferrer" className="font-medium contact-link">
                    068 929 2847
                  </a>
                  <p className="text-sm mt-2" style={{ color: "#585858", lineHeight: "22px" }}>Best for urgent needs. Please leave a message if we are with a client.</p>
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
