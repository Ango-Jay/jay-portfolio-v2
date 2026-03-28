import { useEffect, useState } from "react";
import { items } from "../ContentList";

const Header = () => {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Find the section that's currently intersecting and is highest in the viewport
                let highestSection = '';
                let highestPosition = -1;

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const rect = entry.boundingClientRect;
                        if (rect.top <= 68 && rect.top > highestPosition) {
                            highestPosition = rect.top;
                            highestSection = entry.target.id;
                        }
                    }
                });

                if (highestSection) {
                    setActiveSection(highestSection);
                }
            },
            {
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], // Multiple thresholds for better tracking
                rootMargin: '-68px 0px -80% 0px' // Account for header height (68px)
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

    return  (
    <div className={
        `lg:hidden w-full fixed top-0 left-0 right-0 z-50 py-6 bg-white border-b border-gray-200 ${activeSection ? 'visible' : 'invisible'}`
    }>
        <div className="w-full container mx-auto px-4 sm:px-6 lg:px-10">
            <div className="w-full flex items-center justify-between">
            <a
            href={`#${activeSection}`}
            key={activeSection}
            className="flex lg:hidden uppercase text-sm font-medium text-black">
                {activeSection}
            </a>
            </div>
        </div>
    </div>
  );
};

export default Header;