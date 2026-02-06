import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const { 
      selfCode, 
      demographics, 
      answers, 
      questionTimes, 
      totalTime, 
      analysis 
    } = await request.json();

    // Get client IP and user agent for analytics (anonymized)
    const forwarded = request.headers.get('x-forwarded-for');
    const ipAddress = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    // Save test session to database
    const testSession = await prisma.testSession.create({
      data: {
        selfCode,
        demographics,
        answers,
        questionTimes,
        totalTime,
        analysis,
        ipAddress: ipAddress.substring(0, 12) + '***', // Partially anonymize IP
        userAgent,
      },
    });

    // Log analytics event
    await prisma.analytics.create({
      data: {
        event: 'test_completed',
        sessionId: testSession.id,
        demographics: {
          age: demographics.age,
          gender: demographics.gender,
          country: demographics.country,
        },
        metadata: {
          totalTime,
          questionsAnswered: answers.length,
        },
      },
    });

    return NextResponse.json({ 
      success: true, 
      sessionId: testSession.id 
    });

  } catch (error) {
    console.error('Error saving results:', error);
    return NextResponse.json(
      { error: 'Failed to save results' },
      { status: 500 }
    );
  }
}