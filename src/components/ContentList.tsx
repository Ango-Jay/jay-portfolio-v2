import { useEffect, useState } from 'react';

const ContentList = () => {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5, // Trigger when 50% of the section is visible
                rootMargin: '-10% 0px -10% 0px' // Adjust trigger point
            }
        );

        // Observe all sections
        items.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className="w-fit hidden lg:flex flex-col gap-4 mt-10">
            {items.map((item) => (
                <a
                    href={`#${item.id}`}
                    key={item.id} 
                    className={`w-full flex gap-3 items-center group nav-link transition-all duration-300 ${
                        activeSection === item.id ? 'opacity-100' : 'opacity-70'
                    }`}
                    onClick={(e) => handleSmoothScroll(e, item.id)}>
                    <div className={`w-10 group-hover:w-20 border-t border-t-black lg:group-hover:border-t-light-purple lg:group-hover:text-light-purple transition-all duration-300 ${
                        activeSection === item.id ? 'w-20' : ''
                    }`}></div>
                    <h4 className="text-black text-sm uppercase lg:group-hover:text-light-purple transition-all duration-300">
                        {item.title}
                    </h4>
                </a>
            ))}
        </div>
    )
}
export const items = [
    {
        title: "About",
        id: "about"
    },
    // {
    //     title: "Experience",
    //     id: "experience"
    // },
    {
        title: "Projects",
        id: "projects"
    },
    {
        title: "Articles",
        id: "articles"
    }
];
export default ContentList;