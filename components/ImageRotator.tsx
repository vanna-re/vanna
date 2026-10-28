'use client';
import { useState, useEffect } from 'react';

export default function ImageRotator({ images, alt }: { images: string[]; alt: string }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(prev => (prev + 1) % images.length), 2000);
    return () => clearInterval(t);
  }, [images.length]);

  const next = (i + 1) % images.length;

  return (
    <div className="rotator">
      <img key={next} src={images[next]} alt="" loading="lazy" style={{ opacity: 0 }} aria-hidden />
      <img key={i} src={images[i]} alt={alt} loading="eager" style={{ opacity: 1 }} />
    </div>
  );
}