import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const body = Object.fromEntries(formData.entries());

    // Прокси-запрос на существующий обработчик
    const res = await fetch('https://rest-vanna.ru/restavracija-vann/zak_spb.php', {
      method: 'POST',
      body: formData,
    });

    return NextResponse.json({ ok: res.ok, body });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}