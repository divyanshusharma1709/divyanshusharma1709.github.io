import placeholder from "/placeholder.png"
import { motion } from "framer-motion"
import { ImageCollage } from "./Collage.jsx"

import a2i_icon from "/a2i_icon.webp";
import train from "/train.webp";
import sound from "/sound.gif";
import cat from "/cat.webp"
import bubbles from "/bubbling.webp"

import space_adv from "/space_adv.png"
import sp_ad_1 from "/sp_ad_1.png"
import sp_ad_2 from "/sp_ad_2.png"
import sp_ad_3 from "/sp_ad_3.png"
import sp_ad_4 from "/sp_ad_4.png"

const projectColors = ["#210f04", "#021631", "#ffa600", "#003f5c"];
const projectTextColors = ["#ffffff", "#ffffff", "#ffa600", "#003f5c"];



const projectsData = [
  {
    backColor: "7a5195",
    image: placeholder,
    title: "Look at that Sound",
    description: "I trained a machine learning model to convert audio to an intermediate representation, and then use it to generate an image using generative AI models (Stable Diffusion)",
    technologies: ["PyTorch", "Python"],
    icons: [a2i_icon, train, sound, cat, bubbles], 
    link: "https://divyanshusharma17-audio2image-demo.hf.space/"
  },
  {
    backColor: "7a5195",
    image: placeholder,
    title: "Space Adventures",
    description: "Join Starby on his adventures on an outer space planet with many threats - like ghosts, aliens and... pitfalls. Features a level where you have to survive an onslaught by a UFO.",
    technologies: ["HTML/CSS", "JavaScript", "OpenGL"],
    icons: [space_adv, sp_ad_1, sp_ad_2, sp_ad_3, sp_ad_4],
    link: "/space_adv/index.html"
  },
  // {
  //   backColor: "7a5195",
  //   image: placeholder,
  //   title: "Project 3",
  //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto iure esse velit doloribus, vitae harum enim, itaque architecto voluptatem sed dolorum dicta a beatae nesciunt ducimus aspernatur, est illum fugit.",
  //   technologies: ["PyTorch", "Python"],
  //   icons: [a2i_icon, train, sound, cat, bubbles],
  //   link: "https://divyanshusharma17-audio2image-demo.hf.space/"
  // },
  // {
  //   backColor: "7a5195",
  //   image: placeholder,
  //   title: "Project 4",
  //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto iure esse velit doloribus, vitae harum enim, itaque architecto voluptatem sed dolorum dicta a beatae nesciunt ducimus aspernatur, est illum fugit.",
  //   technologies: ["PyTorch", "Python"],
  //   icons: [a2i_icon, train, sound, cat, bubbles],
  //   link: "https://divyanshusharma17-audio2image-demo.hf.space/"
  // }
].map((project, index) => ({
  ...project,
  backColor: projectColors[index % projectColors.length],
  nextColor: projectColors[(index % projectColors.length) + 1],
  textColor: projectTextColors[index % projectColors.length] // Assign a color cyclically
}));

const ScrollReveal = ({children}) => {
  return (
    <motion.div
    initial = {{opacity: 0, y: 100}}
    whileInView = {{opacity: 1, y: 0}}
    viewport = {{once: true}}
    transition = {{duration: 0.8}}
    >
      {children}
    </motion.div>
  )
}

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      {/* Ensure this div is relative so the SVG stays within it */}
      <div className="relative w-full" style={{ backgroundColor: project.backColor}}>
        {/* Give this SVG current color */}
      {/* <svg className="wave wave-bottom w-full" viewBox="0 0 4323 700" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4323 34.5566C4323 252.392 4225.5 548.808 3509.5 548.808C3135 548.808 3153.5 368.696 2564.5 393C2119.77 411.351 1139.99 506.534 733.498 548.808C327.002 591.082 0 561.739 0 561.739V700H4323C4323 700 4323 -183.279 4323 34.5566Z" fill={project.backColor}></path></svg> */}

        <div className="flex flex-col items-center gap-0 md:flex-row md:gap-0">
          
          <div className="flex flex-col gap-0 p-24">
            <div className="flex flex-col gap-3">
              <div className="sm:text-xl md:text-2xl lg:text-4xl font-semibold opacity-90" style={{color: project.textColor}}>{project.title}</div>
              <p className="text-gray-400  md:w-[200px] lg:w-[600px] md:text-sm lg:text-base">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-0">
              {project.technologies.map((tech, index) => (
                <span key={index} className="rounded-lg bg-black m-3 -ml-1 p-3">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-0 mt-3">
                <a href={project.link} target="blank"><u>Try it out here!</u></a>
            </div>
          </div>
          <div className="sm:h-3/4 lg:ml-36 lg:w-full lg:h-full flex flex-col items-center gap-0 md:flex-row md:gap-0">
          <ImageCollage images={project.icons || []}/>
          </div>
          {/* <img src={placeholder} alt="" className="w-full mr-12 cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"/> */}

        </div>
      </div>
      {/* Give this SVG color of next project */}
      <svg className="wave wave-bottom w-full" viewBox="0 0 4323 700" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.72978e-08 34.5567C-0.00398254 252.392 251.499 426.462 957.999 515.983C2043 640.319 1870.5 376.296 2459.5 400.6C2904.23 418.951 3183 506.534 3589.5 548.808C3996 591.082 4323 561.739 4323 561.739V700H4.72978e-08C4.72978e-08 700 0.00398264 -183.279 4.72978e-08 34.5567Z" fill={project.nextColor}></path></svg>
            
    </ScrollReveal>
  );
};


const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16">
      <ScrollReveal>
      <h1 className="text-4xl font-light text-black md:text-6xl">
        My Projects
      </h1>
      </ScrollReveal>
      <div className="flex w-full flex-col gap-0 text-white">
        {
          projectsData.map((project, index) => (
            <div key={index} style={{backgroundColor: project.backColor}}>
              <ProjectCard key={index} project={project}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects