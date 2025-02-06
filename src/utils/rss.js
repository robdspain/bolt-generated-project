import { Feed } from 'feed';

export function generateRssFeed(posts) {
  const feed = new Feed({
    title: "Behavior School Blog",
    description: "Latest insights and strategies for school-based behavior professionals",
    id: "https://behaviorschool.com/",
    link: "https://behaviorschool.com/",
    language: "en",
    image: "https://behaviorschool.com/logo.png",
    favicon: "https://behaviorschool.com/favicon.ico",
    copyright: "All rights reserved 2024, Behavior School",
    author: {
      name: "Rob Spain",
      email: "rob@behaviorschool.com",
      link: "https://behaviorschool.com/about"
    }
  });

  posts.forEach(post => {
    feed.addItem({
      title: post.title,
      id: post.id,
      link: `https://behaviorschool.com/blog/${post.slug}`,
      description: post.excerpt,
      content: post.content,
      author: [
        {
          name: "Rob Spain",
          email: "rob@behaviorschool.com",
          link: "https://behaviorschool.com/about"
        }
      ],
      date: new Date(post.date)
    });
  });

  return feed.rss2();
}
