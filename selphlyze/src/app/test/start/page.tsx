'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { ArrowLeft, ArrowRight, Clock, CheckCircle } from 'lucide-react';

interface TestQuestion {
  id: number;
  question: string;
  options: string[];
}

const TestStartPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [startTime] = useState<number>(Date.now());
  const [questionTimes, setQuestionTimes] = useState<number[]>([]);
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now());
  const router = useRouter();

  const questions: TestQuestion[] = [
    {
      id: 1,
      question: "When facing a challenging decision at work, you typically:",
      options: [
        "Analyze all available data and create a detailed plan",
        "Trust your instincts and make a quick decision",
        "Seek advice from colleagues and mentors",
        "Consider how the decision affects everyone involved",
        "Look for creative alternatives to traditional approaches",
        "Focus on the most practical and efficient solution"
      ]
    },
    {
      id: 2,
      question: "In social situations, you find yourself:",
      options: [
        "Naturally gravitating toward small, intimate conversations",
        "Energized by meeting new people and large gatherings",
        "Observing others before joining conversations",
        "Taking the initiative to introduce people to each other",
        "Preferring meaningful discussions over small talk",
        "Adapting your communication style to different personalities"
      ]
    },
    {
      id: 3,
      question: "When learning something new, you prefer to:",
      options: [
        "Read comprehensive guides and documentation first",
        "Jump in and learn through hands-on experimentation",
        "Watch others demonstrate before trying yourself",
        "Break down the learning into structured, sequential steps",
        "Connect new information to concepts you already understand",
        "Collaborate with others to learn together"
      ]
    },
    {
      id: 4,
      question: "Your ideal weekend would involve:",
      options: [
        "Pursuing a personal hobby or creative project",
        "Exploring new places or trying new experiences",
        "Spending quality time with close friends or family",
        "Organizing and planning for the week ahead",
        "Reading, learning, or engaging in intellectual activities",
        "Participating in group activities or community events"
      ]
    },
    {
      id: 5,
      question: "When working on a team project, you naturally:",
      options: [
        "Take on the role of coordinator and ensure deadlines are met",
        "Generate innovative ideas and creative solutions",
        "Focus on the details and quality of the final output",
        "Facilitate communication and resolve conflicts",
        "Research thoroughly and provide factual insights",
        "Support others and ensure everyone's voice is heard"
      ]
    },
    {
      id: 6,
      question: "In stressful situations, you tend to:",
      options: [
        "Stay calm and methodically work through the problem",
        "Take action immediately to address the situation",
        "Step back and reflect on the bigger picture",
        "Seek support and guidance from others",
        "Focus on what you can control and let go of what you can't",
        "Use humor or positivity to lighten the mood"
      ]
    },
    {
      id: 7,
      question: "Your communication style is best described as:",
      options: [
        "Direct and to the point",
        "Enthusiastic and expressive",
        "Thoughtful and carefully considered",
        "Empathetic and supportive",
        "Logical and evidence-based",
        "Diplomatic and collaborative"
      ]
    },
    {
      id: 8,
      question: "When making personal decisions, you:",
      options: [
        "Weigh the pros and cons systematically",
        "Follow your heart and emotions",
        "Consider long-term consequences carefully",
        "Think about how it impacts your relationships",
        "Seek multiple perspectives before deciding",
        "Choose the option that aligns with your values"
      ]
    },
    {
      id: 9,
      question: "You feel most fulfilled when:",
      options: [
        "Achieving specific goals and seeing measurable results",
        "Helping others grow and succeed",
        "Creating something original and meaningful",
        "Solving complex problems or puzzles",
        "Building strong relationships and connections",
        "Contributing to something larger than yourself"
      ]
    },
    {
      id: 10,
      question: "Your approach to planning is:",
      options: [
        "Detailed schedules with specific timelines",
        "Flexible frameworks that allow for spontaneity",
        "General direction with room for adjustments",
        "Collaborative planning involving others' input",
        "Contingency planning for multiple scenarios",
        "Minimal planning, preferring to adapt as you go"
      ]
    }
  ];

  useEffect(() => {
    setQuestionStartTime(Date.now());
  }, [currentQuestion]);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      // Record time spent on this question
      const timeSpent = Date.now() - questionStartTime;
      setQuestionTimes(prev => [...prev, timeSpent]);
      
      // Store answer
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedOption;
      setAnswers(newAnswers);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        // Test completed, navigate to results
        completeTest(newAnswers, [...questionTimes, timeSpent]);
      }
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1] ?? null);
    }
  };

  const completeTest = (finalAnswers: number[], finalTimes: number[]) => {
    const testData = {
      answers: finalAnswers,
      questionTimes: finalTimes,
      totalTime: Date.now() - startTime,
      demographics: JSON.parse(localStorage.getItem('userDemographics') || '{}'),
      completedAt: new Date().toISOString()
    };

    // Store test data
    localStorage.setItem('testData', JSON.stringify(testData));
    
    // Navigate to results
    router.push('/test/results');
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium text-gray-600">
                {Math.round(progressPercentage)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="gradient-bg h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-relaxed">
                {questions[currentQuestion].question}
              </h2>
              <p className="text-gray-600">
                Choose the option that best describes how you would respond:
              </p>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                    selectedOption === index
                      ? 'border-primary bg-primary/5 text-primary'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedOption === index
                        ? 'border-primary bg-primary'
                        : 'border-gray-300'
                    }`}>
                      {selectedOption === index && (
                        <CheckCircle className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <span className="flex-1 font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className="flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>

            <div className="flex items-center space-x-2 text-gray-500">
              <Clock className="w-5 h-5" />
              <span className="text-sm">Take your time</span>
            </div>

            <button
              onClick={handleNext}
              disabled={selectedOption === null}
              className="flex items-center space-x-2 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{currentQuestion === questions.length - 1 ? 'Complete Test' : 'Next'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TestStartPage;