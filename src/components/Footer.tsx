
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gold-400/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-3xl font-serif font-bold honey-gradient bg-clip-text text-transparent">
                Beelicious
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Premium honey crafted by nature, perfected by time. Experience the pure essence of natural sweetness with our sustainably sourced honey products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-gold-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-gold-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-gold-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-gold-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/70 hover:text-gold-400 transition-colors text-sm">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-gold-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/health-benefits" className="text-white/70 hover:text-gold-400 transition-colors text-sm">
                  Health Benefits
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-gold-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold-400">Our Honey</h3>
            <ul className="space-y-2">
              <li className="text-white/70 text-sm">Wildflower Honey</li>
              <li className="text-white/70 text-sm">Raw Organic Honey</li>
              <li className="text-white/70 text-sm">Infused Honey</li>
              <li className="text-white/70 text-sm">Honeycomb</li>
              <li className="text-white/70 text-sm">Gift Sets</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold-400">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gold-400 mt-1 flex-shrink-0" />
                <p className="text-white/70 text-sm">
                  123 Honey Lane<br />
                  Sweet Valley, CA 90210
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <p className="text-white/70 text-sm">+1 (555) 123-HONEY</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <p className="text-white/70 text-sm">hello@beelicious.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gold-400/20 bg-gray-900/50">
        <div className="container mx-auto px-4 py-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-gold-400 mb-2">Sweet Updates</h3>
              <p className="text-white/70 text-sm">Subscribe to get special offers, recipes, and honey tips.</p>
            </div>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border border-gold-400/30 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-gold-400 text-sm"
              />
              <button className="bg-gradient-to-r from-gold-400 to-gold-600 text-black px-6 py-2 rounded-lg font-semibold hover:from-gold-500 hover:to-gold-700 transition-all text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold-400/20 bg-black">
        <div className="container mx-auto px-4 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex items-center space-x-1 text-white/60 text-sm mb-4 md:mb-0">
              <span>© {currentYear} Beelicious. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for honey lovers.</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-gold-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-gold-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-gold-400 transition-colors">
                Shipping Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
