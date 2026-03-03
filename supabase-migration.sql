-- Run this in Supabase Dashboard > SQL Editor
-- Creates the access codes table for premium unlock flow

CREATE TABLE IF NOT EXISTS nutre_access_codes (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  code text UNIQUE NOT NULL,
  payment_id text,
  status text DEFAULT 'approved',
  email text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE nutre_access_codes ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to SELECT (for code validation)
CREATE POLICY "Allow anon select" ON nutre_access_codes
  FOR SELECT TO anon USING (true);

-- Allow anonymous users to INSERT (for code generation after payment)
CREATE POLICY "Allow anon insert" ON nutre_access_codes
  FOR INSERT TO anon WITH CHECK (true);
