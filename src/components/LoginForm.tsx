
import React, { useState } from 'react';
import ScrollLogo from './ScrollLogo';
import { Google, Apple } from 'lucide-react';

const LoginForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'phone' | 'email'>('phone');

  return (
    <div className="w-full max-w-[370px] bg-white rounded-[20px] shadow-inset-subtle p-8 animate-fade-up">
      <div className="flex justify-center mb-1.5">
        <ScrollLogo />
      </div>
      
      <h1 className="text-2xl font-semibold text-center mb-4">Sign in to Scroll</h1>
      
      <div className="flex gap-1 mb-3">
        <div 
          className={`segmented-tab ${activeTab === 'phone' ? 'active' : ''}`}
          onClick={() => setActiveTab('phone')}
        >
          Phone
        </div>
        <div 
          className={`segmented-tab ${activeTab === 'email' ? 'active' : ''}`}
          onClick={() => setActiveTab('email')}
        >
          Email
        </div>
      </div>
      
      <div className="flex items-center gap-2 mb-3 rounded-lg border border-scroll-gray-300 bg-scroll-gray-100 bg-opacity-53 p-2">
        <div className="flex items-center gap-1">
          <div className="w-[27px] h-[25px] rounded-[5px] bg-[#F93] flex items-center justify-center">
            <span className="text-white font-bold text-xs">IN</span>
          </div>
          <span className="text-black text-sm font-semibold">+91</span>
        </div>
      </div>
      
      <div className="text-scroll-red text-xs mb-3">Forget account or password?</div>
      
      <button className="button-primary mb-2">Sign in</button>
      <button className="button-secondary mb-3">Sign up</button>
      
      <div className="auth-divider">
        <span className="text-scroll-gray-500 text-xs font-semibold">or use</span>
      </div>
      
      <button className="button-social bg-white mb-2 hover:bg-scroll-gray-100 active:bg-scroll-gray-200">
        <Google className="w-6 h-6" />
        <span className="text-[rgba(0,0,0,0.54)] text-[15px] font-medium">Continue with Google</span>
      </button>
      
      <button className="button-social bg-black text-white mb-6 hover:bg-black/90 active:bg-black/80">
        <Apple className="w-5 h-5 text-white" />
        <span className="text-white text-[15px] font-semibold">Continue with Apple</span>
      </button>
      
      <div className="text-xs text-center text-scroll-gray-500">
        By pressing Sign in, you agree to the
        <span className="text-black"> Terms of service </span>
        and
        <span className="text-black"> Privacy Policy</span>
      </div>
    </div>
  );
};

export default LoginForm;
