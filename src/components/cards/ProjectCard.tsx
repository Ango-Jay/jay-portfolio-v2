interface Props {
  title: string;
  imageSrc: string;
  description: string;
  technologies: string[];
  link: string;
}
const ProjectCard = ({
  title,
  imageSrc,
  description,
  technologies,
  link,
}: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-6 border border-ink/20 rounded-lg p-4 transition-all duration-300 group lg:hover:border-light-purple dark:border-night-border dark:lg:hover:border-light-purple"
    >
      <div className="w-[120px] h-[80px] shrink-0 rounded-lg overflow-hidden border border-gray-200 dark:border-night-border">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h4 className="mb-2 text-lg font-bold text-ink transition-all duration-300 group-hover:text-light-purple dark:text-zinc-100">
          {title}

          <svg
            viewBox="0 0 24 24"
            className="inline-block w-4 h-4 stroke-ink transition-all duration-300 lg:group-hover:stroke-light-purple dark:stroke-zinc-300 dark:lg:group-hover:stroke-light-purple"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </h4>
        <p className="text-[13px] sm:text-[15px] text-gray-500 dark:text-zinc-400">
          {description}
        </p>
        <div className="flex gap-y-1 gap-x-2 flex-wrap mt-4">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-ink bg-white dark:bg-ink px-2 py-1 text-xs text-ink transition-colors duration-300 sm:text-[13px] dark:border-white dark:text-white group-hover:border-light-purple group-hover:bg-white group-hover:text-ink dark:group-hover:bg-ink dark:group-hover:text-light-purple"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
