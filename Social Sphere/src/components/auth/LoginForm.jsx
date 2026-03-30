import React, { useState, useEffect } from 'react';
import { X, Lock, User, ArrowRight, CheckCircle2, Fingerprint, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSocial } from '../../context/SocialContext';

const LoginForm = ({ isOpen, onClose, type }) => {
  const navigate = useNavigate();
  const { login, setUser, registeredUsers, setRegisteredUsers } = useSocial();
  
  const [modalType, setModalType] = useState(type);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const initialFormState = { id: '', username: '', password: '' };
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (isOpen) {
      setModalType(type);
      setIsSuccess(false);
    } else {
      setFormData(initialFormState);
      setIsProcessing(false);
    }
  }, [isOpen, type]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAuth = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    setTimeout(() => {
      if (modalType === 'signup') {
        const userExists = registeredUsers.find(u => u.id === formData.id);
        if (userExists) {
          alert("Note: ID already exists.");
          setModalType('login');
          setIsProcessing(false);
          return;
        }
        const newUser = { id: formData.id, username: formData.username, password: formData.password };
        setRegisteredUsers([...registeredUsers, newUser]);
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setModalType('login');
          setIsProcessing(false);
        }, 1500);
      } else {
        const validUser = registeredUsers.find(u => u.id === formData.id && u.password === formData.password);
        if (validUser) {
          setUser(validUser);
          login();
          onClose();
          navigate('/dashboard/home');
        } else {
          alert("Invalid Credentials.");
          setIsProcessing(false);
        }
      }
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-300" onClick={onClose}></div>

      {/* FIX 1: Dynamic Max-Height based on modalType to remove empty space */}
      <div 
        className={`relative w-full max-w-[440px] transition-all duration-500 rounded-[40px] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 font-sans border border-blue-500/50 bg-black/40 backdrop-blur-xl
        ${modalType === 'login' ? 'h-auto max-h-[500px]' : 'h-[90vh] max-h-[650px]'}`}
      >
        
        {/* Header Section */}
        <div className="flex-shrink-0 px-10 pt-10 pb-2">
          <button onClick={onClose} className="absolute top-8 right-8 text-white/30 hover:text-white transition-all">
            <X size={20} />
          </button>
          <div className="inline-flex p-2.5 rounded-xl bg-blue-500/10 text-blue-400 mb-4 border border-blue-500/20">
            <Fingerprint size={22} />
          </div>
          <h2 className="text-[24px] font-[600] text-white tracking-tight">
            {modalType === 'login' ? 'System Access' : 'Create Identity'}
          </h2>
          <p className="text-[11px] text-white/50 font-medium mt-1 uppercase tracking-[1.5px]">Secure Authentication Portal</p>
        </div>

        {/* FIX 2: Custom Blue Transparent Scroller Logic */}
        <div className="flex-1 overflow-y-auto px-10 py-4 custom-blue-scroll">
          <style>{`
            .custom-blue-scroll::-webkit-scrollbar {
              width: 5px;
            }
            .custom-blue-scroll::-webkit-scrollbar-track {
              background: rgba(59, 130, 246, 0.05);
              border-radius: 10px;
            }
            .custom-blue-scroll::-webkit-scrollbar-thumb {
              background: rgba(59, 130, 246, 0.4);
              border-radius: 10px;
            }
            .custom-blue-scroll::-webkit-scrollbar-thumb:hover {
              background: rgba(59, 130, 246, 0.6);
            }
          `}</style>

          {isSuccess ? (
            <div className="py-10 text-center animate-in fade-in zoom-in">
              <CheckCircle2 size={40} className="text-emerald-400 mx-auto mb-4" />
              <h3 className="text-[20px] font-bold text-white">Identity Verified</h3>
              <p className="text-white/60 text-sm mt-1">Switching to login mode...</p>
            </div>
          ) : (
            <form id="auth-form" className="space-y-5" onSubmit={handleAuth}>
              {/* ID FIELD */}
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-white/80 uppercase tracking-wider ml-1">Identity ID</label>
                <div className="relative group">
                  <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                  <input required name="id" value={formData.id} onChange={handleChange} type="text" placeholder="e.g. manas_01" 
                    className="w-full pl-11 pr-5 py-3 bg-white/10 border border-white/10 rounded-2xl outline-none focus:border-blue-500/50 focus:bg-white/20 transition-all text-[14px] text-white placeholder:text-white/20" />
                </div>
              </div>

              {/* USERNAME FIELD (Signup Only) */}
              {modalType === 'signup' && (
                <div className="space-y-1.5 animate-in slide-in-from-top-2 duration-300">
                  <label className="text-[12px] font-bold text-white/80 uppercase tracking-wider ml-1">Username</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                    <input required name="username" value={formData.username} onChange={handleChange} type="text" placeholder="Display Name" 
                      className="w-full pl-11 pr-5 py-3 bg-white/10 border border-white/10 rounded-2xl outline-none focus:border-blue-500/50 focus:bg-white/20 transition-all text-[14px] text-white placeholder:text-white/20" />
                  </div>
                </div>
              )}

              {/* PASSWORD FIELD */}
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-white/80 uppercase tracking-wider ml-1">Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                  <input required name="password" value={formData.password} onChange={handleChange} type="password" placeholder="••••••••" 
                    className="w-full pl-11 pr-5 py-3 bg-white/10 border border-white/10 rounded-2xl outline-none focus:border-blue-500/50 focus:bg-white/20 transition-all text-[14px] text-white placeholder:text-white/20" />
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Footer with Small Action Button */}
        <div className="flex-shrink-0 px-10 pb-10 pt-4 bg-white/5 border-t border-white/5">
          {!isSuccess && (
            <div className="flex flex-col items-center gap-5">
              <button 
                form="auth-form" type="submit" disabled={isProcessing}
                className="w-[180px] bg-blue-600 text-white py-3 rounded-2xl font-bold text-[12px] uppercase tracking-[1.5px] shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
              >
                {isProcessing ? 'Validating...' : modalType === 'login' ? 'Access' : 'Register'}
                {!isProcessing && <ArrowRight size={16} />}
              </button>
              
              <p className="text-[14px] text-white/70">
                {modalType === 'login' ? "Need account?" : "Have account?"}
                <button onClick={() => setModalType(modalType === 'login' ? 'signup' : 'login')} className="text-blue-400 ml-1.5 font-bold hover:underline">
                  {modalType === 'login' ? 'Sign Up' : 'Log In'}
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;