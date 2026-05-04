import React, { useEffect } from 'react';

const App: React.FC = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const navLinks = ['About', 'Treatments', 'Book Now'];

  const treatments = [
    {
      image: 'https://images.pexels.com/photos/5266394/pexels-photo-5266394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Traditional Lomi Lomi',
      description:
        'The full-body experience. Long, flowing forearm strokes mimic ocean waves, melting tension and restoring energetic flow from head to toe.',
      duration: '60 / 90 min • From $120',
    },
    {
      image: 'https://images.pexels.com/photos/6629522/pexels-photo-6629522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Hot Stone Lomi',
      description:
        'Volcanic basalt stones combined with Lomi Lomi technique to deeply release muscle tension and invite profound relaxation.',
      duration: '90 min • From $150',
    },
    {
      image: 'https://images.pexels.com/photos/9336025/pexels-photo-9336025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Couples Lomi Lomi',
      description:
        'Share the healing journey with someone special. Two therapists work in synchrony to bring you both into deep relaxation together.',
      duration: '90 min • From $280',
    },
  ];

  const testimonials = [
    {
      quote:
        'I have never felt so completely relaxed in my life. The therapist\'s strokes felt like ocean waves — I lost track of time entirely.',
      author: 'Malia K.',
    },
    {
      quote:
        'Learning that Lomi Lomi was once a household practice made me appreciate how sacred this experience truly is. Absolutely transformative.',
      author: 'James R.',
    },
    {
      quote:
        'The hot stone Lomi session healed weeks of tension in just 90 minutes. I will be back every month.',
      author: 'Sofia T.',
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] font-['Lato',sans-serif] text-[#2C2420]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-semibold tracking-wide text-[#C9A96E]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Lomi
          </button>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const sectionId = link.toLowerCase().replace(/\s+/g, '-');
              if (link === 'Book Now') {
                return (
                  <button
                    key={link}
                    onClick={() => scrollToSection('book')}
                    className="px-5 py-2 bg-[#C9A96E] text-white rounded-full text-sm font-semibold tracking-wide hover:bg-[#b8944f] transition-colors"
                  >
                    {link}
                  </button>
                );
              }
              return (
                <button
                  key={link}
                  onClick={() => scrollToSection(sectionId)}
                  className="text-[#2C2420]/70 hover:text-[#2C2420] text-sm tracking-wide transition-colors"
                >
                  {link}
                </button>
              );
            })}
          </div>
          {/* Mobile menu button */}
          <button className="md:hidden text-[#2C2420]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center"
      >
        <img
          src="https://images.pexels.com/photos/31234759/pexels-photo-31234759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Serene Hawaiian massage setting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-sm md:text-base uppercase tracking-[0.25em] text-[#C9A96E] mb-4">
            HAWAII'S FINEST
          </p>
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-semibold mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Lomi
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
            Experience Hawaii's finest Lomi Lomi Massage.
          </p>
          <button
            onClick={() => scrollToSection('book')}
            className="px-8 py-3 bg-[#C9A96E] text-white rounded-full text-base font-semibold tracking-wide hover:bg-[#b8944f] transition-colors shadow-lg"
          >
            Book Your Session
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="grid md:grid-cols-2">
        <div className="hidden md:block">
          <img
            src="https://images.pexels.com/photos/9335979/pexels-photo-9335979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Lomi Lomi massage therapist in serene setting"
            className="w-full h-full object-cover"
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
            Lomi Lomi is more than a massage — it is a sacred Hawaiian tradition
            passed down through generations. Long before it became a luxury
            treatment, Lomi Lomi was practiced in every Hawaiian household as an
            essential part of daily life. Families used it to restore harmony,
            ease tension, release stress, and nurture the body and spirit — much
            like how other cultures use herbal remedies or prayer. It was a
            communal act of love and healing.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#2C2420]/80">
            Rooted in the belief that tension held in the body mirrors tension
            held in the mind, our skilled therapists use long, flowing strokes to
            restore harmony, release blockages, and reconnect you with your
            deepest self. Every session at Lomi is a journey. We honor the aloha
            spirit in everything we do — from the warm kukui nut oil we use to
            the gentle rhythm of our hands, inspired by the ocean waves of the
            islands.
          </p>
          <div className="w-16 h-0.5 bg-[#C9A96E] mt-6"></div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A96E] tracking-widest text-sm uppercase">
              WHAT WE OFFER
            </p>
            <h2
              className="text-4xl md:text-5xl font-semibold mt-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our Signature Treatments
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {treatments.map((treatment) => (
              <div
                key={treatment.title}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white"
              >
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3
                    className="text-2xl font-semibold mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {treatment.title}
                  </h3>
                  <p className="text-[#2C2420]/70 text-sm leading-relaxed mb-4">
                    {treatment.description}
                  </p>
                  <p className="text-[#C9A96E] font-semibold text-sm tracking-wide">
                    {treatment.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lomi Lomi History Callout Section */}
      <section className="bg-[#2C2420] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C9A96E] tracking-widest text-sm uppercase text-center md:text-left">
            DID YOU KNOW?
          </p>
          <div className="mt-6 md:flex md:items-center md:gap-12">
            <div className="hidden md:block md:flex-shrink-0">
              <img
                src="https://images.pexels.com/photos/20139178/pexels-photo-20139178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Plumeria flower"
                className="w-40 h-40 rounded-full object-cover shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="mt-8 md:mt-0">
              <h2
                className="text-3xl md:text-4xl font-semibold text-white"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                A Tradition Born in Every Home
              </h2>
              <p className="mt-4 text-white/80 leading-relaxed">
                Unlike many massage traditions reserved for royalty or healers,
                Lomi Lomi was once part of everyday Hawaiian family life. Parents
                massaged children, elders were cared for by their families, and
                the practice was passed down through generations as a natural
                expression of aloha — love, care, and connection. It wasn't just
                therapy; it was a way of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#FAF7F2] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A96E] tracking-widest text-sm uppercase">
              KIND WORDS
            </p>
            <h2
              className="text-4xl md:text-5xl font-semibold mt-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              What Our Guests Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-white rounded-lg p-8 shadow-sm"
              >
                <p className="italic text-[#2C2420]/80 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="w-8 h-0.5 bg-[#C9A96E] mt-4 mb-3"></div>
                <p className="text-sm font-semibold text-[#2C2420]">
                  &mdash; {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section
        id="book"
        className="bg-gradient-to-br from-[#C9A96E] to-[#A8845A] py-20 px-6 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-semibold text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Ready to Restore?
          </h2>
          <p className="mt-4 text-white/90 text-lg leading-relaxed max-w-xl mx-auto">
            Book your Lomi Lomi session today and step into the healing tradition
            of Hawaii.
          </p>
          <button className="mt-8 px-8 py-3 bg-white text-[#2C2420] rounded-full text-base font-semibold tracking-wide hover:bg-gray-100 transition-colors shadow-lg">
            Book Now
          </button>
          <p className="mt-6 text-white/70 text-sm">
            Available 5 days a week &bull; By appointment
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2420] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h3
              className="text-2xl font-semibold text-[#C9A96E]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Lomi
            </h3>
            <p className="mt-3 text-white/60 text-sm leading-relaxed">
              Hawaii's finest Lomi Lomi massage.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">
              Links
            </h4>
            <ul className="space-y-2">
              {['About', 'Treatments', 'Book Now'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() =>
                      scrollToSection(
                        link === 'Book Now'
                          ? 'book'
                          : link.toLowerCase().replace(/\s+/g, '-')
                      )
                    }
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">
              Contact
            </h4>
            <p className="text-white/60 text-sm">Maui, Hawaii</p>
            <p className="text-white/60 text-sm mt-1">hello@lomimassage.com</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            &copy; 2024 Lomi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
