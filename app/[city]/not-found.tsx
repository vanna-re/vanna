import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ padding: '120px 20px', textAlign: 'center' }}>
      <h1>404 — Страница не найдена</h1>
      <p>Такого города в нашем списке нет.</p>
      <p style={{ marginTop: 20 }}>
        <Link href="/" style={{ color: '#4682B4', textDecoration: 'underline' }}>← Вернуться на главную</Link>
      </p>
    </div>
  );
}