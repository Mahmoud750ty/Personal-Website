import { ImQuotesLeft } from "react-icons/im";

// Define the props interface for the TestimonialCard
interface TestimonialCardProps {
    text: string;
    author: string;
    date: string;
    show: number;
    index: number;
    company: string;
}

function TestimonialCard({
    text,
    author,
    show,
    index,
    company,
}: TestimonialCardProps) {
    return (
        <>
            <div
                className={`${show !== index ? "translate-x-[200%] left-0 top-0 absolute" : ""
                    }    transition-transform duration-[500ms] ease-in-out container rounded-md border-stone-700 mx-auto 2xl:pt-14 pt-8 2xl:px-20 px-32 mt-10 text-center text-xl flex`}
            >
                <div className="w-full">
                    <ImQuotesLeft className="2xl:text-6xl text-3xl text-stone-500 mb-4 " />
                    <span className="2xl:text-2xl sm:text-md text-lg text-stone-300 mt-6 ml-12">
                        {text}
                    </span>
                    <div className="2xl:mt-4 ">
                        <span className="text-stone-500 italic font-bold 2xl:text-3xl text-sm">
                            {author} -{" "}
                        </span>
                        <span className="text-stone-300 italic 2xl:text-3xl text-sm">
                            {company}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TestimonialCard;