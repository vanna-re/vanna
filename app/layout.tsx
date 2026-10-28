import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kingisepp.rest-vanna.ru';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Реставрация ванн наливным акрилом в Ленинградской области | Rest-vanna',
    template: '%s | Rest-vanna',
  },
  description: 'Реставрация ванн наливным акрилом в Ленинградской области. Выезд мастера по всем городам, гарантия до 15 лет, финский акрил.',
  robots: 'index, follow',
  icons: { icon: 'https://rest-vanna.ru/favicon.png' },
  openGraph: {
    locale: 'ru_RU',
    type: 'website',
    siteName: 'Реставрация ванн в Ленинградской области',
    images: ['https://rest-vanna.ru/0files/img/12.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://rest-vanna.ru" />
      </head>
      <body>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CDNZBKTGSN"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CDNZBKTGSN');
          `}
        </Script>
        <Script id="ym-counter" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            ym(97445008, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true });
          `}
        </Script>
      </body>
    </html>
  );
}