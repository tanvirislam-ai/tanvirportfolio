import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicesOverview />
      <FeaturedWork />
      <AboutPreview />
      <Testimonials />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
