import { supabase } from '../config/supabase';
import { v4 as uuidv4 } from 'uuid';

// Posts
export const getPosts = async () => {
  const { data, error } = await supabase
    .from('posts')
    .select('*, author:auth.users(name)')
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (error) throw error;
  return data;
};

export const getPostBySlug = async (slug) => {
  const { data, error } = await supabase
    .from('posts')
    .select('*, author:auth.users(name)')
    .eq('slug', slug)
    .single();

  if (error) throw error;
  return data;
};

export const createPost = async (postData) => {
  const { data, error } = await supabase
    .from('posts')
    .insert([
      {
        ...postData,
        author_id: supabase.auth.user().id,
        slug: generateSlug(postData.title)
      }
    ])
    .single();

  if (error) throw error;
  return data;
};

export const updatePost = async (id, postData) => {
  const { data, error } = await supabase
    .from('posts')
    .update(postData)
    .eq('id', id);

  if (error) throw error;
  return data;
};

// Images
export const uploadImage = async (file) => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${uuidv4()}.${fileExt}`;
  const filePath = `${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('blog-images')
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const { data: { publicUrl }, error: urlError } = supabase.storage
    .from('blog-images')
    .getPublicUrl(filePath);

  if (urlError) throw urlError;

  const { data: imageData, error: dbError } = await supabase
    .from('images')
    .insert([
      {
        url: publicUrl,
        filename: fileName,
        content_type: file.type,
        size: file.size,
        author_id: supabase.auth.user().id
      }
    ])
    .single();

  if (dbError) throw dbError;
  return imageData;
};

// Tags
export const getTags = async () => {
  const { data, error } = await supabase
    .from('tags')
    .select('*')
    .order('name');

  if (error) throw error;
  return data;
};

export const createTag = async (name) => {
  const { data, error } = await supabase
    .from('tags')
    .insert([
      {
        name,
        slug: generateSlug(name)
      }
    ])
    .single();

  if (error) throw error;
  return data;
};

// Helpers
const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};
