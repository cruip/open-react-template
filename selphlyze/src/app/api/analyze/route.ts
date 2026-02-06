import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { answers, demographics, questionTimes } = await request.json();

    const prompt = `As a professional psychologist, analyze the following psychological assessment results:

Demographics:
- Age: ${demographics.age}
- Gender: ${demographics.gender}
- Country: ${demographics.country}

Test Responses (out of 10 questions with 6 options each):
${answers.map((answer: number, index: number) => 
  `Question ${index + 1}: Selected option ${answer + 1}`
).join('\n')}

Response Times (in milliseconds):
${questionTimes.map((time: number, index: number) => 
  `Question ${index + 1}: ${time}ms`
).join('\n')}

Please provide a comprehensive psychological analysis including:

1. **SelfCode**: Generate a unique 6-character alphanumeric code that represents this personality profile (e.g., "A7X9P2")

2. **Personality Summary**: A concise 2-3 sentence overview of the primary personality traits

3. **Core Strengths**: 3-4 key strengths based on the responses

4. **Personality Traits**: Detailed analysis of:
   - Decision-making style
   - Social preferences
   - Learning approach
   - Communication style
   - Stress management
   - Values and motivations

5. **Growth Areas**: 2-3 areas for potential development

6. **Career Insights**: Suitable career paths and work environments

7. **Relationship Dynamics**: How this person typically interacts in relationships

Format the response as a JSON object with these sections. Be insightful, accurate, and encouraging while maintaining professional psychological standards.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a professional psychologist providing personality analysis based on psychological assessment data. Provide accurate, insightful, and encouraging analysis while maintaining professional standards."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 2000,
    });

    const analysis = completion.choices[0]?.message?.content;

    if (!analysis) {
      throw new Error('Failed to generate analysis');
    }

    // Try to parse as JSON, fallback to structured text if needed
    let structuredAnalysis;
    try {
      structuredAnalysis = JSON.parse(analysis);
    } catch {
      // If JSON parsing fails, create a structured response
      structuredAnalysis = {
        selfCode: Math.random().toString(36).substring(2, 8).toUpperCase(),
        personalitySummary: "Your responses indicate a unique and complex personality profile with distinct patterns in decision-making and social interaction.",
        coreStrengths: [
          "Analytical thinking",
          "Adaptability",
          "Empathy",
          "Problem-solving"
        ],
        personalityTraits: {
          decisionMaking: "You approach decisions thoughtfully, considering multiple perspectives.",
          socialPreferences: "You value meaningful connections and authentic interactions.",
          learningApproach: "You prefer structured learning with practical applications.",
          communicationStyle: "You communicate with clarity and consideration for others.",
          stressManagement: "You handle stress by focusing on solutions and seeking support.",
          valuesAndMotivations: "You are motivated by personal growth and meaningful contribution."
        },
        growthAreas: [
          "Developing confidence in quick decision-making",
          "Expanding comfort zone in social situations",
          "Building resilience in high-pressure environments"
        ],
        careerInsights: "You would thrive in environments that value collaboration, creativity, and continuous learning.",
        relationshipDynamics: "You build deep, meaningful relationships based on trust and mutual understanding."
      };
    }

    return NextResponse.json({ analysis: structuredAnalysis });

  } catch (error) {
    console.error('Analysis error:', error);
    return NextResponse.json(
      { error: 'Failed to analyze results' },
      { status: 500 }
    );
  }
}