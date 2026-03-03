const STORAGE_KEY = 'nutre-premium-code';

export function getPremiumCode(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(STORAGE_KEY);
}

export function setPremiumCode(code: string): void {
  localStorage.setItem(STORAGE_KEY, code);
  window.dispatchEvent(new CustomEvent('nutre-premium-change'));
}

export function isPremium(): boolean {
  return !!getPremiumCode();
}

export function generateCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return `NUTRE-${result}`;
}

export const PAYMENT_URL = 'https://www.mercadopago.com.co/checkout/v1/redirect?pref_id=57242186-e84ed0a8-c17f-47ed-b6df-323c439e9481';
