import React, { useEffect, useState } from "react";
import { CheckCircle2, Download, QrCode } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../Firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../hooks/useAuth";
import qrImage from "../assets/qr.jpg"; // ✅ ensure this image exists

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = useAuth();

  const currentUser = auth?.currentUser || auth?.user || auth || null;
  const [userInfo, setUserInfo] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [amount, setAmount] = useState(location.state?.amount || 50);
  const [isMobile, setIsMobile] = useState(false);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    // ✅ Detect mobile devices
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    setIsMobile(/android|iphone|ipad|ipod/i.test(userAgent));

    // ✅ Fetch user info
    const fetchUserInfo = async () => {
      if (!currentUser?.uid) {
        setLoadingUser(false);
        return;
      }
      try {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) setUserInfo(userDoc.data());
      } catch (err) {
        console.error("Error fetching user data:", err);
      } finally {
        setLoadingUser(false);
      }
    };
    fetchUserInfo();
  }, [currentUser]);

  // ✅ UPI deep link (works perfectly on mobile)
  const handleUPIRedirect = () => {
    const upiLink = `upi://pay?pa=strideventures@ybl&pn=Stride%20India&am=${amount}&cu=INR`;

    if (isMobile) {
      window.location.href = upiLink; // redirects directly to app on mobile
    } else {
      // On desktop, show QR instead
      setShowQR(true);
    }
  };

  const handleSaveQR = () => {
    const link = document.createElement("a");
    link.href = qrImage;
    link.download = "Stride_UPI_QR.jpg";
    link.click();
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white px-6 py-12">
      <div className="bg-gradient-to-b from-gray-900 to-black rounded-3xl shadow-2xl p-8 w-full max-w-md text-center border border-white/10">
        <CheckCircle2 className="mx-auto text-green-400 w-16 h-16 mb-4" />

        <h1 className="text-3xl font-bold mb-3">Confirm Your Donation</h1>
        <p className="text-gray-400 mb-8">
          Every Monday donation helps unlock knowledge for someone new 📚
        </p>

        {/* ✅ Donor Info Section */}
        {loadingUser ? (
          <p className="text-gray-400 mb-8">Loading your details...</p>
        ) : currentUser && userInfo ? (
          <div className="space-y-2 mb-8">
            <p>
              <span className="font-semibold text-gray-300">Donor:</span>{" "}
              <span className="text-green-400">
                @{userInfo.instagram || userInfo.username}
              </span>
            </p>
            <p>
              <span className="font-semibold text-gray-300">Email:</span>{" "}
              {userInfo.email}
            </p>
            <p>
              <span className="font-semibold text-gray-300">Amount:</span> ₹
              {amount}
            </p>
          </div>
        ) : (
          <p className="text-gray-400 mb-8">
            Please sign in to continue with your donation.
          </p>
        )}

        {/* ✅ Payment Button */}
        <button
          onClick={handleUPIRedirect}
          disabled={!currentUser}
          className={`w-full py-3 rounded-xl font-semibold text-black transition ${
            currentUser
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gray-600 cursor-not-allowed"
          }`}
        >
          Proceed to Pay
        </button>

        {/* 💻 Desktop note */}
        {!isMobile && (
          <p className="text-gray-400 text-sm mt-3">
            If you're on a computer, please complete the donation using the QR below.
          </p>
        )}

        {/* 🧾 Collapsible QR Section */}
        {!isMobile && (
          <div className="mt-8 border-t border-white/10 pt-6">
            <button
              onClick={() => setShowQR(!showQR)}
              className="flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-semibold transition"
            >
              <QrCode className="w-5 h-5" />
              {showQR ? "Hide QR Code" : "Show QR Code"}
            </button>

            {showQR && (
              <div className="mt-6 animate-fadeIn">
                <img
                  src={qrImage}
                  alt="Stride UPI QR"
                  className="w-52 h-52 mx-auto rounded-lg border border-gray-700 shadow-lg mb-4"
                />

                <button
                  onClick={handleSaveQR}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition"
                >
                  <Download className="w-5 h-5" />
                  Save QR Code
                </button>

                <p className="text-sm text-gray-400 mt-6 leading-relaxed">
                  💚 Donations are accepted via{" "}
                  <span className="text-green-400">strideventures@ybl</span>{" "}
                  (Name: <span className="text-green-400">Stride India</span>).
                  Thank you for helping us spread reading culture every Monday 🌱
                </p>
              </div>
            )}
          </div>
        )}

        {/* Cancel */}
        <button
          onClick={() => navigate("/")}
          className="mt-8 w-full py-2 text-gray-400 hover:text-white transition"
        >
          Cancel
        </button>

        <p className="text-xs text-gray-500 mt-6">
          Secure payment powered by UPI · STRIDE Ventures
        </p>
      </div>
    </div>
  );
};

export default PaymentPage;
