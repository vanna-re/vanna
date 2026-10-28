import YandexMap from './YandexMap';

export default function ContactSection({ cityName, cityNameIn }: { cityName: string; cityNameIn: string }) {
  return (
    <>
      <section id="section_contact" className="mt-40 mb-30 text-bold">
        <div className="container">
          <h2 className="text-center">Контактная информация</h2>
          <div className="row">
            <div className="col-sm-6">
              <h3>Рест-Ванна</h3>
              <h5 style={{ color: '#000' }}>{cityNameIn}</h5>
            </div>
            <div className="col-sm-6">
              <h3>График работы:</h3>
              <h5 style={{ color: '#000' }}>Пн-Вс 09.00-21.00</h5>
            </div>
            <div className="col-sm-6">
              <h3>Телефон:</h3>
              <h5><a href="tel:+79045565556" style={{ color: '#000' }}>8 (904) 556-55-56</a></h5>
              <a className="btn-whatsapp" href="https://wa.me/79045565556" target="_blank" rel="noopener">&nbsp;&nbsp;Написать в Whatsapp</a>
              <p style={{ fontSize: 14, marginTop: 8, color: '#333', fontWeight: 400 }}>
                Отправьте фото своей ванны в whatsapp и мастер точно оценит стоимость реставрации
              </p>
            </div>
            <div className="col-sm-6">
              <h3>Email:</h3>
              <h5><a href="mailto:zakaz@rest-vanna.ru?subject=Реставрация-ванн" style={{ color: '#000' }}>zakaz@rest-vanna.ru</a></h5>
            </div>
          </div>
        </div>
      </section>
      <YandexMap city={cityName} />
    </>
  );
}