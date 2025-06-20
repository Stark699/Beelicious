
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/hooks/useCart';
import { toast } from '@/hooks/use-toast';

const Checkout = () => {
  const { state, clearCart } = useCart();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    paymentMethod: 'card'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle order submission here
    toast({
      title: "Order placed successfully!",
      description: "Thank you for your order. You'll receive a confirmation email shortly.",
    });
    clearCart();
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold text-white mb-4">Your cart is empty</h1>
          <Link to="/products">
            <Button className="btn-primary">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link to="/cart" className="inline-flex items-center text-gold-400 hover:text-gold-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Cart
        </Link>

        <h1 className="text-4xl font-serif font-bold mb-8 honey-gradient bg-clip-text text-transparent">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <Card className="luxury-card">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-gold-400 mb-4">Contact Information</h2>
                  <div>
                    <label className="block text-white/80 mb-2">Email *</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-black/50 border-gold-400/30 text-white placeholder-white/50"
                      placeholder="your@email.com"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card className="luxury-card">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-gold-400 mb-4">Shipping Address</h2>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-white/80 mb-2">First Name *</label>
                      <Input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="bg-black/50 border-gold-400/30 text-white placeholder-white/50"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 mb-2">Last Name *</label>
                      <Input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="bg-black/50 border-gold-400/30 text-white placeholder-white/50"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-white/80 mb-2">Address *</label>
                    <Input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      className="bg-black/50 border-gold-400/30 text-white placeholder-white/50"
                      placeholder="123 Main Street"
                    />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-white/80 mb-2">City *</label>
                      <Input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        className="bg-black/50 border-gold-400/30 text-white placeholder-white/50"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 mb-2">State *</label>
                      <Input
                        type="text"
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({...formData, state: e.target.value})}
                        className="bg-black/50 border-gold-400/30 text-white placeholder-white/50"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 mb-2">ZIP Code *</label>
                      <Input
                        type="text"
                        required
                        value={formData.zipCode}
                        onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                        className="bg-black/50 border-gold-400/30 text-white placeholder-white/50"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card className="luxury-card">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-gold-400 mb-4">Payment Method</h2>
                  <div className="space-y-4">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                        className="text-gold-400"
                      />
                      <CreditCard className="w-5 h-5 text-gold-400" />
                      <span className="text-white">Credit/Debit Card</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === 'cod'}
                        onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                        className="text-gold-400"
                      />
                      <Truck className="w-5 h-5 text-gold-400" />
                      <span className="text-white">Cash on Delivery</span>
                    </label>
                  </div>
                </CardContent>
              </Card>

              <Button type="submit" className="w-full btn-primary text-lg py-3">
                Place Order - ${state.total.toFixed(2)}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="luxury-card sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gold-400 mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="text-white font-medium">{item.name}</h3>
                        <p className="text-white/60">Quantity: {item.quantity}</p>
                      </div>
                      <p className="text-white font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-6 pt-4 border-t border-gold-400/20">
                  <div className="flex justify-between text-white/80">
                    <span>Subtotal</span>
                    <span>${state.total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Tax</span>
                    <span>${(state.total * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gold-400/20 pt-2">
                    <div className="flex justify-between text-lg font-bold text-white">
                      <span>Total</span>
                      <span>${(state.total * 1.08).toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-white/60">
                  <p className="mb-2">🚚 Free shipping on all orders</p>
                  <p>📞 Questions? Call us at (555) 123-4567</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
