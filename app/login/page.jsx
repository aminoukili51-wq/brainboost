"use client";
import { useState } from "react";

export default function AuthPage() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!email.includes("@")) e.email = "Enter a valid email address";
    if (password.length < 8) e.password = "Password must be at least 8 characters";
    if (mode === "register") {
      if (!username.trim()) e.username = "Username is required";
      if (confirm !== password) e.confirm = "Passwords do not match";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setDone(true);
  };

  const switchMode = (m) => {
    setMode(m);
    setErrors({});
    setDone(false);
    setEmail("");
    setPassword("");
    setConfirm("");
    setUsername("");
  };

  return (
    <div style={{ fontFamily: "'Exo 2', sans-serif", background: "#050810", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;600;700&family=Orbitron:wght@700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes slideIn { from { opacity: 0; transform: translateX(-8px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes checkDraw { from { stroke-dashoffset: 30; } to { stroke-dashoffset: 0; } }
        .auth-input { width: 100%; background: #0a0f1a; border: 1px solid #1e2a3a; color: #e8eaf6; padding: 14px 16px 14px 44px; font-family: 'Exo 2', sans-serif; font-size: 14px; outline: none; transition: border-color 0.2s; }
        .auth-input:focus { border-color: #00f5ff66; box-shadow: 0 0 0 2px #00f5ff11; }
        .auth-input::placeholder { color: #3a4a5c; }
        .auth-input.error { border-color: #ff4444; }
        .tab-btn { flex: 1; padding: 12px; background: transparent; border: none; font-family: 'Orbitron', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; color: #3a4a5c; border-bottom: 2px solid transparent; transition: all 0.2s; }
        .tab-btn.active { color: #00f5ff; border-bottom-color: #00f5ff; }
        .tab-btn:hover:not(.active) { color: #8892b0; }
        .submit-btn { width: 100%; padding: 16px; background: linear-gradient(135deg, #00f5ff, #0080ff); border: none; color: #050810; font-family: 'Orbitron', sans-serif; font-size: 12px; font-weight: 900; letter-spacing: 3px; text-transform: uppercase; cursor: pointer; transition: all 0.2s; margin-top: 8px; }
        .submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 30px #00f5ff40; }
        .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }
        .error-msg { font-size: 11px; color: #ff6b6b; margin-top: 4px; animation: slideIn 0.2s ease; }
        .social-btn { flex: 1; padding: 11px; background: #0d1117; border: 1px solid #1e2a3a; color: #8892b0; font-family: 'Exo 2', sans-serif; font-size: 12px; font-weight: 600; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px; }
        .social-btn:hover { border-color: #00f5ff44; color: #e8eaf6; }
        .strength-bar { height: 3px; background: #1e2a3a; margin-top: 6px; display: flex; gap: 3px; }
        .strength-seg { flex: 1; height: 100%; transition: background 0.3s; }
      `}</style>

      {/* Grid achtergrond */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: "linear-gradient(#00f5ff06 1px, transparent 1px), linear-gradient(90deg, #00f5ff06 1px, transparent 1px)", backgroundSize: "50px 50px", pointerEvents: "none" }} />

      {/* Glow */}
      <div style={{ position: "fixed", top: "15%", left: "5%", width: 500, height: 500, background: "radial-gradient(circle, #00f5ff08, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

      {/* Card */}
      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 440, margin: "0 16px", animation: "fadeUp 0.5s ease both" }}>

        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 40, height: 40, background: "linear-gradient(135deg, #00f5ff, #0080ff)", clipPath: "polygon(50% 0%, 100% 30%, 100% 70%, 50% 100%, 0% 70%, 0% 30%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>⚡</div>
            <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 22, fontWeight: 900, color: "#fff", letterSpacing: 2 }}>BRAIN<span style={{ color: "#00f5ff" }}>BOOST</span></span>
          </a>
          <p style={{ fontSize: 13, color: "#3a4a5c", letterSpacing: 1, marginTop: 8 }}>AI-POWERED GAMING COACH</p>
        </div>

        {/* Main card */}
        <div style={{ background: "linear-gradient(160deg, #0d1117 0%, #0a0f1a 100%)", border: "1px solid #1e2a3a", position: "relative", overflow: "hidden" }}>
          <div style={{ height: 2, background: "linear-gradient(90deg, transparent, #00f5ff, transparent)" }} />

          {/* Hoek decoraties */}
          <div style={{ position: "absolute", top: 2, left: 0, width: 20, height: 20, borderLeft: "2px solid #00f5ff44", borderTop: "2px solid #00f5ff44" }} />
          <div style={{ position: "absolute", top: 2, right: 0, width: 20, height: 20, borderRight: "2px solid #00f5ff44", borderTop: "2px solid #00f5ff44" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, width: 20, height: 20, borderLeft: "2px solid #00f5ff44", borderBottom: "2px solid #00f5ff44" }} />
          <div style={{ position: "absolute", bottom: 0, right: 0, width: 20, height: 20, borderRight: "2px solid #00f5ff44", borderBottom: "2px solid #00f5ff44" }} />

          {/* Tabs */}
          <div style={{ display: "flex", borderBottom: "1px solid #1e2a3a" }}>
            <button className={`tab-btn ${mode === "login" ? "active" : ""}`} onClick={() => switchMode("login")}>Login</button>
            <button className={`tab-btn ${mode === "register" ? "active" : ""}`} onClick={() => switchMode("register")}>Register</button>
          </div>

          {/* Form */}
          <div style={{ padding: "32px 32px 28px" }}>
            {done ? (
              <div style={{ textAlign: "center", padding: "16px 0" }}>
                <div style={{ width: 64, height: 64, margin: "0 auto 20px", background: "#00f5ff11", border: "2px solid #00f5ff44", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M6 14L12 20L22 8" stroke="#00f5ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="30" style={{ animation: "checkDraw 0.5s ease both" }} />
                  </svg>
                </div>
                <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 18, fontWeight: 900, color: "#fff", marginBottom: 10 }}>
                  {mode === "login" ? "Welcome back!" : "Account created!"}
                </h2>
                <p style={{ fontSize: 14, color: "#8892b0", lineHeight: 1.7, marginBottom: 24 }}>
                  {mode === "login" ? `Signed in as ${email}. Redirecting to dashboard...` : `Verification email sent to ${email}.`}
                </p>
                <a href="/" style={{ display: "inline-block", padding: "12px 32px", background: "linear-gradient(135deg, #00f5ff, #0080ff)", color: "#050810", fontFamily: "'Orbitron', sans-serif", fontSize: 11, fontWeight: 900, letterSpacing: 2, textDecoration: "none" }}>
                  GO TO DASHBOARD →
                </a>
              </div>
            ) : (
              <>
                <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 18, fontWeight: 900, color: "#fff", marginBottom: 6 }}>
                  {mode === "login" ? "Welcome back" : "Create account"}
                </h2>
                <p style={{ fontSize: 13, color: "#3a4a5c", marginBottom: 28 }}>
                  {mode === "login" ? "Sign in to access your dashboard" : "Join BrainBoost and start climbing"}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {mode === "register" && (
                    <div style={{ position: "relative" }}>
                      <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 14, opacity: 0.5 }}>👤</span>
                      <input className={`auth-input${errors.username ? " error" : ""}`} placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                      {errors.username && <div className="error-msg">⚠ {errors.username}</div>}
                    </div>
                  )}

                  <div style={{ position: "relative" }}>
                    <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 14, opacity: 0.5 }}>✉</span>
                    <input className={`auth-input${errors.email ? " error" : ""}`} placeholder="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {errors.email && <div className="error-msg">⚠ {errors.email}</div>}
                  </div>

                  <div style={{ position: "relative" }}>
                    <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 14, opacity: 0.5 }}>🔒</span>
                    <input className={`auth-input${errors.password ? " error" : ""}`} placeholder="Password" type={showPass ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} style={{ paddingRight: 44 }} />
                    <button onClick={() => setShowPass(!showPass)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "#3a4a5c", cursor: "pointer", fontSize: 16 }}>
                      {showPass ? "🙈" : "👁"}
                    </button>
                    {mode === "register" && password && (
                      <div>
                        <div className="strength-bar">
                          {[0,1,2,3].map((i) => {
                            const score = [password.length >= 8, /[A-Z]/.test(password), /[0-9]/.test(password), /[^a-zA-Z0-9]/.test(password)].filter(Boolean).length;
                            const colors = ["#ff4444","#ff8800","#ffcc00","#00cc66"];
                            return <div key={i} className="strength-seg" style={{ background: i < score ? colors[score-1] : "#1e2a3a" }} />;
                          })}
                        </div>
                      </div>
                    )}
                    {errors.password && <div className="error-msg">⚠ {errors.password}</div>}
                  </div>

                  {mode === "register" && (
                    <div style={{ position: "relative" }}>
                      <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 14, opacity: 0.5 }}>🔒</span>
                      <input className={`auth-input${errors.confirm ? " error" : ""}`} placeholder="Confirm password" type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
                      {errors.confirm && <div className="error-msg">⚠ {errors.confirm}</div>}
                    </div>
                  )}

                  {mode === "login" && (
                    <div style={{ textAlign: "right", marginTop: -8 }}>
                      <button style={{ background: "none", border: "none", color: "#3a4a5c", fontSize: 12, cursor: "pointer" }}>Forgot password?</button>
                    </div>
                  )}

                  <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
                    {loading ? (
                      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" style={{ animation: "spin 0.8s linear infinite" }}>
                          <circle cx="8" cy="8" r="6" fill="none" stroke="#050810" strokeWidth="2" strokeDasharray="28" strokeDashoffset="8"/>
                        </svg>
                        {mode === "login" ? "Signing in..." : "Creating account..."}
                      </span>
                    ) : (
                      mode === "login" ? "Sign In →" : "Create Account →"
                    )}
                  </button>

                  <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#1e2a3a", fontSize: 11, letterSpacing: 2, margin: "4px 0" }}>
                    <div style={{ flex: 1, height: 1, background: "#1e2a3a" }} />OR<div style={{ flex: 1, height: 1, background: "#1e2a3a" }} />
                  </div>

                  <div style={{ display: "flex", gap: 8 }}>
                    <button className="social-btn">
                      <span style={{ fontSize: 16, fontWeight: 700, color: "#4285f4" }}>G</span> Google
                    </button>
                    <button className="social-btn">
                      <span style={{ fontSize: 16, fontWeight: 700, color: "#5865f2" }}>D</span> Discord
                    </button>
                  </div>
                </div>

                <p style={{ marginTop: 24, textAlign: "center", fontSize: 13, color: "#3a4a5c" }}>
                  {mode === "login" ? "Don't have an account? " : "Already have an account? "}
                  <button onClick={() => switchMode(mode === "login" ? "register" : "login")} style={{ background: "none", border: "none", color: "#00f5ff", cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
                    {mode === "login" ? "Register" : "Sign in"}
                  </button>
                </p>
              </>
            )}
          </div>
        </div>
        <p style={{ textAlign: "center", marginTop: 20, fontSize: 11, color: "#1e2a3a", letterSpacing: 1 }}>SECURED WITH JWT + EMAIL VERIFICATION</p>
      </div>
    </div>
  );
}