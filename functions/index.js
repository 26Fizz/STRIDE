// functions/index.js
const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

exports.onDonationCreate = functions.firestore
  .document("users/{uid}/donations/{donationId}")
  .onCreate(async (snap, context) => {
    const { uid } = context.params;
    const donation = snap.data();

    // Validate donation amount
    const amount = donation?.amount || 0;
    if (!amount || amount <= 0) return null;

    const userRef = db.doc(`users/${uid}`);
    await db.runTransaction(async (tx) => {
      const userSnap = await tx.get(userRef);
      const prevTotal = userSnap.exists ? (userSnap.data().totalDonated || 0) : 0;
      const newTotal = prevTotal + amount;

      // update user total and ensure unlocked summary entry exists
      const unlockedField = `unlockedSummaries.${donation.bookId}`;
      tx.set(userRef, {
        totalDonated: newTotal,
        [unlockedField]: {
          unlockedAt: donation.donatedAt || admin.firestore.FieldValue.serverTimestamp(),
          amount: amount
        }
      }, { merge: true });

      // update leaderboard mirror
      const leaderboardRef = db.doc(`leaderboard/${uid}`);
      const userData = userSnap.exists ? userSnap.data() : {};
      tx.set(leaderboardRef, {
        uid,
        username: userData.username || null,
        email: userData.email || null,
        totalDonated: newTotal,
        lastDonationAt: donation.donatedAt || admin.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
    });

    return null;
  });
