import { gql } from '@apollo/client';

// Fragment for blog fields
export const BLOG_FIELDS = gql`
  fragment BlogFields on Blog {
    id
    title
    slug
    content
    excerpt
    featuredImage
    featuredImageAlt
    authorName
    authorTitle
    status
    viewCount
    likeCount
    commentCount
    metaDescription
    ogTitle
    ogDescription
    ogImage
    canonicalUrl
    publishedAt
    createdAt
    updatedAt
    authorName
    authorTitle
    category {
      id
      name
      slug
    }
    tags {
      id
      name
      slug
    }
  }
`;

// Get all blogs with filters (for listing pages)
export const GET_BLOGS = gql`
  ${BLOG_FIELDS}
  query GetBlogs($filters: BlogFiltersInput) {
    blogs(filters: $filters) {
      blogs {
        ...BlogFields
      }
      total
      page
      limit
      totalPages
    }
  }
`;

// Get single blog by slug (for blog post page)
export const GET_BLOG_BY_SLUG = gql`
  ${BLOG_FIELDS}
  query GetBlogBySlug($slug: String!) {
    blogBySlug(slug: $slug) {
      ...BlogFields
    }
  }
`;

// Get related blogs
export const GET_RELATED_BLOGS = gql`
  query GetRelatedBlogs($blogId: Int!, $limit: Int) {
    relatedBlogs(blogId: $blogId, limit: $limit) {
      id
      title
      slug
      excerpt
      featuredImage
      featuredImageAlt
      authorName
      authorTitle
      publishedAt
      viewCount
      likeCount
      commentCount
      category {
        id
        name
        slug
      }
      tags {
        id
        name
        slug
      }
    }
  }
`;

// Get all categories
export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
      slug
      description
      createdAt
    }
  }
`;

// Get all tags
export const GET_TAGS = gql`
  query GetTags {
    tags {
      id
      name
      slug
      createdAt
    }
  }
`;

// Track blog view
export const TRACK_BLOG_VIEW = gql`
  mutation TrackBlogView($blogId: Int!) {
    trackBlogView(blogId: $blogId)
  }
`;

// Toggle blog reaction (like)
export const TOGGLE_BLOG_REACTION = gql`
  mutation ToggleBlogReaction($input: CreateReactionInput!) {
    toggleBlogReaction(input: $input) {
      id
      reactionType
    }
  }
`;

// Get comments for a blog
export const GET_BLOG_COMMENTS = gql`
  query GetBlogComments($blogId: Int!) {
    comments(blogId: $blogId) {
      id
      content
      createdAt
      user {
        id
        firstName
        lastName
      }
    }
  }
`;

// Create comment
export const CREATE_COMMENT = gql`
  mutation CreateComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
      content
      createdAt
    }
  }
`;
