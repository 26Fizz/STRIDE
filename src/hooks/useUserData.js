// src/hooks/useUserData.js
import { useEffect, useState } from "react";
import { subscribeToUserDoc } from "../Firebase/firestoreHelpers";

/**
 * useUserData - given a firebase auth user (or null), returns:
 * - userData: the Firestore user doc object (or null)
 * - loading: boolean
 */
export const useUserData = (user) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUserData(null);
    setLoading(true);

    if (!user) {
      setLoading(false);
      return; // nothing to subscribe to
    }

    const uid = user.uid;
    const unsub = subscribeToUserDoc(uid, (docData) => {
      setUserData(docData);
      setLoading(false);
    });

    // cleanup
    return () => {
      if (typeof unsub === "function") unsub();
    };
  }, [user]);

  return { userData, loading };
};
