
import { Check, Leaf, Heart, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      description: 'We work with local beekeepers who prioritize bee health and environmental conservation.'
    },
    {
      icon: Heart,
      title: 'Pure & Natural',
      description: 'Our honey is never heated, filtered, or processed - just pure, natural goodness.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Every batch is tested for purity and quality to ensure the finest honey reaches your table.'
    }
  ];

  const process = [
    'Careful selection of pristine apiaries',
    'Gentle extraction methods preserving natural enzymes',
    'Minimal processing to maintain nutritional value',
    'Quality testing for purity and authenticity',
    'Sustainable packaging using eco-friendly materials'
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1498936178812-4b2e558d2937?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 honey-gradient bg-clip-text text-transparent">
            About Beelicious
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            For three generations, we've been dedicated to bringing you the purest, 
            most delicious honey nature has to offer
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 honey-gradient bg-clip-text text-transparent">
                Our Story
              </h2>
              <div className="space-y-4 text-white/80 text-lg">
                <p>
                  Beelicious began in 1952 when our founder, Samuel Hayes, started with just 
                  three beehives in the rolling hills of the countryside. What started as a 
                  hobby quickly became a passion for producing the finest honey.
                </p>
                <p>
                  Today, we work with a network of trusted beekeepers who share our commitment 
                  to sustainable practices and bee welfare. Our honey comes from pristine 
                  wildflower meadows, untouched forests, and carefully tended apiaries.
                </p>
                <p>
                  Every jar of Beelicious honey represents our dedication to quality, 
                  sustainability, and the ancient art of beekeeping. We believe that when 
                  you taste our honey, you're experiencing nature at its purest.
                </p>
              </div>
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1498936178812-4b2e558d2937?auto=format&fit=crop&w=800&q=80"
                alt="Beekeeping tradition"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6 honey-gradient bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Everything we do is guided by our core values of sustainability, 
              quality, and respect for nature
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="luxury-card text-center">
                <div className="w-16 h-16 bg-honey-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-white/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80"
                alt="Honey production process"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 honey-gradient bg-clip-text text-transparent">
                From Hive to Jar
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Our time-honored process ensures that every jar of Beelicious honey 
                maintains its natural goodness and exceptional flavor.
              </p>
              <div className="space-y-4">
                {process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-honey-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <p className="text-white/80">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6 honey-gradient bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            To provide the world's finest honey while supporting sustainable beekeeping 
            practices, protecting bee populations, and preserving the natural environments 
            that make exceptional honey possible. We believe that great taste and 
            environmental responsibility go hand in hand.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
