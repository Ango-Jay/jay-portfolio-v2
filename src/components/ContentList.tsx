import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

const ContentList = () => {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const pickActiveSection = () => {
            if (window.scrollY <= 50) {
                setActiveSection('about');
                return;
            }

            const vh = window.innerHeight;
            let bestId = items[0]?.id ?? '';
            let bestVisible = 0;

            for (const item of items) {
                const el = document.getElementById(item.id);
                if (!el) continue;
                const r = el.getBoundingClientRect();
                const visible = Math.max(
                    0,
                    Math.min(r.bottom, vh) - Math.max(r.top, 0)
                );
                if (visible > bestVisible) {
                    bestVisible = visible;
                    bestId = item.id;
                }
            }

            if (bestVisible > 0) {
                setActiveSection(bestId);
            }
        };

        pickActiveSection();

        let raf = 0;
        const onScrollOrResize = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(pickActiveSection);
        };

        window.addEventListener('scroll', onScrollOrResize, { passive: true });
        window.addEventListener('resize', onScrollOrResize);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('scroll', onScrollOrResize);
            window.removeEventListener('resize', onScrollOrResize);
        };
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
                    <div className={`w-10 group-hover:w-20 border-t border-t-ink dark:border-t-zinc-100 lg:group-hover:border-t-light-purple lg:group-hover:text-light-purple transition-all duration-300 ${
                        activeSection === item.id ? 'w-20 border-t-light-purple dark:border-t-light-purple' : ''
                    }`}></div>
                    <h4 className={cn(
                        "text-sm uppercase text-ink dark:text-zinc-100 lg:group-hover:text-light-purple transition-all duration-300",
                        activeSection === item.id && 'text-light-purple dark:text-light-purple' 
                    )}>
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