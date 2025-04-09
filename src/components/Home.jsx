import Hero from "./Hero";
import Projects from "./Projects";
import Tech from "./Tech";
import Contact from "./Contact";
import Timeline from "./Timeline";

function Home() {
  return <>
  {/* <div className="fixed -z-10 h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div> */}
  <div className="fixed -z-10 h-screen w-full  bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
   
  <main className="flex flex-col items-center">
    <Hero/>
    <Tech/>
    <Timeline/>
    <Projects/>
    <Contact/>
  </main>
  </>
}
export default Home;
