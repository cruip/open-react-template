'use client'
import React, { useState } from 'react';
import './style.css';
import PreferencesTab from './Prefs.Client';
import whitelogo from '@/public/images/i.png';
import Image from 'next/image';

const UserProfile = ({ userEmail }) => {

  // State to manage active tab
  const [activeTab, setActiveTab] = useState('Preferences');

  return (
    <div className="flex profileMain">
      {/* Sidebar navigation */}
      <div className="sidebar w-64 h-screen bg-purple-900 text-white">
        <div className="flex items-left justify-start mt-4">
          {/* Icon next to the title */}
          <Image src={whitelogo} alt="TunedIn Icon" className="h-12 w-12 mr-2" />
          <div className="text-3xl font-bold">TunedIn</div>
        </div>
        <div className="white-bar-divider"></div>
        <nav className="mt-2">
          <button className={`w-full text-left px-6 py-2 hover:bg-purple-600 ${activeTab === 'Preferences' ? 'bg-purple-700' : ''}`} onClick={() => setActiveTab('Preferences')}>
            Preferences
          </button>
          <button className={`w-full text-left px-6 py-2 hover:bg-purple-600 ${activeTab === 'Your Media' ? 'bg-purple-700' : ''}`} onClick={() => setActiveTab('Your Media')}>
            Your Media
          </button>
          <button className={`w-full text-left px-6 py-2 hover:bg-purple-600 ${activeTab === 'Friends' ? 'bg-purple-700' : ''}`} onClick={() => setActiveTab('Friends')}>
            Friends
          </button>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-10" style={{ backgroundColor: 'white' }}>
        {activeTab === 'Preferences' && <PreferencesTab userEmail={userEmail} />}
        {activeTab === 'Your Media' && <div>Your Media content</div>}
        {activeTab === 'Friends' && <div>Friends content</div>}
      </div>
    </div>
  );
};

export default UserProfile;
