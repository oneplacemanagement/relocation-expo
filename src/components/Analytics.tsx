import Script from 'next/script';

/**
 * Loads Google Analytics 4 + Meta Pixel only when env vars are present.
 * Keeps cookie/consent flow simple - these load after page hydration so
 * the Cookie Banner can disable them in future via a global flag.
 */
export function Analytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const META_PIXEL = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <>
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { anonymize_ip: true });
          `}</Script>
        </>
      )}
      {META_PIXEL && (
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL}');
          fbq('track', 'PageView');
        `}</Script>
      )}
    </>
  );
}
