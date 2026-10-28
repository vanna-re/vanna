export default function PricingSection({ cityNameIn }: { cityNameIn: string }) {
  return (
    <section id="section_cena">
      <div className="container">
        <div className="text-center mb-50">
          <h2>Сколько <span style={{ color: '#5A9BD1' }}>стоит реставрация?</span></h2>
        </div>
        <form action="https://rest-vanna.ru/restavracija-vann/zak_spb.php" method="POST" className="vanilla-form">
          <h3>Длина ванны</h3>
          <label>в большинстве случаев размер ванны 1,5 метра
            <select name="dlina" defaultValue="1,5 метра (стандартный размер)">
              <option>1,5 метра (стандартный размер)</option>
              <option>1,2 метра (короткая ванна)</option>
              <option>1,7 метра (длинная ванна)</option>
            </select>
          </label>
          <h3>Покрытие ванны</h3>
          <p>Если ванна реставрировалась до этого, старое покрытие необходимо удалить</p>
          <div className="radio-set">
            <label><input type="radio" name="pokrytie" defaultChecked value="Заводское покрытие, не красилась, не покрывалась" required /> Заводское покрытие, не красилась, не покрывалась</label>
            <label><input type="radio" name="pokrytie" value="Установлен акриловый вкладыш" required /> Был установлен акриловый вкладыш</label>
            <label><input type="radio" name="pokrytie" value="Покрашена эмалью/краской" required /> Ранее окрашена эмалью/краской</label>
            <label><input type="radio" name="pokrytie" value="Покрыта акрилом" required /> Уже покрывалась акрилом</label>
          </div>
          <h3>Дополнительные услуги</h3>
          <div className="radio-set">
            <label><input type="checkbox" name="kolerovka" value="Цветная колеровка (белый цвет - бесплатно)" /> Нужна цветная колеровка?</label>
            <label><input type="checkbox" name="pereliv" value="Замена обвязки слив-перелив на новую" /> Заменить обвязку слив-перелив на новую</label>
          </div>
          <input type="hidden" name="punkt" value={cityNameIn} />
          <div className="row">
            <div className="col-sm-6"><input type="text" name="fio" placeholder="Укажите Ваше имя*" required /></div>
            <div className="col-sm-6"><input type="tel" name="phone" placeholder="Введите Ваш телефон*" required /></div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-default btn-head">Рассчитать</button>
            <p style={{ fontSize: 13, marginTop: 10 }}>
              *заполнение формы означает согласие на <a href="https://rest-vanna.ru/politika_konf.html" rel="nofollow">обработку персональных данных</a>.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}