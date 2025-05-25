import { useState } from "react";
import axios from "axios";

export default function PasswordReset() {
  const [step, setStep] = useState(1);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFindUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        { identifier },
        { withCredentials: true }
      );
      setMessage(res.data.message);
      setStep(2);
    } catch (err) {
      setMessage(err.response?.data?.message || "Terjadi kesalahan");
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/reset-password",
        {
          password,
          confirmPassword,
        },
        { withCredentials: true }
      );
      setMessage(res.data.message);
      setIdentifier("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setMessage(err.response?.data?.message || "Gagal reset");
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", paddingTop: "2rem" }}>
      <h2 style={{ textAlign: "center" }}>Reset Password</h2>

      {message && (
        <div
          style={{
            backgroundColor: error ? "#f8d7da" : "#d4edda",
            color: error ? "#721c24" : "#155724",
            border: `1px solid ${error ? "#f5c6cb" : "#c3e6cb"}`,
            padding: "10px",
            marginBottom: "1rem",
            borderRadius: "4px",
          }}
        >
          {message}
        </div>
      )}

      {step === 1 ? (
        <form onSubmit={handleFindUser}>
          <input
            type="text"
            placeholder="Email atau Username"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
            style={{ width: "100%", marginBottom: "1rem", padding: "8px" }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            {loading ? "Mencari..." : "Cari User"}
          </button>
        </form>
      ) : (
        <form onSubmit={handleResetPassword}>
          <input
            type="password"
            placeholder="Password baru"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", marginBottom: "1rem", padding: "8px" }}
          />
          <input
            type="password"
            placeholder="Konfirmasi password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ width: "100%", marginBottom: "1rem", padding: "8px" }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            {loading ? "Menyimpan..." : "Reset Password"}
          </button>
        </form>
      )}
    </div>
  );
}
