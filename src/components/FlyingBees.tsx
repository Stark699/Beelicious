
import { useEffect, useState } from 'react';

interface Bee {
  id: number;
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  rotation: number;
}

const FlyingBees = () => {
  const [bees, setBees] = useState<Bee[]>([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Initialize bees
    const initialBees: Bee[] = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      rotation: Math.random() * 360,
    }));
    setBees(initialBees);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const animateBees = () => {
      setBees(prevBees => 
        prevBees.map(bee => {
          let newX = bee.x + bee.speedX;
          let newY = bee.y + bee.speedY + scrollY * 0.001;
          let newSpeedX = bee.speedX;
          let newSpeedY = bee.speedY;

          // Bounce off walls
          if (newX <= 0 || newX >= window.innerWidth - 30) {
            newSpeedX = -newSpeedX;
            newX = Math.max(0, Math.min(window.innerWidth - 30, newX));
          }
          if (newY <= 0 || newY >= window.innerHeight - 30) {
            newSpeedY = -newSpeedY;
            newY = Math.max(0, Math.min(window.innerHeight - 30, newY));
          }

          return {
            ...bee,
            x: newX,
            y: newY,
            speedX: newSpeedX,
            speedY: newSpeedY,
            rotation: bee.rotation + 1,
          };
        })
      );
    };

    const intervalId = setInterval(animateBees, 50);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {bees.map(bee => (
        <div
          key={bee.id}
          className="absolute transition-transform duration-75"
          style={{
            left: `${bee.x}px`,
            top: `${bee.y}px`,
            transform: `rotate(${bee.rotation}deg)`,
          }}
        >
          <div className="relative w-8 h-6">
            {/* Bee body */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full">
              {/* Black stripes */}
              <div className="absolute top-1 left-1 right-1 h-1 bg-black rounded-full opacity-70"></div>
              <div className="absolute bottom-1 left-1 right-1 h-1 bg-black rounded-full opacity-70"></div>
            </div>
            
            {/* Wings */}
            <div className="absolute -top-1 left-1 w-3 h-4 bg-white/60 rounded-full animate-pulse"></div>
            <div className="absolute -top-1 right-1 w-3 h-4 bg-white/60 rounded-full animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlyingBees;
