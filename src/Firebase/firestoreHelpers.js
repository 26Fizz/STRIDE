import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

// 🔹 Unlock a summary (your existing code)
export const unlockSummary = async (uid, bookId, amount) => {
  const userRef = doc(db, "users", uid);

  await setDoc(
    userRef,
    {
      unlockedSummaries: {
        [bookId]: {
          unlockedAt: serverTimestamp(),
          amount,
        },
      },
    },
    { merge: true }
  );
};

// 🔹 Store donation details separately
export const handleDonation = async (uid, bookId, amount) => {
  const userRef = doc(db, "users", uid);
  await setDoc(
    userRef,
    {
      donations: {
        [bookId]: { donatedAt: serverTimestamp(), amount },
      },
    },
    { merge: true }
  );

  // also unlock the summary
  await unlockSummary(uid, bookId, amount);
};