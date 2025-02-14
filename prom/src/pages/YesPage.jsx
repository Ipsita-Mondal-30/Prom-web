import React, { useEffect, useState } from 'react';
import ConfettiEffect from '../components/ConfettiEffect';

const YesPage = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(localStorage.getItem('user') || 'Sweetheart');
  }, []);

  return (
    <div className="container">
      <ConfettiEffect isActive={true} />
      <h1 className="text-5xl text-pink-600">YAY! 🥰💕</h1>
      <p className="text-2xl mt-4">I'm so happy, {username}! Can't wait for prom with you! ✨</p>
    </div>
  );
};

export default YesPage;
