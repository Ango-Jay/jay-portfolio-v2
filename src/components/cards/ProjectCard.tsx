
interface Props {
    title: string;
    imageSrc: string;
    description: string;
    technologies: string[];
    link: string;
}
const ProjectCard = ({ title, imageSrc, description, technologies, link }: Props) => {
  return (
    <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full flex gap-6 border border-gray-200 rounded-lg p-4">
<div className="w-[120px] h-[80px] shrink-0 rounded-lg overflow-hidden border border-gray-200">
<img src={imageSrc} alt={title} className="w-full h-full object-cover" />
</div>
<div>
    <h4 className="text-lg font-bold mb-2">{title}</h4>
    <p className="text-[13px] sm:text-[15px] text-gray-500">
{description}
    </p>
    <div className="flex gap-y-1 gap-x-2 flex-wrap mt-4">
        {technologies.map((technology) => (
            <span key={technology} className="text-xs sm:text-[13px] px-2 py-1 rounded-full bg-gray-200">
                {technology}
            </span>
        ))}
    </div>
</div>
    </a>
  );
};

export default ProjectCard;