import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa6";


function Header() {
	return (
		<header className="hidden md:flex p-4 max-w-screen-2xl mx-auto w-full justify-end items-center gap-10">
			<a href="#Work" className="text-xl font-medium" >Work</a>
			<a href="#Writing" className="text-xl font-medium">Writing</a>
			<a href="#About" className="text-xl font-medium">About</a>
			<a href="#Contact" className="text-xl font-medium">Contact</a>
			<a href="https://x.com/selecto00" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
				<FaTwitter size={24} />
			</a>
			<a href="https://www.linkedin.com/in/nowfeel-safi-0294531b5" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
				<FaLinkedin size={24} />
			</a>
			<a href="https://github.com/Nozgood" target="_blank" rel="noopener noreferrer" aria-label="Github">
				<FaGithub size={24} />
			</a>
		</header>
	)

}

export default Header;
