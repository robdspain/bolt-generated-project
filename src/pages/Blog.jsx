import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const BlogSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const BlogPost = styled.article`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: ${props => props.theme.shadows.md};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PostTitle = styled(Link)`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: block;

  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const PostMeta = styled.div`
  color: ${props => props.theme.colors.text};
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
`;

const PostExcerpt = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ReadMore = styled(Link)`
  color: ${props => props.theme.colors.accent};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const RSSLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.accent};
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 2rem;

  &:hover {
    text-decoration: underline;
  }
`;

function Blog() {
  // This would normally come from your backend/CMS
  const posts = [
    {
      id: 1,
      title: "Getting Started with Behavior Management Systems",
      date: "2024-01-15",
      excerpt: "Learn how to implement effective behavior management systems in your school...",
      slug: "getting-started-behavior-management"
    },
    // Add more posts here
  ];

  return (
    <BlogSection>
      <h1>Blog</h1>
      <RSSLink href="/rss.xml" target="_blank">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm1.5 2.5c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1 0-2zm0 4a6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1 0-2zm.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
        </svg>
        RSS Feed
      </RSSLink>
      
      {posts.map(post => (
        <BlogPost key={post.id}>
          <PostTitle to={`/blog/${post.slug}`}>{post.title}</PostTitle>
          <PostMeta>
            <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
          </PostMeta>
          <PostExcerpt>{post.excerpt}</PostExcerpt>
          <ReadMore to={`/blog/${post.slug}`}>Read More →</ReadMore>
        </BlogPost>
      ))}
    </BlogSection>
  );
}

export default Blog;
