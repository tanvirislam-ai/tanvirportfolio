import { Layout } from "@/components/layout/Layout";
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  CheckCircle2
} from "lucide-react";
import tanvirPhoto from "@/assets/tanvir-photo.jpg";

const tools = [
  { name: "Adobe Premiere Pro", category: "Video" },
  { name: "After Effects", category: "Motion" },
  { name: "DaVinci Resolve", category: "Video" },
  { name: "Photoshop", category: "Design" },
  { name: "Illustrator", category: "Design" },
  { name: "Figma", category: "Design" },
  { name: "React", category: "Web" },
  { name: "TypeScript", category: "Web" },
  { name: "Next.js", category: "Web" },
  { name: "Tailwind CSS", category: "Web" },
  { name: "Node.js", category: "Web" },
  { name: "Cinema 4D", category: "Motion" },
];

const experience = [
  {
    year: "2022 - Present",
    title: "Senior Creative Director",
    company: "Freelance",
    description: "Leading creative projects for global brands, managing end-to-end production from concept to delivery.",
  },
  {
    year: "2019 - 2022",
    title: "Motion Designer",
    company: "Creative Studio LA",
    description: "Created motion graphics and visual effects for commercials, music videos, and digital campaigns.",
  },
  {
    year: "2017 - 2019",
    title: "Video Editor",
    company: "MediaCorp Productions",
    description: "Edited documentary films, corporate videos, and social media content for various clients.",
  },
  {
    year: "2016 - 2017",
    title: "Junior Designer",
    company: "Design Agency NYC",
    description: "Started career working on brand identity projects and marketing materials.",
  },
];

const skills = [
  { name: "Video Editing", level: 95 },
  { name: "Motion Graphics", level: 90 },
  { name: "Graphic Design", level: 88 },
  { name: "Web Development", level: 85 },
  { name: "3D Animation", level: 75 },
  { name: "Sound Design", level: 70 },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
                About Me
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                I'm Tanvir Islam, a <span className="text-gradient">Creative Professional</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Based in Dhaka, Bangladesh, I've spent the last 2+ years helping brands 
                tell their stories through compelling visuals. My passion lies in 
                the intersection of technology and creativity, where I can push 
                boundaries and create experiences that resonate.
              </p>
              <div className="flex flex-wrap gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-primary" />
                  Mirpur 12, Dhaka, Bangladesh
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={18} className="text-primary" />
                  Available for Freelance
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src={tanvirPhoto}
                  alt="Tanvir Islam"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-6 shadow-card">
                <div className="text-3xl font-display font-bold text-gradient">2+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Skills & Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              What I Bring to the Table
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-orange rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Tools & Software
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Technologies I Work With
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="px-6 py-3 bg-card border border-border rounded-xl flex items-center gap-3 hover:border-primary/50 transition-colors duration-300"
              >
                <CheckCircle2 size={16} className="text-primary" />
                <span className="font-medium">{tool.name}</span>
                <span className="text-xs text-muted-foreground px-2 py-1 bg-secondary rounded-full">
                  {tool.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              My Professional Journey
            </h2>
          </div>

          <div className="max-w-3xl">
            {experience.map((item, index) => (
              <div key={item.year} className="relative pl-8 pb-12 last:pb-0">
                {/* Timeline line */}
                {index !== experience.length - 1 && (
                  <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-border" />
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm text-primary font-medium">{item.year}</span>
                </div>
                <h3 className="text-xl font-display font-semibold mb-1">{item.title}</h3>
                <p className="text-muted-foreground mb-2">{item.company}</p>
                <p className="text-muted-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Awards */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold">Bachelor of Arts in Digital Media</div>
                  <div className="text-muted-foreground">UCLA School of Arts</div>
                  <div className="text-sm text-muted-foreground">2012 - 2016</div>
                </div>
                <div>
                  <div className="font-semibold">Motion Design Certification</div>
                  <div className="text-muted-foreground">School of Motion</div>
                  <div className="text-sm text-muted-foreground">2018</div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Certifications</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold">Adobe Certified Professional</div>
                  <div className="text-muted-foreground">Video Editing</div>
                  <div className="text-sm text-muted-foreground">2024</div>
                </div>
                <div>
                  <div className="font-semibold">Motion Design Essentials</div>
                  <div className="text-muted-foreground">After Effects</div>
                  <div className="text-sm text-muted-foreground">2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
