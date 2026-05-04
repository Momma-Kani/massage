import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Instagram, Facebook } from "lucide-react";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400;1,600&family=Inter:wght@300;400;500&display=swap');`}</style>

      <div
        style={{ fontFamily: "'Inter', sans-serif" }}
        className="text-[#2C2420] bg-[#FAF7F4] scroll-smooth"
      >
        {/* Navbar */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
              ? "bg-[#FAF7F4] shadow-md"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
            <button
              onClick={() => smoothScrollTo("hero")}
              className="text-2xl italic font-semibold text-[#C9A96E]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Lomi
            </button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              {["About", "Services", "Testimonials"].map((label) => (
                <button
                  key={label}
                  onClick={() => smoothScrollTo(label.toLowerCase())}
                  className="hover:text-[#C9A96E] transition-colors"
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => smoothScrollTo("book")}
                className="bg-[#C9A96E] text-white px-6 py-2 rounded-full hover:opacity-90 transition"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-[#C9A96E]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-[#FAF7F4] border-t border-[#E8E0D5] px-4 py-4 space-y-4">
              {["About", "Services", "Testimonials", "Book"].map((label) => (
                <button
                  key={label}
                  onClick={() => smoothScrollTo(label.toLowerCase())}
                  className="block w-full text-left text-base font-medium hover:text-[#C9A96E] transition"
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="hero"
          className="relative h-screen flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/4085447/pexels-photo-4085447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center px-4">
            <p className="text-[#C9A96E] tracking-widest text-sm uppercase mb-4">
              HAWAII'S PREMIER SPA
            </p>
            <h1
              className="text-7xl md:text-9xl text-white italic font-semibold"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Lomi
            </h1>
            <p
              className="text-xl md:text-2xl text-white font-light mt-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Experience Hawaii's finest Lomi Lomi Massage.
            </p>
            <button
              onClick={() => smoothScrollTo("book")}
              className="mt-8 bg-[#C9A96E] text-white px-8 py-4 rounded-full hover:opacity-90 transition text-lg"
            >
              Book Your Session
            </button>
            <div className="mt-12 animate-bounce">
              <ChevronDown className="text-white mx-auto" size={32} />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="grid md:grid-cols-2">
          <div className="hidden md:block">
            <img
              src="https://images.pexels.com/photos/9335979/pexels-photo-9335979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Lomi Lomi massage therapist in serene setting"
              className="w-full h-full object-cover rounded-r-lg md:rounded-l-lg"
            />
          </div>
          <div className="p-12 md:p-16 flex flex-col justify-center">
            <p className="text-[#C9A96E] tracking-widest text-sm uppercase">
              OUR STORY
            </p>
            <h2
              className="text-4xl md:text-5xl font-semibold mt-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Ancient Hawaiian Healing, Timeless Ritual
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#2C2420]/80">
              Lomi Lomi is more than a massage — it is a sacred Hawaiian
              tradition passed down through generations. Rooted in the belief
              that tension held in the body mirrors tension held in the mind, our
              skilled therapists use long, flowing strokes to restore harmony,
              release blockages, and reconnect you with your deepest self.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#2C2420]/80">
              Every session at Lomi is a journey. We honor the aloha spirit in
              everything we do — from the warm kukui nut oil we use to the gentle
              rhythm of our hands, inspired by the ocean waves of the islands.
            </p>
            <div className="w-16 h-0.5 bg-[#C9A96E] mt-6"></div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-[#FAF7F4] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-[#C9A96E] tracking-widest text-sm uppercase">
              WHAT WE OFFER
            </p>
            <h2
              className="text-5xl font-semibold mt-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our Treatments
            </h2>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="https://images.pexels.com/photos/31234759/pexels-photo-31234759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Traditional Lomi Lomi massage"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3
                    className="text-2xl font-semibold"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Traditional Lomi Lomi
                  </h3>
                  <p className="text-[#C9A96E] text-sm tracking-wide mt-1">
                    60 / 90 / 120 min
                  </p>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    The full body Hawaiian ritual using long, flowing strokes
                    that mimic the rhythm of ocean waves. Deeply relaxing, deeply
                    transformative.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="https://images.pexels.com/photos/6560302/pexels-photo-6560302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Hot stone therapy"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3
                    className="text-2xl font-semibold"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Hot Stone Therapy
                  </h3>
                  <p className="text-[#C9A96E] text-sm tracking-wide mt-1">
                    75 / 90 min
                  </p>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    Smooth volcanic stones are placed along energy centers to
                    melt deep tension, improve circulation, and bring profound
                    warmth to the body.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="https://images.pexels.com/photos/6629530/pexels-photo-6629530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Couples Lomi Lomi"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3
                    className="text-2xl font-semibold"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Couples Lomi Lomi
                  </h3>
                  <p className="text-[#C9A96E] text-sm tracking-wide mt-1">
                    90 / 120 min
                  </p>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    Share the healing journey with someone you love. Our couples
                    suite offers a synchronized dual massage experience in a
                    private sanctuary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tropical Divider */}
        <section
          className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/4609689/pexels-photo-4609689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <blockquote className="relative z-10 text-white text-3xl md:text-4xl italic text-center px-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            "The body is a sacred garment." — Martha Graham
          </blockquote>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-[#E8E0D5] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-[#C9A96E] tracking-widest text-sm uppercase">
              KIND WORDS
            </p>
            <h2
              className="text-5xl font-semibold mt-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              What Our Guests Say
            </h2>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm text-left">
                <span
                  className="text-6xl text-[#C9A96E] leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  &#8220;
                </span>
                <p className="text-sm leading-relaxed text-gray-700 mt-2">
                  I've had massages all over the world, and nothing compares to
                  what I experienced at Lomi. The therapist moved with such
                  grace and intention — I left feeling like a completely
                  different person.
                </p>
                <p
                  className="text-lg font-semibold mt-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  — Malia K., Honolulu
                </p>
                <div className="flex mt-2 text-[#C9A96E]">★★★★★</div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm text-left">
                <span
                  className="text-6xl text-[#C9A96E] leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  &#8220;
                </span>
                <p className="text-sm leading-relaxed text-gray-700 mt-2">
                  Absolutely transcendent. The Lomi Lomi session transported me
                  somewhere between sleep and waking. My chronic back pain of 10
                  years was gone after just two sessions.
                </p>
                <p
                  className="text-lg font-semibold mt-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  — James T., San Francisco
                </p>
                <div className="flex mt-2 text-[#C9A96E]">★★★★★</div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm text-left">
                <span
                  className="text-6xl text-[#C9A96E] leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  &#8220;
                </span>
                <p className="text-sm leading-relaxed text-gray-700 mt-2">
                  We booked the couples treatment for our anniversary and it was
                  the most romantic, healing experience we've ever shared. The
                  space is gorgeous, the team is incredible.
                </p>
                <p
                  className="text-lg font-semibold mt-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  — Sofia & Riku, Tokyo
                </p>
                <div className="flex mt-2 text-[#C9A96E]">★★★★★</div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section id="book" className="py-24 bg-[#2C2420] text-center px-4 sm:px-6 lg:px-8">
          <p className="text-[#C9A96E] tracking-widest text-sm uppercase">
            READY TO RESTORE?
          </p>
          <h2
            className="text-5xl text-white font-semibold mt-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Book Your Lomi Lomi Experience
          </h2>
          <p className="text-white/70 mt-4 max-w-xl mx-auto">
            Appointments available 5 days a week. Private sessions and couples
            packages welcome.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button className="bg-[#C9A96E] text-white px-8 py-4 rounded-full hover:opacity-90 transition text-lg">
              Book Online
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#2C2420] transition text-lg">
              Call Us
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1A100C] text-white/60 pt-16 pb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
            <div>
              <p
                className="text-3xl italic text-[#C9A96E] font-semibold"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Lomi
              </p>
              <p className="mt-2 text-sm text-white/60">
                Hawaii's finest Lomi Lomi massage.
              </p>
              <div className="flex gap-4 mt-4">
                <Instagram className="w-5 h-5 hover:text-[#C9A96E] transition cursor-pointer" />
                <Facebook className="w-5 h-5 hover:text-[#C9A96E] transition cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => smoothScrollTo("about")} className="hover:text-[#C9A96E] transition">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => smoothScrollTo("services")} className="hover:text-[#C9A96E] transition">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => smoothScrollTo("testimonials")} className="hover:text-[#C9A96E] transition">
                    Testimonials
                  </button>
                </li>
                <li>
                  <button onClick={() => smoothScrollTo("book")} className="hover:text-[#C9A96E] transition">
                    Book Now
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <p className="text-sm">123 Aloha Lane, Honolulu, HI 96801</p>
              <p className="text-sm mt-2">hello@lomimassage.com</p>
              <p className="text-sm mt-2">(808) 555-0123</p>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-white/40">
            © 2025 Lomi. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
