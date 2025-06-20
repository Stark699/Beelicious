
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/hooks/useCart';
import { toast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: id || '1',
    name: 'Premium Wildflower Honey',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80',
    category: 'classic',
    weight: '500g',
    description: 'Our Premium Wildflower Honey is a testament to nature\'s perfection. Sourced from pristine meadows where wildflowers bloom in abundance, this honey captures the essence of countless blossoms in every golden drop. Each jar represents the dedicated work of our bees and the careful stewardship of our beekeepers.',
    benefits: [
      'Rich in antioxidants and flavonoids',
      'Natural energy boost without crash',
      'Supports immune system function',
      'Contains natural enzymes for digestion',
      'Anti-inflammatory properties',
      'Promotes better sleep when taken before bed'
    ],
    ingredients: ['100% Pure Wildflower Honey'],
    nutritionalInfo: {
      calories: '64 per tablespoon',
      carbs: '17g',
      sugars: '16g',
      protein: '0g',
      fat: '0g'
    },
    origin: 'Local wildflower meadows',
    harvestSeason: 'Late summer',
    storage: 'Store in cool, dry place. Crystallization is natural.',
    images: [
      'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80'
    ]
  };

  const [selectedImage, setSelectedImage] = useState(0);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link to="/products" className="inline-flex items-center text-gold-400 hover:text-gold-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-gold-400' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-serif font-bold mb-4 honey-gradient bg-clip-text text-transparent">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-white">${product.price}</span>
                <span className="text-lg text-gold-400">{product.weight}</span>
              </div>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <span className="text-white font-medium">Quantity:</span>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="text-white font-bold text-lg w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                  className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button 
              className="w-full btn-primary text-lg py-3"
              onClick={handleAddToCart}
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </Button>

            {/* Product Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="luxury-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gold-400 mb-4">Product Details</h3>
                  <div className="space-y-2 text-white/80">
                    <p><strong>Origin:</strong> {product.origin}</p>
                    <p><strong>Harvest Season:</strong> {product.harvestSeason}</p>
                    <p><strong>Storage:</strong> {product.storage}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="luxury-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gold-400 mb-4">Nutrition Facts</h3>
                  <div className="space-y-2 text-white/80">
                    <p><strong>Calories:</strong> {product.nutritionalInfo.calories}</p>
                    <p><strong>Carbohydrates:</strong> {product.nutritionalInfo.carbs}</p>
                    <p><strong>Sugars:</strong> {product.nutritionalInfo.sugars}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Health Benefits */}
        <div className="mt-16">
          <h2 className="text-3xl font-serif font-bold mb-8 honey-gradient bg-clip-text text-transparent text-center">
            Health Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-honey-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <p className="text-white/80">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ingredients */}
        <div className="mt-12">
          <Card className="luxury-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-serif font-bold text-gold-400 mb-4">Ingredients</h3>
              <p className="text-white/80 text-lg">
                {product.ingredients.join(', ')}
              </p>
              <p className="text-white/60 mt-2">
                No artificial additives, preservatives, or processing aids. Just pure, natural honey.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
