import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Lock, Eye, EyeOff, ArrowLeft, LogIn } from 'lucide-react';
import logo from "../assets/charwe.png";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.email) newErrors.email = "This field is required";
    if (!formData.password) newErrors.password = "This field is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      navigate('/vacancies');
    }
  };

  return (
    <div className="fixed inset-0 bg-[#0a0a0b] flex flex-col items-center justify-center p-6 overflow-hidden touch-none select-none">
      <div className="w-full max-w-md mb-4 px-2">
        <button onClick={() => navigate(-1)} className="p-2 active:scale-90 transition-transform">
          <ArrowLeft size={24} className="text-orange-600" />
        </button>
      </div>

      <div className="bg-[#121214] w-full max-w-md rounded-2xl shadow-2xl p-8 flex flex-col items-center border border-white/5">
        <img src={logo} alt="Logo" className="h-16 w-auto mb-4 rounded-lg"/>
        <h2 className="text-2xl font-bold text-white">Login</h2>
        <p className="text-slate-400 text-sm mb-8">Provide your email and password to login</p>

        <form className="w-full space-y-4" noValidate autoComplete="off" onSubmit={handleLogin}>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input type="email" name="user_login_email" autoComplete="none" placeholder="youremail@gmail.com" 
             value={formData.email}  onChange={(e) => setFormData({...formData, email: e.target.value})} 
             className={`w-full pl-12 pr-4 py-3.5 bg-[#1a1a1c] border ${errors.email ? 'border-red-600' : 'border-white/10'} rounded-xl text-white outline-none focus:ring-1 focus:ring-orange-600`} />
            {errors.email && <p className="text-red-500 text-[10px] mt-1 ml-2 font-bold uppercase">{errors.email}</p>}
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input type={showPassword ? "text" : "password"}  name="user_login_password" autoComplete="new-password" placeholder="********"  value={formData.password}
                   onChange={(e) => setFormData({...formData, password: e.target.value})}
                   className={`w-full pl-12 pr-12 py-3.5 bg-[#1a1a1c] border ${errors.password ? 'border-red-600' : 'border-white/10'} rounded-xl text-white outline-none focus:ring-1 focus:ring-orange-600`}
                />

                
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            {errors.password && <p className="text-red-500 text-[10px] mt-1 ml-2 font-bold uppercase">{errors.password}</p>}
          </div>

          <div className="text-right">
            <Link to="/forgot-password" size={18} className="text-xs font-bold text-orange-600 uppercase">Forgot password?</Link>
          </div>

          <button className="w-full bg-[#3b5d8f] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 mt-4 active:scale-95 transition-all">
            <LogIn size={20} /> Login
          </button>
        </form>

        <p className="mt-8 text-sm text-slate-400">
          Don't Have an Account? <Link to="/signup" className="text-orange-600 font-bold ml-1">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
