import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Tech from "./Components/Technologies";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="overflow-x-hidden antialiased text-stone-300">
      <div className="fixed inset-0 -z-10">
      
      {/* the background */}
      <div className="relative w-full h-full bg-black">
        <div className="absolute bottom-0 left-0 right-0
         top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,
         transparent_1px),linear-gradient(to_bottom,#8080800a_1px,
         transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-[-10%] 
        h-[1000px] w-[1000px] rounded-full 
        bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>

         <div className="container px-8 mx-auto">
          <Navbar/>
          <Hero/>
          <Tech/>
          <Projects/>
          <Experience/>
          <Contact/>
          </div>

    </div>
  )
}

export default App