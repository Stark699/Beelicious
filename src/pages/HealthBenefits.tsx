
import { Heart, Shield, Zap, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HealthBenefits = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Heart Health',
      description: 'Rich in antioxidants that may help reduce the risk of heart disease and support cardiovascular health.',
      details: [
        'Contains flavonoids that support heart function',
        'May help reduce blood pressure',
        'Supports healthy cholesterol levels'
      ]
    },
    {
      icon: Shield,
      title: 'Immune Support',
      description: 'Natural antibacterial and antiviral properties help strengthen your immune system.',
      details: [
        'Contains natural enzymes and antibacterial compounds',
        'Rich in vitamins and minerals',
        'Supports body\'s natural defense mechanisms'
      ]
    },
    {
      icon: Zap,
      title: 'Natural Energy',
      description: 'Provides sustained energy without the crash associated with processed sugars.',
      details: [
        'Natural fructose and glucose for quick energy',
        'Sustained energy release',
        'Better than refined sugar alternatives'
      ]
    },
    {
      icon: Leaf,
      title: 'Digestive Health',
      description: 'Contains prebiotics and enzymes that support healthy digestion and gut health.',
      details: [
        'Natural enzymes aid digestion',
        'Prebiotic properties support gut bacteria',
        'May help soothe digestive discomfort'
      ]
    }
  ];

  const comparison = [
    { aspect: 'Processing', honey: 'Minimal to none', sugar: 'Highly processed' },
    { aspect: 'Nutrients', honey: 'Vitamins, minerals, antioxidants', sugar: 'Empty calories' },
    { aspect: 'Glycemic Index', honey: 'Lower (varies by type)', sugar: 'Higher' },
    { aspect: 'Taste', honey: 'Complex, floral notes', sugar: 'Simple sweetness' },
    { aspect: 'Health Benefits', honey: 'Multiple proven benefits', sugar: 'None' }
  ];

  const nutritionalFacts = [
    { nutrient: 'Antioxidants', benefit: 'Fight free radicals and oxidative stress' },
    { nutrient: 'Enzymes', benefit: 'Support digestion and nutrient absorption' },
    { nutrient: 'Amino Acids', benefit: 'Building blocks for proteins' },
    { nutrient: 'Vitamins', benefit: 'B-complex vitamins and vitamin C' },
    { nutrient: 'Minerals', benefit: 'Potassium, calcium, iron, and zinc' }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 honey-gradient bg-clip-text text-transparent">
            Health Benefits of Honey
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover the remarkable health benefits of pure, natural honey and why it's been treasured 
            as both food and medicine for thousands of years.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="luxury-card">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-honey-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-8 h-8 text-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gold-400 mb-3">{benefit.title}</h3>
                      <p className="text-white/80 mb-4 leading-relaxed">{benefit.description}</p>
                      <ul className="space-y-2">
                        {benefit.details.map((detail, idx) => (
                          <li key={idx} className="text-white/70 flex items-center">
                            <div className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-3"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Honey vs Sugar Comparison */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6 honey-gradient bg-clip-text text-transparent">
              Honey vs. Refined Sugar
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              See why natural honey is a superior choice compared to processed sugar
            </p>
          </div>

          <Card className="luxury-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gold-400/20">
                      <th className="text-left py-4 px-6 text-gold-400 font-semibold">Aspect</th>
                      <th className="text-left py-4 px-6 text-gold-400 font-semibold">Natural Honey</th>
                      <th className="text-left py-4 px-6 text-gold-400 font-semibold">Refined Sugar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, index) => (
                      <tr key={index} className="border-b border-gold-400/10">
                        <td className="py-4 px-6 text-white font-medium">{row.aspect}</td>
                        <td className="py-4 px-6 text-green-400">{row.honey}</td>
                        <td className="py-4 px-6 text-red-400">{row.sugar}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Nutritional Components */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6 honey-gradient bg-clip-text text-transparent">
              Nutritional Components
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Honey contains over 180 different compounds that contribute to its health benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nutritionalFacts.map((fact, index) => (
              <Card key={index} className="luxury-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gold-400 mb-3">{fact.nutrient}</h3>
                  <p className="text-white/80">{fact.benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Studies */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 honey-gradient bg-clip-text text-transparent">
                Backed by Science
              </h2>
              <div className="space-y-4 text-white/80 text-lg">
                <p>
                  Numerous scientific studies have validated the health benefits of honey. 
                  Research shows that raw, unprocessed honey contains bioactive compounds 
                  that contribute to its therapeutic properties.
                </p>
                <p>
                  Studies have found that honey's antioxidant activity is comparable to 
                  that of fruits and vegetables, making it a valuable addition to a 
                  healthy diet.
                </p>
                <p>
                  The antimicrobial properties of honey have been recognized for centuries 
                  and are now supported by modern scientific research.
                </p>
              </div>
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80"
                alt="Scientific research on honey"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <Card className="luxury-card">
            <CardContent className="p-6 text-center">
              <p className="text-white/60 text-sm">
                *These statements have not been evaluated by the FDA. This product is not intended 
                to diagnose, treat, cure, or prevent any disease. Always consult with a healthcare 
                professional before making significant dietary changes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HealthBenefits;
