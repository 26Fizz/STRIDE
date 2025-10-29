import React, { useEffect, useState } from "react";
import { db } from "../../Firebase/firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { Trophy, Instagram, Flame, Star } from "lucide-react";

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const usersRef = collection(db, "users");
        const snapshot = await getDocs(usersRef);

        const userData = snapshot.docs.map((docSnap) => {
          const data = docSnap.data();
          const strikes = data.strikes || 0;
          const impactPoints = Math.floor(strikes / 4); // 1 IP = 4-week streak
          return { id: docSnap.id, ...data, strikes, impactPoints };
        });

        // Sort by impact points first, then streaks
        const sorted = userData.sort(
          (a, b) =>
            b.impactPoints - a.impactPoints || b.strikes - a.strikes
        );

        setUsers(sorted);
        setLoading(false);

        // ✅ Update Firestore if IP missing or outdated
        sorted.forEach(async (user) => {
          const userRef = doc(db, "users", user.id);
          const newIP = Math.floor((user.strikes || 0) / 4);
          if (user.impactPoints !== newIP || user.impactPoints === undefined) {
            await updateDoc(userRef, { impactPoints: newIP });
          }
        });
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

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
          Weekly Impact Leaderboard
        </h2>

        {/* 🔥 Table Wrapper for Mobile Scrolling */}
        <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-800">
          <table className="min-w-full text-left border-collapse">
            <thead className="bg-[#111] text-gray-300 text-sm sm:text-base">
              <tr>
                <th className="py-3 px-3 sm:px-4 text-left">Rank</th>
                <th className="py-3 px-3 sm:px-4 text-left">User</th>
                <th className="py-3 px-3 sm:px-4 text-left">Instagram</th>
                <th className="py-3 px-3 sm:px-4 text-right whitespace-nowrap">
                  Streak 🔥
                </th>
                <th className="py-3 px-3 sm:px-4 text-right whitespace-nowrap">
                  Impact ⭐
                </th>
              </tr>
            </thead>

            <tbody className="text-sm sm:text-base">
              {users.map((user, index) => (
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

                  <td className="py-3 px-3 sm:px-4 font-medium">
                    <div className="max-w-[120px] sm:max-w-none truncate">
                      {user.username || "Unknown"}
                    </div>
                  </td>

                  <td className="py-3 px-3 sm:px-4 text-blue-400">
                    {user.instagram ? (
                      <a
                        href={`https://instagram.com/${user.instagram.replace("@", "")}`}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline inline-flex items-center gap-1 truncate max-w-[120px] sm:max-w-none"
                      >
                        <Instagram className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{user.instagram}</span>
                      </a>
                    ) : (
                      <span className="text-gray-400">N/A</span>
                    )}
                  </td>

                  <td className="py-3 px-3 sm:px-4 text-right font-semibold text-orange-400 whitespace-nowrap">
                    <span className="inline-flex items-center justify-end gap-1">
                      <Flame className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      {user.strikes ?? 0}
                    </span>
                  </td>

                  <td className="py-3 px-3 sm:px-4 text-right font-semibold text-yellow-400 whitespace-nowrap">
                    <span className="inline-flex items-center justify-end gap-1">
                      <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                      {user.impactPoints ?? 0}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {users.length === 0 && (
          <p className="text-gray-500 mt-6">
            No donors yet. Be the first to make an impact!
          </p>
        )}

        {/* ℹ️ Impact Points Note */}
        <div className="mt-8 text-gray-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          <p>
            <strong className="text-white">Impact Points (IP)</strong> reward consistent generosity.{" "}
            Every{" "}
            <span className="text-orange-400 font-semibold">4-week donation streak</span>{" "}
            earns{" "}
            <span className="text-yellow-400 font-semibold">+1 Impact Point</span>.{" "}
            Keep your streak alive to climb the leaderboard and inspire others!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
