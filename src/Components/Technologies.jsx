import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-4xl text-center">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>
        <div className="p-4">
            <TbBrandNextjs className="text-7xl "/>
        </div>
        <div className="p-4">
            <SiMongodb className="text-7xl text-cyan-500"/>
        </div>
        <div className="p-4">
            <DiRedis className="text-red-700 text-7xl"/>
        </div>
        <div className="p-4">
            <FaNodeJs className="text-green-500 text-7xl"/>
        </div>
        <div className="p-4">
            <BiLogoPostgresql className="text-sky-700 text-7xl"/>
        </div>
 
        
      </div>
    </div>
  )
}

export default Technologies
