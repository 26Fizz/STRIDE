export const mapAuthError = (errorCode) => {
  const errors = {
    "auth/email-already-in-use": "This email is already registered.",
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/missing-password": "Password cannot be empty.",
    "auth/weak-password": "Password should be at least 6 characters.",
    "auth/user-not-found": "No account found with this email.",
    "auth/wrong-password": "Incorrect password. Try again.",
    "auth/invalid-credential": "Invalid login details. Please try again.",
    "auth/too-many-requests": "Too many attempts. Please wait and try again.",
  };

  return errors[errorCode] || "Something went wrong. Please try again.";
};
