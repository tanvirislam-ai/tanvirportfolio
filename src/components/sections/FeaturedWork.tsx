import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredProjects = [
  {
    id: 1,
    title: "Brand Film for TechStartup",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
    tags: ["Commercial", "Brand Story"],
  },
  {
    id: 2,
    title: "Motion Identity System",
    category: "Motion Graphics",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    tags: ["Animation", "Branding"],
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["React", "E-commerce"],
  },
  {
    id: 4,
    title: "Luxury Brand Guidelines",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    tags: ["Branding", "Print"],
  },
];

export function FeaturedWork() {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Featured Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              Selected Projects
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/portfolio" className="flex items-center gap-2">
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
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

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-primary text-sm font-medium mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl md:text-2xl font-display font-semibold mb-3 flex items-center gap-2">
                  {project.title}
                  <ExternalLink 
                    size={20} 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  />
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
  );
}
