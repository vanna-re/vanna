export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>© Реставрация ванн наливным акрилом | 2007–{year}</p>
      <p style={{ fontSize: 12, marginTop: 10 }}>
        Данный интернет-сайт носит исключительно информационный характер и ни при каких условиях не является публичной офертой.<br />
        Использование сайта и заполнение форм означает согласие с <a href="https://rest-vanna.ru/politika_konf.html" rel="nofollow">Политикой конфиденциальности</a>.
      </p>
    </footer>
  );
}