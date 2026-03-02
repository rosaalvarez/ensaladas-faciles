import { recipes } from '@/data/recipes';
import RecipeDetail from './RecipeDetail';

export function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

export default function RecipeDetailPage() {
  return <RecipeDetail />;
}
