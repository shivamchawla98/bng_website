import { GET_BLOGS, GET_CATEGORIES, GET_TAGS } from "@/lib/graphql/blog";
import client from "@/lib/apolloClient";

export default async function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001';
  
  try {
    // Fetch all published blogs
    const { data: blogsData } = await client.query({
      query: GET_BLOGS,
      variables: {
        filters: {
          status: 'PUBLISHED',
          page: 1,
          limit: 1000, // Adjust based on your needs
        },
      },
    });

    // Fetch all categories
    const { data: categoriesData } = await client.query({
      query: GET_CATEGORIES,
    });

    // Fetch all tags
    const { data: tagsData } = await client.query({
      query: GET_TAGS,
    });

    const blogs = blogsData?.blogs?.blogs || [];
    const categories = categoriesData?.categories || [];
    const tags = tagsData?.tags || [];

    // Generate blog post URLs
    const blogUrls = blogs.map((blog) => ({
      url: `${siteUrl}/blog/${blog.slug}`,
      lastModified: blog.updatedAt,
      changeFrequency: 'weekly',
      priority: 0.7,
    }));

    // Generate category URLs
    const categoryUrls = categories.map((category) => ({
      url: `${siteUrl}/blog/category/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    }));

    // Generate tag URLs
    const tagUrls = tags.map((tag) => ({
      url: `${siteUrl}/blog/tag/${tag.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    }));

    // Static pages
    const staticPages = [
      {
        url: siteUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
      },
      {
        url: `${siteUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      },
      {
        url: `${siteUrl}/about-us`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${siteUrl}/pricing`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${siteUrl}/contact`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: `${siteUrl}/benefit`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: `${siteUrl}/freight-xchange`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: `${siteUrl}/business-xchange`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
    ];

    return [...staticPages, ...blogUrls, ...categoryUrls, ...tagUrls];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    // Return basic sitemap if GraphQL fails
    return [
      {
        url: siteUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
      },
      {
        url: `${siteUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      },
    ];
  }
}
