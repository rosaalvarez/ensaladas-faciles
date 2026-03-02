export type { Recipe } from './types';
import { Recipe } from './types';
import { allRecipes } from './all-recipes';

export const recipes: Recipe[] = allRecipes;

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find(r => r.slug === slug);
}
