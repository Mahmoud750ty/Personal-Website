import React from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "../../utils/Projects";

interface ProjectsProps {
    projects: Project[]
}


const Projects: React.FC<ProjectsProps> = ({ projects }: ProjectsProps) => {
    return (
        <div className="border-t border-b pt-36 border-stone-700 flex container flex-col mx-auto mt-24 2xl:mt-24 text-center">
            <div className="text-6xl 2xl:text-8xl font-bold">Projects</div>
            <div className="mt-4 text-xl 2xl:text-2xl text-stone-400 font-poppins">
                Here is a selections of my favorite projects
            </div>
            <div className="flex flex-col gap-4 mt-20">
                {projects &&
                    projects.map((project) => {
                        return (
                            <ProjectCard key={project.slug} project={project} />
                        );
                    })}
            </div>
        </div>
    );
};

export default Projects;