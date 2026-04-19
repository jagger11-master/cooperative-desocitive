import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff, ArrowLeft, UserPlus, CheckCircle } from 'lucide-react';
import logo from "../assets/charwe.png";

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({ username: '', email: '', password: '', confirm: '' });
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.username) newErrors.username = "This field is required";
    if (!formData.email) newErrors.email = "This field is required";
    if (!formData.password) newErrors.password = "This field is required";
    if (formData.password !== formData.confirm) newErrors.confirm = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setIsSuccess(true);
      setTimeout(() => navigate('/vacancies'), 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#0a0a0b] flex flex-col items-center justify-center p-6 overflow-hidden touch-none select-none">
      {isSuccess && (
        <div className="absolute top-10 bg-green-600 text-white px-6 py-3 rounded-xl flex items-center gap-3 shadow-2xl z-50">
          <CheckCircle size={20} /> Account created! Redirecting...
        </div>
      )}

      <div className="w-full max-w-md mb-4 px-2">
        <button onClick={() => navigate(-1)} className="p-2 active:scale-90 transition-transform">
          <ArrowLeft size={24} className="text-orange-600" />
        </button>
      </div>

      <div className="bg-[#121214] w-full max-w-md rounded-2xl shadow-2xl p-8 flex flex-col items-center border border-white/5">
        <img src={logo} alt="Logo" className="h-16 w-auto mb-4 rounded-lg pointer-events-none"/>
        <h2 className="text-2xl font-bold text-white">Create Account</h2>
        <p className="text-slate-400 text-sm mb-6 text-center">Fill in the details to sign up</p>

        <form className="w-full space-y-4" noValidate autoComplete="off" onSubmit={handleSignup}>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="text" 
              name="charwe_user"
              autoComplete="one-time-code"
              placeholder="Username" 
              value={formData.username}
              onChange={(e) => {
                setFormData({...formData, username: e.target.value});
                setErrors({...errors, username: ''});
              }}
              className={`w-full pl-12 pr-4 py-3.5 bg-[#1a1a1c] border ${errors.username ? 'border-red-600' : 'border-white/10'} rounded-xl text-white outline-none focus:ring-1 focus:ring-orange-600 focus:bg-[#1a1a1c]`} 
            />
            {errors.username && <p className="text-red-500 text-[10px] mt-1 ml-2 font-bold uppercase">{errors.username}</p>}
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="email" 
              name="charwe_mail"
              autoComplete="new-password"
              placeholder="Email" 
              value={formData.email}
              onChange={(e) => {
                setFormData({...formData, email: e.target.value});
                setErrors({...errors, email: ''});
              }}
              className={`w-full pl-12 pr-4 py-3.5 bg-[#1a1a1c] border ${errors.email ? 'border-red-600' : 'border-white/10'} rounded-xl text-white outline-none focus:ring-1 focus:ring-orange-600 focus:bg-[#1a1a1c]`} 
            />
            {errors.email && <p className="text-red-500 text-[10px] mt-1 ml-2 font-bold uppercase">{errors.email}</p>}
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type={showPassword ? "text" : "password"} 
              name="charwe_pass"
              autoComplete="new-password"
              placeholder="Password" 
              value={formData.password}
              onChange={(e) => {
                setFormData({...formData, password: e.target.value});
                setErrors({...errors, password: ''});
              }}
              className={`w-full pl-12 pr-12 py-3.5 bg-[#1a1a1c] border ${errors.password ? 'border-red-600' : 'border-white/10'} rounded-xl text-white outline-none focus:ring-1 focus:ring-orange-600 focus:bg-[#1a1a1c]`} 
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            {errors.password && <p className="text-red-500 text-[10px] mt-1 ml-2 font-bold uppercase">{errors.password}</p>}
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type={showConfirm ? "text" : "password"} 
              name="charwe_confirm"
              autoComplete="new-password"
              placeholder="Confirm Password" 
              value={formData.confirm}
              onChange={(e) => {
                setFormData({...formData, confirm: e.target.value});
                setErrors({...errors, confirm: ''});
              }}
              className={`w-full pl-12 pr-12 py-3.5 bg-[#1a1a1c] border ${errors.confirm ? 'border-red-600' : 'border-white/10'} rounded-xl text-white outline-none focus:ring-1 focus:ring-orange-600 focus:bg-[#1a1a1c]`} 
            />
            <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            {errors.confirm && <p className="text-red-500 text-[10px] mt-1 ml-2 font-bold uppercase">{errors.confirm}</p>}
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
