import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cities } from '@/data/cities';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kingisepp.rest-vanna.ru';

export const metadata: Metadata = {
  title: 'Реставрация ванн наливным акрилом в Ленинградской области — выезд мастера',
  description: `Реставрация ванн наливным акрилом в ${cities.length} городах Ленинградской области. Выезд мастера, гарантия до 15 лет, финский акрил. Звоните: 8 (904) 556-55-56.`,
  alternates: { canonical: SITE_URL },
};

export default function HomePage() {
  const sorted = [...cities].sort((a, b) => a.name.localeCompare(b.name, 'ru'));

  return (
    <>
      <Navbar cityName="ЛО" />
      <section className="home-hero">
        <div className="container">
          <h1>Реставрация ванн наливным акрилом в Ленинградской области</h1>
          <p>
            Обновляем чугунные и стальные ванны за 2 часа. Работаем во всех городах области:
            от Кингисеппа до Подпорожья, от Приозерска до Луги. Гарантия до 5 лет.
          </p>
          <p><a className="btn btn-default btn-head" href="tel:+79045565556">8 (904) 556-55-56</a></p>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="text-center">Выберите свой город</h2>
          <p className="text-center" style={{ color: '#666', marginBottom: 20 }}>
            Найдётся ваш населённый пункт? Мы работаем по всей Ленинградской области.
          </p>
          <div className="city-grid">
            {sorted.map(c => (
              <a key={c.slug} href={`/${c.slug}`}>{c.name}</a>
            ))}
          </div>
          <p className="text-center mt-40" style={{ color: '#666' }}>
            Не нашли свой город? <a href="tel:+79045565556" style={{ color: '#4682B4' }}>Позвоните</a> — уточним возможность выезда.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}