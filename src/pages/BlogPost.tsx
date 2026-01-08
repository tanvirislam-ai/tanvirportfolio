import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Linkedin, Facebook } from "lucide-react";

// Mock blog post data
const postsData: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}> = {
  "1": {
    title: "10 Video Editing Tips Every Creator Should Know",
    excerpt: "Master the fundamentals of video editing with these essential tips that will elevate your content and streamline your workflow.",
    content: `
      <p>Video editing is both an art and a science. Whether you're just starting out or looking to refine your skills, these ten essential tips will help you create more polished, professional content.</p>

      <h2>1. Organize Your Footage First</h2>
      <p>Before you start editing, take the time to organize your footage into clearly labeled folders. Create bins for B-roll, interviews, music, and graphics. This upfront investment will save you hours of searching later.</p>

      <h2>2. Master Keyboard Shortcuts</h2>
      <p>Learning keyboard shortcuts is one of the fastest ways to speed up your editing workflow. Start with the basics like cutting (C), ripple delete, and timeline navigation. Gradually add more shortcuts as they become second nature.</p>

      <h2>3. Cut on Action</h2>
      <p>When transitioning between shots, try to cut during movement or action. This makes the edit feel more natural and helps maintain the viewer's engagement throughout the sequence.</p>

      <h2>4. Use the Right Frame Rate</h2>
      <p>Match your project settings to your footage's frame rate. If you're shooting at 24fps for a cinematic look, make sure your timeline reflects that. Mismatched frame rates can cause stuttering and other issues.</p>

      <h2>5. Color Correct Before Color Grading</h2>
      <p>Always start with correction before moving to creative grading. Balance your exposure, white balance, and saturation first. Then apply creative looks to achieve your desired aesthetic.</p>

      <h2>6. Audio is Half the Experience</h2>
      <p>Never underestimate the importance of audio. Clean up background noise, add room tone where needed, and ensure dialogue is clear. Good audio can make average footage feel professional.</p>

      <h2>7. Use Transitions Sparingly</h2>
      <p>Fancy transitions can be tempting, but straight cuts are often more effective. Reserve special transitions for moments that warrant them, like time jumps or scene changes.</p>

      <h2>8. Create a Rough Cut First</h2>
      <p>Don't get caught up in perfecting every detail during your first pass. Lay out your story with a rough cut, then refine in subsequent passes.</p>

      <h2>9. Take Breaks</h2>
      <p>Fresh eyes catch more mistakes. Step away from your edit regularly and come back with a clear perspective. You'll spot issues you missed before.</p>

      <h2>10. Learn from Others</h2>
      <p>Study the work of editors you admire. Analyze how they pace their cuts, handle transitions, and build tension. Every video you watch is an opportunity to learn.</p>

      <p>Remember, great editing is invisible. When viewers are so engrossed in the content that they don't notice the cuts, you've done your job well.</p>
    `,
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=600&fit=crop",
    category: "Video Editing",
    author: "John Doe",
    date: "January 15, 2024",
    readTime: "8 min read",
  },
};

const BlogPost = () => {
  const { id } = useParams();
  const post = postsData[id || "1"] || postsData["1"];

  return (
    <Layout>
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Button variant="ghost" asChild>
          <Link to="/blog" className="flex items-center gap-2">
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Article */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-12">
              <span className="text-primary text-sm font-medium mb-4 block">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-8 border-b border-border">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  {post.readTime}
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="aspect-video rounded-2xl overflow-hidden mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg prose-invert max-w-none mb-12
                prose-headings:font-display prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share */}
            <div className="pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <span className="font-medium flex items-center gap-2">
                  <Share2 size={18} />
                  Share this article
                </span>
                <div className="flex gap-2">
                  {[Twitter, Linkedin, Facebook].map((Icon, index) => (
                    <button
                      key={index}
                      className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      <Icon size={18} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
