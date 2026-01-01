import { Navigation, Footer } from "@/components/layout";
import {
  Hero,
  CaseStudies,
  // Projects,
  Skills,
  Process,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <CaseStudies />
        {/* <Projects /> */}
        <Skills />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
