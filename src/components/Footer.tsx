import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
    return <>
        <footer className="bg-gray-50 p-4">
            <div className="flex flex-col items-center">
                <div className="flex gap-4 mb-4">
                    <a href="https://www.linkedin.com/in/nowfeel-safi-0294531b5" target="_blank" rel="noreferrer">
                        <FaLinkedinIn className="inline w-6 h-6" />
                    </a>
                    <a href="https://github.com/Nozgood" target="_blank" rel="noreferrer">
                        <FaGithub className="inline w-6 h-6" />
                    </a>
                </div>
                <div>
                    <small>
                        &copy; nowfeel.dev. All Rights Reserved.
                    </small>
                </div>
            </div>
        </footer >
    </>
}

export default Footer;
