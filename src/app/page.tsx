import Hero from "@/components/sections/Hero";
import { Navbar } from "@/components/nav/Navbar";
import Services from "@/components/sections/Services";
import Offer from "@/components/sections/Offer";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Script from "next/script";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Cromo Studios",
    url: "https://cromostudios.com",
    description:
      "Transform your business with custom web development, e-commerce solutions, and digital excellence. London-based agency specializing in modern web design and development.",
    provider: {
      "@type": "Organization",
      name: "Cromo Studios",
      description: "Professional web development agency based in London",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressCountry: "GB",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+447724280130",
        contactType: "customer service",
        email: "info@cromostudios.com",
      },
      sameAs: [
        "https://instagram.com/cromostudios",
        "https://wa.me/447123456789",
      ],
    },
    offers: {
      "@type": "Offer",
      description: "Professional web development services",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "GBP",
      },
    },
  };

  return (
    <main className="relative bg-black pt-20">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <div className="w-full">
        <div className="relative">
          <Hero />
        </div>
        <Services />
        <Offer />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
