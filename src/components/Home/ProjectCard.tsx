import { Link } from "react-router-dom";
import { Project } from "../../utils/Projects";


interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/projects/${project.slug}`}>
      <div
        key={project.slug}
        className="border-t border-stone-600 my-4 p-8 xl:flex-row flex xl:text-left justify-between cursor-pointer flex-col transition ease-linear duration-200 sm:hover:translate-x-6 "
      >
        <div className="xl:border-l-8 pl-6 border-green-500">
          <div className=" p-6 cursor-pointer  text-white text-poppins lg:text-5xl text-4xl  font-poppins font-bold">
            {project.title}
          </div>
          <div className="text-3xl text-stone-400 m-6">
            {project.description}
            <div className="flex items-center mx-auto w-fit xl:text-left xl:w-full text-center mt-6 text-stone-200">
              Click to see more
              <svg
                className=" w-20 h-20 ml-2 mt-1  font-bold sm:w-6 sm:h-6 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className={`xl:ml-12 border border-stone-600 flex content-center items-center h-fit w-fit my-auto mx-auto`}>
          <img src={project.thumbnail} alt={project.title} width={600} height={300} className='object-cover min-w-full min-h-full flex-shrink-0' />
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;