import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import MyImage from "../../assets/me.jpeg";

function Hero() {
    return (
        <div className="w-fit sm:container border rounded-md border-stone-700 mx-auto p-20 mt-40 bg-[#181818] text-center">
            <RoughNotationGroup show={true}>
                <div className="flex flex-col items-center">
                    <div className="-mt-44 px-3 bg-black rounded-full">
                        <img
                            className="rounded-full object-cover w-[200px] h-[200px]"
                            src={MyImage}
                            alt="Picture of Mahmoud Elkhouly"
                        />
                    </div>
                    <div className="xl:text-3xl 2xl:text-6xl text-white mb-4 p-4 font-poppins font-bold leading-snug">
                        <h1 className="mt-6">Hello there.</h1>
                        <div>
                            {"I'm Mahmoud, a "}
                            Software Developer {" "}
                            by trade,
                            <br /> and a Curious Learner by heart.
                        </div>
                    </div>
                    <p className="mt-4 2xl:text-xl text-stone-400 font-poppins">
                        My journey started in a different field. I actually earned a {"Bachelor's"} degree in Dentistry, but my passion for coding was too strong to ignore.
                        <br />
                        So, I transitioned into the world of web development,
                        <br />  and began building my skills and experience.
                        <br /> <br />
                        But my curiosity didn't stop there. I was fascinated by the possibilities of AI,
                        <br /> so I started exploring and researching  ways to use it to create helpful tools.
                        <br /> I'm deeply interested in the potential of AI and how it can improve our lives.

                        <br /> <br />
                        After getting a post graduate diploma in Web Development, <br /> I decided to start
                        working as a Freelance Developer. After some time, I've gained significant experience working with clients, delivering quality work,
                        and building a strong reputation as a reliable developer.
                        <br />
                        <br />
                        If you have any request or opportunity for me, feel free to {" "}
                        <RoughNotation type="underline" show={true} color="red" order={3}>
                            reach out ;)
                        </RoughNotation>
                    </p>
                    <div className="flex gap-4 mt-10 font-poppins text-xl">
                        <a
                            href={`https://wa.me/201551187013`}
                            target="_blank" // Opens in a new tab for better user experience
                            rel="noopener noreferrer" // Security best practice when using target="_blank"
                            className="p-4 border rounded-md bg-white text-black cursor-pointer transition ease-linear hover:bg-[#181818] hover:text-white hover:border-white duration-200"
                        >
                            <span className="text-black hover:text-white ">Contact me</span>
                        </a>

                    </div>
                </div>
            </RoughNotationGroup>
        </div>
    );
}

export default Hero;