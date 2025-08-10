interface Props {
  title: string;
  imageSrc: string;
  platform: string;
  link: string;
}
const ArticleCard = ({ title, imageSrc, platform, link }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-6 border border-gray-200 lg:hover:border-light-purple transition-all duration-300 rounded-lg p-4 group"  
    >
      <div className="w-[120px] h-[80px] shrink-0 rounded-lg overflow-hidden border border-gray-200">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full lg:w-auto lg:grow">
        <div className="w-full flex items-center justify-end mb-1">
          <span className="text-light-purple text-xs sm:text-[13px] px-2 py-1 rounded-full bg-dark-purple/20">
            {platform}
          </span>
        </div>
        <h4 className="text-lg font-bold group-hover:text-light-purple transition-all duration-300 mb-2">
          {title}

          <svg
            viewBox="0 0 24 24"
            className="inline-block w-4 h-4 stroke-[#1C274C] lg:group-hover:stroke-light-purple transition-all duration-300"
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
      </div>
    </a>
  );
};

export default ArticleCard;
