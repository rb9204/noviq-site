import { useState } from 'react';

export default function NoviqAutomation() {
  const services = [
    {
      title: 'Launch Websites',
      subtitle: 'For creators & startups'
    },
    {
      title: 'Client Systems',
      subtitle: 'Dashboards & automation'
    },
    {
      title: 'Brand Identity',
      subtitle: 'Modern visual presence'
    },
    {
      title: 'Growth Funnels',
      subtitle: 'Lead generation pages'
    }
  ];

  const projects = [
    {
      name: 'Aether Fitness',
      type: 'Gym Website',
      url: 'https://aetherfitness.vercel.app'
    },
    {
      name: 'Zenith Café',
      type: 'Restaurant Website',
      url: 'https://zenithcafe.vercel.app'
    },
    {
      name: 'Nova Esports',
      type: 'Gaming Brand',
      url: 'https://novaesports.vercel.app'
    }
  ];

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleProjectRequest = (service = 'Website Project') => {
    setSelectedService(service);
    setShowModal(true);
  };

  const openWhatsApp = () => {
    window.open(
      'https://wa.me/918984227260?text=Hello%20Noviq%20Automation%2C%20I%20want%20a%20website.',
      '_blank'
    );
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

      <div className="fixed top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-500/10 blur-[160px] rounded-full"></div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl border-b border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <h1 className="text-3xl font-black tracking-[-2px]">
            NOVIQ
          </h1>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <button
              onClick={() => scrollToSection('services')}
              className="hover:text-white transition"
            >
              Services
            </button>

            <button
              onClick={() => scrollToSection('work')}
              className="hover:text-white transition"
            >
              Work
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-white transition"
            >
              Contact
            </button>
          </nav>

          <button
            onClick={() => handleProjectRequest('Custom Website')}
            className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            Start Project
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 pt-24 lg:pt-32 pb-32">

        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full text-sm text-white/60 mb-8">
            ✦ Web Experiences For Modern Brands
          </div>

          <h1 className="text-[4rem] md:text-[7rem] leading-[0.95] tracking-[-5px] font-black">
            FUTURE
            <br />
            READY
            <br />
            WEBSITES.
          </h1>

          <p className="mt-10 text-lg md:text-xl text-white/45 max-w-2xl leading-relaxed">
            We craft cinematic websites and digital systems that make businesses feel premium, modern, and unforgettable.
          </p>

          <div className="flex flex-wrap gap-5 mt-12">

            <button
              onClick={() => handleProjectRequest('Premium Website')}
              className="bg-cyan-400 text-black px-8 py-4 rounded-full font-black hover:scale-105 transition shadow-2xl shadow-cyan-500/20"
            >
              Build My Website
            </button>

            <button
              onClick={() => scrollToSection('work')}
              className="border border-white/10 bg-white/5 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition"
            >
              View Projects
            </button>

          </div>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mt-24">

          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            <div className="text-cyan-400 text-sm uppercase tracking-[4px] mb-5">
              PERFORMANCE
            </div>

            <h3 className="text-5xl font-black tracking-tight">
              98
            </h3>

            <p className="text-white/40 mt-4 leading-relaxed">
              Lightning-fast experiences optimized for conversions.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 p-8 backdrop-blur-xl">

            <div className="text-cyan-200 text-sm uppercase tracking-[4px] mb-5">
              EXPERIENCE
            </div>

            <h3 className="text-4xl font-black leading-tight">
              Cinematic
              <br />
              UI Systems
            </h3>

            <div className="mt-10 h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-[85%] bg-cyan-400"></div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

            <div className="text-cyan-400 text-sm uppercase tracking-[4px] mb-5">
              DELIVERY
            </div>

            <h3 className="text-5xl font-black tracking-tight">
              3-5
            </h3>

            <p className="text-white/40 mt-4 leading-relaxed">
              Rapid development cycles with premium quality.
            </p>
          </div>

        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24">

        <div className="flex items-end justify-between gap-10 flex-wrap">

          <div>
            <p className="text-cyan-400 uppercase tracking-[4px] text-sm">
              SERVICES
            </p>

            <h2 className="text-5xl md:text-6xl font-black tracking-[-3px] mt-5 max-w-3xl leading-tight">
              Digital Products Designed To Dominate.
            </h2>
          </div>

          <p className="max-w-md text-white/45 leading-relaxed">
            Premium website systems built for startups and creators.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {services.map((service, index) => (
            <div
              key={index}
              className="group border border-white/10 bg-white/[0.03] rounded-[36px] p-10 hover:bg-white/[0.05] transition duration-300"
            >

              <div className="flex items-center justify-between">

                <div>
                  <h3 className="text-3xl md:text-4xl font-black tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-white/40 mt-4 text-lg">
                    {service.subtitle}
                  </p>
                </div>

                <div className="text-5xl text-cyan-400">
                  ↗
                </div>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* Work */}
      <section id="work" className="max-w-7xl mx-auto px-6 py-24">

        <div>
          <p className="text-cyan-400 uppercase tracking-[4px] text-sm">
            SELECTED WORK
          </p>

          <h2 className="text-5xl md:text-6xl font-black tracking-[-3px] mt-5">
            Built For Attention.
          </h2>
        </div>

        <div className="space-y-8 mt-20">

          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative overflow-hidden border border-white/10 rounded-[40px] p-10 md:p-16 bg-gradient-to-r from-white/[0.03] to-transparent hover:from-cyan-500/10 transition duration-500"
            >

              <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px]"></div>

              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

                <div>
                  <p className="text-white/40 uppercase tracking-[4px] text-sm">
                    {project.type}
                  </p>

                  <h3 className="text-5xl md:text-7xl font-black tracking-[-4px] mt-4">
                    {project.name}
                  </h3>
                </div>

                <button
                  onClick={() => window.open(project.url, '_blank')}
                  className="text-cyan-400 text-xl font-semibold group-hover:translate-x-2 transition"
                >
                  Open Live Mockup →
                </button>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-28">

        <div className="relative overflow-hidden border border-white/10 rounded-[48px] bg-gradient-to-br from-cyan-500/20 via-transparent to-transparent p-12 md:p-20 text-center">

          <div className="absolute inset-0 backdrop-blur-3xl"></div>

          <div className="relative">

            <p className="text-cyan-300 uppercase tracking-[4px] text-sm">
              START NOW
            </p>

            <h2 className="text-5xl md:text-7xl font-black tracking-[-4px] leading-[0.95] mt-6">
              YOUR BRAND
              <br />
              DESERVES BETTER.
            </h2>

            <p className="max-w-2xl mx-auto text-white/50 text-lg leading-relaxed mt-8">
              Let’s build a digital presence that feels futuristic and premium.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-12">

              <button
                onClick={() => handleProjectRequest('Business Website')}
                className="bg-white text-black px-8 py-4 rounded-full font-black hover:scale-105 transition"
              >
                Request Website
              </button>

              <button
                onClick={openWhatsApp}
                className="border border-white/10 bg-white/5 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition"
              >
                WhatsApp Us
              </button>

            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 text-center text-white/30 text-sm tracking-wide">
        © 2026 NOVIQ AUTOMATION — FUTURE READY EXPERIENCES
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center p-6">

          <div className="w-full max-w-2xl rounded-[36px] border border-white/10 bg-[#0b0b0b] p-10 relative overflow-hidden">

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 text-white/50 hover:text-white text-2xl"
            >
              ×
            </button>

            <p className="text-cyan-400 uppercase tracking-[4px] text-sm">
              PROJECT REQUEST
            </p>

            <h2 className="text-5xl font-black tracking-[-3px] mt-5 leading-tight">
              Let’s Build Your Vision.
            </h2>

            <p className="text-white/45 mt-6 leading-relaxed">
              Selected Service: {selectedService}
            </p>

            <form
              className="grid gap-5 mt-10"
              onSubmit={async (e) => {
                e.preventDefault();

                setLoading(true);

                const formData = new FormData(e.target);

                try {
                  const response = await fetch(
                    'https://formsubmit.co/ajax/hello@noviqautomation.com',
                    {
                      method: 'POST',
                      headers: {
                        Accept: 'application/json'
                      },
                      body: formData
                    }
                  );

                  if (response.ok) {
                    setSuccess(true);
                    e.target.reset();
                  }

                } catch (error) {
                  alert('Something went wrong.');
                }

                setLoading(false);
              }}
            >

              <input
                type="hidden"
                name="_subject"
                value="New Noviq Automation Project Request"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
              />

              <input
                type="text"
                name="business"
                placeholder="Business / Brand Name"
                className="bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
              />

              <textarea
                name="project"
                rows="5"
                placeholder="Tell us about your project..."
                className="bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="bg-cyan-400 text-black py-4 rounded-2xl font-black hover:scale-[1.02] transition disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Submit Request'}
              </button>

              {success && (
                <div className="border border-green-500/20 bg-green-500/10 rounded-2xl p-4 text-green-300 text-sm">
                  Project request submitted successfully.
                </div>
              )}

            </form>
          </div>
        </div>
      )}
    </div>
  );
}