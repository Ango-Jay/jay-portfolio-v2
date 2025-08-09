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
      className="w-full flex gap-6 border border-gray-200 rounded-lg p-4"
    >
      <div className="w-[120px] h-[80px] shrink-0 rounded-lg overflow-hidden border border-gray-200">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grow">
        <div className="w-full flex items-center justify-end mb-1">
          <span className="text-xs sm:text-[13px] px-2 py-1 rounded-full bg-gray-200">
            {platform}
          </span>
        </div>
        <h4 className="text-lg font-bold">{title}</h4>
      </div>
    </a>
  );
};

export default ArticleCard;
