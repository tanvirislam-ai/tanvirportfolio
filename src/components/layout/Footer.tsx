import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Instagram, Dribbble, Youtube } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
  { name: "Dribbble", icon: Dribbble, url: "https://dribbble.com" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com" },
];

const footerLinks = {
  pages: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
  ],
  resources: [
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-orange flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-lg">TI</span>
              </div>
              <span className="font-display font-semibold text-lg">
                Tanvir<span className="text-primary">Islam</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Creative professional specializing in video editing, motion graphics, 
              graphic design, and web development. Let's bring your vision to life.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-display font-semibold mb-4">Pages</h4>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tanvir Islam. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed & Built with <span className="text-primary">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
