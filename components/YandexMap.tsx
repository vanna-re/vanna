'use client';
import { useEffect, useRef } from 'react';

declare global {
  interface Window { ymaps: any; }
}

export default function YandexMap({ city }: { city: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inited = useRef(false);

  useEffect(() => {
    if (inited.current) return;
    inited.current = true;

    const init = () => {
      window.ymaps.ready(() => {
        window.ymaps.geocode(city, { results: 1 }).then((res: any) => {
          if (!ref.current) return;
          const coords = res.geoObjects.get(0).geometry.getCoordinates();
          const map = new window.ymaps.Map(ref.current, {
            center: coords,
            zoom: 12,
            controls: ['zoomControl'],
          });
          map.behaviors.disable('scrollZoom');
        });
      });
    };

    if (window.ymaps) {
      init();
    } else {
      const s = document.createElement('script');
      s.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=378f9b37-98e9-40c9-b113-56e9be7fe85b';
      s.onload = init;
      document.head.appendChild(s);
    }
  }, [city]);

  return <div id="map" ref={ref} style={{ width: '100%', height: 300 }} />;
}