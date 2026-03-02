'use client';

export function getCountry(): string {
  if (typeof window === 'undefined') return 'CO';
  return localStorage.getItem('nutre-country') || 'CO';
}

export function setCountry(code: string) {
  localStorage.setItem('nutre-country', code);
}

export interface ShoppingItem {
  name: string;
  amount: string;
  category: string;
  checked: boolean;
}

export function getShoppingList(): ShoppingItem[] {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem('nutre-shopping');
  return data ? JSON.parse(data) : [];
}

export function setShoppingList(items: ShoppingItem[]) {
  localStorage.setItem('nutre-shopping', JSON.stringify(items));
}

export function addToShoppingList(items: Omit<ShoppingItem, 'checked'>[]) {
  const current = getShoppingList();
  const newItems = items
    .filter(item => !current.some(c => c.name === item.name))
    .map(item => ({ ...item, checked: false }));
  setShoppingList([...current, ...newItems]);
}

export function clearShoppingList() {
  localStorage.removeItem('nutre-shopping');
}

export function getIngredientName(name: string, variants: Record<string, string> | undefined, countryCode: string): string {
  if (variants && variants[countryCode]) return variants[countryCode];
  return name;
}
