// app/api/graphql/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  console.log('Received POST request to /api/graphql', process.env.API_KEY);
  console.log('API_KEY:', process.env.API_KEY); // Debug
  try {
    const body = await request.json();
    const response = await fetch(process.env.GRAPHQL_URI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.API_KEY,
        'x-api-access-email': process.env.API_ACCESS_EMAIL,
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`Backend responded with status ${response.status}`);
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('GraphQL Proxy Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data from GraphQL API', details: error.message },
      { status: 500 }
    );
  }
}