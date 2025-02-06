import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { marked } from 'marked';
import { format } from 'date-fns';

const PostSection = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const PostHeader = styled.header`
  margin-bottom: 3rem;
`;

const PostTitle = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const PostMeta = styled.div`
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
`;

const PostContent = styled.div`
  color: ${props => props.theme.colors.text};
  line-height: 1.8;
  
  h2, h3, h4 {
    color: ${props => props.theme.colors.primary};
    margin: 2rem 0 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  img {
    max-width: 100%;
    border-radius: 0.5rem;
    margin: 2rem 0;
  }

  pre {
    background: ${props => props.theme.colors.neutral.light};
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin: 1.5rem 0;
  }
`;

function BlogPost() {
  const { slug } = useParams();
  
  // This would normally fetch from your backend/CMS
  const post = {
    title: "Getting Started with Behavior Management Systems",
    date: "2024-01-15",
    content: "# Your markdown content here...",
  };

  return (
    <PostSection>
      <PostHeader>
        <PostTitle>{post.title}</PostTitle>
        <PostMeta>{format(new Date(post.date), 'MMMM d, yyyy')}</PostMeta>
      </PostHeader>
      <PostContent 
        dangerouslySetInnerHTML={{ 
          __html: marked(post.content) 
        }} 
      />
    </PostSection>
  );
}

export default BlogPost;
