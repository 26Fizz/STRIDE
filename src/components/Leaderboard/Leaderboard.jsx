import React, { useEffect, useState } from "react";
import { db } from "../../Firebase/firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { Trophy, Instagram, Flame, Star } from "lucide-react";

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUserRank, setCurrentUserRank] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [animatedPercent, setAnimatedPercent] = useState(0);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => setCurrentUser(user));
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const usersRef = collection(db, "users");
        const snapshot = await getDocs(usersRef);

        const userData = snapshot.docs.map((docSnap) => {
          const data = docSnap.data();
          const strikes = data.strikes || 0;
          const impactPoints = Math.floor(strikes / 4);
          return { id: docSnap.id, ...data, strikes, impactPoints };
        });

        const sorted = userData.sort(
          (a, b) => b.impactPoints - a.impactPoints || b.strikes - a.strikes
        );

        setUsers(sorted);
        setLoading(false);

        // Update missing/outdated impact points
        sorted.forEach(async (user) => {
          const userRef = doc(db, "users", user.id);
          const newIP = Math.floor((user.strikes || 0) / 4);
          if (user.impactPoints !== newIP || user.impactPoints === undefined) {
            await updateDoc(userRef, { impactPoints: newIP });
          }
        });

        // Find current user's rank
        const auth = getAuth();
        const current = auth.currentUser;
        if (current) {
          const rank =
            sorted.findIndex(
              (u) =>
                u.email?.toLowerCase() === current.email?.toLowerCase() ||
                u.id === current.uid
            ) + 1;
          if (rank > 0) setCurrentUserRank(rank);
        }
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, [currentUser]);

  const totalUsers = users.length;
  const userRank = currentUserRank;
  const topUsers = users.slice(0, 11);

  let percentile = null;
  if (userRank && totalUsers > 1) {
    const raw = ((totalUsers - userRank) / (totalUsers - 1)) * 100;
    percentile = Math.max(1, Math.min(99, Number(raw.toFixed(1))));
  }

  // ✅ Always define hook — just run animation logic conditionally
  useEffect(() => {
    if (!percentile) return;
    let start = 0;
    const duration = 1000;
    const stepTime = 10;
    const steps = duration / stepTime;
    const increment = percentile / steps;
    const interval = setInterval(() => {
      start += increment;
      if (start >= percentile) {
        start = percentile;
        clearInterval(interval);
      }
      setAnimatedPercent(Number(start.toFixed(1)));
    }, stepTime);
    return () => clearInterval(interval);
  }, [percentile]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-gray-400">
        Loading leaderboard...
      </div>
    );
  }

  return (
    <section className="py-12 px-4 sm:px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center justify-center gap-2">
          <Trophy className="text-yellow-400 w-7 h-7 sm:w-8 sm:h-8" />
          The STRIDE Impact Leaderboard
        </h2>

        <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-800">
          <table className="min-w-full text-left border-collapse">
            <thead className="bg-[#111] text-gray-300 text-sm sm:text-base">
              <tr>
                <th className="py-3 px-3 sm:px-4 text-left">Rank</th>
                <th className="py-3 px-3 sm:px-4 text-left">User</th>
                <th className="py-3 px-3 sm:px-4 text-left">Instagram</th>
                <th className="py-3 px-3 sm:px-4 text-right">Streak 🔥</th>
                <th className="py-3 px-3 sm:px-4 text-right">Impact ⭐</th>
              </tr>
            </thead>

            <tbody className="text-sm sm:text-base">
              {topUsers.map((user, index) => (
                <tr
                  key={user.id}
                  className={`border-t border-gray-800 hover:bg-[#181818] transition ${
                    index === 0
                      ? "bg-gradient-to-r from-yellow-500/10 via-yellow-700/10 to-yellow-500/10"
                      : index === 1
                      ? "bg-gradient-to-r from-gray-400/10 via-gray-600/10 to-gray-400/10"
                      : index === 2
                      ? "bg-gradient-to-r from-amber-600/10 via-amber-800/10 to-amber-600/10"
                      : ""
                  }`}
                >
                  <td className="py-3 px-3 sm:px-4 font-semibold text-gray-400">
                    #{index + 1}
                  </td>
                  <td className="py-3 px-3 sm:px-4 font-medium truncate">
                    {user.username || "Unknown"}
                  </td>
                  <td className="py-3 px-3 sm:px-4 text-blue-400 truncate">
                    {user.instagram ? (
                      <a
                        href={`https://instagram.com/${user.instagram.replace("@", "")}`}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline inline-flex items-center gap-1"
                      >
                        <Instagram className="w-4 h-4" />
                        {user.instagram}
                      </a>
                    ) : (
                      <span className="text-gray-400">N/A</span>
                    )}
                  </td>
                  <td className="py-3 px-3 sm:px-4 text-right font-semibold text-orange-400">
                    <span className="inline-flex items-center gap-1">
                      <Flame className="w-4 h-4 text-orange-500" />
                      {user.strikes ?? 0}
                    </span>
                  </td>
                  <td className="py-3 px-3 sm:px-4 text-right font-semibold text-yellow-400">
                    <span className="inline-flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      {user.impactPoints ?? 0}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 🧡 User Rank Display */}
        {currentUser ? (
          currentUserRank > 11 ? (
            <div className="mt-10">
              <div className="bg-gradient-to-r from-[#111] via-[#181818] to-[#111] border border-white/10 rounded-2xl p-6 shadow-xl">
                <p className="text-lg sm:text-xl font-semibold text-gray-300 mb-2">
                  You’re among the top{" "}
                  <span className="text-yellow-400 animate-pulse">
                    {animatedPercent}%
                  </span>{" "}
                  of all STRIDERS 🚀
                </p>
                <p className="text-gray-400 text-sm sm:text-base">
                  Keep showing up every Monday. Every STRIDE counts 🌿
                </p>
              </div>
            </div>
          ) : (
            <p className="mt-6 text-gray-400 text-sm">
              You’re in the top 11! 🌟 Keep leading by example.
            </p>
          )
        ) : (
          <div className="mt-10 text-gray-400">
            Log in to see your personalized rank 🌿
          </div>
        )}

        <div className="mt-8 text-gray-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          <p>
            <strong className="text-white">Impact Points (IP)</strong> — every 4
            consistent Mondays earns you{" "}
            <span className="text-yellow-400 font-semibold">+1 IP</span>. It’s a
            quiet mark of purpose and consistency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
