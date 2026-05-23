import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  Globe2,
  Layers3,
  Workflow,
  Menu,
  X,
  Check,
  Code2,
  ShoppingBag,
  Bot,
  Database,
  Smartphone,
  BarChart3,
  Shield,
  Cpu,
  Play,
  MousePointer2,
  ChevronRight,
  Dumbbell,
  GraduationCap,
  Users,
} from "lucide-react";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeService, setActiveService] =
    useState(null);

  const [submitted, setSubmitted] = useState(false);

  const { scrollYProgress } = useScroll();

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1, 0.92]
  );

  const services = [
    {
      id: 1,
      icon: <Globe2 size={28} />,
      title: "Premium Websites",
      desc: "Modern cinematic websites for ambitious brands.",

      details: [
        {
          icon: <Code2 size={18} />,
          text: "Modern React Websites",
        },
        {
          icon: <Smartphone size={18} />,
          text: "Fully Responsive Design",
        },
        {
          icon: <ShoppingBag size={18} />,
          text: "E-Commerce Development",
        },
        {
          icon: <BarChart3 size={18} />,
          text: "SEO Optimization",
        },
      ],

      paragraph:
        "We create premium modern websites with Apple-level aesthetics, animations, performance optimization, responsive layouts, and conversion-focused design systems.",
    },

    {
      id: 2,
      icon: <Workflow size={28} />,
      title: "Automation Systems",
      desc: "Business workflows engineered for scale and efficiency.",

      details: [
        {
          icon: <Bot size={18} />,
          text: "AI Automations",
        },
        {
          icon: <Database size={18} />,
          text: "CRM Integration",
        },
        {
          icon: <Workflow size={18} />,
          text: "Workflow Automation",
        },
        {
          icon: <BarChart3 size={18} />,
          text: "Analytics Systems",
        },
      ],

      paragraph:
        "We automate repetitive operations using smart workflows, AI integrations, CRM systems, dashboards, lead pipelines, and scalable business automations.",
    },

    {
      id: 3,
      icon: <Layers3 size={28} />,
      title: "Digital Infrastructure",
      desc: "Portals, dashboards, booking systems and scalable ecosystems.",

      details: [
        {
          icon: <Database size={18} />,
          text: "Admin Dashboards",
        },
        {
          icon: <Workflow size={18} />,
          text: "Booking Systems",
        },
        {
          icon: <Smartphone size={18} />,
          text: "Client Portals",
        },
        {
          icon: <Code2 size={18} />,
          text: "Custom Platforms",
        },
      ],

      paragraph:
        "We engineer scalable digital ecosystems including dashboards, admin panels, booking systems, portals, and enterprise-grade infrastructure.",
    },
  ];

  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Founder, Elevate Media",
      text: "Noviq completely transformed our digital presence. The quality feels world-class.",
    },

    {
      name: "Riya Patel",
      role: "Startup Founder",
      text: "The automation systems saved us countless hours every week.",
    },

    {
      name: "Karan Verma",
      role: "E-commerce Brand",
      text: "The website design feels premium and converts much better now.",
    },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });

      setMenuOpen(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    formData.append(
      "access_key",
      "f1ccbeea-c7b9-4bd0-8f7e-ec6dba5311b0"
    );

    formData.append(
      "subject",
      "New Noviq Automation Lead"
    );

    formData.append(
      "from_name",
      "Noviq Automation"
    );

    const object = Object.fromEntries(formData);

    const json = JSON.stringify(object);

    const res = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }
    );

    const result = await res.json();

    if (result.success) {
      setSubmitted(true);

      form.reset();

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    }
  };

  return (
    <div className="bg-[#f5f5f7] text-black overflow-x-hidden">
      {/* WHATSAPP */}
      <FloatingWhatsApp
        phoneNumber="+918984227260"
        accountName="Noviq Automation"
        statusMessage="Typically replies instantly"
        chatMessage="Hi! I want to build a project with Noviq Automation."
        placeholder="Type your message..."
        allowClickAway
        notification
      />

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.14, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[1100px] h-[700px] bg-black rounded-full blur-[140px]"
        />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-3xl bg-white/70 border-b border-black/[0.05]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* LOGO */}
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <div className="w-11 h-11 rounded-2xl bg-black text-white flex items-center justify-center text-lg font-semibold">
              N
            </div>

            <div>
              <h1 className="text-[18px] font-semibold">
                Noviq
              </h1>

              <p className="text-[11px] tracking-[0.2em] uppercase text-black/35">
                Automation
              </p>
            </div>
          </div>

          {/* NAV */}
          <div className="hidden md:flex items-center gap-12 text-[15px] text-black/55">
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-black transition"
            >
              Services
            </button>

            <button
              onClick={() => scrollToSection("systems")}
              className="hover:text-black transition"
            >
              Systems
            </button>

            <button
              onClick={() =>
                scrollToSection("testimonials")
              }
              className="hover:text-black transition"
            >
              Reviews
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-black transition"
            >
              Contact
            </button>
          </div>

          {/* BUTTON */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollToSection("contact")}
              className="hidden md:flex bg-black text-white px-6 py-3 rounded-full text-sm items-center gap-2 shadow-xl"
            >
              Start Project
              <ArrowRight size={16} />
            </motion.button>

            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center"
      >
        <motion.div
          style={{
            scale: heroScale,
          }}
          className="max-w-7xl mx-auto px-6 text-center pt-40 pb-28"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-black/[0.06] shadow-lg text-black/60 text-sm">
            <Sparkles size={15} />
            DIGITAL INFRASTRUCTURE FOR MODERN BRANDS
          </div>

          <h1 className="mt-10 text-[4rem] sm:text-[6rem] lg:text-[9rem] font-semibold tracking-[-0.09em] leading-[0.82]">
            WE BUILD
            <br />

            <span className="bg-gradient-to-b from-black via-black to-black/30 bg-clip-text text-transparent">
              DIGITAL
            </span>

            <br />
            INFRASTRUCTURE
          </h1>

          <p className="max-w-3xl mx-auto mt-10 text-[21px] leading-relaxed text-black/55 font-light">
            Premium websites, automation systems,
            scalable platforms, and modern digital
            ecosystems engineered with simplicity and
            precision.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-14">
            <motion.button
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={() => scrollToSection("contact")}
              className="group bg-black text-white px-8 py-4 rounded-full text-[15px] flex items-center gap-3 shadow-[0_25px_70px_rgba(0,0,0,0.16)]"
            >
              Start Project

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={() => scrollToSection("systems")}
              className="px-8 py-4 rounded-full border border-black/[0.08] bg-white/80 backdrop-blur-xl"
            >
              View Systems
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* SUBMIT POPUP */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/40 flex items-center justify-center px-6"
          >
            <motion.div
              initial={{ y: 20, scale: 0.97, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, scale: 0.97, opacity: 0 }}
              className="bg-white rounded-2xl max-w-md w-full p-8 text-center shadow-xl"
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mx-auto">
                <Check className="text-green-600" size={32} />
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                Thanks — we received your inquiry
              </h3>

              <p className="mt-3 text-black/60">
                We'll get back to you soon. Expect a reply within 24-48 hours.
              </p>

              <div className="mt-6">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-black text-white rounded-full"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SERVICES */}
      <section
        id="services"
        className="pb-32 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                whileHover={{
                  y: -10,
                }}
                key={service.id}
                className="bg-white rounded-[42px] p-12 border border-black/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
              >
                <div className="w-20 h-20 rounded-[26px] bg-black text-white flex items-center justify-center shadow-xl">
                  {service.icon}
                </div>

                <h2 className="mt-10 text-[52px] leading-[1] tracking-[-0.06em] font-semibold">
                  {service.title}
                </h2>

                <p className="mt-8 text-black/50 text-[20px] leading-relaxed">
                  {service.desc}
                </p>

                <button
                  onClick={() =>
                    setActiveService(service)
                  }
                  className="mt-12 flex items-center gap-3 font-medium text-lg hover:gap-4 transition-all"
                >
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-xl flex items-center justify-center px-6"
          >
            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
                y: 50,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
                y: 50,
              }}
              className="relative w-full max-w-3xl bg-white rounded-[40px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.25)]"
            >
              <div className="p-10 border-b border-black/[0.05] flex justify-between">
                <div>
                  <div className="w-20 h-20 rounded-[24px] bg-black text-white flex items-center justify-center">
                    {activeService.icon}
                  </div>

                  <h2 className="mt-8 text-5xl font-semibold tracking-[-0.06em]">
                    {activeService.title}
                  </h2>

                  <p className="mt-6 text-black/55 text-lg leading-relaxed">
                    {activeService.paragraph}
                  </p>
                </div>

                <button
                  onClick={() =>
                    setActiveService(null)
                  }
                  className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-10">
                <div className="grid md:grid-cols-2 gap-5">
                  {activeService.details.map(
                    (item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-5 rounded-3xl border border-black/[0.05] bg-[#fafafa]"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center">
                          {item.icon}
                        </div>

                        <div>
                          <h4 className="font-medium text-lg">
                            {item.text}
                          </h4>

                          <p className="text-sm text-black/40">
                            Premium implementation
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SYSTEMS */}
      <section
        id="systems"
        className="py-36 border-t border-black/[0.05]"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADING */}
          <div className="text-center mb-24">
            <p className="uppercase tracking-[0.3em] text-black/35 text-sm">
              SYSTEMS
            </p>

            <h2 className="mt-8 text-6xl lg:text-8xl font-semibold tracking-[-0.08em] leading-[0.9]">
              Built for
              <br />
              real businesses.
            </h2>
          </div>

          {/* CARDS */}
          <div className="grid lg:grid-cols-3 gap-10">
            {/* GYM */}
            <motion.div
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-[42px] overflow-hidden border border-black/[0.05] shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
            >
              <div className="relative h-[320px] bg-gradient-to-br from-black to-zinc-900 overflow-hidden">
                <div className="absolute inset-0 pt-10 px-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/40 text-sm">
                        Active Members
                      </p>

                      <h3 className="text-5xl font-bold text-white mt-2">
                        1,248
                      </h3>
                    </div>

                    <div className="w-16 h-16 rounded-3xl bg-green-500/20 flex items-center justify-center">
                      <Dumbbell className="text-green-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-10">
                    <div className="bg-white/5 rounded-3xl p-4">
                      <p className="text-white/40 text-sm">
                        Revenue
                      </p>

                      <h4 className="text-2xl font-semibold text-white mt-2">
                        ₹2.4L
                      </h4>
                    </div>

                    <div className="bg-white/5 rounded-3xl p-4">
                      <p className="text-white/40 text-sm">
                        Trainers
                      </p>

                      <h4 className="text-2xl font-semibold text-white mt-2">
                        18
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-semibold">
                  Gym Management
                </h3>

                <p className="mt-4 text-black/55 leading-relaxed">
                  Membership systems, attendance,
                  trainers, analytics, and payment
                  systems for modern gyms.
                </p>
              </div>
            </motion.div>

            {/* COACHING */}
            <motion.div
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-[42px] overflow-hidden border border-black/[0.05] shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
            >
              <div className="relative h-[320px] bg-gradient-to-br from-[#0b1220] to-[#1f2937] overflow-hidden">
                <div className="absolute inset-0 pt-10 px-6">
                  <div className="bg-white/5 rounded-3xl p-5">
                    <p className="text-white/40 text-sm">
                      Live Students
                    </p>

                    <h3 className="text-5xl font-bold text-white mt-2">
                      8,420
                    </h3>
                  </div>

                  <div className="mt-6 space-y-4">
                    {[
                      "Mathematics",
                      "Reasoning",
                      "English",
                    ].map((sub, i) => (
                      <div
                        key={i}
                        className="bg-white/5 rounded-2xl p-4 flex items-center justify-between"
                      >
                        <span className="text-white">
                          {sub}
                        </span>

                        <span className="text-green-400 text-sm">
                          LIVE
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-semibold">
                  Coaching Platform
                </h3>

                <p className="mt-4 text-black/55 leading-relaxed">
                  Student portals, online classes,
                  mock tests, analytics, and coaching
                  management systems.
                </p>
              </div>
            </motion.div>

            {/* STUDENT */}
            <motion.div
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-[42px] overflow-hidden border border-black/[0.05] shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
            >
              <div className="relative h-[320px] bg-gradient-to-br from-zinc-900 to-black overflow-hidden">
                <div className="absolute inset-0 pt-10 px-6">
                  <div className="bg-white/5 rounded-3xl overflow-hidden">
                    <div className="grid grid-cols-3 px-4 py-3 text-white/40 text-sm border-b border-white/10">
                      <span>Name</span>
                      <span>Grade</span>
                      <span>Status</span>
                    </div>

                    {[
                      ["Rahul", "A+", "Active"],
                      ["Priya", "A", "Active"],
                      ["Aman", "B+", "Pending"],
                    ].map((student, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-3 px-4 py-4 text-white border-b border-white/5"
                      >
                        <span>{student[0]}</span>
                        <span>{student[1]}</span>
                        <span>
                          {student[2]}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-white/5 rounded-2xl p-4">
                      <p className="text-white/40 text-sm">
                        Students
                      </p>

                      <h4 className="text-2xl font-bold text-white mt-2">
                        2,481
                      </h4>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-4">
                      <p className="text-white/40 text-sm">
                        Attendance
                      </p>

                      <h4 className="text-2xl font-bold text-white mt-2">
                        92%
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-semibold">
                  Student Management
                </h3>

                <p className="mt-4 text-black/55 leading-relaxed">
                  Attendance systems, reports,
                  analytics, fee systems, and admin
                  dashboards.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="py-36 border-t border-black/[0.05]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.3em] text-black/35 text-sm">
              CLIENT REVIEWS
            </p>

            <h2 className="mt-8 text-6xl lg:text-8xl font-semibold tracking-[-0.08em] leading-[0.9]">
              Trusted by
              <br />
              growing brands.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, i) => (
              <motion.div
                whileHover={{
                  y: -8,
                }}
                key={i}
                className="bg-white rounded-[36px] border border-black/[0.05] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
              >
                <div className="flex gap-1 mb-6">
                  {"★★★★★".split("").map((star, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>

                <p className="text-black/60 leading-relaxed text-lg">
                  "{item.text}"
                </p>

                <div className="mt-8">
                  <h3 className="font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-black/40 text-sm mt-1">
                    {item.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-36 border-t border-black/[0.05]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* LEFT */}
            <div>
              <p className="uppercase tracking-[0.3em] text-black/35 text-sm">
                START PROJECT
              </p>

              <h2 className="mt-8 text-6xl lg:text-7xl font-semibold tracking-[-0.08em] leading-[0.9]">
                Let’s build
                <br />
                your brand.
              </h2>

              <div className="mt-12 space-y-5">
                {[
                  "Modern UI/UX Design",
                  "Fast Delivery",
                  "Indian Business Support",
                  "Scalable Infrastructure",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center">
                      <Check size={18} />
                    </div>

                    <p className="text-black/70 text-lg">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FORM */}
            <div className="bg-white rounded-[40px] border border-black/[0.05] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
              {submitted && (
                <div className="mb-6 bg-green-100 border border-green-200 text-green-700 rounded-2xl px-5 py-4">
                  Inquiry submitted successfully.
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  className="w-full bg-[#fafafa] border border-black/[0.06] rounded-2xl px-5 py-4 outline-none"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="w-full bg-[#fafafa] border border-black/[0.06] rounded-2xl px-5 py-4 outline-none"
                />

                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 Phone Number"
                  className="w-full bg-[#fafafa] border border-black/[0.06] rounded-2xl px-5 py-4 outline-none"
                />

                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full bg-[#fafafa] border border-black/[0.06] rounded-3xl px-5 py-4 outline-none resize-none"
                />

                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-2xl font-medium"
                >
                  Submit Inquiry
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}