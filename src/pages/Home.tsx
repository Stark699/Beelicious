
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredProducts = [
    {
      id: '1',
      name: 'Premium Wildflower Honey',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=500&q=80',
      weight: '500g'
    },
    {
      id: '2',
      name: 'Organic Raw Honey',
      price: 32.99,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=500&q=80',
      weight: '750g'
    },
    {
      id: '3',
      name: 'Honey Gift Set',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=500&q=80',
      weight: 'Mixed'
    }
  ];

  const benefits = [
    'Pure, unprocessed honey from local apiaries',
    'Rich in antioxidants and natural enzymes',
    'Sustainably sourced with eco-friendly practices',
    'No artificial additives or preservatives'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Animated Honey Drips */}
        <div className="absolute top-0 left-1/4 honey-drip animate-honey-drip" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-0 left-1/2 honey-drip animate-honey-drip" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-3/4 honey-drip animate-honey-drip" style={{ animationDelay: '2s' }}></div>

        <div 
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 animate-fade-in-up">
            <span className="honey-gradient bg-clip-text text-transparent">
              Nature's Sweetest Gift
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Discover the pure essence of premium honey, crafted by nature and perfected by time
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link to="/products">
              <Button className="btn-primary text-lg px-12 py-4">
                Shop Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Honey Pour Animation */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-32 honey-gradient animate-honey-pour"></div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 honey-gradient bg-clip-text text-transparent">
              Why Choose Beelicious?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Every jar of Beelicious honey represents our commitment to quality, sustainability, and the pure taste of nature
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="luxury-card text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-12 h-12 bg-honey-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-black" />
                </div>
                <p className="text-white/90">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 honey-gradient bg-clip-text text-transparent">
              Featured Products
            </h2>
            <p className="text-xl text-white/80">
              Discover our most popular honey varieties
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="luxury-card animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="aspect-square overflow-hidden rounded-lg mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                <p className="text-gold-400 mb-2">{product.weight}</p>
                <p className="text-2xl font-bold honey-gradient bg-clip-text text-transparent mb-4">
                  ${product.price}
                </p>
                <Link to={`/product/${product.id}`}>
                  <Button className="w-full btn-primary">
                    View Product
                  </Button>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="outline" className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black">
                View All Products <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1498936178812-4b2e558d2937?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
            Ready to Taste the Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made Beelicious their go-to choice for premium honey
          </p>
          <Link to="/products">
            <Button className="btn-primary text-lg px-12 py-4">
              Start Shopping <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
