import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileCtaBar } from '@/components/layout/MobileCtaBar';
import { site } from '@/lib/site';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  axes: ['opsz'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  icons: {
    icon: '/images/gfm-logo.png',
    shortcut: '/images/gfm-logo.png',
    apple: '/images/gfm-logo.png',
  },
  keywords: [
    'Minnesota Seamless Gutters',
    'Gutter Installation Minnesota',
    'Gutter Cleaning Minnesota',
    'Gutter Guards Minnesota',
    'gutter installation',
    'seamless gutters',
    'gutter guards',
    'gutter cleaning',
    'gutter repair',
    site.region.primaryState,
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [site.ogImage],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = {
  themeColor: '#16181D',
  width: 'device-width',
  initialScale: 1,
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: site.legalName,
  description: site.description,
  url: site.url,
  telephone: site.contact.phoneRaw,
  email: site.contact.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Minnesota',
    addressCountry: 'US',
  },
  areaServed: site.region.label,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-bone">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-graphite-900 focus:px-4 focus:py-2 focus:text-bone"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCtaBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        {/* Google tag (gtag.js) — Google Ads, loads on every page */}
        <Script
          id="gtag-js"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18299727437"
        />
        <Script id="gtag-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18299727437');
          `}
        </Script>

        {/* Meta Pixel — loads on every page, tracks PageView */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '26894989456846389');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=26894989456846389&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* TikTok Pixel — loads on every page, tracks page views */}
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
              var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
              ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};

              ttq.load('D964SQJC77UDFHC6EN0G');
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>
      </body>
    </html>
  );
}
