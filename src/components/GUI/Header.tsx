
// src/components/GUI/Header.tsx
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="w-auto flex justify-between sm:container mx-10 mt-10 sm:mx-auto font-poppins">
            <Link to="/" className="text-white">
                Mahmoud Elkhouly
            </Link>

            <div className="flex gap-3 relative pl-10">


                <Link
                    to="https://www.linkedin.com/in/mahmoud-elkhouly-10bb49230/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-blue-400"
                >
                    <BsLinkedin className="text-2xl" />
                </Link>

                <Link
                    to="https://github.com/Mahmoud750ty"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-white"
                >
                    <BsGithub className="text-2xl" />
                </Link>
            </div>
        </div>
    );
}

export default Header;