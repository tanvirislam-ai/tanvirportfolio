import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ExternalLink, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Video", "Motion", "Design", "Web"];

const projects = [
  {
    id: 1,
    title: "Brand Film for TechStartup",
    category: "Video",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
    tags: ["Commercial", "Brand Story"],
    isVideo: true,
  },
  {
    id: 2,
    title: "Motion Identity System",
    category: "Motion",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    tags: ["Animation", "Branding"],
    isVideo: true,
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    category: "Web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["React", "E-commerce"],
    isVideo: false,
  },
  {
    id: 4,
    title: "Luxury Brand Guidelines",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    tags: ["Branding", "Print"],
    isVideo: false,
  },
  {
    id: 5,
    title: "Documentary Short Film",
    category: "Video",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop",
    tags: ["Documentary", "Storytelling"],
    isVideo: true,
  },
  {
    id: 6,
    title: "App Launch Animation",
    category: "Motion",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    tags: ["Animation", "Product"],
    isVideo: true,
  },
  {
    id: 7,
    title: "Restaurant Branding",
    category: "Design",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    tags: ["Branding", "Hospitality"],
    isVideo: false,
  },
  {
    id: 8,
    title: "SaaS Dashboard",
    category: "Web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["UI/UX", "Dashboard"],
    isVideo: false,
  },
  {
    id: 9,
    title: "Music Video Production",
    category: "Video",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
    tags: ["Music Video", "Creative"],
    isVideo: true,
  },
  {
    id: 10,
    title: "Product 3D Animation",
    category: "Motion",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    tags: ["3D", "Product"],
    isVideo: true,
  },
  {
    id: 11,
    title: "Fashion Magazine Layout",
    category: "Design",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=600&fit=crop",
    tags: ["Editorial", "Print"],
    isVideo: false,
  },
  {
    id: 12,
    title: "Portfolio Website",
    category: "Web",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    tags: ["Portfolio", "React"],
    isVideo: false,
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              My Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Creative <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              A curated collection of my best work across video editing, motion graphics, 
              graphic design, and web development.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden hover-lift"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Video indicator */}
                {project.isVideo && (
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center">
                    <Play size={16} className="text-primary-foreground ml-0.5" fill="currentColor" />
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-primary text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-display font-semibold mb-3 flex items-center gap-2">
                    {project.title}
                    <ExternalLink size={18} />
                  </h3>
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-secondary/80 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
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

export default Portfolio;
