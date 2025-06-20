
import { useEffect, useState } from 'react';

const HoneyPourAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Show animation when user scrolls past hero section
      setIsVisible(currentScrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none">
      {/* Honey Jar */}
      <div 
        className="relative"
        style={{ 
          transform: `translateY(${Math.min(scrollY * 0.1, 100)}px)`,
          opacity: Math.max(1 - scrollY * 0.001, 0.3)
        }}
      >
        <div className="w-16 h-20 bg-gradient-to-b from-amber-200 to-amber-400 rounded-lg border-2 border-amber-600 relative">
          {/* Jar lid */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-amber-800 rounded-full"></div>
          
          {/* Honey level in jar */}
          <div 
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-500 to-amber-300 rounded-b-lg transition-all duration-1000"
            style={{ 
              height: `${Math.max(80 - scrollY * 0.05, 20)}%`,
            }}
          ></div>
        </div>
        
        {/* Honey Stream */}
        <div 
          className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-amber-400 via-amber-500 to-transparent rounded-full"
          style={{ 
            height: `${Math.min(scrollY * 0.5, window.innerHeight)}px`,
            opacity: scrollY > 350 ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        ></div>
        
        {/* Honey Drops */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-3 bg-amber-400 rounded-full animate-bounce"
            style={{
              left: '50%',
              top: '100%',
              transform: `translateX(-50%) translateY(${scrollY * 0.3 + i * 20}px)`,
              animationDelay: `${i * 0.2}s`,
              opacity: scrollY > 400 ? 1 : 0
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HoneyPourAnimation;
