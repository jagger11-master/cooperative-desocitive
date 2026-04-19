import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff, ArrowLeft, UserPlus } from 'lucide-react';
import logo from "../assets/charwe.png";

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="fixed inset-0 bg-[#0a0a0b] flex flex-col items-center justify-center p-6 overflow-hidden touch-none select-none">
      <div className="w-full max-w-md mb-4">
        <button onClick={() => navigate(-1)} className="p-2 active:scale-90 transition-transform">
          <ArrowLeft size={24} className="text-orange-600" />
        </button>
      </div>

      <div className="bg-[#121214] w-full max-w-md rounded-2xl shadow-2xl p-8 flex flex-col items-center border border-white/5">
        <img src={logo} alt="Logo" className="h-16 w-auto mb-4 rounded-lg pointer-events-none"/>
        <h2 className="text-2xl font-bold text-white">Create Account</h2>
        <p className="text-slate-400 text-sm mb-6 text-center">Fill in the details to sign up</p>

       <form className="w-full space-y-4" noValidate onSubmit={(e) => e.preventDefault()}>

          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="Username" 
              className="w-full pl-12 pr-4 py-3.5 bg-[#1a1a1c] border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:ring-1 focus:ring-orange-600 focus:bg-[#1a1a1c] outline-none transition-all" 
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full pl-12 pr-4 py-3.5 bg-[#1a1a1c] border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:ring-1 focus:ring-orange-600 focus:bg-[#1a1a1c] outline-none transition-all" 
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              className="w-full pl-12 pr-12 py-3.5 bg-[#1a1a1c] border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:ring-1 focus:ring-orange-600 focus:bg-[#1a1a1c] outline-none transition-all"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type={showConfirm ? "text" : "password"} 
              placeholder="Confirm Password" 
              className="w-full pl-12 pr-12 py-3.5 bg-[#1a1a1c] border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:ring-1 focus:ring-orange-600 focus:bg-[#1a1a1c] outline-none transition-all"
            />
            <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button className="w-full bg-[#3b5d8f] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 mt-4 active:scale-95 transition-all">
            <UserPlus size={20} /> Sign Up
          </button>
        </form>

        <p className="mt-6 text-sm text-slate-400">
          Already have an account? <Link to="/login" className="text-orange-600 font-bold ml-1">Login</Link>
        </p>
      </div>
    </div>
  );
}
