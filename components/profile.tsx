import React, { useState } from 'react';
import './style.css';
import PreferencesTab from './Prefs.Client';
import MediaTab from './Media.Client';

import whitelogo from '@/public/images/i.png';
import Image from 'next/image';
import toggleIcon from '@/public/images/toggle-icon.png'; // Path to your toggle icon

type ProfileTabProps = {
  userEmail: string;
};

const UserProfile: React.FC<ProfileTabProps> = ({ userEmail }) => {
  const [activeTab, setActiveTab] = useState('Preferences');
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="flex profileMain">
      {/* Sidebar navigation */}
      <div className={`sidebar w-64 h-screen bg-purple-900 text-white ${sidebarVisible ? '' : 'hidden'}`}>
        <div className="flex items-left justify-start mt-4">
          <Image src={whitelogo} alt="TunedIn Icon" className="h-12 w-12 mr-2" />
          <div className="text-3xl font-bold">TunedIn</div>
          <div className="sidebar-toggle-icon" onClick={toggleSidebar}>
            <Image src={toggleIcon} alt="Toggle Sidebar" className="h-6 w-6 ml-auto" />
          </div>
        </div>
        <div className="white-bar-divider"></div>
        <nav className="mt-2">
          <button className={`w-full text-left px-6 py-2 hover:bg-purple-600 ${activeTab === 'Preferences' ? 'bg-purple-700' : ''}`} onClick={() => setActiveTab('Preferences')}>
            Preferences
          </button>
          <button className={`w-full text-left px-6 py-2 hover:bg-purple-600 ${activeTab === 'Your Media' ? 'bg-purple-700' : ''}`} onClick={() => setActiveTab('Your Media')}>
            Your Media
          </button>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-10" style={{ backgroundColor: 'white' }}>
        {activeTab === 'Preferences' && <PreferencesTab userEmail={userEmail} />}
        {activeTab === 'Your Media' &&  <MediaTab userEmail={userEmail} />}
      </div>
    </div>
  );
};

export default UserProfile;
