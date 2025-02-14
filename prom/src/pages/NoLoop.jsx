import React, { useEffect } from 'react';

const NoLoop = () => {
  useEffect(() => {
    window.location.href = 'https://www.youtube.com/watch?v=J-7g2gLWlO8';
  }, []);

  return (
    <div className="container">
      <h1 className="text-4xl text-gray-700">Redirecting... 😈</h1>
    </div>
  );
};

export default NoLoop;
