"use client";
import { useState, useEffect } from "react";

const NAV_LINKS = ["Features", "How It Works", "Dashboard", "Pricing"];

const FEATURES = [
  { icon: "⚡", title: "Replay Analysis", desc: "Upload your .replay file and receive a deep analysis of rotations, boost usage, and positioning within seconds.", accent: "#00f5ff" },
  { icon: "🧠", title: "AI Coach Feedback", desc: "Our AI delivers concrete, actionable tips based on your own gameplay — no generic advice, just what you need.", accent: "#ff6b35" },
  { icon: "📈", title: "Comeback Probability", desc: "Real-time calculation of your win chance based on score, time remaining, boost, ball possession, and error patterns.", accent: "#a855f7" },
  { icon: "🎯", title: "Progress Tracking", desc: "See exactly which mistakes you're making less, which skills are growing, and how your rank curve looks over time.", accent: "#00f5ff" },
  { icon: "🔒", title: "Secure Accounts", desc: "Register with email verification, JWT security, and a personal profile containing all your statistics.", accent: "#ff6b35" },
  { icon: "🚀", title: "Expandable Platform", desc: "Rocket League now — Fortnite, Brawl Stars, and FIFA coming soon. One platform for all your games.", accent: "#a855f7" },
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ fontFamily: "'Exo 2', sans-serif", background: "#050810", color: "#e8eaf6", minHeight: "100vh" }}>
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
        .feature-card:hover { border-color: var(--accent-dim); transform: translateY(-4px); }
        .feature-card:hover::before { transform: scaleX(1); }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        .hero-orb { animation: float 6s ease-in-out infinite; }
        .bg-grid { position: absolute; inset: 0; background-image: linear-gradient(#00f5ff08 1px, transparent 1px), linear-gradient(90deg, #00f5ff08 1px, transparent 1px); background-size: 60px 60px; pointer-events: none; }
      `}</style>

      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "20px 60px", background: scrolled ? "rgba(5,8,16,0.95)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid #1e2a3a" : "none", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "all 0.3s" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, #00f5ff, #0080ff)", clipPath: "polygon(50% 0%, 100% 30%, 100% 70%, 50% 100%, 0% 70%, 0% 30%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>⚡</div>
          <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 18, fontWeight: 900, color: "#fff", letterSpacing: 2 }}>BRAIN<span style={{ color: "#00f5ff" }}>BOOST</span></span>
        </div>
        <div style={{ display: "flex", gap: 40 }}>
          {NAV_LINKS.map(link => <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">{link}</a>)}
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <a href="/login"><button className="btn-outline" style={{ padding: "10px 20px", fontSize: 11 }}>Login</button></a>
          <a href="/login"><button className="btn-primary" style={{ padding: "10px 20px", fontSize: 11 }}>Start Free</button></a>
        </div>
      </nav>

      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", padding: "120px 60px 80px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <div className="bg-grid" />
          <div style={{ position: "absolute", top: "20%", right: "10%", width: 600, height: 600, background: "radial-gradient(circle, #00f5ff0a 0%, transparent 70%)", borderRadius: "50%" }} />
        </div>
        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", position: "relative", zIndex: 1 }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#00f5ff11", border: "1px solid #00f5ff33", padding: "6px 16px", marginBottom: 24, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "#00f5ff", fontWeight: 700 }}>
              <span style={{ width: 6, height: 6, background: "#00f5ff", borderRadius: "50%" }} />
              AI-Powered Gaming Coach
            </div>
            <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 64, fontWeight: 900, lineHeight: 1.05, marginBottom: 24 }}>
              PLAY BETTER.<br />
              <span style={{ color: "#00f5ff" }}>RANK HIGHER.</span><br />
              <span style={{ color: "#ff6b35" }}>DOMINATE.</span>
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "#8892b0", marginBottom: 40, maxWidth: 480, fontWeight: 300 }}>
              BrainBoost analyzes your Rocket League replays with AI and gives you <strong style={{ color: "#e8eaf6" }}>concrete feedback</strong> you can apply immediately. No coach needed — our AI is available 24/7.
            </p>
            <div style={{ display: "flex", gap: 16 }}>
              <a href="/coaching"><button className="btn-primary">Analyze Replay →</button></a>
              <a href="/login"><button className="btn-outline">Watch Demo</button></a>
            </div>
          </div>

          <div className="hero-orb">
            <div style={{ background: "linear-gradient(135deg, #0d1117, #111827)", border: "1px solid #1e2a3a", padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, paddingBottom: 16, borderBottom: "1px solid #1e2a3a" }}>
                <div style={{ display: "flex", gap: 8 }}>
                  {["#ff5f57", "#ffbd2e", "#28c840"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
                </div>
                <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 10, color: "#00f5ff", letterSpacing: 2 }}>ANALYSE DASHBOARD</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                <div style={{ width: 48, height: 48, background: "linear-gradient(135deg, #00f5ff, #0080ff)", clipPath: "polygon(50% 0%, 100% 30%, 100% 70%, 50% 100%, 0% 70%, 0% 30%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🚀</div>
                <div>
                  <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 14, fontWeight: 700, color: "#fff" }}>ProGamer_NL</div>
                  <div style={{ fontSize: 12, color: "#ff6b35", fontWeight: 600 }}>Diamond III — 1,847 MMR</div>
                </div>
                <div style={{ marginLeft: "auto", textAlign: "right" }}>
                  <div style={{ fontSize: 11, color: "#8892b0" }}>AI Score</div>
                  <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 24, fontWeight: 900, color: "#00f5ff" }}>87<span style={{ fontSize: 14 }}>/100</span></div>
                </div>
              </div>
              {[
                { label: "Boost Management", val: 78, color: "#00f5ff" },
                { label: "Rotation Precision", val: 91, color: "#a855f7" },
                { label: "Positioning", val: 65, color: "#ff6b35" },
                { label: "Mechanics", val: 84, color: "#00f5ff" },
              ].map(m => (
                <div key={m.label} style={{ marginBottom: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#8892b0", marginBottom: 6 }}>
                    <span>{m.label}</span><span style={{ color: m.color, fontWeight: 700 }}>{m.val}%</span>
                  </div>
                  <div style={{ height: 6, background: "#1e2a3a" }}>
                    <div style={{ width: `${m.val}%`, height: "100%", background: `linear-gradient(90deg, ${m.color}88, ${m.color})` }} />
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 20, background: "#00f5ff0a", border: "1px solid #00f5ff22", padding: "12px 16px" }}>
                <div style={{ fontSize: 10, color: "#00f5ff", fontWeight: 700, letterSpacing: 2, marginBottom: 4 }}>AI COACHING TIP</div>
                <div style={{ fontSize: 12, color: "#c8d3e0", lineHeight: 1.5 }}>Your boost pickup timing is leaving 23% efficiency on the table. Prioritize small pads after goal kickoffs.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" style={{ padding: "100px 60px", background: "#08080f" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, letterSpacing: 4, color: "#00f5ff", fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Platform Features</div>
            <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 44, fontWeight: 900, color: "#fff" }}>EVERYTHING YOU NEED<br /><span style={{ color: "#00f5ff" }}>TO LEVEL UP</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
            {FEATURES.map(f => (
              <div key={f.title} className="feature-card" style={{ "--accent": f.accent, "--accent-dim": f.accent + "44" }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 12, letterSpacing: 1 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "#8892b0", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" style={{ padding: "100px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: 4, color: "#ff6b35", fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>How It Works</div>
            <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 44, fontWeight: 900, color: "#fff", marginBottom: 48 }}>FROM REPLAY<br /><span style={{ color: "#ff6b35" }}>TO RANK UP</span></h2>
            {STEPS.map((s, i) => (
              <div key={s.num} style={{ display: "flex", gap: 24, alignItems: "flex-start", padding: "24px 0", borderBottom: "1px solid #1e2a3a11" }}>
                <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 32, fontWeight: 900, color: i % 2 === 0 ? "#00f5ff22" : "#ff6b3522", minWidth: 56 }}>{s.num}</div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{s.title}</div>
                  <div style={{ fontSize: 14, color: "#8892b0" }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <a href="/coaching" style={{ textDecoration: "none" }}>
            <div onMouseEnter={() => setUploadHover(true)} onMouseLeave={() => setUploadHover(false)} style={{ border: `2px dashed ${uploadHover ? "#00f5ff88" : "#1e2a3a"}`, padding: "60px 40px", textAlign: "center", cursor: "pointer", background: uploadHover ? "#00f5ff08" : "#0a0f1a", transition: "all 0.3s" }}>
              <div style={{ fontSize: 64, marginBottom: 24 }}>🎮</div>
              <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 16, fontWeight: 700, color: uploadHover ? "#00f5ff" : "#fff", marginBottom: 12 }}>UPLOAD YOUR REPLAY</div>
              <div style={{ fontSize: 14, color: "#8892b0" }}>Drop your .replay file here or click to browse</div>
            </div>
          </a>
        </div>
      </section>

      <section style={{ padding: "100px 60px", background: "#08080f", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 52, fontWeight: 900, color: "#fff", marginBottom: 24 }}>START TODAY<br /><span style={{ color: "#00f5ff" }}>FOR FREE</span></h2>
          <p style={{ fontSize: 17, color: "#8892b0", marginBottom: 48, lineHeight: 1.7 }}>Upload your first replay and see what the AI found within 8 seconds. No credit card, no commitment.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <a href="/coaching"><button className="btn-primary" style={{ fontSize: 14, padding: "18px 48px" }}>Start for Free →</button></a>
            <a href="/login"><button className="btn-outline" style={{ fontSize: 14, padding: "18px 48px" }}>Learn More</button></a>
          </div>
        </div>
      </section>

      <footer style={{ padding: "48px 60px", borderTop: "1px solid #1e2a3a", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 14, fontWeight: 900, color: "#fff", letterSpacing: 2 }}>BRAIN<span style={{ color: "#00f5ff" }}>BOOST</span></span>
        <div style={{ fontSize: 12, color: "#8892b0" }}>© 2026 BrainBoost — AI Gaming Intelligence Platform</div>
        <div style={{ display: "flex", gap: 24 }}>
          {["Privacy", "Terms", "Contact"].map(l => <a key={l} href="#" style={{ fontSize: 12, color: "#8892b0", textDecoration: "none" }}>{l}</a>)}
        </div>
      </footer>
    </div>
  );
}