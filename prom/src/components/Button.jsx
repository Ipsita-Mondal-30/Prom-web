import React from 'react';

const Button = ({ onClick, text, className, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-pink-500 text-white px-6 py-2 rounded-full shadow-md transition-all 
        hover:bg-pink-600 active:scale-95 
        disabled:bg-gray-400 disabled:cursor-not-allowed 
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default Button;
