import React, { useState, useEffect, useMemo } from "react";
import { BOOK_MAP } from "../../data/books";
import SummarySidebar from "./SummarySidebar";
import SummaryDetailView from "./SummaryDetailView";
import { BookIcon } from "../../icons/icons";
import { useAuth } from "../../hooks/useAuth";
import { db } from "../../Firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

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

  // Create sorted list of unlocked books with proper date conversion
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

  // Automatically select the most recent book
  useEffect(() => {
    if (sortedUnlockedBooks.length > 0 && !viewingId) {
      setViewingId(sortedUnlockedBooks[0].id);
    }
  }, [sortedUnlockedBooks, viewingId]);

  // Loading or logged-out state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-500">
        Loading your summaries...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Please log in to view your unlocked summaries.
        </h2>
      </div>
    );
  }

  return (
    <section className="pt-20 pb-16 bg-white min-h-[90vh]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 border-b pb-2">
          My Unlocked Momentum Summaries
        </h2>

        {sortedUnlockedBooks.length === 0 ? (
          <div className="text-center p-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
            <BookIcon className="w-10 h-10 mx-auto text-blue-500 mb-4" />
            <p className="text-xl font-semibold text-gray-700">
              No summaries unlocked yet!
            </p>
            <p className="text-gray-500 mt-2">
              Visit the{" "}
              <button
                onClick={() => (window.location.hash = "Donate")}
                className="text-blue-600 underline"
              >
                Donate page
              </button>{" "}
              on a Monday to get started.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-4 gap-8">
            <SummarySidebar
              sortedUnlockedBooks={sortedUnlockedBooks}
              viewingId={viewingId}
              setViewingId={setViewingId}
            />

            <div className="md:col-span-3">
              <SummaryDetailView viewingBook={viewingBook} />
              {viewingBook && (
                <p className="mt-4 text-sm text-gray-500 text-center">
                  <strong>Unlocked on:</strong>{" "}
                  {sortedUnlockedBooks
                    .find((b) => b.id === viewingId)
                    ?.unlockedAt.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MySummariesPage;