import { faq } from '@/data/faq';

export default function FaqSection() {
  return (
    <section id="faq" className="mt-30 mb-50">
      <div className="container">
        <div className="text-center mb-50">
          <h2>Часто задаваемые <span style={{ color: '#5A9BD1' }}>вопросы</span></h2>
        </div>
        <div className="faq-list">
          {faq.map((item, i) => (
            <div key={i}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}