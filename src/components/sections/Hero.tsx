import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import tanvirPhoto from "@/assets/tanvir-photo.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for freelance work</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 animate-fade-up stagger-1">
              Hi, I'm Tanvir
              <br />
              <span className="text-gradient">Creative</span>
              <br />
              Professional
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-up stagger-2">
              A multi-disciplinary creative professional specializing in video editing, 
              motion graphics, graphic design, and web development. Transforming ideas 
              into compelling visual stories.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-up stagger-3">
              <Button variant="hero" size="xl" asChild>
                <Link to="/portfolio" className="flex items-center gap-2">
                  View My Work
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="https://youtu.be/your-showreel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Play size={20} />
                  Watch Showreel
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border animate-fade-up stagger-4">
              {[
                { value: "2+", label: "Years Experience" },
                { value: "50+", label: "Projects Completed" },
                { value: "10+", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block animate-fade-up stagger-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-orange rounded-3xl blur-2xl opacity-20" />
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-2 border-primary/20">
                <img
                  src={tanvirPhoto}
                  alt="Tanvir Islam"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl p-4 shadow-card">
                <div className="text-2xl font-display font-bold text-gradient">2+</div>
                <div className="text-xs text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
