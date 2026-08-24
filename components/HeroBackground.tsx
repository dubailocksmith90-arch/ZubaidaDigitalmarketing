'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { locksmithPhotos } from '@/lib/locksmith-photos';

export default function HeroBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % locksmithPhotos.length);
    }, 4500);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {locksmithPhotos.map((photo, i) => (
        <Image
          key={photo.src}
          src={photo.src}
          alt=""
          fill
          sizes="100vw"
          quality={70}
          priority={i === 0}
          className={`object-cover transition-opacity duration-[1200ms] ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}
