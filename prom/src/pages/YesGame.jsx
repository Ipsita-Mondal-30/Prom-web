import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Sparkles, Stars } from 'lucide-react';


const YesGame = () => {
  const navigate = useNavigate();
  const [clicks, setClicks] = useState(0);
  const [hearts, setHearts] = useState([]);
  const [showSparkle, setShowSparkle] = useState(false);

  const handleClick = () => {
    // Add floating heart effect
    const newHeart = {
      id: Date.now(),
      left: Math.random() * 100,
      delay: Math.random() * 0.5
    };
    setHearts([...hearts, newHeart]);

    // Remove heart after animation
    setTimeout(() => {
      setHearts(hearts => hearts.filter(h => h.id !== newHeart.id));
    }, 2000);

    if (clicks + 1 >= 5) {
      setShowSparkle(true);
      setTimeout(() => {
        navigate('/yes');
      }, 1000);
    }
    setClicks(clicks + 1);
  };

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      {/* Floating hearts animation */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-0 animate-float-up pointer-events-none"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`
          }}
        >
          <Heart className="w-6 h-6 text-pink-400" fill="currentColor" />
        </div>
      ))}

      

      {/* Main content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-2">
            Click 5 times to unlock YES! 💖
          </h1>
          <p className="text-lg text-purple-600 animate-pulse">
            {5 - clicks} more clicks to go!
          </p>
        </div>

        <button
          onClick={handleClick}
          className={`
            relative group
            px-8 py-4 rounded-full
            bg-gradient-to-r from-pink-400 to-purple-400
            hover:from-pink-500 hover:to-purple-500
            transform hover:scale-105 active:scale-95
            transition-all duration-300
            text-white font-semibold text-lg
            shadow-lg hover:shadow-xl
            overflow-hidden
          `}
        >
          {/* Button sparkles */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Sparkles className="w-full h-full text-white/20" />
          </div>
          
          {/* Button text */}
          <span className="relative z-10 flex items-center gap-2">
            Click Me! 
            <Heart 
              className={`w-5 h-5 ${clicks < 5 ? 'animate-bounce' : 'animate-ping'}`} 
              fill={clicks < 5 ? 'none' : 'currentColor'}
            />
            ({clicks}/5)
          </span>
        </button>

        {/* Progress hearts */}
        <div className="mt-6 flex gap-2">
          {[...Array(5)].map((_, i) => (
            <Heart
              key={i}
              className={`w-6 h-6 transition-all duration-300 ${
                i < clicks 
                  ? 'text-pink-500 scale-110' 
                  : 'text-pink-200'
              }`}
              fill={i < clicks ? 'currentColor' : 'none'}
            />
          ))}
        </div>

        {/* Final sparkle effect */}
        {showSparkle && (
          <div className="absolute inset-0 flex items-center justify-center animate-fade-in">
            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
            <Sparkles className="w-32 h-32 text-yellow-400 animate-spin-slow" />
          </div>
        )}
      </div>
    </div>
  );
};

export default YesGame;

