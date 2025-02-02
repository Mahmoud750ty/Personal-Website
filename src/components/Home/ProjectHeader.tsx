
interface ProjectHeaderProps {
  title: string;
  description: string;
}

function ProjectHeader({ title, description }: ProjectHeaderProps) {
  return (
    <div className="container mx-auto text-center font-poppins mt-16">
      <h1 className="text-6xl text-white ">{title}</h1>
      <p className="text-lg text-stone-500">{description}</p>
    </div>
  );
}

export default ProjectHeader;