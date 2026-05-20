"use client";
import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Features", "How It Works", "Dashboard", "Pricing"];

const STATS = [
  { value: "94%", label: "Analysis Accuracy" },
  { value: "12K+", label: "Active Players" },
  { value: "3.2M", label: "Replays Analyzed" },
  { value: "+2.1", label: "Avg. Rank Gained" },
];

const FEATURES = [
  {
    icon: "⚡",
    title: "Replay Analysis",
    desc: "Upload your .replay file and receive a deep analysis of rotations, boost usage, and positioning within seconds.",
    accent: "#00f5ff",
  },
  {
    icon: "🧠",
    title: "AI Coach Feedback",
    desc: "Our AI delivers concrete, actionable tips based on your own gameplay — no generic advice, just what you need.",
    accent: "#ff6b35",
  },
  {
    icon: "📈",
    title: "Comeback Probability",
    desc: "Real-time calculation of your win chance based on score, time remaining, boost, ball possession, and error patterns.",
    accent: "#a855f7",
  },
  {
    icon: "🎯",
    title: "Progress Tracking",
    desc: "See exactly which mistakes you're making less, which skills are growing, and how your rank curve looks over time.",
    accent: "#00f5ff",
  },
  {
    icon: "🔒",
    title: "Secure Accounts",
    desc: "Register with email verification, JWT security, and a personal profile containing all your statistics.",
    accent: "#ff6b35",
  },
  {
    icon: "🚀",
    title: "Expandable Platform",
    desc: "Rocket League now — Fortnite, Brawl Stars, and FIFA coming soon. One platform for all your games.",
    accent: "#a855f7",
  },
];

const STEPS = [
  { num: "01", title: "Upload Replay", desc: "Drop your .replay file into BrainBoost" },
  { num: "02", title: "AI Analyzes", desc: "Our AI processes all your gameplay data" },
  { num: "03", title: "Receive Feedback", desc: "Get concrete tips and actionable insights" },
  { num: "04", title: "Get Better", desc: "Track your growth and climb the ranks" },
];

export default function BrainBoost() {
  const [scrolled, setScrolled] = useState(false);
  const [uploadHover, setUploadHover] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{
      fontFamily: "'Exo 2', sans-serif",
      background: "#050810",
      color: "#e8eaf6",
      minHeight: "100vh",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;600;700;900&family=Orbitron:wght@400;700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .nav-link { color: #8892b0; text-decoration: none; font-size: 13px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; transition: color 0.2s; }
        .nav-link:hover { color: #00f5ff; }
        .btn-primary { background: linear-gradient(135deg, #00f5ff, #0080ff); border: none; color: #050810; padding: 14px 32px; font-family: 'Orbitron', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%); transition: all 0.2s; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px #00f5ff40; }
        .btn-outline { background: transparent; border: 1px solid #00f5ff44; color: #00f5ff; padding: 13px 31px; font-family: 'Orbitron', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%); transition: all 0.2s; }
        .btn-outline:hover { background: #00f5ff11; border-color: #00f5ff; }
        .feature-card { background: linear-gradient(135deg, #0d1117 0%, #111827 100%); border: 1px solid #1e2a3a; padding: 32px; position: relative; overflow: hidden; transition: all 0.3s; }
        .feature-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: var(--accent); transform: scaleX(0); transition: transform 0.3s; }
        .feature-card:hover::before { transform: scaleX(1); }
      `}</style>
      
      {/* Navigation */}
      <nav style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        background: scrolled ? "rgba(5, 8, 16, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "all 0.3s",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: scrolled ? "1px solid #1e2a3a" : "none",
      }}>
        <div style={{ fontSize: "24px", fontWeight: "900", fontFamily: "'Orbitron', sans-serif", letterSpacing: "3px" }}>
          BRAIN<span style={{ color: "#00f5ff" }}>BOOST</span>
        </div>
        <div style={{ display: "flex", gap: "40px" }}>
          {NAV_LINKS.map((link) => (
            <a key={link} className="nav-link" href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          ))}
        </div>
        <button className="btn-primary">Start Free</button>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "100px 40px",
        background: "radial-gradient(circle at 50% 50%, #0d1b2a 0%, #050810 100%)",
        position: "relative",
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 20% 50%, #00f5ff15 0%, transparent 50%), radial-gradient(circle at 80% 80%, #0080ff15 0%, transparent 50%)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{
            fontSize: "72px",
            fontWeight: "900",
            fontFamily: "'Orbitron', sans-serif",
            marginBottom: "20px",
            background: "linear-gradient(135deg, #00f5ff, #0080ff)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "2px",
          }}>
            DOMINATE WITH AI
          </h1>
          <p style={{
            fontSize: "24px",
            color: "#a8b5cc",
            marginBottom: "40px",
            maxWidth: "600px",
            lineHeight: "1.6",
          }}>
            Your AI-powered Rocket League coach. Upload replays. Get smarter. Climb faster.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <button className="btn-primary">Analyze Your Gameplay</button>
            <button className="btn-outline">Watch Demo</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: "80px 40px",
        background: "#0d1117",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "40px",
        textAlign: "center",
      }}>
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div style={{
              fontSize: "48px",
              fontWeight: "900",
              fontFamily: "'Orbitron', sans-serif",
              color: "#00f5ff",
              marginBottom: "10px",
            }}>
              {stat.value}
            </div>
            <div style={{ fontSize: "14px", color: "#8892b0", letterSpacing: "1px" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </section>

      {/* Features Section */}
      <section style={{
        padding: "80px 40px",
        background: "#050810",
      }}>
        <h2 style={{
          fontSize: "48px",
          fontWeight: "900",
          fontFamily: "'Orbitron', sans-serif",
          textAlign: "center",
          marginBottom: "60px",
          letterSpacing: "2px",
        }}>
          POWERFUL FEATURES
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}>
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="feature-card"
              style={{ "--accent": feature.accent } as React.CSSProperties}
            >
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: "18px",
                fontWeight: "700",
                marginBottom: "12px",
                letterSpacing: "1px",
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: "14px",
                color: "#a8b5cc",
                lineHeight: "1.6",
              }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{
        padding: "80px 40px",
        background: "#0d1117",
      }}>
        <h2 style={{
          fontSize: "48px",
          fontWeight: "900",
          fontFamily: "'Orbitron', sans-serif",
          textAlign: "center",
          marginBottom: "60px",
          letterSpacing: "2px",
        }}>
          HOW IT WORKS
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
        }}>
          {STEPS.map((step) => (
            <div key={step.num} style={{ textAlign: "center" }}>
              <div style={{
                fontSize: "56px",
                fontWeight: "900",
                fontFamily: "'Orbitron', sans-serif",
                background: "linear-gradient(135deg, #00f5ff, #0080ff)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "16px",
              }}>
                {step.num}
              </div>
              <h3 style={{
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "12px",
                letterSpacing: "1px",
              }}>
                {step.title}
              </h3>
              <p style={{
                fontSize: "14px",
                color: "#a8b5cc",
              }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: "80px 40px",
        background: "radial-gradient(circle at 50% 50%, #0d1b2a 0%, #050810 100%)",
        textAlign: "center",
      }}>
        <h2 style={{
          fontSize: "48px",
          fontWeight: "900",
          fontFamily: "'Orbitron', sans-serif",
          marginBottom: "30px",
          letterSpacing: "2px",
        }}>
          Ready to Level Up?
        </h2>
        <p style={{
          fontSize: "18px",
          color: "#a8b5cc",
          marginBottom: "40px",
        }}>
          Join thousands of players improving their game with BrainBoost AI
        </p>
        <button className="btn-primary">Start Your Free Analysis</button>
      </section>

      {/* Footer */}
      <footer style={{
        padding: "40px",
        background: "#0a0e18",
        textAlign: "center",
        borderTop: "1px solid #1e2a3a",
        color: "#8892b0",
        fontSize: "12px",
      }}>
        <p>© 2024 BrainBoost. All rights reserved.</p>
      </footer>
    </div>
  );
}
