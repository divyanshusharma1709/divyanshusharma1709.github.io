import Hero from "./Hero";
import Projects from "./Projects";
import Honors from "./Honors";
import Publications from "./Publications";
import Contact from "./Contact";
import Footer from "./Footer";
import Timeline from "./Timeline";
import Featured from "./Featured";

function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Featured />
      <Timeline />
      <Projects />
      <Honors />
      <Publications />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;
