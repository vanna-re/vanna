'use client';
import { useState } from 'react';
import { reviews } from '@/data/reviews';

export default function ReviewsSection() {
  const [idx, setIdx] = useState(0);
  const r = reviews[idx];
  return (
    <section id="reviews" className="parallax parallax_two testimonials text-center">
      <div className="overlay" />
      <div className="parallax_inner">
        <div className="container new_shadow">
          <h2 className="mb-25">Отзывы <span style={{ color: '#ffc000' }}>наших клиентов</span></h2>
          <figure>
            <img alt={`Отзыв клиента ${r.name}`} src={`https://rest-vanna.ru/0files/img/${r.img}`} loading="lazy" />
          </figure>
          <h5>{r.name}:</h5>
          <p>{r.text}</p>
          <div className="reviews-dots">
            {reviews.map((_, i) => (
              <button key={i} className={i === idx ? 'active' : ''} onClick={() => setIdx(i)} aria-label={`Отзыв ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}