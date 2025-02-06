import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import styled from 'styled-components';
import { uploadImage } from '../../utils/supabase';
import EditorToolbar from './EditorToolbar';

const EditorWrapper = styled.div`
  border: 1px solid ${props => props.theme.colors.neutral.medium};
  border-radius: 0.5rem;
  overflow: hidden;
`;

const StyledEditorContent = styled(EditorContent)`
  .ProseMirror {
    padding: 1rem;
    min-height: 300px;
    
    &:focus {
      outline: none;
    }

    > * + * {
      margin-top: 0.75em;
    }

    h1 {
      font-size: 2em;
      font-weight: bold;
      margin-bottom: 0.5em;
    }

    h2 {
      font-size: 1.5em;
      font-weight: bold;
      margin-bottom: 0.5em;
    }

    p {
      margin: 0.5em 0;
    }

    ul, ol {
      padding: 0 1rem;
    }

    img {
      max-width: 100%;
      height: auto;
      border-radius: 0.5rem;
      margin: 1rem 0;
    }

    blockquote {
      border-left: 3px solid ${props => props.theme.colors.primary};
      padding-left: 1rem;
      color: ${props => props.theme.colors.text};
    }

    code {
      background: ${props => props.theme.colors.neutral.light};
      padding: 0.2rem 0.4rem;
      border-radius: 0.25rem;
    }
  }
`;

const ImageUploadInput = styled.input`
  display: none;
`;

function RichTextEditor({ content, onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({
        openOnClick: false,
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  const handleImageUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const imageData = await uploadImage(file);
      editor?.chain().focus().setImage({ src: imageData.url }).run();
    } catch (error) {
      console.error('Error uploading image:', error);
      // Add your error handling here
    }
  };

  if (!editor) return null;

  return (
    <EditorWrapper>
      <EditorToolbar 
        editor={editor} 
        onImageUploadClick={() => document.getElementById('image-upload').click()} 
      />
      <StyledEditorContent editor={editor} />
      <ImageUploadInput
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
    </EditorWrapper>
  );
}

export default RichTextEditor;
