import { Link } from "react-router-dom";
import { Video, Sparkles, Palette, Code, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video editing for commercials, documentaries, social media content, and more.",
    color: "from-rose-500 to-orange-500",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description: "Eye-catching animations, logo reveals, title sequences, and visual effects.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Brand identity, marketing materials, social media graphics, and print design.",
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with the latest technologies.",
    color: "from-yellow-500 to-lime-500",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            What I Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Services That Drive Results
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to completion, I offer a full suite of creative services 
            to help brands tell their stories and achieve their goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to="/services"
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-6`}>
                <service.icon className="w-full h-full text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold mb-3 flex items-center gap-2">
                {service.title}
                <ArrowUpRight 
                  size={20} 
                  className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" 
                />
              </h3>
              <p className="text-muted-foreground">{service.description}</p>

              {/* Hover Gradient */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
