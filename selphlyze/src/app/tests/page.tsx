'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import TestModal from '@/components/TestModal';
import { Brain, ArrowRight, CheckCircle, Target, Sparkles } from 'lucide-react';

const TestsPage = () => {
  const [showModal, setShowModal] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [userDemographics, setUserDemographics] = useState<{
    age: string;
    gender: string;
    country: string;
  } | null>(null);
  const router = useRouter();

  const handleModalSubmit = (data: { age: string; gender: string; country: string }) => {
    setUserDemographics(data);
    setShowModal(false);
    setIsReady(true);
    
    // Store demographics in localStorage for the test session
    localStorage.setItem('userDemographics', JSON.stringify(data));
  };

  const handleStartTest = () => {
    router.push('/test/start');
  };

  const features = [
    {
      icon: Brain,
      title: 'Psychological Analysis',
      description: 'Deep insights into your personality patterns'
    },
    {
      icon: Target,
      title: 'Personalized Results',
      description: 'Tailored feedback based on your responses'
    },
    {
      icon: CheckCircle,
      title: 'Scientific Approach',
      description: 'Research-backed psychological assessments'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <TestModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleModalSubmit}
      />

      {isReady && (
        <main className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Ready Section */}
            <div className="mb-16 animate-fade-in">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-bg mb-8">
                <Sparkles className="w-10 h-10 text-white animate-pulse-subtle" />
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Ready</span>
                <br />
                <span className="text-gray-900">to Begin?</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
                Your personalized psychological assessment is about to start. 
                Take your time with each question and answer honestly for the most accurate insights.
              </p>
              
              {/* User Info Display */}
              {userDemographics && (
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-12 max-w-md mx-auto border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Information</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Age:</span>
                      <span className="font-medium text-gray-900">{userDemographics.age}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Gender:</span>
                      <span className="font-medium text-gray-900">{userDemographics.gender}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Country:</span>
                      <span className="font-medium text-gray-900">{userDemographics.country}</span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Start Button */}
              <button
                onClick={handleStartTest}
                className="btn-primary text-xl px-10 py-5 inline-flex items-center space-x-3 group"
              >
                <span>Begin Assessment</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            {/* Features Section */}
            <div className="grid md:grid-cols-3 gap-8 mt-20">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="mt-16 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/10">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What to Expect</h3>
              <ul className="text-gray-600 space-y-2 max-w-2xl mx-auto">
                <li>• 15-20 carefully crafted questions</li>
                <li>• Each question has 5-8 situational response options</li>
                <li>• Takes approximately 8-12 minutes to complete</li>
                <li>• Immediate AI-powered analysis and results</li>
              </ul>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default TestsPage;