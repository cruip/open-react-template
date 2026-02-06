import React from 'react';
import Header from '@/components/Header';
import SearchBox from '@/components/SearchBox';
import { Brain, Users, TrendingUp, Zap } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced psychological insights using cutting-edge AI technology'
    },
    {
      icon: Users,
      title: 'Personal Growth',
      description: 'Discover your unique strengths and personality traits'
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven',
      description: 'Based on scientific research and behavioral psychology'
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Get your personalized SelfCode in minutes'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">Discover</span>
                <br />
                <span className="text-gray-900">Your True Self</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Unlock the mysteries of your mind with AI-powered psychological analysis. 
                Get personalized insights that help you understand yourself better.
              </p>
            </div>
            
            {/* Search Box */}
            <div className="mb-16">
              <SearchBox />
            </div>
            
            {/* CTA Button */}
            <div className="mb-20">
              <button className="btn-primary text-lg px-8 py-4 animate-fade-in">
                Start Your Journey
              </button>
            </div>
          </div>
          
          {/* Decorative Background Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
          <div className="absolute top-40 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-lg" />
        </section>
        
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose <span className="gradient-text">Selphlyze</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience the future of self-discovery with our innovative approach to psychological analysis
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <IconComponent className="w-8 h-8 text-white" />
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
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Explore Your Mind?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of people who have discovered their true potential through Selphlyze
            </p>
            <button className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
              Take Your First Test
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
