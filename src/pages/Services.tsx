import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Video, 
  Sparkles, 
  Palette, 
  Code, 
  ArrowRight, 
  Check,
  Clock,
  Zap,
  HeartHandshake
} from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Video Editing",
    description: "Transform raw footage into compelling visual stories that captivate your audience and drive engagement.",
    features: [
      "Commercial & promotional videos",
      "Documentary editing",
      "Social media content",
      "Color grading & correction",
      "Sound design & mixing",
      "Multi-camera editing",
    ],
    startingPrice: "$500",
    color: "from-rose-500 to-orange-500",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description: "Eye-catching animations and visual effects that bring your brand to life with dynamic, engaging motion.",
    features: [
      "Logo animations & reveals",
      "Title sequences & intros",
      "Explainer videos",
      "Social media animations",
      "Visual effects (VFX)",
      "2D & 3D animations",
    ],
    startingPrice: "$800",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Stunning visual designs that communicate your brand message and create lasting impressions.",
    features: [
      "Brand identity & logos",
      "Marketing materials",
      "Social media graphics",
      "Print design",
      "Packaging design",
      "Presentation design",
    ],
    startingPrice: "$400",
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Modern, responsive websites and web applications that deliver exceptional user experiences.",
    features: [
      "Custom website design",
      "React/Next.js development",
      "E-commerce solutions",
      "Landing pages",
      "Website maintenance",
      "Performance optimization",
    ],
    startingPrice: "$1,500",
    color: "from-yellow-500 to-lime-500",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We start with a deep dive into your goals, brand, and vision to understand exactly what you need.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "I develop a clear roadmap and creative direction tailored to your objectives and audience.",
  },
  {
    step: "03",
    title: "Creation",
    description: "The magic happens here – I bring your vision to life with meticulous attention to detail.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Final assets are delivered with revisions until you're 100% satisfied with the results.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Creative Solutions for <span className="text-gradient">Every Need</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              From video production to web development, I offer a comprehensive suite 
              of creative services to help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card border border-border rounded-3xl p-8 hover:border-primary/30 transition-colors duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4`}>
                    <service.icon className="w-full h-full text-primary-foreground" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Starting at</div>
                    <div className="text-2xl font-display font-bold text-gradient">
                      {service.startingPrice}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check size={18} className="text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contact" className="flex items-center justify-center gap-2">
                    Get a Quote
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Why Choose Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              What Sets Me Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Fast Turnaround",
                description: "Quick delivery without compromising on quality. Your time is valuable.",
              },
              {
                icon: Zap,
                title: "Premium Quality",
                description: "Every project receives my full attention and creative expertise.",
              },
              {
                icon: HeartHandshake,
                title: "Dedicated Support",
                description: "Clear communication and support throughout the entire process.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              My Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              How I Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border" />
                )}
                
                <div className="text-6xl font-display font-bold text-primary/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how I can help bring your vision to life. 
              Get in touch for a free consultation.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Hire Me Today
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
