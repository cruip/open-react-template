import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const { event, sessionId, demographics, metadata } = await request.json();

    await prisma.analytics.create({
      data: {
        event,
        sessionId,
        demographics,
        metadata,
      },
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json(
      { error: 'Failed to log event' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const days = parseInt(url.searchParams.get('days') || '30');
    const event = url.searchParams.get('event');

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const whereClause: {
      timestamp: { gte: Date };
      event?: string;
    } = {
      timestamp: {
        gte: startDate,
      },
    };

    if (event) {
      whereClause.event = event;
    }

    const analytics = await prisma.analytics.findMany({
      where: whereClause,
      orderBy: {
        timestamp: 'desc',
      },
      take: 1000, // Limit results
    });

    // Aggregate data for summary
    const summary = {
      totalEvents: analytics.length,
      uniqueEvents: [...new Set(analytics.map(a => a.event))],
      demographics: {
        countries: analytics
          .filter(a => a.demographics && typeof a.demographics === 'object' && a.demographics !== null && 'country' in a.demographics)
          .reduce((acc: Record<string, number>, a) => {
            const demographics = a.demographics as Record<string, unknown>;
            const country = demographics.country as string;
            acc[country] = (acc[country] || 0) + 1;
            return acc;
          }, {}),
        ageRanges: analytics
          .filter(a => a.demographics && typeof a.demographics === 'object' && a.demographics !== null && 'age' in a.demographics)
          .reduce((acc: Record<string, number>, a) => {
            const demographics = a.demographics as Record<string, unknown>;
            const age = demographics.age as string;
            acc[age] = (acc[age] || 0) + 1;
            return acc;
          }, {}),
      },
    };

    return NextResponse.json({ analytics, summary });

  } catch (error) {
    console.error('Analytics fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}