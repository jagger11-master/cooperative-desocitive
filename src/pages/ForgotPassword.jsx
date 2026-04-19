import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowLeft, Send } from 'lucide-react';
import logo from "../assets/charwe.png";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [emailSent, setEmailSent] = useState(false);

  return (
    <div className="fixed inset-0 bg-[#0a0a0b] flex flex-col items-center justify-center p-6 overflow-hidden touch-none select-none">
      <div className="w-full max-w-md mb-4">
        <button onClick={() => navigate(-1)} className="p-2 active:scale-90 transition-transform">
          <ArrowLeft size={24} className="text-orange-600" />
        </button>
      </div>

      <div className="bg-[#121214] w-full max-w-md rounded-2xl shadow-2xl p-8 flex flex-col items-center border border-white/5">
        <img src={logo} alt="Logo" className="h-16 w-auto mb-4 rounded-lg pointer-events-none"/>
        
        <h2 className="text-2xl font-bold text-white">Reset Password</h2>
        <p className="text-slate-400 text-sm mb-8 text-center px-4">
          {emailSent 
            ? "Check your inbox for a reset link" 
            : "Enter your email to receive a password reset link"}
        </p>

        {!emailSent ? (
          <form className="w-full space-y-4" noValidate onSubmit={(e) => { e.preventDefault(); setEmailSent(true); }}>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full pl-12 pr-4 py-3.5 bg-[#1a1a1c] border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:ring-1 focus:ring-orange-600 focus:bg-[#1a1a1c] outline-none transition-all" 
              />
            </div>

            <button className="w-full bg-[#3b5d8f] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 mt-4 active:scale-95 transition-all">
              <Send size={20} /> Send Reset Link
            </button>
          </form>
        ) : (
          <button 
            onClick={() => navigate('/login')} 
            className="w-full border border-slate-600 text-white py-4 rounded-xl font-bold active:scale-95 transition-all"
          >
            Back to Login
          </button>
        )}
      </div>
    </div>
  );
}
