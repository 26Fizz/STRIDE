// src/Auth/SignupModal.jsx
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Firebase/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

const SignupModal = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [instagram, setInstagram] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e?.preventDefault();
    setError("");
    if (!email || !password || !username) {
      setError("Email, password, and username are required.");
      return;
    }
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), password);
      const user = userCredential.user;
      // create user doc
      await setDoc(doc(db, "users", user.uid), {
        username,
        email: user.email,
        instagram: instagram || null,
        strikes: 0,
        unlockedSummaries: {},
        totalDonated: 0,
        createdAt: serverTimestamp(),
      }, { merge: true });
      closeModal();
    } catch (err) {
      setError(err.message || "Signup failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <form className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-6 space-y-4 relative" onSubmit={handleSignup}>
        <button type="button" onClick={closeModal} className="absolute top-3 right-3 text-gray-400 hover:text-gray-700">✕</button>
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        {error && <p className="text-red-500 text-sm text-center" role="alert">{error}</p>}
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className="w-full p-2 border rounded" required />
        <input type="text" placeholder="Instagram Handle (optional)" value={instagram} onChange={e => setInstagram(e.target.value)} className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 border rounded" required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-2 border rounded" required minLength={6} />
        <button disabled={loading} className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">{loading ? "Creating..." : "Sign Up"}</button>
      </form>
    </div>
  );
};

export default SignupModal;
