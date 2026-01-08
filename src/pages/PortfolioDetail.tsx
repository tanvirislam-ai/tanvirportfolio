import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Calendar, Clock, ExternalLink, Tag } from "lucide-react";

// Mock project data
const projectsData: Record<string, {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  client: string;
  date: string;
  duration: string;
  tools: string[];
  gallery: string[];
}> = {
  "1": {
    title: "Brand Film for TechStartup",
    category: "Video Editing",
    description: "A compelling brand film that showcases the innovative spirit and cutting-edge technology of a Silicon Valley startup. The project involved extensive interviews with the founding team, B-roll footage of their product in action, and a carefully crafted narrative that resonates with their target audience of tech-savvy investors and early adopters.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=800&fit=crop",
    tags: ["Commercial", "Brand Story", "Corporate"],
    client: "TechStartup Inc.",
    date: "January 2024",
    duration: "4 weeks",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    gallery: [
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
    ],
  },
  "2": {
    title: "Motion Identity System",
    category: "Motion Graphics",
    description: "A comprehensive motion identity system for an innovative brand looking to establish a dynamic visual presence. The project included animated logo variations, transition effects, social media templates, and brand guidelines for motion applications.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
    tags: ["Animation", "Branding", "Identity"],
    client: "Innovate Studio",
    date: "December 2023",
    duration: "6 weeks",
    tools: ["After Effects", "Cinema 4D", "Illustrator"],
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    ],
  },
};

const PortfolioDetail = () => {
  const { id } = useParams();
  const project = projectsData[id || "1"] || projectsData["1"];

  return (
    <Layout>
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Button variant="ghost" asChild>
          <Link to="/portfolio" className="flex items-center gap-2">
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>
        </Button>
      </div>

      {/* Hero */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                {project.title}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Meta */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Calendar size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Date</div>
                    <div className="font-medium">{project.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Clock size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                    <div className="font-medium">{project.duration}</div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <Tag size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Tags</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-lg bg-secondary text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <div className="text-sm text-muted-foreground mb-3">Tools Used</div>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Image */}
            <div className="aspect-video rounded-2xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display font-bold mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <div key={index} className="aspect-video rounded-xl overflow-hidden">
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Button variant="outline" asChild>
              <Link to="/portfolio" className="flex items-center gap-2">
                <ArrowLeft size={18} />
                All Projects
              </Link>
            </Button>
            <Button variant="hero" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Start a Project
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioDetail;
