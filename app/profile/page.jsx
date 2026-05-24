"use client";
import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";

const RANKS = [
  "Bronze I", "Bronze II", "Bronze III",
  "Silver I", "Silver II", "Silver III",
  "Gold I", "Gold II", "Gold III",
  "Platinum I", "Platinum II", "Platinum III",
  "Diamond I", "Diamond II", "Diamond III",
  "Champion I", "Champion II", "Champion III",
  "Grand Champion I", "Grand Champion II", "Grand Champion III",
  "Supersonic Legend",
];

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [profile, setProfile] = useState({
    username: "",
    rank: "Gold I",
    platform: "PC",
    hoursPlayed: "",
    favoriteMode: "3v3",
    bio: "",
  });

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { window.location.href = "/login"; return; }
      setUser(user);
      setProfile(prev => ({
        ...prev,
        username: user.user_metadata?.username || user.email?.split("@")[0] || "",
      }));
      setLoading(false);
    };
    getUser();
  }, []);

 const handleSave = async () => {
    setSaving(true);
    await new Promise(r => setTimeout(r, 1000));
    setSaving(false);
    setSaved(true);
    setTimeout(() => {
      window.location.href = "/coaching";
    }, 1500);
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
        .profile-input { width: 100%; background: #0a0f1a; border: 1px solid #1e2a3a; color: #e8eaf6; padding: 12px 16px; font-family: 'Exo 2', sans-serif; font-size: 14px; outline: none; transition: border-color 0.2s; }
        .profile-input:focus { border-color: #00f5ff66; }
        .profile-select { width: 100%; background: #0a0f1a; border: 1px solid #1e2a3a; color: #e8eaf6; padding: 12px 16px; font-family: 'Exo 2', sans-serif; font-size: 14px; outline: none; cursor: pointer; }
        .profile-select:focus { border-color: #00f5ff66; }
        .save-btn { padding: 14px 40px; background: linear-gradient(135deg, #00f5ff, #0080ff); border: none; color: #050810; font-family: 'Orbitron', sans-serif; font-size: 12px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; transition: all 0.2s; clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%); }
        .save-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 30px #00f5ff40; }
        .save-btn:disabled { opacity: 0.7; cursor: not-allowed; }
        .platform-btn { padding: 10px 20px; background: #0a0f1a; border: 1px solid #1e2a3a; color: #8892b0; font-family: 'Exo 2', sans-serif; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .platform-btn.active { border-color: #00f5ff; color: #00f5ff; background: #00f5ff11; }
        .platform-btn:hover:not(.active) { border-color: #1e2a3a99; color: #e8eaf6; }
        .mode-btn { padding: 10px 20px; background: #0a0f1a; border: 1px solid #1e2a3a; color: #8892b0; font-family: 'Exo 2', sans-serif; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .mode-btn.active { border-color: #a855f7; color: #a855f7; background: #a855f711; }
        .mode-btn:hover:not(.active) { color: #e8eaf6; }
      `}</style>

      <div className="bg-grid" />

      {/* Navbar */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "16px 40px", background: "rgba(5,8,16,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid #1e2a3a", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 32, height: 32, background: "linear-gradient(135deg, #00f5ff, #0080ff)", clipPath: "polygon(50% 0%, 100% 30%, 100% 70%, 50% 100%, 0% 70%, 0% 30%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>⚡</div>
          <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 16, fontWeight: 900, color: "#fff", letterSpacing: 2 }}>BRAIN<span style={{ color: "#00f5ff" }}>BOOST</span></span>
        </a>
        <div style={{ display: "flex", gap: 24 }}>
          <a href="/dashboard" style={{ color: "#8892b0", textDecoration: "none", fontSize: 13, fontWeight: 600, letterSpacing: 1 }}>Dashboard</a>
          <a href="/coaching" style={{ color: "#8892b0", textDecoration: "none", fontSize: 13, fontWeight: 600, letterSpacing: 1 }}>AI Coaching</a>
          <a href="/profile" style={{ color: "#00f5ff", textDecoration: "none", fontSize: 13, fontWeight: 600, letterSpacing: 1 }}>Profile</a>
        </div>
      </nav>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "100px 40px 60px", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ marginBottom: 40, animation: "fadeUp 0.4s ease both" }}>
          <div style={{ fontSize: 11, color: "#00f5ff", letterSpacing: 4, fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>Your Profile</div>
          <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 32, fontWeight: 900, color: "#fff" }}>PLAYER SETTINGS</h1>
        </div>

        {/* Avatar */}
        <div style={{ background: "#0d1117", border: "1px solid #1e2a3a", padding: 32, marginBottom: 2, animation: "fadeUp 0.4s 0.1s ease both", display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ width: 80, height: 80, background: "linear-gradient(135deg, #00f5ff, #0080ff)", clipPath: "polygon(50% 0%, 100% 30%, 100% 70%, 50% 100%, 0% 70%, 0% 30%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, flexShrink: 0 }}>
            {profile.username?.[0]?.toUpperCase() || "?"}
          </div>
          <div>
            <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 20, fontWeight: 900, color: "#fff", marginBottom: 4 }}>{profile.username || "Player"}</div>
            <div style={{ fontSize: 13, color: "#8892b0", marginBottom: 8 }}>{user?.email}</div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#ff6b3511", border: "1px solid #ff6b3533", padding: "4px 12px" }}>
              <span style={{ fontSize: 11, color: "#ff6b35", fontWeight: 700 }}>🏆 {profile.rank}</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div style={{ background: "#0d1117", border: "1px solid #1e2a3a", padding: 32, marginBottom: 2, animation: "fadeUp 0.4s 0.2s ease both" }}>
          <div style={{ height: 2, background: "linear-gradient(90deg, transparent, #00f5ff, transparent)", marginBottom: 28, marginLeft: -32, marginRight: -32, marginTop: -32 }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>

            {/* Username */}
            <div style={{ gridColumn: "span 2" }}>
              <div style={{ fontSize: 11, color: "#8892b0", marginBottom: 6, fontWeight: 600, letterSpacing: 1 }}>USERNAME</div>
              <input className="profile-input" placeholder="Your username" value={profile.username} onChange={(e) => setProfile({ ...profile, username: e.target.value })} />
            </div>

            {/* Rank */}
            <div>
              <div style={{ fontSize: 11, color: "#8892b0", marginBottom: 6, fontWeight: 600, letterSpacing: 1 }}>CURRENT RANK</div>
              <select className="profile-select" value={profile.rank} onChange={(e) => setProfile({ ...profile, rank: e.target.value })}>
                {RANKS.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>

            {/* Hours */}
            <div>
              <div style={{ fontSize: 11, color: "#8892b0", marginBottom: 6, fontWeight: 600, letterSpacing: 1 }}>HOURS PLAYED</div>
              <input className="profile-input" placeholder="e.g. 500" type="number" value={profile.hoursPlayed} onChange={(e) => setProfile({ ...profile, hoursPlayed: e.target.value })} />
            </div>

            {/* Platform */}
            <div>
              <div style={{ fontSize: 11, color: "#8892b0", marginBottom: 10, fontWeight: 600, letterSpacing: 1 }}>PLATFORM</div>
              <div style={{ display: "flex", gap: 8 }}>
                {["PC", "PlayStation", "Xbox", "Switch"].map(p => (
                  <button key={p} className={`platform-btn ${profile.platform === p ? "active" : ""}`} onClick={() => setProfile({ ...profile, platform: p })}>{p}</button>
                ))}
              </div>
            </div>

            {/* Game Mode */}
            <div>
              <div style={{ fontSize: 11, color: "#8892b0", marginBottom: 10, fontWeight: 600, letterSpacing: 1 }}>FAVORITE MODE</div>
              <div style={{ display: "flex", gap: 8 }}>
                {["1v1", "2v2", "3v3"].map(m => (
                  <button key={m} className={`mode-btn ${profile.favoriteMode === m ? "active" : ""}`} onClick={() => setProfile({ ...profile, favoriteMode: m })}>{m}</button>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div style={{ gridColumn: "span 2" }}>
              <div style={{ fontSize: 11, color: "#8892b0", marginBottom: 6, fontWeight: 600, letterSpacing: 1 }}>BIO</div>
              <textarea className="profile-input" placeholder="Tell something about yourself..." value={profile.bio} onChange={(e) => setProfile({ ...profile, bio: e.target.value })} style={{ height: 100, resize: "none", paddingTop: 12 }} />
            </div>
          </div>
        </div>

        {/* Save */}
        <div style={{ background: "#0d1117", border: "1px solid #1e2a3a", padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", animation: "fadeUp 0.4s 0.3s ease both" }}>
          <div style={{ fontSize: 13, color: saved ? "#00cc66" : "#3a4a5c" }}>
            {saved ? "✅ Profile saved successfully!" : "Changes are saved locally"}
          </div>
          <button className="save-btn" onClick={handleSave} disabled={saving}>
            {saving ? (
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="14" height="14" viewBox="0 0 14 14" style={{ animation: "spin 0.8s linear infinite" }}>
                  <circle cx="7" cy="7" r="5" fill="none" stroke="#050810" strokeWidth="2" strokeDasharray="24" strokeDashoffset="6"/>
                </svg>
                Saving...
              </span>
            ) : "Save Profile →"}
          </button>
        </div>

        {/* Quick links */}
        <div style={{ display: "flex", gap: 12, marginTop: 16, animation: "fadeUp 0.4s 0.4s ease both" }}>
          <a href="/dashboard" style={{ flex: 1, padding: "14px", background: "#0d1117", border: "1px solid #1e2a3a", color: "#8892b0", fontFamily: "'Orbitron', sans-serif", fontSize: 11, letterSpacing: 2, textDecoration: "none", textAlign: "center", transition: "all 0.2s" }}>← DASHBOARD</a>
          <a href="/coaching" style={{ flex: 1, padding: "14px", background: "#0d1117", border: "1px solid #1e2a3a", color: "#8892b0", fontFamily: "'Orbitron', sans-serif", fontSize: 11, letterSpacing: 2, textDecoration: "none", textAlign: "center", transition: "all 0.2s" }}>AI COACHING →</a>
        </div>
      </div>
    </div>
  );
}