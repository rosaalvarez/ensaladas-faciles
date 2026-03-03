const SUPABASE_URL = 'https://bvgnjwrbkfuirrgqezll.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2Z25qd3Jia2Z1aXJyZ3FlemxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0OTA2OTIsImV4cCI6MjA4NjA2NjY5Mn0.HfGDEG2MRbJyQcd3YYkp6knitY3VDqHZJ0TaIDNcGJk';

const headers = {
  'apikey': SUPABASE_ANON_KEY,
  'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
  'Content-Type': 'application/json',
};

export async function insertAccessCode(code: string, paymentId: string): Promise<boolean> {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/nutre_access_codes`, {
      method: 'POST',
      headers: { ...headers, 'Prefer': 'return=minimal' },
      body: JSON.stringify({ code, payment_id: paymentId, status: 'approved' }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function validateAccessCode(code: string): Promise<boolean> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/nutre_access_codes?code=eq.${encodeURIComponent(code)}&select=code&limit=1`,
      { headers }
    );
    if (!res.ok) return false;
    const data = await res.json();
    return data.length > 0;
  } catch {
    return false;
  }
}
