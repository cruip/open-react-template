import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import { Brain, Target, Users, Heart, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Our Mission to Revolutionize Self-Discovery',
  description: 'Learn about Selphlyze&apos;s mission to make psychological insights accessible through AI-powered analysis. Discover how we&apos;re revolutionizing self-discovery and personal growth.',
};

const AboutPage = () => {
  const values = [
    {
      icon: Brain,
      title: 'Scientific Rigor',
      description: 'Our assessments are based on established psychological research and validated methodologies.'
    },
    {
      icon: Heart,
      title: 'Empowering Growth',
      description: 'We believe everyone deserves access to insights that help them understand and develop themselves.'
    },
    {
      icon: Users,
      title: 'Privacy First',
      description: 'Your personal data and results are protected with the highest security standards.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We combine cutting-edge AI technology with proven psychological principles.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Psychology Officer',
      bio: 'PhD in Clinical Psychology with 15 years of experience in personality assessment research.',
      image: '/team/sarah.jpg'
    },
    {
      name: 'Alex Rodriguez',
      role: 'Lead AI Engineer',
      bio: 'Former Google AI researcher specializing in natural language processing and machine learning.',
      image: '/team/alex.jpg'
    },
    {
      name: 'Dr. Michael Thompson',
      role: 'Research Director',
      bio: 'Licensed psychologist and researcher with expertise in psychometric testing and validation.',
      image: '/team/michael.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">About</span>
              <br />
              <span className="text-gray-900">Selphlyze</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              We&apos;re on a mission to democratize psychological insights and make self-discovery 
              accessible to everyone through the power of AI and scientific psychology.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Traditional psychological assessments have been limited by accessibility, cost, and complexity. 
                  At Selphlyze, we believe that understanding yourself shouldn&apos;t be a privilege—it should be a right.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  By combining evidence-based psychological research with advanced AI technology, we&apos;re creating 
                  personalized insights that help millions of people discover their unique strengths, understand 
                  their personality patterns, and unlock their potential for growth.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Our Goal</h3>
                    <p className="text-gray-600">To help 1 million people discover their true selves by 2025</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full gradient-bg flex items-center justify-center">
                    <Brain className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                These core principles guide everything we do at Selphlyze
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl gradient-bg flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A diverse group of psychologists, AI researchers, and technologists united by a shared vision
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-bg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Join Our Journey</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Be part of the revolution in self-discovery. Take your first step towards understanding your true self.
            </p>
            <button className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
              Start Your Discovery
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;