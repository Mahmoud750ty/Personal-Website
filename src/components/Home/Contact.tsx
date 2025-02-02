import { Link } from "react-router-dom";

function Contact() {
    return (
        <div className="border-t py-36 border-stone-700 flex container flex-col mx-auto mt-24 2xl:mt-24 text-center">
            <div className="text-3xl 2xl:text-8xl font-bold">
                Get in touch
            </div>
            <div className="mt-4 2xl:text-2xl text-stone-400 font-poppins">
                If you have a job opportunity for me, or a project you would like to discuss with me, feel free to email me at <span className="text-rose-300 cursor-default">Mahmoud750t@gmail.com</span>, you can also find me on
                <Link
                    to="https://www.linkedin.com/in/mahmoud-elkhouly-10bb49230/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-blue-400"
                >
                    {' '}Linkedin
                </Link>
                ,
                <Link
                    to="https://github.com/Mahmoud750ty"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-white"
                >
                    {' '}Github
                </Link>


            </div>
        </div>
    );
}

export default Contact;