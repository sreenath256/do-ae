import { Poppins, Figtree } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "./components";
import SmoothScrollProvider from "./components/smoothProvider";
import InitialLoader from "./components/ui/InitialLoader";
import Script from "next/script"; // <-- import Script

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
});

// Metadata config
export const metadata = {
  metadataBase: new URL("https://dostudio.ae"),
  title: "Digital Marketing Agency in United Arab Emirates",
  description: "Digital Marketing and Branding agency in Calicut United Arab Emirates",
  openGraph: {
    title: "Digital Marketing Agency in United Arab Emirates",
    description: "Digital Marketing and Branding agency in Calicut United Arab Emirates",
    url: "https://dostudio.ae",
    siteName: "Do Studio",
    images: [
      {
        url: "https://res.cloudinary.com/djswkzoth/image/upload/v1737185612/metaicon_t4u5lc.png",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Agency in UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/djswkzoth/image/upload/v1737185612/metaicon_t4u5lc.png",
        sizes: "any",
      },
      {
        url: "https://res.cloudinary.com/djswkzoth/image/upload/v1737185612/metaicon_t4u5lc.png",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "https://res.cloudinary.com/djswkzoth/image/upload/v1737185612/metaicon_t4u5lc.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "https://res.cloudinary.com/djswkzoth/image/upload/v1737185612/metaicon_t4u5lc.png",
      },
    ],
  },
  other: {
    "google-site-verification": "wuc8hNhLhlQ5HXZintLe432AsTtB2vGNLdITqcDzR8U",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${figtree.className} antialiased min-h-screen flex flex-col justify-between`}
        cz-shortcut-listen="true"
      >
        {/* Google Tag Manager (GTM) script */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TPMXQX2N');
          `}
        </Script>
          <SmoothScrollProvider>
        <InitialLoader>
          <Header />
          {children}
          <Footer />
        </InitialLoader>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
