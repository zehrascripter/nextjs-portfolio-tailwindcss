import About from "./components/about";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Projects from "./components/project";
import Skills from "./components/skills";

export default function Home() {
  return (
<div>
  <Hero/>
  <About/>
  <Skills/>
  <Projects/>
  <Contact/>
</div>
  );
}
