// src/icons/icons.js

// src/icons/icons.jsx
import {
  IndianRupee,
  DollarSign,
  Loader2,
  BookOpen,
  CalendarDays,
  ArrowRight,
  CheckCircle2,
  XCircle,
  User,
  LogOut,
  LogIn,
} from "lucide-react";

// 💰 Currency icons
export const IndianRupeeIcon = (props) => <IndianRupee {...props} />;


// 🔄 Loader


// 📚 Misc icons

export const CalendarIcon = (props) => <CalendarDays {...props} />;
export const ArrowRightIcon = (props) => <ArrowRight {...props} />;
export const SuccessIcon = (props) => <CheckCircle2 {...props} />;
export const ErrorIcon = (props) => <XCircle {...props} />;

// 👤 Auth-related icons
export const UserIcon = (props) => <User {...props} />;
export const LogoutIcon = (props) => <LogOut {...props} />;
export const LoginIcon = (props) => <LogIn {...props} />;


export const BookIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 0 0 5H20M12 7h6M12 11h6M12 15h6"/></svg>
);
export const DollarSignIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
);
export const TrendingUpIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 18 11 11 4 6 9 2 5"/><polyline points="18 7 22 7 22 11"/></svg>
);
export const CheckCircleIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.05-8.66"/><path d="m9 11 3 3 7-7"/></svg>
);
export const LoaderIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
);
export const MenuIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
);
export const XIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

