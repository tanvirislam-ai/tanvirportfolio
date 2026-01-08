import { Link } from "react-router-dom";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <MessageCircle size={16} className="text-primary" />
            <span className="text-sm font-medium">Let's Work Together</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Have a Project in Mind?
            <br />
            <span className="text-gradient">Let's Create Something Amazing</span>
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            I'm always excited to take on new challenges and collaborate with 
            innovative brands. Whether you need a complete brand overhaul or 
            a single video edit, I'm here to help.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Start a Project
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="mailto:hello@johndoe.com" className="flex items-center gap-2">
                <Mail size={20} />
                hello@johndoe.com
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
