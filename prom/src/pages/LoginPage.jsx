import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Star, Gift, Music, Sparkles } from 'lucide-react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [gameStep, setGameStep] = useState(0);
  const [foundItems, setFoundItems] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const navigate = useNavigate();

  const items = [
    { 
      id: 1, 
      icon: Heart, 
      color: 'text-pink-500',
      position: 'left-[10%] top-[20%]',
      size: 'w-8 h-8',
      hint: "Find the floating heart! It's filled with love ❤️"
    },
    { 
      id: 2, 
      icon: Star, 
      color: 'text-yellow-400',
      position: 'right-[15%] top-[30%]',
      size: 'w-8 h-8',
      hint: "Catch the twinkling star! ⭐"
    },
    { 
      id: 3, 
      icon: Gift, 
      color: 'text-purple-500',
      position: 'left-[20%] bottom-[25%]',
      size: 'w-8 h-8',
      hint: "Look for the special gift! 🎁"
    },
    { 
      id: 4, 
      icon: Music, 
      color: 'text-blue-400',
      position: 'right-[25%] bottom-[30%]',
      size: 'w-8 h-8',
      hint: "Find the musical note! 🎵"
    }
  ];

  useEffect(() => {
    if (!showInput && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [showInput, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0 && !showInput) {
      setGameStep(0);
      setFoundItems([]);
      setTimeLeft(60);
    }
  }, [timeLeft, showInput]);

  const handleItemClick = (id) => {
    if (id === gameStep + 1) {
      const newFoundItems = [...foundItems, id];
      setFoundItems(newFoundItems);
      
      if (newFoundItems.length === items.length) {
        setShowInput(true);
      } else {
        setGameStep(gameStep + 1);
      }
    }
  };

  const handleLogin = () => {
    if (username.trim() !== '') {
      localStorage.setItem('user', username);
      navigate('/home');
    }
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 overflow-hidden inset-0">
      {/* Center Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center w-full px-4">
        <h1 className="text-4xl font-bold text-pink-600 mb-4 drop-shadow-lg">
          {!showInput ? "Find All The Hidden Items! ✨" : "Amazing Job! 🎉"}
        </h1>
        
        {!showInput && (
          <>
            <p className="text-2xl text-pink-500 mb-4 animate-pulse">
              {items[gameStep]?.hint || "Let's begin!"}
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 inline-block">
              <p className="text-lg text-gray-700">
                Found: {foundItems.length} / {items.length} items
              </p>
              <p className="text-lg text-gray-700">
                Time: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
              </p>
            </div>
          </>
        )}

        {showInput && (
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-xl max-w-md mx-auto">
            <input
              type="text"
              placeholder="Enter your name..."
              className="w-full px-4 py-3 rounded-lg border-2 border-pink-300 focus:border-pink-500 focus:outline-none text-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button
              onClick={handleLogin}
              className="w-full mt-4 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg transition-colors text-lg"
            >
              Continue to Your Surprise 💝
            </button>
          </div>
        )}
      </div>

      {/* Game Area */}
      {!showInput && (
        <div className="absolute inset-0">
          {/* Hidden Items */}
          {items.map(({ id, icon: Icon, color, position, size }) => {
            const isFound = foundItems.includes(id);
            const isNext = id === gameStep + 1;
            
            return (
              <div
                key={id}
                className={`absolute ${position} transition-all duration-300
                  ${isFound ? 'opacity-0 scale-150' : 'opacity-70 hover:opacity-100'}
                  ${isNext ? 'animate-bounce' : ''}`}
                onClick={() => handleItemClick(id)}
              >
                <Icon 
                  className={`${size} ${color} transform hover:scale-125 
                    transition-transform duration-300 filter drop-shadow-lg
                    cursor-pointer`}
                />
              </div>
            );
          })}

        </div>
      )}
    </div>
  );
};

export default LoginPage;