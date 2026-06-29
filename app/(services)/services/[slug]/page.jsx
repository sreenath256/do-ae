import { serviceData } from "../../../components/services/data";

import {
  Banner,
  About,
  Clients,
  Service,
  Ourworks,
  Faq,
  WhyUs,
  Process,
  CTA
} from "../../../components/services";
import { GetinTouch,Testimonials} from "../../../components";

export async function generateStaticParams() {
  return serviceData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = serviceData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | DoStudio",
      description: "The requested service could not be found.",
    };
  }

  // Use the specific seo.title, fallback to innertitle, fallback to capitalized title
  const title = service.seo?.title || service.innertitle || `${service.title.charAt(0).toUpperCase() + service.title.slice(1)} | DoStudio UAE`;
  const description = service.seo?.desc || service.desc;
  const url = `https://dostudio.ae/services/${slug}`;

  // Dynamically compile rich keywords based on the service and its sub-services
  const keywords = [
    service.title,
    ...(service.seo?.keywords ? [service.seo.keywords] : []),
    ...(service.seo?.title ? [service.seo.title] : []),
    ...(service.innertitle ? [service.innertitle] : []),
    ...(service.moreservices ? service.moreservices.map((s) => s.title) : []),
    "DoStudio",
    "Do Studio",
    "DoStudio Dubai",
    "DoStudio UAE",
    "digital agency dubai",
    "branding agency dubai",
    "web development dubai",
    "seo agency dubai",
    "social media marketing dubai"
  ].filter(Boolean);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Do Studio",
      images: [
        {
          url: "https://res.cloudinary.com/djswkzoth/image/upload/v1737185612/metaicon_t4u5lc.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://res.cloudinary.com/djswkzoth/image/upload/v1737185612/metaicon_t4u5lc.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = serviceData.find((s) => s.slug === slug);

  if (!service) {
    return <div className="p-6 text-center">Service Not Found</div>;
  }

  return (
    <div className="bg-white">
      <div className="w-11/12 mx-auto py-10 space-y-5">
        <Banner service={service} />
        {/*  */}
        <About service={service} />
        {/*  */}
        <Clients service={service} />
        {/*  */}
        <Service service={service} />
        {/*  */}
        <WhyUs service={service} />
        {/*  */}
        <Process service={service} />
        {/*  */}
        <CTA service={service} />
        {/*  */}
        <Faq service={service}/>
        {/*  */}
        {/* <Testimonials /> */}
      </div>
      {/*  */}
      <div className="bg-black rounded-[2rem] overflow-hidden">
        <GetinTouch />
      </div>
    </div>
  );
}
