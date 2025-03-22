
import React, { useState } from 'react';
import ScrollLogo from './ScrollLogo';
import { Search, Apple } from 'lucide-react';

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
        <div className="w-6 h-6 flex items-center justify-center">
          {/* Custom Google icon since it's not available in lucide-react */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M23.04 12.2613C23.04 11.4459 22.9668 10.6618 22.8309 9.90906H12V14.3575H18.1891C17.9225 15.795 17.1123 17.0129 15.8943 17.8284V20.7138H19.6109C21.7855 18.7118 23.04 15.7636 23.04 12.2613Z" fill="#4285F4"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M11.9999 23.4998C15.1049 23.4998 17.7081 22.47 19.6108 20.7137L15.8942 17.8282C14.8644 18.5182 13.5472 18.9259 11.9999 18.9259C9.00467 18.9259 6.46945 16.903 5.56513 14.1848H1.72308V17.1644C3.61536 20.9228 7.50445 23.4998 11.9999 23.4998Z" fill="#34A853"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M5.56523 14.1851C5.33523 13.4951 5.20455 12.7581 5.20455 12.0001C5.20455 11.2422 5.33523 10.5051 5.56523 9.81512V6.83557H1.72318C0.944318 8.38807 0.5 10.1444 0.5 12.0001C0.5 13.8558 0.944318 15.6122 1.72318 17.1647L5.56523 14.1851Z" fill="#FBBC05"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M11.9999 5.07386C13.6883 5.07386 15.2042 5.65409 16.396 6.79364L19.6944 3.49523C17.7029 1.63955 15.0997 0.5 11.9999 0.5C7.50445 0.5 3.61536 3.07705 1.72308 6.83545L5.56513 9.815C6.46945 7.09682 9.00468 5.07386 11.9999 5.07386Z" fill="#EA4335"/>
          </svg>
        </div>
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
