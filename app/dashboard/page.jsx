"use client";
import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        window.location.href = "/login";
        return;
      }
      setUser(user);
      setLoading(false);
    };
    getUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  if (loading) return (
    <div style={{ background: "#050810", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: 48, height: 48, border: "2px solid #1e2a3a", borderTop: "2px solid #00f5ff", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );

  return (
    <div style={{ fontFamily: "'Exo 2', sans-serif", background: "#050810", minHeight: "100vh", color: "#e8eaf6" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;600;700&family=Orbitron:wght@700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes spin { to { transform: rotate(360deg); } }
        .bg-grid { position: fixed; inset: 0; background-image: linear-gradient(#00f5ff06 1px, transparent 1px), linear-gradient(90deg, #00f5ff06 1px, transparent 1px); background-size: 50px 50px; pointer-events: none; }
        .stat-card { background: #0d1117; border: 1px solid #1e2a3a; padding: 24px; transition: all 0.3s; position: relative; overflow: hidden; }
        .stat-card:hover { border-color: #00f5ff33; transform: translateY(-2px); }
        .stat-card::after { content: ''; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 60%; height: 1px; background: linear-gradient(90deg, transparent, #00f5ff44, transparent); }
        .action-btn { padding: 14px 24px; background: linear-gradient(135deg, #00f5ff, #0080ff); border: none; color: #050810; font-family: 'Orbitron', sans-serif; font-size: 11px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; transition: all 0.2s; clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%); text-decoration: none; display: inline-block; }
        .action-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 30px #00f5ff40; }
        .action-btn-outline { padding: 13px 23px; background: transparent; border: 1px solid #00f5ff44; color: #00f5ff; font-family: 'Orbitron', sans-serif; font-size: 11px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; transition: all 0.2s; clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%); text-decoration: none; display: inline-block; }
        .action-btn-outline:hover { background: #00f5ff11; }
      `}</style>

      <div className="bg-grid" />

      {/* Navbar */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "16px 40px", background: "rgba(5,8,16,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid #1e2a3a", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 32, height: 32, background: "linear-gradient(135deg, #00f5ff, #0080ff)", clipPath: "polygon(50% 0%, 100% 30%, 100% 70%, 50% 100%, 0% 70%, 0% 30%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>⚡</div>
          <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 16, fontWeight: 900, color: "#fff", letterSpacing: 2 }}>BRAIN<span style={{ color: "#00f5ff" }}>BOOST</span></span>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#0d1117", border: "1px solid #1e2a3a", padding: "8px 16px" }}>
            <div style={{ width: 32, height: 32, background: "linear-gradient(135deg, #00f5ff, #0080ff)", clipPath: "polygon(50% 0%, 100% 30%, 100% 70%, 50% 100%, 0% 70%, 0% 30%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>
              {user?.user_metadata?.username?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || "?"}
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{user?.user_metadata?.username || "Player"}</div>
              <div style={{ fontSize: 11, color: "#3a4a5c" }}>{user?.email}</div>
            </div>
          </div>
          <button onClick={handleLogout} style={{ background: "none", border: "1px solid #1e2a3a", color: "#8892b0", padding: "8px 16px", cursor: "pointer", fontSize: 12, fontFamily: "'Exo 2', sans-serif", transition: "all 0.2s" }}
            onMouseEnter={(e) => e.target.style.color = "#ff4444"}
            onMouseLeave={(e) => e.target.style.color = "#8892b0"}
          >Logout</button>
        </div>
      </nav>

      {/* Content */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 40px 60px", position: "relative", zIndex: 1 }}>

        {/* Welcome */}
        <div style={{ marginBottom: 48, animation: "fadeUp 0.4s ease both" }}>
          <div style={{ fontSize: 11, color: "#00f5ff", letterSpacing: 4, fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>Welcome back</div>
          <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 36, fontWeight: 900, color: "#fff", marginBottom: 8 }}>
            {user?.user_metadata?.username?.toUpperCase() || "PLAYER"}
          </h1>
          <p style={{ fontSize: 14, color: "#8892b0" }}>Ready to analyze your gameplay and climb the ranks?</p>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2, marginBottom: 32, animation: "fadeUp 0.4s 0.1s ease both" }}>
          {[
            { label: "Replays Analyzed", value: "0", icon: "🎮", color: "#00f5ff" },
            { label: "AI Sessions", value: "0", icon: "🧠", color: "#a855f7" },
            { label: "Current Rank", value: "—", icon: "🏆", color: "#ff6b35" },
            { label: "AI Score", value: "—", icon: "⚡", color: "#00f5ff" },
          ].map(s => (
            <div key={s.label} className="stat-card">
              <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
              <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 28, fontWeight: 900, color: s.color, marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: 11, color: "#8892b0", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginBottom: 32, animation: "fadeUp 0.4s 0.2s ease both" }}>

          {/* AI Coaching */}
          <div style={{ background: "#0d1117", border: "1px solid #1e2a3a", padding: 32, position: "relative", overflow: "hidden" }}>
            <div style={{ height: 2, background: "linear-gradient(90deg, transparent, #00f5ff, transparent)", marginBottom: 24, marginLeft: -32, marginRight: -32, marginTop: -32 }} />
            <div style={{ fontSize: 48, marginBottom: 16 }}>🧠</div>
            <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 18, fontWeight: 900, color: "#fff", marginBottom: 8 }}>AI COACHING</h2>
            <p style={{ fontSize: 14, color: "#8892b0", lineHeight: 1.7, marginBottom: 24 }}>Enter your stats and get personalized coaching tips from our AI. Improve faster with concrete feedback.</p>
            <a href="/coaching" className="action-btn">Start Analysis →</a>
          </div>

          {/* Recent Activity */}
          <div style={{ background: "#0d1117", border: "1px solid #1e2a3a", padding: 32, position: "relative", overflow: "hidden" }}>
            <div style={{ height: 2, background: "linear-gradient(90deg, transparent, #a855f7, transparent)", marginBottom: 24, marginLeft: -32, marginRight: -32, marginTop: -32 }} />
            <div style={{ fontSize: 48, marginBottom: 16 }}>📊</div>
            <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 18, fontWeight: 900, color: "#fff", marginBottom: 8 }}>RECENT ACTIVITY</h2>
            <p style={{ fontSize: 14, color: "#8892b0", lineHeight: 1.7, marginBottom: 24 }}>No analyses yet. Upload your first Rocket League replay to get started!</p>
            <a href="/coaching" className="action-btn-outline">Upload Replay →</a>
          </div>
        </div>

        {/* Tips */}
        <div style={{ background: "#0d1117", border: "1px solid #1e2a3a", padding: 32, animation: "fadeUp 0.4s 0.3s ease both" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 13, fontWeight: 700, color: "#fff", letterSpacing: 1 }}>GETTING STARTED</div>
            <div style={{ flex: 1, height: 1, background: "#1e2a3a" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { num: "01", title: "Go to AI Coaching", desc: "Click 'Start Analysis' and enter your Rocket League stats", color: "#00f5ff" },
              { num: "02", title: "Get AI Feedback", desc: "Our AI analyzes your stats and gives you 3 concrete tips", color: "#a855f7" },
              { num: "03", title: "Climb the Ranks", desc: "Apply the tips in your next games and track your improvement", color: "#ff6b35" },
            ].map(s => (
              <div key={s.num} style={{ display: "flex", gap: 16 }}>
                <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 24, fontWeight: 900, color: s.color + "33", minWidth: 40 }}>{s.num}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{s.title}</div>
                  <div style={{ fontSize: 13, color: "#8892b0", lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}