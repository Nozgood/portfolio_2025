import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Header() {
    return (
        <header className="flex justify-between p-4 max-w-7xl mx-auto w-full">
            <div className="md:flex hidden">
                <h2 className="text-xl font-medium">Nowfeel.dev</h2>
            </div>
            <div className="hidden md:flex gap-8">
                <a href="#Work" className="text-xl font-medium" >Work</a>
                <a href="#Writing" className="text-xl font-medium">Writing</a>
                <a href="#Contact" className="text-xl font-medium">Contact</a>
                <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/nowfeel-safi-0294531b5" target="_blank" rel="noreferrer">
                        <FaLinkedinIn className="inline w-6 h-6" />
                    </a>
                    <a href="https://github.com/Nozgood" target="_blank" rel="noreferrer">
                        <FaGithub className="inline w-6 h-6" />
                    </a>
                </div>
            </div>
        </header>
    )

}

export default Header;
