import { query } from '@/lib/db';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    // Insert into NeonDB
    const result = await query(
      'INSERT INTO contacts(name, email, message, created_at) VALUES($1, $2, $3, NOW()) RETURNING id',
      [name, email, message]
    );

    return new Response(JSON.stringify({ success: true, id: result.rows[0].id }), { status: 201 });
  } catch (error) {
    console.error('Database error:', error);
    return new Response(JSON.stringify({ error: 'Failed to submit contact form' }), { status: 500 });
  }
}
