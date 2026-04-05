import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

const DodgeButton: React.FC = () => {
  const taunts = [
    'Catch me 😏',
    'too slow 😏',
    'missed me',
    'try again 😂',
    'not happening',
    'you wish 💀',
  ];
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const [isFloating, setIsFloating] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [text, setText] = useState('Reserve Table');
  const [moves, setMoves] = useState(0);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

  //   capture initial position After render
  useEffect(() => {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setInitialPosition({ x: rect.left, y: rect.top });
      setPosition({ x: rect.left, y: rect.top });

      setIsFloating(true);
    }
  }, []);

  const moveButton = () => {
    if (moves > 5) {
      setText('Okay Fine 😂, Please Reserve');
      setPosition({ x: initialPosition.x, y: initialPosition.y });
      return;
    }
    setMoves(moves + 1);
    const padding = 120;
    const maxX = window.innerWidth - padding;
    const maxY = window.innerHeight - padding;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    const randomText = taunts[Math.floor(Math.random() * taunts.length)];
    setText(randomText);
    setPosition({ x: newX, y: newY });
  };

  return (
    <div>
      <Button
        variant="contained"
        ref={btnRef}
        onMouseEnter={moveButton}
        color="warning"
        sx={
          isFloating
            ? {
                position: 'fixed',
                left: position.x,
                top: position.y,
                transition: 'all 0.08s linear',
                zIndex: 9999,
              }
            : {}
        }
      >
        {text}
      </Button>
    </div>
  );
};

export default DodgeButton;
