import { Link } from "react-router-dom";
import { ArrowRight, Award, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutPreview() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face"
                alt="John Doe - Creative Professional"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 md:right-8 bg-card border border-border rounded-2xl p-6 shadow-card max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-orange flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-display font-bold">15+</div>
                  <div className="text-sm text-muted-foreground">Awards Won</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Recognized for excellence in creative design and innovation.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
            <div className="absolute top-1/2 -left-8 w-16 h-16 bg-primary/20 rounded-full blur-2xl" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Crafting Digital Stories Since 2016
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I'm a passionate creative professional based in Los Angeles, dedicated to 
              transforming ideas into compelling visual experiences. With over 8 years 
              of experience across video, motion, design, and development, I bring a 
              unique multi-disciplinary approach to every project.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-10">
              {[
                { icon: Briefcase, text: "8+ years of professional experience" },
                { icon: GraduationCap, text: "Bachelor's in Digital Media Arts" },
                { icon: Award, text: "Multiple international design awards" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <Link to="/about" className="flex items-center gap-2">
                More About Me
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
