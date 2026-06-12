'use client';

import { useState, useEffect } from 'react';

export default function Typewriter() {
  const [text, setText] = useState('');
  const phrases = ['Software Engineer', 'Frontend Developer', 'Problem Solver', 'Product Designer'];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = phrases[phraseIndex];

    const tick = () => {
      if (!isDeleting) {
        setText((prev) => currentPhrase.substring(0, prev.length + 1));
        if (text === currentPhrase) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
        } else {
          timer = setTimeout(tick, 100);
        }
      } else {
        setText((prev) => currentPhrase.substring(0, prev.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          timer = setTimeout(tick, 500);
        } else {
          timer = setTimeout(tick, 50);
        }
      }
    };

    timer = setTimeout(tick, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  return (
    <>
      <span>{text}</span>
      <span className="cursor">|</span>
    </>
  );
}
