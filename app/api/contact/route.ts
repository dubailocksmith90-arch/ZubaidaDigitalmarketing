import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  const data = await request.formData();
  const payload = {
    name: data.get('name')?.toString() ?? '',
    business: data.get('business')?.toString() ?? '',
    website: data.get('website')?.toString() ?? '',
    email: data.get('email')?.toString() ?? '',
    service: data.get('service')?.toString() ?? '',
    message: data.get('message')?.toString() ?? '',
  };

  return NextResponse.json({ success: true, message: 'This form endpoint is ready for future integration.', payload });
}
