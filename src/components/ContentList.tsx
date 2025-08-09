const ContentList = () => {
    return (
        <div className="w-fit flex flex-col gap-4 mt-10">
            {items.map((item) => (
                <button key={item.id} className="w-full flex gap-3 items-center group">
                    <div className="w-10 group-hover:w-20 border-t border-t-black transition-all duration-300"></div>
                    <h4 className="text-black text-sm uppercase">
                        {item.title}
                    </h4>
                </button>
            ))}
        </div>
    )
}
const items = [
    {
        title: "About",
        id: "about"
    },
    {
        title: "Experience",
        id: "experience"
    },
    {
        title: "Projects",
        id: "projects"
    },
    {
        title: "Articles",
        id: "articles"
    }
]
export default ContentList;