import type { Metadata } from "next"

/**
 * Generate consistent metadata for different pages
 */
export function generatePageMetadata(title: string, description: string, path: string): Metadata {
  const baseUrl = "https://hazem-ashraf.vercel.app"
  const fullUrl = `${baseUrl}${path}`

  return {
    title,
    description,
    canonical: fullUrl,
    openGraph: {
      title,
      description,
      url: fullUrl,
      type: "website",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/og-image.jpg`],
    },
  }
}

/**
 * Generate structured data (JSON-LD) for better SEO
 */
export function generateStructuredData(data: Record<string, unknown>) {
  return {
    __html: JSON.stringify(data),
  }
}

/**
 * Generate person schema for homepage
 */
export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hazem Ashraf",
    jobTitle: "Senior Frontend Developer",
    url: "https://hazem-ashraf.vercel.app",
    sameAs: ["https://github.com/hazemashraf", "https://linkedin.com/in/hazemashraf"],
    image: "https://hazem-ashraf.vercel.app/developer-portrait.png",
    location: {
      "@type": "Place",
      name: "Giza, Egypt",
    },
  }
}

/**
 * Generate breadcrumb schema
 */
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
