
import React from 'react';
import NavBar from '../components/NavBar';
import LoginForm from '../components/LoginForm';
import DownloadLinks from '../components/DownloadLinks';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-scroll-gradient">
      <NavBar />
      <div className="flex flex-1 justify-center items-center px-4 py-8">
        <LoginForm />
      </div>
      <DownloadLinks />
    </div>
  );
};

export default Index;
