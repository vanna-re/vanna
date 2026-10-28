'use client';
/* eslint-disable @next/next/no-img-element */

export default function Hero({ cityName, cityNameIn }: { cityName: string; cityNameIn: string }) {
  return (
    <section className="hero">
      <div className="container">
        <h1>Реставрация ванн<br /> <b className="red">{cityName}</b></h1>
        <h2><a href="tel:+79045565556">8 (904) 556-55-56</a></h2>
        <p>Полное обновление ванны <strong><b className="red">за 2 часа</b></strong></p>
        <form action="https://rest-vanna.ru/restavracija-vann/zak_spb.php" method="POST">
          <input type="text" name="fio" required placeholder="Ваше Имя:" />
          <input type="tel" name="phone" required placeholder="Ваш телефон:" minLength={9} maxLength={12} />
          <input type="hidden" name="punkt" value={cityNameIn} />
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 10 }}>
            <input type="checkbox" required defaultChecked />
            <span>Согласие на <a href="https://rest-vanna.ru/politika_konf.html" target="_blank" rel="nofollow noopener">обработку персональных данных</a></span>
          </label>
          <button type="submit" className="btn btn-default btn-head">Заказать реставрацию</button>
        </form>
      </div>
    </section>
  );
}