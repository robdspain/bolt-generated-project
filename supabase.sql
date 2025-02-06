-- Create extensions
create extension if not exists "uuid-ossp";

-- Create posts table
create table public.posts (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text not null unique,
  content text not null,
  excerpt text,
  featured_image text,
  published_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  author_id uuid references auth.users(id),
  status text default 'draft' check (status in ('draft', 'published')),
  meta_description text,
  tags text[]
);

-- Create images table
create table public.images (
  id uuid default uuid_generate_v4() primary key,
  url text not null,
  filename text not null,
  content_type text not null,
  size integer not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  author_id uuid references auth.users(id)
);

-- Create tags table
create table public.tags (
  id uuid default uuid_generate_v4() primary key,
  name text not null unique,
  slug text not null unique,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create updated_at function
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Create triggers for updated_at
create trigger handle_posts_updated_at
  before update on public.posts
  for each row
  execute function public.handle_updated_at();

create trigger handle_images_updated_at
  before update on public.images
  for each row
  execute function public.handle_updated_at();

-- Enable Row Level Security
alter table public.posts enable row level security;
alter table public.images enable row level security;
alter table public.tags enable row level security;

-- Create policies for posts
create policy "Public posts are viewable by everyone"
on public.posts for select
using (status = 'published');

create policy "Authenticated users can insert posts"
on public.posts for insert
with check (auth.role() = 'authenticated');

create policy "Users can update own posts"
on public.posts for update
using (auth.uid() = author_id);

create policy "Users can delete own posts"
on public.posts for delete
using (auth.uid() = author_id);

-- Create policies for images
create policy "Images are publicly accessible"
on public.images for select
using (true);

create policy "Authenticated users can insert images"
on public.images for insert
with check (auth.role() = 'authenticated');

create policy "Users can update own images"
on public.images for update
using (auth.uid() = author_id);

create policy "Users can delete own images"
on public.images for delete
using (auth.uid() = author_id);

-- Create policies for tags
create policy "Tags are publicly accessible"
on public.tags for select
using (true);

create policy "Authenticated users can manage tags"
on public.tags for all
using (auth.role() = 'authenticated');

-- Create storage bucket
insert into storage.buckets (id, name, public)
values ('blog-images', 'blog-images', true);

-- Create storage policies
create policy "Images are publicly accessible"
on storage.objects for select
using ( bucket_id = 'blog-images' );

create policy "Authenticated users can upload images"
on storage.objects for insert
with check (
  bucket_id = 'blog-images'
  and auth.role() = 'authenticated'
);

create policy "Users can update own images"
on storage.objects for update
using (
  bucket_id = 'blog-images'
  and auth.uid() = owner
);

create policy "Users can delete own images"
on storage.objects for delete
using (
  bucket_id = 'blog-images'
  and auth.uid() = owner
);

-- Create indexes
create index posts_slug_idx on public.posts(slug);
create index posts_published_at_idx on public.posts(published_at);
create index posts_status_idx on public.posts(status);
create index posts_author_id_idx on public.posts(author_id);
create index tags_slug_idx on public.tags(slug);
create index images_author_id_idx on public.images(author_id);

-- Create helper function for generating slugs
create or replace function public.generate_slug(title text)
returns text as $$
declare
  slug text;
  base_slug text;
  counter integer := 1;
begin
  -- Convert to lowercase and replace spaces and special characters with hyphens
  base_slug := lower(regexp_replace(title, '[^a-zA-Z0-9\s]', '', 'g'));
  base_slug := regexp_replace(base_slug, '\s+', '-', 'g');
  
  -- Try the base slug first
  slug := base_slug;
  
  -- If slug exists, append numbers until we find a unique one
  while exists(select 1 from public.posts where slug = generate_slug.slug) loop
    slug := base_slug || '-' || counter;
    counter := counter + 1;
  end loop;
  
  return slug;
end;
$$ language plpgsql;

-- Add comment to explain the function
comment on function public.generate_slug is 'Generates a URL-friendly slug from a title, ensuring uniqueness';
