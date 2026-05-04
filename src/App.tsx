import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Instagram, Facebook } from "lucide-react";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] font-sans text-[#2C2118]">
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <span className="text-2xl font-serif font-light text-[#8B6F5E]">
              Serenity
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
            <a
              href="#services"
              className="text-[#7A6658] hover:text-[#2C2118] transition"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-[#7A6658] hover:text-[#2C2118] transition"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-[#7A6658] hover:text-[#2C2118] transition"
            >
              Testimonials
            </a>
            <a
              href="#book"
              className="bg-[#8B6F5E] text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-[#755c4c] transition"
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#8B6F5E]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#e0d7cf] px-6 py-4 space-y-4">
            <a
              href="#services"
              className="block text-[#7A6658] uppercase tracking-widest text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="block text-[#7A6658] uppercase tracking-widest text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#testimonials"
              className="block text-[#7A6658] uppercase tracking-widest text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#book"
              className="block bg-[#8B6F5E] text-white text-center px-5 py-2 rounded-full text-xs font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.pexels.com/photos/35884502/pexels-photo-35884502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-[#C9A96E] uppercase tracking-[.25em] text-sm mb-4">
            Welcome to Serenity
          </p>
          <h1 className="text-5xl md:text-7xl font-serif font-light text-white mb-6 leading-tight">
            Restore. Relax. Renew.
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-lg mx-auto mb-8">
            Experience the healing power of touch in a sanctuary built for your wellbeing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#book"
              className="bg-[#8B6F5E] text-white rounded-full px-8 py-3 hover:bg-[#755c4c] transition font-medium"
            >
              Book a Session
            </a>
            <a
              href="#services"
              className="border border-white text-white rounded-full px-8 py-3 hover:bg-white hover:text-[#8B6F5E] transition font-medium"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Scroll down arrow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={28} className="text-white/70" />
        </div>
      </section>

      {/* INTRO / ABOUT STRIP */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/6187418/pexels-photo-6187418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Massage therapist preparing oils"
              className="rounded-2xl shadow-lg object-cover w-full h-[500px]"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-[#C9A96E] uppercase tracking-[.2em] text-sm mb-4">
              Our Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#2C2118] mb-6">
              Healing is an Art. <br /> We've Mastered It.
            </h2>
            <p className="text-[#7A6658] text-lg leading-relaxed mb-8">
              At Serenity, we believe true wellness begins when the mind and body find stillness.
              Our expert therapists blend ancient techniques with modern care to deliver an experience
              that goes beyond relaxation — it transforms.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <span className="text-3xl font-serif text-[#C9A96E]">12+</span>
                <p className="text-sm text-[#7A6658]">Years Experience</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-serif text-[#C9A96E]">2,000+</span>
                <p className="text-sm text-[#7A6658]">Happy Clients</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-serif text-[#C9A96E]">8</span>
                <p className="text-sm text-[#7A6658]">Signature Treatments</p>
              </div>
            </div>
            <a
              href="#"
              className="text-[#8B6F5E] underline text-sm font-medium hover:text-[#2C2118] transition"
            >
              Meet Our Team →
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#C9A96E] uppercase tracking-[.2em] text-sm mb-4">
              What We Offer
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#2C2118]">
              Our Signature Treatments
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://images.pexels.com/photos/6629614/pexels-photo-6629614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Swedish Massage"
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#2C2118]">Swedish Massage</h3>
                <p className="text-sm text-[#7A6658] mt-1">
                  A gentle, flowing massage to ease tension, improve circulation, and promote deep relaxation.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[#C9A96E] font-semibold">From $85</span>
                  <span className="text-xs text-[#7A6658]">60 min</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://images.pexels.com/photos/6628701/pexels-photo-6628701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Deep Tissue Massage"
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#2C2118]">Deep Tissue</h3>
                <p className="text-sm text-[#7A6658] mt-1">
                  Targeted pressure techniques to release chronic muscle tension and restore mobility.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[#C9A96E] font-semibold">From $100</span>
                  <span className="text-xs text-[#7A6658]">60 min</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://images.pexels.com/photos/6560252/pexels-photo-6560252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Aromatherapy Massage"
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#2C2118]">Aromatherapy</h3>
                <p className="text-sm text-[#7A6658] mt-1">
                  Essential oils and therapeutic touch combine for a deeply sensory healing experience.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[#C9A96E] font-semibold">From $95</span>
                  <span className="text-xs text-[#7A6658]">75 min</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://images.pexels.com/photos/3997997/pexels-photo-3997997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Hot Stone Massage"
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#2C2118]">Hot Stone</h3>
                <p className="text-sm text-[#7A6658] mt-1">
                  Warm basalt stones melt away tension and restore energy flow throughout the body.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[#C9A96E] font-semibold">From $120</span>
                  <span className="text-xs text-[#7A6658]">90 min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 bg-[#2C2118]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#C9A96E] uppercase tracking-[.2em] text-sm mb-4">
              Kind Words
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-6 text-white">
              <div className="text-[#C9A96E] text-lg mb-3">★★★★★</div>
              <p className="italic text-white/90 leading-relaxed mb-4">
                "I walked in stressed and exhausted. I floated out. Serenity is the only place I trust with my body and mind."
              </p>
              <p className="text-sm text-[#C9A96E] font-medium">— Sarah M.</p>
              <p className="text-xs text-white/50">Regular Client</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-6 text-white">
              <div className="text-[#C9A96E] text-lg mb-3">★★★★★</div>
              <p className="italic text-white/90 leading-relaxed mb-4">
                "The deep tissue session was exactly what my back needed. Professional, attentive, and incredibly skilled."
              </p>
              <p className="text-sm text-[#C9A96E] font-medium">— James T.</p>
              <p className="text-xs text-white/50">Monthly Member</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-6 text-white">
              <div className="text-[#C9A96E] text-lg mb-3">★★★★★</div>
              <p className="italic text-white/90 leading-relaxed mb-4">
                "The hot stone treatment was unlike anything I've experienced. Pure magic. I've already booked my next appointment."
              </p>
              <p className="text-sm text-[#C9A96E] font-medium">— Priya L.</p>
              <p className="text-xs text-white/50">New Client</p>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING / CTA SECTION */}
      <section id="book" className="relative py-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.pexels.com/photos/6188038/pexels-photo-6188038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <p className="text-[#C9A96E] uppercase tracking-[.2em] text-sm mb-4">
            Ready to Unwind?
          </p>
          <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-6">
            Book Your Session Today
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Your journey to relaxation is just one click away. Treat yourself — you deserve it.
          </p>
          <a
            href="#"
            className="inline-block bg-[#C9A96E] text-white rounded-full px-10 py-4 text-lg font-medium hover:bg-[#b8935a] transition"
          >
            Reserve Your Spot
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2C2118] text-white/70 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🌿</span>
              <span className="text-xl font-serif text-white">Serenity</span>
            </div>
            <p className="text-sm mb-4">Your sanctuary awaits.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-white text-sm uppercase tracking-widest mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
              <li><a href="#book" className="hover:text-white transition">Book Now</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-white text-sm uppercase tracking-widest mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>📍 123 Wellness Lane, Suite 4</li>
              <li>📞 (555) 867-5309</li>
              <li>✉ hello@serenityspa.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-white/40">
          © 2024 Serenity Spa & Massage. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
