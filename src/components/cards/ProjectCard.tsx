interface Props {
  title: string;
  imageSrc: string;
  description: string;
  link: string;
  caseStudy?: {
    slug: string;
  };
}
const ProjectCard = ({
  title,
  imageSrc,
  description,
  link,
  caseStudy,
}: Props) => {
  const href = caseStudy ? `/case-study/${caseStudy.slug}` : link;
  const isExternal = !caseStudy;

  return (
    <a
      href={href}
      {...(isExternal
        ? { target: "_blank" as const, rel: "noopener noreferrer" as const }
        : {})}
      className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-6 border border-ink/20 rounded-lg p-4 transition-all duration-300 group lg:hover:border-light-purple dark:border-night-border dark:lg:hover:border-light-purple"
    >
      <div className="w-[120px] h-[80px] shrink-0 rounded-lg overflow-hidden border border-gray-200 dark:border-night-border">
        <img
          src={imageSrc}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center lg:items-start w-full min-w-0">
        <h4 className="mb-2 text-lg font-bold text-ink transition-all duration-300 group-hover:text-light-purple dark:text-zinc-100 text-center lg:text-left">
          {title}

          <svg
            viewBox="0 0 24 24"
            className="inline-block w-4 h-4 stroke-ink transition-all duration-300 lg:group-hover:stroke-light-purple dark:stroke-zinc-300 dark:lg:group-hover:stroke-light-purple"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </h4>
        <p className="text-center lg:text-left text-[13px] sm:text-[15px] text-gray-500 dark:text-zinc-400">
          {description}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;
