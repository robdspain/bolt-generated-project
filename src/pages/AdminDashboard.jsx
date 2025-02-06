import React, { useState } from 'react';
import styled from 'styled-components';
import { marked } from 'marked';

const DashboardSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const EditorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Editor = styled.textarea`
  width: 100%;
  height: 500px;
  padding: 1rem;
  border: 1px solid ${props => props.theme.colors.neutral.medium};
  border-radius: 0.5rem;
  font-family: monospace;
  font-size: 1rem;
  resize: vertical;
`;

const Preview = styled.div`
  padding: 1rem;
  border: 1px solid ${props => props.theme.colors.neutral.medium};
  border-radius: 0.5rem;
  background: white;
  height: 500px;
  overflow-y: auto;
`;

const PublishButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background: ${props => props.theme.colors.earth.forest};
  }
`;

function AdminDashboard() {
  const [content, setContent] = useState('');

  const handlePublish = () => {
    // Add your publishing logic here
    console.log('Publishing:', content);
  };

  return (
    <DashboardSection>
      <h1>Admin Dashboard</h1>
      <EditorContainer>
        <div>
          <h3>Editor</h3>
          <Editor
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your blog post in Markdown..."
          />
        </div>
        <div>
          <h3>Preview</h3>
          <Preview
            dangerouslySetInnerHTML={{
              __html: marked(content)
            }}
          />
        </div>
      </EditorContainer>
      <PublishButton onClick={handlePublish}>
        Publish Post
      </PublishButton>
    </DashboardSection>
  );
}

export default AdminDashboard;
