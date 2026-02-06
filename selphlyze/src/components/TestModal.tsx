'use client';

import React, { useState } from 'react';
import { X, ChevronDown, User, Calendar, Globe } from 'lucide-react';

interface TestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { age: string; gender: string; country: string }) => void;
}

const TestModal: React.FC<TestModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    country: ''
  });

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const ageRanges = [
    '13-17', '18-24', '25-34', '35-44', '45-54', '55-64', '65+'
  ];

  const genders = [
    'Male', 'Female', 'Non-binary', 'Prefer not to say'
  ];

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany',
    'France', 'Spain', 'Italy', 'Netherlands', 'Sweden', 'Norway',
    'Japan', 'South Korea', 'China', 'India', 'Brazil', 'Mexico',
    'Argentina', 'South Africa', 'Nigeria', 'Egypt', 'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.age && formData.gender && formData.country) {
      onSubmit(formData);
    }
  };

  const handleDropdownSelect = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setOpenDropdown(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Header */}
        <div className="gradient-bg p-6 rounded-t-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold text-white mb-2">Let&apos;s Get Started</h2>
          <p className="text-white/90">Tell us a bit about yourself to personalize your experience</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Age Dropdown */}
          <div className="relative">
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Calendar className="w-4 h-4 mr-2 text-primary" />
              Age Range
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'age' ? null : 'age')}
                className="w-full p-4 bg-gray-50 border-2 border-gray-200 rounded-lg text-left focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-200 flex items-center justify-between"
              >
                <span className={formData.age ? 'text-gray-900' : 'text-gray-400'}>
                  {formData.age || 'Select your age range'}
                </span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openDropdown === 'age' ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === 'age' && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                  {ageRanges.map((age) => (
                    <button
                      key={age}
                      type="button"
                      onClick={() => handleDropdownSelect('age', age)}
                      className="w-full p-3 text-left hover:bg-primary hover:text-white transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {age}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Gender Dropdown */}
          <div className="relative">
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 mr-2 text-primary" />
              Gender
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'gender' ? null : 'gender')}
                className="w-full p-4 bg-gray-50 border-2 border-gray-200 rounded-lg text-left focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-200 flex items-center justify-between"
              >
                <span className={formData.gender ? 'text-gray-900' : 'text-gray-400'}>
                  {formData.gender || 'Select your gender'}
                </span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openDropdown === 'gender' ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === 'gender' && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {genders.map((gender) => (
                    <button
                      key={gender}
                      type="button"
                      onClick={() => handleDropdownSelect('gender', gender)}
                      className="w-full p-3 text-left hover:bg-primary hover:text-white transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {gender}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Country Dropdown */}
          <div className="relative">
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Globe className="w-4 h-4 mr-2 text-primary" />
              Country
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'country' ? null : 'country')}
                className="w-full p-4 bg-gray-50 border-2 border-gray-200 rounded-lg text-left focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-200 flex items-center justify-between"
              >
                <span className={formData.country ? 'text-gray-900' : 'text-gray-400'}>
                  {formData.country || 'Select your country'}
                </span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openDropdown === 'country' ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === 'country' && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                  {countries.map((country) => (
                    <button
                      key={country}
                      type="button"
                      onClick={() => handleDropdownSelect('country', country)}
                      className="w-full p-3 text-left hover:bg-primary hover:text-white transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {country}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!formData.age || !formData.gender || !formData.country}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed mt-8"
          >
            Continue to Test
          </button>
        </form>
      </div>
    </div>
  );
};

export default TestModal;