"use client";
import { useState } from "react";

const DEFAULT_STATS = {
  rank: "Diamond III",
  boostPerMinute: 340,
  boostWasted: 45,
  avgSpeed: 1420,
  shots: 4.2,
  goals: 1.8,
  saves: 2.1,
  demos: 0.8,
  supersonicTime: 22,
  groundTime: 68,
  airTime: 32,
};

const PRIORITY_COLORS = {
  high: "#ff4444",
  medium: "#ffcc00",
  low: "#00cc66",
};

export default function CoachingPage() {
  const [stats, setStats] = useState(DEFAULT_STATS);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyze = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/coaching", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stats }),
      });
      const data = await res.json();
      setResult(data.coaching);
    } catch (e) {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div style={{ fontFamily: "'Exo 2', sans-serif", background: "#050810", minHeight: "100vh", color: "#e8eaf6", padding: "40px 24px" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;600;700&family=Orbitron:wght@700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
        .stat-input { width: 100%; background: #0a0f1a; border: 1px solid #1e2a3a; color: #e8eaf6; padding: 10px 12px; font-family: 'Exo 2', sans-serif; font-size: 13px; outline: none; transition: border-color 0.2s; }
        .stat-input:focus { border-color: #00f5ff66; }
        .analyze-btn { width: 100%; padding: 16px; background: linear-gradient(135deg, #00f5ff, #0080ff); border: none; color: #050810; font-family: 'Orbitron', sans-serif; font-size: 13px; font-weight: 900; letter-spacing: 2px; cursor: pointer; transition: all 0.2s; margin-top: 8px; }
        .analyze-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 30px #00f5ff40; }
        .analyze-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .tip-card { background: #0d1117; border: 1px solid #1e2a3a; padding: 20px 24px; animation: fadeUp 0.4s ease both; position: relative; overflow: hidden; }
        .bg-grid { position: fixed; inset: 0; background-image: linear-gradient(#00f5ff06 1px, transparent 1px), linear-gradient(90deg, #00f5ff06 1px, transparent 1px); background-size: 50px 50px; pointer-events: none; z-index: 0; }
      `}</style>

      <div className="bg-grid" />

      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, #00f5ff, #0080ff)", clipPath: "polygon(50% 0%, 100% 30%, 100% 70%, 50% 100%, 0% 70%, 0% 30%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>⚡</div>
            <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 18, fontWeight: 900, color: "#fff", letterSpacing: 2 }}>BRAIN<span style={{ color: "#00f5ff" }}>BOOST</span></span>
          </a>
        </div>

        <div style={{ fontSize: 11, color: "#3a4a5c", letterSpacing: 3, marginBottom: 32 }}>AI COACHING ENGINE</div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>

          {/* Stats invoer */}
          <div>
            <div style={{ background: "#0d1117", border: "1px solid #1e2a3a", padding: 28 }}>
              <div style={{ height: 2, background: "linear-gradient(90deg, transparent, #00f5ff, transparent)", marginBottom: 24, marginLeft: -28, marginRight: -28, marginTop: -28 }} />
              <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 20, letterSpacing: 1 }}>YOUR STATS</div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { key: "rank", label: "Rank", type: "text" },
                  { key: "boostPerMinute", label: "Boost collected / min", type: "number" },
                  { key: "boostWasted", label: "Boost wasted / min", type: "number" },
                  { key: "avgSpeed", label: "Average speed (km/h)", type: "number" },
                  { key: "shots", label: "Shots per game", type: "number" },
                  { key: "goals", label: "Goals per game", type: "number" },
                  { key: "saves", label: "Saves per game", type: "number" },
                  { key: "demos", label: "Demos per game", type: "number" },
                  { key: "supersonicTime", label: "Supersonic time (%)", type: "number" },
                  { key: "airTime", label: "Air time (%)", type: "number" },
                ].map((field) => (
                  <div key={field.key}>
                    <div style={{ fontSize: 11, color: "#8892b0", marginBottom: 4, fontWeight: 600, letterSpacing: 1 }}>{field.label.toUpperCase()}</div>
                    <input
                      className="stat-input"
                      type={field.type}
                      value={stats[field.key]}
                      onChange={(e) => setStats({ ...stats, [field.key]: field.type === "number" ? parseFloat(e.target.value) : e.target.value })}
                    />
                  </div>
                ))}
              </div>

              <button className="analyze-btn" onClick={analyze} disabled={loading}>
                {loading ? (
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" style={{ animation: "spin 0.8s linear infinite" }}>
                      <circle cx="8" cy="8" r="6" fill="none" stroke="#050810" strokeWidth="2" strokeDasharray="28" strokeDashoffset="8" />
                    </svg>
                    AI is analyzing...
                  </span>
                ) : "🧠 ANALYZE MY GAMEPLAY →"}
              </button>
            </div>
          </div>

          {/* Resultaat */}
          <div>
            {!result && !loading && !error && (
              <div style={{ background: "#0d1117", border: "1px solid #1e2a3a", padding: 40, textAlign: "center", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
                <div style={{ fontSize: 64 }}>🧠</div>
                <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 14, color: "#3a4a5c", letterSpacing: 1 }}>WAITING FOR ANALYSIS</div>
                <div style={{ fontSize: 13, color: "#3a4a5c", lineHeight: 1.6 }}>Fill in your stats and click analyze to get personalized AI coaching tips</div>
              </div>
            )}

            {loading && (
              <div style={{ background: "#0d1117", border: "1px solid #1e2a3a", padding: 40, textAlign: "center", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20 }}>
                <div style={{ width: 64, height: 64, border: "2px solid #1e2a3a", borderTop: "2px solid #00f5ff", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
                <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 13, color: "#00f5ff", letterSpacing: 2 }}>AI ANALYZING...</div>
                <div style={{ fontSize: 12, color: "#3a4a5c" }}>Claude is reviewing your gameplay data</div>
              </div>
            )}

            {error && (
              <div style={{ background: "#0d1117", border: "1px solid #ff444444", padding: 24 }}>
                <div style={{ color: "#ff4444", fontSize: 14 }}>⚠ {error}</div>
              </div>
            )}

            {result && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16, animation: "fadeUp 0.4s ease" }}>

                {/* Score */}
                <div style={{ background: "#0d1117", border: "1px solid #1e2a3a", padding: 24, textAlign: "center", position: "relative", overflow: "hidden" }}>
                  <div style={{ height: 2, background: "linear-gradient(90deg, transparent, #00f5ff, transparent)", marginBottom: 20, marginLeft: -24, marginRight: -24, marginTop: -24 }} />
                  <div style={{ fontSize: 11, color: "#8892b0", letterSpacing: 3, marginBottom: 8 }}>AI COACHING SCORE</div>
                  <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 72, fontWeight: 900, color: "#00f5ff", lineHeight: 1, textShadow: "0 0 30px #00f5ff60" }}>
                    {result.score}
                  </div>
                  <div style={{ fontSize: 14, color: "#8892b0" }}>/100</div>
                  <div style={{ marginTop: 16, fontSize: 14, color: "#c8d3e0", lineHeight: 1.6, fontStyle: "italic" }}>"{result.summary}"</div>
                </div>

                {/* Tips */}
                {result.tips.map((tip, i) => (
                  <div key={i} className="tip-card" style={{ animationDelay: `${i * 0.1}s`, borderLeft: `3px solid ${PRIORITY_COLORS[tip.priority]}` }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                      <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: 1 }}>{tip.category.toUpperCase()}</div>
                      <div style={{ fontSize: 10, padding: "3px 10px", background: PRIORITY_COLORS[tip.priority] + "22", color: PRIORITY_COLORS[tip.priority], fontWeight: 700, letterSpacing: 1 }}>
                        {tip.priority.toUpperCase()}
                      </div>
                    </div>
                    <div style={{ fontSize: 14, color: "#8892b0", lineHeight: 1.7 }}>{tip.tip}</div>
                  </div>
                ))}

                <a href="/" style={{ display: "block", padding: "14px", background: "#0d1117", border: "1px solid #1e2a3a", color: "#8892b0", fontFamily: "'Orbitron', sans-serif", fontSize: 11, letterSpacing: 2, textDecoration: "none", textAlign: "center", transition: "all 0.2s" }}>
                  ← BACK TO DASHBOARD
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}