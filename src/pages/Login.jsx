import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Lock, Eye, EyeOff, ArrowLeft, LogIn } from 'lucide-react';
import logo from "../assets/charwe.png";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="fixed inset-0 bg-[#0a0a0b] flex flex-col items-center justify-center p-6 overflow-hidden touch-none">
      <div className="w-full max-w-md self-center mb-4">
        <button onClick={() => navigate(-1)} className="p-2 transition-transform hover:scale-110">
          <ArrowLeft size={24} className="text-orange-600" />
        </button>
      </div>

      <div className="bg-[#121214] w-full max-w-md rounded-2xl shadow-2xl p-8 flex flex-col items-center border border-white/5">
        <img src={logo} alt="Charwe Logo" className="h-16 w-auto mb-4 rounded-lg shadow-lg"/>
        
        <h2 className="text-2xl font-bold text-white">Login</h2>
        <p className="text-slate-400 text-sm mb-8">Provide your email and password to login</p>

        <form className="w-full space-y-4">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="youremail@gmail.com" 
              className="w-full pl-12 pr-4 py-3.5 bg-[#1a1a1c] border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:ring-1 focus:ring-orange-600 outline-none transition-all" 
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="********" 
              className="w-full pl-12 pr-12 py-3.5 bg-[#1a1a1c] border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:ring-1 focus:ring-orange-600 outline-none transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="text-right">
            <button type="button" className="text-xs font-bold text-orange-600 hover:text-orange-500 uppercase tracking-wide">
              Forgot your password?
            </button>
          </div>

          <button className="w-full bg-[#3b5d8f] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 mt-4 shadow-lg shadow-blue-900/20 active:scale-[0.98] transition-all">
            <LogIn size={20} />
            Login
          </button>
        </form>

        <p className="mt-8 text-sm text-slate-400">
          Don't Have an Account? <Link to="/signup" className="text-orange-600 font-bold hover:text-orange-500 ml-1">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
