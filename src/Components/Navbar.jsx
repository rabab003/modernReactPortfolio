import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
// import {FaSquareXTwitter} from "react-icons/fa";

function Navbar() {
  return (
    <nav className ="flex items-center justify-between py-6">
      <div className="flex items-center flex-shrink-0">
        <a href="/" aria-label="Home" className="mx-4 text-2xl md:text-4xl">
        ML
        </a>
      </div>

      <div className="flex items-center justify-center gap-4 m-8 text-2xl">
        <a href="https://ww.linkedin.com/in/your-linkedin-porofile" target="_blank"
        rel="noopener noreferrer" 
        aria-label ="linkedin">
          <FaLinkedin/>
         </a>

        <a href="https://ww.github.com/in/your-github-porofile" target="_blank"
        rel="noopener noreferrer" 
        aria-label ="github">
          <FaGithub/>
        </a>

        <a href="https://ww.instagram.com/in/your-instagram-porofile" target="_blank"
        rel="noopener noreferrer" 
        aria-label ="instagram">
          <FaInstagram/>
        </a>
        

        {/* <a href="https://ww.twitter.com/in/your-twitter-porofile" target="_blank"
        rel="noopener noreferrer" 
        aria-label ="twitter">
          <FaSquareXTwitter/>
        </a> */}

      </div>
    </nav>
  )
}

export default Navbar