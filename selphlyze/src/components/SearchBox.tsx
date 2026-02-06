'use client';

import React, { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';

interface SearchBoxProps {
  onSearch?: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && onSearch) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative group">
        <div className="relative">
          {/* Search Icon */}
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors duration-200" />
          </div>
          
          {/* Input Field */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full pl-12 pr-12 py-4 text-lg bg-white border-2 border-gray-200 rounded-2xl shadow-lg focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-200 placeholder-gray-400"
          />
          
          {/* Sparkles Icon */}
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
            <Sparkles className="w-5 h-5 text-accent animate-pulse-subtle" />
          </div>
        </div>
        
        {/* Submit Button - Hidden but functional */}
        <button type="submit" className="sr-only">
          Search
        </button>
      </form>
      
      {/* Decorative Elements */}
      <div className="mt-6 flex justify-center space-x-2">
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" style={{ animationDelay: '0s' }} />
        <div className="w-2 h-2 bg-accent rounded-full animate-pulse-subtle" style={{ animationDelay: '0.5s' }} />
        <div className="w-2 h-2 bg-secondary rounded-full animate-pulse-subtle" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default SearchBox;