import React, { useState, useEffect, useMemo } from "react";
import { BOOK_MAP } from "../../data/books";
import SummarySidebar from "./SummarySidebar";
import SummaryDetailView from "./SummaryDetailView";
import { BookIcon } from "../../icons/icons";
import { useAuth } from "../../hooks/useAuth";
import { db } from "../../Firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { motion } from "framer-motion";

const MySummariesPage = () => {
  const user = useAuth();
  const [unlockedSummaries, setUnlockedSummaries] = useState({});
  const [viewingId, setViewingId] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch unlocked summaries from Firestore
  useEffect(() => {
    const fetchUserSummaries = async () => {
      if (!user) {
        setUnlockedSummaries({});
        setLoading(false);
        return;
      }

      try {
        const userRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setUnlockedSummaries(data.unlockedSummaries || {});
        } else {
          setUnlockedSummaries({});
        }
      } catch (err) {
        console.error("Error fetching summaries:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserSummaries();
  }, [user]);

  // Sort summaries by date
  const sortedUnlockedBooks = useMemo(() => {
    return Object.keys(unlockedSummaries)
      .map((id) => {
        const entry = unlockedSummaries[id];
        const unlockedAt = entry?.unlockedAt?.toDate
          ? entry.unlockedAt.toDate()
          : new Date(entry?.unlockedAt || Date.now());
        return {
          ...BOOK_MAP[id],
          id,
          unlockedAt,
          amount: entry?.amount || 0,
        };
      })
      .sort((a, b) => b.unlockedAt - a.unlockedAt);
  }, [unlockedSummaries]);

  const viewingBook = viewingId ? BOOK_MAP[viewingId] : null;

  // Auto-select most recent
  useEffect(() => {
    if (sortedUnlockedBooks.length > 0 && !viewingId) {
      setViewingId(sortedUnlockedBooks[0].id);
    }
  }, [sortedUnlockedBooks, viewingId]);

  // Loading or logged-out
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh] text-gray-400 text-lg bg-[#0b0b0b]">
        Fetching your STRIDE journey...
      </div>
    );
  }

  if (!user) {
    return (
      <section className="min-h-[80vh] flex flex-col items-center justify-center bg-[#0b0b0b] text-center px-6 text-white">
        <BookIcon className="w-12 h-12 text-emerald-400 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Login Required</h2>
        <p className="text-gray-400 max-w-md">
          Please log in to view your unlocked Momentum Summaries and continue your STRIDE.
        </p>
      </section>
    );
  }

  return (
    <section className="pt-24 pb-16 min-h-screen bg-[#0b0b0b] text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-extrabold text-white mb-2">
            My STRIDE Summaries
          </h2>
          <p className="text-gray-400 text-sm">
            Track every idea you’ve unlocked — each drop counts toward your momentum.
          </p>
        </motion.div>

        {/* Empty state */}
        {sortedUnlockedBooks.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center p-12 bg-[#111111] rounded-2xl border border-white/10 max-w-xl mx-auto"
          >
            <BookIcon className="w-10 h-10 mx-auto text-emerald-400 mb-4" />
            <p className="text-xl font-semibold text-gray-100">
              No summaries unlocked yet!
            </p>
            <p className="text-gray-400 mt-2">
              Visit the{" "}
              <button
                onClick={() => (window.location.hash = "Donate")}
                className="text-emerald-400 underline hover:text-emerald-300"
              >
                Donate
              </button>{" "}
              section on Monday to receive your first Momentum Drop.
            </p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-4 gap-10">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SummarySidebar
                sortedUnlockedBooks={sortedUnlockedBooks}
                viewingId={viewingId}
                setViewingId={setViewingId}
              />
            </motion.div>

            {/* Summary Detail */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-3 bg-[#111111] border border-white/10 rounded-2xl p-6 shadow-[0_0_20px_rgba(16,185,129,0.08)] hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] transition-all"
            >
              <SummaryDetailView viewingBook={viewingBook} />

              {viewingBook && (
                <p className="mt-4 text-xs text-gray-500 text-center">
                  <span className="text-emerald-400 font-medium">Unlocked:</span>{" "}
                  {sortedUnlockedBooks
                    .find((b) => b.id === viewingId)
                    ?.unlockedAt.toLocaleDateString("en-IN", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                </p>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MySummariesPage;
