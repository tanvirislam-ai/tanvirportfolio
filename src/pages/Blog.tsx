import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Video Editing Tips Every Creator Should Know",
    excerpt: "Master the fundamentals of video editing with these essential tips that will elevate your content and streamline your workflow.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=500&fit=crop",
    category: "Video Editing",
    author: "John Doe",
    date: "Jan 15, 2024",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "The Future of Motion Design in 2024",
    excerpt: "Explore the latest trends and technologies shaping the motion design industry, from AI-powered tools to immersive 3D experiences.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
    category: "Motion Graphics",
    author: "John Doe",
    date: "Jan 10, 2024",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Building a Brand Identity That Stands Out",
    excerpt: "Learn the key principles of creating a memorable brand identity that resonates with your target audience and sets you apart.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    category: "Graphic Design",
    author: "John Doe",
    date: "Jan 5, 2024",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Why React is Still the King of Frontend",
    excerpt: "An in-depth look at why React continues to dominate the frontend development landscape and what makes it so powerful.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
    category: "Web Development",
    author: "John Doe",
    date: "Dec 28, 2023",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Color Grading: From Good to Cinematic",
    excerpt: "Discover the techniques professional colorists use to transform ordinary footage into cinematic masterpieces.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=500&fit=crop",
    category: "Video Editing",
    author: "John Doe",
    date: "Dec 20, 2023",
    readTime: "9 min read",
  },
  {
    id: 6,
    title: "Mastering Typography in Design",
    excerpt: "Typography can make or break a design. Learn the fundamentals of choosing and pairing fonts for maximum impact.",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=500&fit=crop",
    category: "Graphic Design",
    author: "John Doe",
    date: "Dec 15, 2023",
    readTime: "5 min read",
  },
];

const Blog = () => {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Insights & <span className="text-gradient">Ideas</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Thoughts on design, development, and the creative process. 
              Tips, tutorials, and industry insights.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Link
            to={`/blog/${featuredPost.id}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/30 transition-colors duration-300"
          >
            {/* Image */}
            <div className="aspect-video lg:aspect-auto overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="text-primary text-sm font-medium mb-4">
                {featuredPost.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  {featuredPost.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {featuredPost.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  {featuredPost.readTime}
                </div>
              </div>

              <div className="flex items-center gap-2 text-primary font-medium">
                Read Article
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display font-bold mb-12">Recent Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors duration-300"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-primary text-sm font-medium mb-2 block">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-display font-semibold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
