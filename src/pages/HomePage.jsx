import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Skills from "../components/home/Skills";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Architecture from "../components/home/Architecture";
import Contact from "../components/home/Contact";

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Architecture />
      <Contact />
    </main>
  );
}

export default HomePage;
