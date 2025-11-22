import Script from 'next/script';

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BNG Logistics Network",
    "url": "https://bnglogisticsnetwork.com/",
    "logo": "https://bnglogisticsnetwork.com/BNG%20Logo.png",
    "description": "A global logistics network connecting freight forwarders and supply-chain professionals worldwide through digital tools, verified partnerships, and secure communication.",
    "sameAs": []
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "BNG Logistics Network",
    "url": "https://bnglogisticsnetwork.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://bnglogisticsnetwork.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebPageSchema({ name, url, description, image }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": name,
    "url": url,
    "description": description,
    "image": image,
    "isPartOf": {
      "@type": "WebSite",
      "name": "BNG Logistics Network",
      "url": "https://bnglogisticsnetwork.com/"
    }
  };

  return (
    <Script
      id="webpage-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({ name, url, description, image, articleSection }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "name": name,
    "url": url,
    "description": description,
    "image": image,
    "articleSection": articleSection,
    "publisher": {
      "@type": "Organization",
      "name": "BNG Logistics Network",
      "url": "https://bnglogisticsnetwork.com/"
    }
  };

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ContactPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact BNG Logistics Network",
    "url": "https://bnglogisticsnetwork.com/contact",
    "description": "Contact the BNG Logistics Network team for support, membership details, and global logistics inquiries.",
    "image": "https://bnglogisticsnetwork.com/BNG%20Logo.png",
    "publisher": {
      "@type": "Organization",
      "name": "BNG Logistics Network",
      "url": "https://bnglogisticsnetwork.com/"
    }
  };

  return (
    <Script
      id="contactpage-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function AboutPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About BNG Logistics Network",
    "url": "https://bnglogisticsnetwork.com/about-us",
    "description": "Learn about BNG's mission, vision, and commitment to building a trusted global logistics network where freight forwarders connect, collaborate, and grow worldwide.",
    "image": "https://bnglogisticsnetwork.com/BNG%20Logo.png",
    "publisher": {
      "@type": "Organization",
      "name": "BNG Logistics Network",
      "url": "https://bnglogisticsnetwork.com/"
    }
  };

  return (
    <Script
      id="aboutpage-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OfferCatalogSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "BNG Membership Pricing",
    "url": "https://bnglogisticsnetwork.com/pricing",
    "description": "Membership pricing plans for freight forwarders and logistics companies joining BNG Logistics Network.",
    "image": "https://bnglogisticsnetwork.com/BNG%20Logo.png",
    "provider": {
      "@type": "Organization",
      "name": "BNG Logistics Network",
      "url": "https://bnglogisticsnetwork.com/"
    }
  };

  return (
    <Script
      id="offercatalog-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function PrivacyPolicySchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy – BNG Logistics Network",
    "url": "https://bnglogisticsnetwork.com/privacy-policy",
    "description": "Privacy Policy outlining how BNG Logistics Network collects, manages, and protects user data across its global logistics platform.",
    "image": "https://bnglogisticsnetwork.com/BNG%20Logo.png",
    "publisher": {
      "@type": "Organization",
      "name": "BNG Logistics Network",
      "url": "https://bnglogisticsnetwork.com/"
    }
  };

  return (
    <Script
      id="privacypolicy-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
