
import { Clock, Users, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Recipes = () => {
  const recipes = [
    {
      id: 1,
      title: 'Honey Glazed Salmon',
      image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=600&q=80',
      description: 'Perfectly glazed salmon with our premium wildflower honey, soy sauce, and ginger.',
      difficulty: 'Easy',
      time: '25 mins',
      servings: 4,
      category: 'Main Course',
      ingredients: [
        '4 salmon fillets',
        '3 tbsp Beelicious honey',
        '2 tbsp soy sauce',
        '1 tbsp fresh ginger, minced',
        '2 cloves garlic, minced',
        '1 tbsp olive oil'
      ],
      instructions: [
        'Preheat oven to 400°F (200°C)',
        'Mix honey, soy sauce, ginger, and garlic in a bowl',
        'Heat olive oil in an oven-safe skillet',
        'Sear salmon fillets for 2 minutes on each side',
        'Brush with honey glaze and bake for 10-12 minutes',
        'Serve with your favorite vegetables'
      ]
    },
    {
      id: 2,
      title: 'Honey Lavender Cookies',
      image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=600&q=80',
      description: 'Delicate cookies infused with honey and dried lavender for a unique floral flavor.',
      difficulty: 'Medium',
      time: '45 mins',
      servings: 24,
      category: 'Dessert',
      ingredients: [
        '2 cups all-purpose flour',
        '1/2 cup Beelicious honey',
        '1/2 cup butter, softened',
        '1 egg',
        '1 tsp dried lavender',
        '1/2 tsp vanilla extract',
        '1/4 tsp salt'
      ],
      instructions: [
        'Cream butter and honey until light and fluffy',
        'Beat in egg and vanilla extract',
        'Mix flour, lavender, and salt in separate bowl',
        'Gradually add dry ingredients to wet ingredients',
        'Chill dough for 30 minutes',
        'Roll into balls and bake at 350°F for 12-15 minutes'
      ]
    },
    {
      id: 3,
      title: 'Golden Turmeric Latte',
      image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=600&q=80',
      description: 'A warming, anti-inflammatory drink perfect for cold evenings.',
      difficulty: 'Easy',
      time: '10 mins',
      servings: 2,
      category: 'Beverage',
      ingredients: [
        '2 cups coconut milk',
        '2 tbsp Beelicious honey',
        '1 tsp turmeric powder',
        '1/2 tsp ground ginger',
        '1/4 tsp cinnamon',
        'Pinch of black pepper',
        '1/4 tsp vanilla extract'
      ],
      instructions: [
        'Heat coconut milk in a saucepan over medium heat',
        'Whisk in turmeric, ginger, cinnamon, and pepper',
        'Simmer for 5 minutes, stirring occasionally',
        'Remove from heat and stir in honey and vanilla',
        'Strain if desired and serve warm',
        'Garnish with a sprinkle of cinnamon'
      ]
    },
    {
      id: 4,
      title: 'Honey Oat Breakfast Bowl',
      image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=600&q=80',
      description: 'Start your day with this nutritious and energizing breakfast bowl.',
      difficulty: 'Easy',
      time: '10 mins',
      servings: 1,
      category: 'Breakfast',
      ingredients: [
        '1/2 cup rolled oats',
        '1 cup almond milk',
        '2 tbsp Beelicious honey',
        '1 tbsp chia seeds',
        '1/2 banana, sliced',
        '2 tbsp mixed berries',
        '1 tbsp chopped nuts'
      ],
      instructions: [
        'Cook oats with almond milk until creamy',
        'Stir in 1 tablespoon of honey and chia seeds',
        'Transfer to a bowl',
        'Top with banana, berries, and nuts',
        'Drizzle remaining honey on top',
        'Enjoy immediately while warm'
      ]
    }
  ];

  const tips = [
    {
      title: 'Cooking with Honey',
      content: 'When baking, reduce liquid ingredients by 1/4 cup for every cup of honey used.'
    },
    {
      title: 'Temperature Matters',
      content: 'Never heat honey above 140°F to preserve its beneficial enzymes and nutrients.'
    },
    {
      title: 'Substitution Guide',
      content: 'Replace 1 cup sugar with 3/4 cup honey and reduce liquid by 1/4 cup.'
    },
    {
      title: 'Storage Tips',
      content: 'Store honey in a cool, dry place. Crystallization is natural and doesn\'t affect quality.'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'Hard': return 'text-red-400';
      default: return 'text-white';
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 honey-gradient bg-clip-text text-transparent">
            Honey Recipes
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover delicious ways to incorporate our premium honey into your cooking and baking. 
            From savory glazes to sweet treats, honey adds natural sweetness and complex flavors.
          </p>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {recipes.map((recipe, index) => (
              <Card key={recipe.id} className="luxury-card animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-0">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={recipe.image} 
                      alt={recipe.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gold-400 text-sm font-medium">{recipe.category}</span>
                      <span className={`text-sm font-medium ${getDifficultyColor(recipe.difficulty)}`}>
                        {recipe.difficulty}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-serif font-bold text-white mb-3">{recipe.title}</h3>
                    <p className="text-white/80 mb-4">{recipe.description}</p>
                    
                    <div className="flex items-center space-x-6 mb-6 text-white/70">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{recipe.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{recipe.servings} servings</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-gold-400 font-semibold mb-2">Ingredients:</h4>
                        <ul className="text-white/80 text-sm space-y-1">
                          {recipe.ingredients.slice(0, 3).map((ingredient, idx) => (
                            <li key={idx} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-2"></div>
                              {ingredient}
                            </li>
                          ))}
                          {recipe.ingredients.length > 3 && (
                            <li className="text-gold-400 text-xs">
                              +{recipe.ingredients.length - 3} more ingredients
                            </li>
                          )}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-gold-400 font-semibold mb-2">Instructions:</h4>
                        <ol className="text-white/80 text-sm space-y-1">
                          {recipe.instructions.slice(0, 2).map((instruction, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-gold-400 mr-2 font-medium">{idx + 1}.</span>
                              {instruction}
                            </li>
                          ))}
                          {recipe.instructions.length > 2 && (
                            <li className="text-gold-400 text-xs">
                              +{recipe.instructions.length - 2} more steps
                            </li>
                          )}
                        </ol>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cooking Tips */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6 honey-gradient bg-clip-text text-transparent">
              Cooking Tips & Tricks
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Master the art of cooking with honey with these expert tips
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <Card key={index} className="luxury-card">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-honey-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-semibold text-gold-400 mb-3">{tip.title}</h3>
                  <p className="text-white/80 text-sm">{tip.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-6 honey-gradient bg-clip-text text-transparent">
              Recipe Categories
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {['Breakfast', 'Main Course', 'Dessert', 'Beverage'].map((category, index) => (
              <Card key={index} className="luxury-card cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-white group-hover:text-gold-400 transition-colors">
                    {category}
                  </h3>
                  <p className="text-white/60 mt-2">
                    {recipes.filter(r => r.category === category).length} recipes
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recipes;
