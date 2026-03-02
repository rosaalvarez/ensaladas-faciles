export interface Recipe {
  slug: string;
  name: string;
  description: string;
  time: number; // minutes
  servings: number;
  difficulty: 'Fácil' | 'Media' | 'Avanzada';
  image: string;
  tags: string[];
  free: boolean;
  ingredients: {
    name: string;
    amount: string;
    category: 'Verduras' | 'Frutas' | 'Proteínas' | 'Otros';
    variants?: Record<string, string>;
  }[];
  steps: string[];
}
