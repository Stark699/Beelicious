
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/hooks/useCart';
import { toast } from '@/hooks/use-toast';

const Products = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedWeight, setSelectedWeight] = useState('all');

  const products = [
    {
      id: '1',
      name: 'Premium Wildflower Honey',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=500&q=80',
      category: 'classic',
      weight: '500g',
      description: 'Pure wildflower honey with a delicate floral taste',
      benefits: ['Rich in antioxidants', 'Natural energy boost', 'Supports immunity'],
      ingredients: ['100% Pure Wildflower Honey']
    },
    {
      id: '2',
      name: 'Organic Raw Honey',
      price: 32.99,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=500&q=80',
      category: 'classic',
      weight: '750g',
      description: 'Unprocessed raw honey with natural enzymes intact',
      benefits: ['Unprocessed', 'Natural enzymes', 'Anti-inflammatory'],
      ingredients: ['100% Organic Raw Honey']
    },
    {
      id: '3',
      name: 'Cinnamon Infused Honey',
      price: 28.99,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=500&q=80',
      category: 'infused',
      weight: '350g',
      description: 'Aromatic honey infused with Ceylon cinnamon',
      benefits: ['Warming spice', 'Blood sugar support', 'Rich flavor'],
      ingredients: ['Wildflower Honey', 'Ceylon Cinnamon']
    },
    {
      id: '4',
      name: 'Ginger Honey Blend',
      price: 26.99,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=500&q=80',
      category: 'infused',
      weight: '400g',
      description: 'Zesty honey blend with fresh ginger',
      benefits: ['Digestive support', 'Anti-nausea', 'Immune boost'],
      ingredients: ['Raw Honey', 'Fresh Ginger Extract']
    },
    {
      id: '5',
      name: 'Pure Honeycomb',
      price: 45.99,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=500&q=80',
      category: 'comb',
      weight: '300g',
      description: 'Natural honeycomb straight from the hive',
      benefits: ['Natural wax', 'Pure honey', 'Unique texture'],
      ingredients: ['100% Natural Honeycomb']
    },
    {
      id: '6',
      name: 'Luxury Gift Set',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=500&q=80',
      category: 'gift',
      weight: 'Mixed',
      description: 'Premium gift set with 3 honey varieties',
      benefits: ['Perfect gift', 'Variety pack', 'Premium packaging'],
      ingredients: ['Wildflower Honey', 'Raw Honey', 'Infused Honey']
    }
  ];

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'classic', label: 'Classic Honey' },
    { value: 'infused', label: 'Infused Honey' },
    { value: 'comb', label: 'Comb Honey' },
    { value: 'gift', label: 'Gift Packs' }
  ];

  const weights = [
    { value: 'all', label: 'All Sizes' },
    { value: '250g', label: '250g' },
    { value: '350g', label: '350g' },
    { value: '400g', label: '400g' },
    { value: '500g', label: '500g' },
    { value: '750g', label: '750g' }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const weightMatch = selectedWeight === 'all' || product.weight === selectedWeight;
    return categoryMatch && weightMatch;
  });

  const handleAddToCart = (product: any, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 honey-gradient bg-clip-text text-transparent">
            Our Products
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover our complete collection of premium honey varieties, each carefully sourced and crafted to perfection
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap gap-4 justify-center">
          <div className="flex flex-wrap gap-2">
            <span className="text-gold-400 font-medium">Category:</span>
            {categories.map(category => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
                className={selectedCategory === category.value 
                  ? "bg-gold-400 text-black hover:bg-gold-500" 
                  : "border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2">
            <span className="text-gold-400 font-medium">Size:</span>
            {weights.map(weight => (
              <Button
                key={weight.value}
                variant={selectedWeight === weight.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedWeight(weight.value)}
                className={selectedWeight === weight.value 
                  ? "bg-gold-400 text-black hover:bg-gold-500" 
                  : "border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black"
                }
              >
                {weight.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card className="luxury-card h-full cursor-pointer animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                    <p className="text-white/70 mb-2">{product.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gold-400 font-medium">{product.weight}</span>
                      <span className="text-2xl font-bold honey-gradient bg-clip-text text-transparent">
                        ${product.price}
                      </span>
                    </div>
                    <Button 
                      className="w-full btn-primary"
                      onClick={(e) => handleAddToCart(product, e)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-white/60">No products found matching your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
