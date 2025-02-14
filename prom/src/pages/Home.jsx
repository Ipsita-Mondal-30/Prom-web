import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(true);
  const [user, setUser] = useState('');

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (!savedUser) {
      navigate('/');
    } else {
      setUser(savedUser);
    }
  }, [navigate]);

  const handleYes = () => {
    setModalOpen(false);
    navigate('/game');
  };

  const handleNo = () => {
    window.location.href = 'https://youtu.be/BiVyN2ftrrs?si=kCDG9rDWEU0-xrNl';
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-pink-100 text-center">
      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} onYes={handleYes} onNo={handleNo} />
      )}
      <h1 className="text-5xl text-pink-600 font-bold">Hey {user}, will you go to prom with me? 🥺💕</h1>
      <div className="mt-6 flex gap-4">
        <Button onClick={handleYes} text="Yes 💖" />
        <Button onClick={handleNo} text="No 😢" className="bg-red-500 hover:bg-red-600" />
      </div>
    </div>
  );
};

export default Home;
