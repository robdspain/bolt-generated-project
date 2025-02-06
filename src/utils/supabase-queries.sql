-- Run these queries in your Supabase SQL editor

-- Enable Row Level Security
alter table public.posts enable row level security;

-- Create auth policies
create policy "Public posts are viewable by everyone"
on public.posts for select
using (status = 'published');

create policy "Authenticated users can insert posts"
on public.posts for insert
with check (auth.role() = 'authenticated');

create policy "Users can update own posts"
on public.posts for update
using (auth.uid() = author_id);

-- Create storage bucket for blog images
insert into storage.buckets (id, name)
values ('blog-images', 'blog-images');

-- Set up storage policies
create policy "Images are publicly accessible"
on storage.objects for select
using ( bucket_id = 'blog-images' );

create policy "Authenticated users can upload images"
on storage.objects for insert
with check (
  bucket_id = 'blog-images'
  and auth.role() = 'authenticated'
);
