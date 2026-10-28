/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ImageRotator from '@/components/ImageRotator';
import PricingSection from '@/components/PricingSection';
import ReviewsSection from '@/components/ReviewsSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { cities, getCityBySlug } from '@/data/cities';
import { reviews } from '@/data/reviews';
import { faq } from '@/data/faq';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kingisepp.rest-vanna.ru';

const GALLERY_IMAGES = [
  '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','3-zhel.jpg','9.jpg',
  '10.jpg','11.jpg','12.jpg','5-cher.jpg','13.jpg','14.jpg','15.jpg','16.jpg','2-gol.jpg','17.jpg',
  '18.jpg','19.jpg','20.jpg','1-roz.jpg','21.jpg','22.jpg','4-sal.jpg','23.jpg','24.jpg','25.jpg',
  '26.jpg','27.jpg','28.jpg','29.jpg','30.jpg',
].map(f => `https://rest-vanna.ru/0files/img/${f}`);

export function generateStaticParams() {
  return cities.map(c => ({ city: c.slug }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const city = getCityBySlug(params.city);
  if (!city) return {};
  return {
    title: `Реставрация ванн ${city.nameIn} — выезд мастера, гарантия`,
    description: city.metaDescription,
    alternates: { canonical: `${SITE_URL}/${city.slug}` },
    openGraph: {
      url: `${SITE_URL}/${city.slug}`,
      title: `Реставрация ванн ${city.nameIn} — выезд мастера, гарантия`,
      description: city.metaDescription,
    },
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = getCityBySlug(params.city);
  if (!city) notFound();

  const ldBusiness = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE_URL}/${city.slug}#business`,
    name: `Rest-vanna ${city.nameIn}`,
    url: `${SITE_URL}/${city.slug}`,
    telephone: '+7-904-556-55-56',
    email: 'zakaz@rest-vanna.ru',
    image: 'https://rest-vanna.ru/0files/img/12.jpg',
    priceRange: '₽₽',
    address: { '@type': 'PostalAddress', addressLocality: city.name, addressCountry: 'RU' },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '09:00', closes: '21:00',
    },
    areaServed: { '@type': 'City', name: city.name },
  };
  const ldService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Реставрация ванн наливным акрилом',
    provider: { '@id': `${SITE_URL}/${city.slug}#business` },
    areaServed: { '@type': 'City', name: city.name },
    description: city.metaDescription,
  };
  const ldFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  const ldBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: `Реставрация ванн ${city.nameIn}`, item: `${SITE_URL}/${city.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumbs) }} />

      <Navbar cityName={city.name} />
      <Hero cityName={city.name} cityNameIn={city.nameIn} />

      {/* Блок уникальных локальных фактов — ключ к SEO */}
      <section style={{ padding: '30px 0' }}>
        <div className="container">
          <h2 className="text-center">Почему выбирают нас {city.nameIn}</h2>
          <div className="row" style={{ marginTop: 20 }}>
            {city.localFacts.map((fact, i) => (
              <div className="col-sm-4" key={i}>
                <p style={{ padding: 15, background: '#f4f6f9', borderRadius: 6, fontSize: 15, minHeight: 100 }}>
                  <b style={{ color: '#4682B4' }}>✓ </b>{fact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Галерея до/после */}
      <section>
        <div className="container">
          <h2 className="text-center">Какими бывают ванны <span style={{ color: '#5A9BD1' }}>до и после реставрации:</span></h2>
          <div className="row" style={{ marginTop: 25, alignItems: 'flex-start' }}>
            <div className="col-sm-6">
              <ImageRotator
                images={GALLERY_IMAGES}
                alt={`Реставрация ванны наливным акрилом ${city.nameIn} — до и после`}
              />
            </div>
            <div className="col-sm-6">
              <p>Восстанавливаем чугунные и стальные ванны из любого состояния. Жидкий акрил способен проникать в трещины, покрывая при этом ямки, пятна и прочие дефекты. Ванна преображается, получается совершенно гладкой, глянцевой, без размытий и неровностей. Работа занимает примерно 2 часа. Акрил сохнет 16 часов.</p>
              <p>Цена на реставрацию ванны рассчитывается в зависимости от размера ванны, а также от того, была ли покрыта ванна эмалью или акрилом до этого. Дополнительные опции: цвет акрила на выбор, замена обвязки слив-перелив, установка бордюра.</p>
              <p>Оказываем услугу {city.nameIn} с 2007 года. Все это время поддерживаем высокое качество выполненных работ по восстановлению старых покрытий ванн.</p>
            </div>
          </div>
        </div>
      </section>

      {/* О наливном акриле */}
      <section className="parallax parallax_one">
        <div className="overlay" />
        <div className="parallax_inner">
          <div className="container new_shadow">
            <div className="text-center mb-50">
              <h2 className="mb-25">О <span style={{ color: '#ffc000' }}>НАЛИВНОМ</span> АКРИЛЕ</h2>
              <p><strong>Наливная акриловая ванна</strong> — уникальная возможность освежить старую ванну, не тратя средств на покупку новой или демонтаж. Акриловый состав позволяет отреставрировать ванну с ржавым налётом стали, пожелтевшими пятнами или потрескавшейся эмалью.</p>
            </div>
            <div className="row">
              {[
                ['1. Новые технологии', 'Современный, эффективный и популярный способ восстановления покрытия ванн любых форм, цвета и размеров.'],
                ['2. Экономия и простота', 'Не требуется дорогостоящий демонтаж и вывоз старой ванны, дверные проёмы, плитка и бордюры останутся на месте.'],
                ['3. Надёжно и долговечно', 'Акрил затвердевает за 16 часов, срок службы нового покрытия — до 15 лет.'],
              ].map(([title, text]) => (
                <div className="col-sm-4 course text-bold" key={title}>
                  <figure className="pull-left mt-10"><span style={{ fontSize: 60, color: '#5A9BD1' }}>✓</span></figure>
                  <div className="info">
                    <h5>{title}</h5>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Литьевой мрамор */}
      <section className="mt-30 mb-50">
        <div className="container">
          <div className="row" style={{ alignItems: 'center' }}>
            <div className="col-sm-4">
              <img
                src="https://rest-vanna.ru/0files/img/mramor.jpg"
                alt="Литьевой мрамор для реставрации ванн"
                style={{ borderRadius: 10, boxShadow: '0 0 10px #444' }}
                loading="lazy"
              />
            </div>
            <div className="col-sm-8">
              <h2><span style={{ color: '#5A9BD1' }}>Новинка!</span> Реставрация ванн <span style={{ color: '#5A9BD1' }}>литьевым мрамором</span></h2>
              <p>Литьевой мрамор — новинка на рынке, материал премиум-класса. По принципу действия и характеристикам он похож на жидкий акрил, но в его формулу введена мелкофракционная мраморная крошка. Такая добавка делает покрытие ударопрочным и износостойким.</p>
              <p>Покрытие получается плотным и однородным как по цвету, так и по структуре. Ванна, покрытая жидким мрамором, безупречно белая, гладкая и глянцевая.</p>
            </div>
          </div>
        </div>
      </section>

      <PricingSection cityNameIn={city.nameIn} />
      <ReviewsSection />
      <FaqSection />

      {/* Видео */}
      <section id="section_video">
        <div className="container">
          <div className="text-center mb-50"><h2>Видео</h2></div>
          <div className="row">
            <div className="col-sm-6">
              <h3 className="mb-25">Ванна спустя <span style={{ color: '#5A9BD1' }}>1 год</span></h3>
              <div className="video">
                <iframe src="https://rutube.ru/play/embed/b30179689b71f408c6c272d547916ade" allow="clipboard-write; autoplay" allowFullScreen title="Ванна спустя 1 год" />
              </div>
            </div>
            <div className="col-sm-6">
              <h3 className="mb-25">Весь процесс <span style={{ color: '#5A9BD1' }}>за 10 минут</span></h3>
              <div className="video">
                <iframe src="https://rutube.ru/play/embed/b466f124329d2d5027b5527dc6d56033" allow="clipboard-write; autoplay" allowFullScreen title="Весь процесс за 10 минут" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection cityName={city.name} cityNameIn={city.nameIn} />
      <Footer />
    </>
  );
}