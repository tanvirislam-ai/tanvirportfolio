import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "John's work exceeded all our expectations. The video he produced for our product launch was instrumental in its success. His attention to detail and creative vision are unmatched.",
    author: "Sarah Mitchell",
    role: "Marketing Director",
    company: "TechCorp Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    quote: "Working with John was an absolute pleasure. He understood our brand instantly and delivered a motion graphics package that perfectly captured our identity.",
    author: "Michael Chen",
    role: "Creative Lead",
    company: "Innovate Studio",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    quote: "The website John built for us has transformed our online presence. It's fast, beautiful, and our conversion rates have increased by 40% since launch.",
    author: "Emily Rodriguez",
    role: "CEO",
    company: "Bloom & Co",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  };

  const next = () => {
    setCurrentIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-card/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            What Clients Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card border border-border rounded-3xl p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Quote className="w-8 h-8 text-primary" />
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pr-16">
              "{current.quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={current.image}
                  alt={current.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <div className="font-display font-semibold text-lg">{current.author}</div>
                  <div className="text-muted-foreground text-sm">
                    {current.role} at {current.company}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
