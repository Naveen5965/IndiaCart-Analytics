import { NextRequest, NextResponse } from 'next/server';
import { allSalesData, getFilteredSalesData } from '@/lib/mockData';

/**
 * GET /api/sales
 * Query parameters:
 * - year: number (optional) - Filter by specific year
 * - threshold: number (optional) - Filter by minimum sales threshold
 * 
 * Returns sales data based on filters or all data if no filters provided
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const year = searchParams.get('year');
  const threshold = searchParams.get('threshold');

  try {
    // If year and threshold are provided, return filtered data
    if (year && threshold) {
      const yearNum = parseInt(year);
      const thresholdNum = parseInt(threshold);

      if (isNaN(yearNum) || isNaN(thresholdNum)) {
        return NextResponse.json(
          { error: 'Invalid year or threshold parameter' },
          { status: 400 }
        );
      }

      const filteredData = getFilteredSalesData(yearNum, thresholdNum);

      if (!filteredData) {
        return NextResponse.json(
          { error: 'No data found for the specified year' },
          { status: 404 }
        );
      }

      return NextResponse.json(filteredData);
    }

    // If only year is provided
    if (year) {
      const yearNum = parseInt(year);

      if (isNaN(yearNum)) {
        return NextResponse.json(
          { error: 'Invalid year parameter' },
          { status: 400 }
        );
      }

      const yearData = allSalesData.find(data => data.year === yearNum);

      if (!yearData) {
        return NextResponse.json(
          { error: 'No data found for the specified year' },
          { status: 404 }
        );
      }

      return NextResponse.json(yearData);
    }

    // Return all data if no filters
    return NextResponse.json({
      years: [2022, 2023, 2024],
      data: allSalesData,
    });
  } catch (error) {
    console.error('Error fetching sales data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
