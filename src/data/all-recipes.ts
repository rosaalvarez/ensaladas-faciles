import { Recipe } from './types';
import { megaRecipes } from './recipes-mega';
import { megaRecipesPart2 } from './recipes-part2';
import { pdfRecipes } from './pdf-recipes';

// Combine all sources, de-duplicate by slug, set free flags
const combined = [...megaRecipes, ...megaRecipesPart2, ...pdfRecipes];
const seen = new Set<string>();
const unique: Recipe[] = [];

for (const r of combined) {
  if (!seen.has(r.slug)) {
    seen.add(r.slug);
    unique.push(r);
  }
}

// First 8 are free, rest are paid
export const allRecipes: Recipe[] = unique.map((r, i) => ({
  ...r,
  free: i < 8,
}));
