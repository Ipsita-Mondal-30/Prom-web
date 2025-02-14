
const tailwindConfig = {
    theme: {
      extend: {
        animation: {
          'float-up': 'floatUp 2s forwards',
          'twinkle': 'twinkle 3s infinite',
          'spin-slow': 'spin 3s linear infinite',
          'fade-in': 'fadeIn 0.5s forwards',
        },
        keyframes: {
          floatUp: {
            '0%': { transform: 'translateY(0) scale(1)', opacity: 1 },
            '100%': { transform: 'translateY(-100vh) scale(0)', opacity: 0 },
          },
          twinkle: {
            '0%, 100%': { opacity: 0.2 },
            '50%': { opacity: 0.8 },
          },
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
        },
      },
    },
  };