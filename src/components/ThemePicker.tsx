import { useState, useEffect } from 'react';

type Theme = 'dark' | 'system' | 'light';

const ThemePicker = () => {
    const [currentTheme, setCurrentTheme] = useState<Theme>('light');
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // Get initial theme from localStorage or default to light
        const savedTheme = localStorage.getItem('theme') as Theme;
        if (savedTheme && ['dark', 'system', 'light'].includes(savedTheme)) {
            setCurrentTheme(savedTheme);
        }
    }, []);

    const handleThemeChange = (theme: Theme) => {
        if (theme === currentTheme || isAnimating) return;
        
        setIsAnimating(true);
        setCurrentTheme(theme);
        localStorage.setItem('theme', theme);
        
        // Apply theme to document
        document.documentElement.setAttribute('data-theme', theme);
        
        // Reset animation state after animation completes
        setTimeout(() => setIsAnimating(false), 300);
    };

    const getThemePosition = (theme: Theme) => {
        const positions = {
            dark: 'translate-x-0',
            system: 'translate-x-[-100%]',
            light: 'translate-x-[-200%]'
        };
        return positions[theme];
    };

    return (
        <div className="fixed top-4 right-4 z-50">
            <div className="relative bg-gray-200 rounded-full p-1 shadow-lg">
                {/* Sliding indicator */}
                <div 
                    className={`absolute top-1 left-1 w-8 h-8 bg-white rounded-full shadow-sm transition-transform duration-300 ease-in-out ${getThemePosition(currentTheme)}`}
                />
                
                {/* Theme buttons */}
                <div className="relative flex">
                    <button
                        onClick={() => handleThemeChange('dark')}
                        className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 ${
                            currentTheme === 'dark' ? 'text-gray-800' : 'text-gray-600 hover:text-gray-800'
                        }`}
                        disabled={isAnimating}
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    </button>
                    
                    <button
                        onClick={() => handleThemeChange('system')}
                        className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 ${
                            currentTheme === 'system' ? 'text-gray-800' : 'text-gray-600 hover:text-gray-800'
                        }`}
                        disabled={isAnimating}
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                        </svg>
                    </button>
                    
                    <button
                        onClick={() => handleThemeChange('light')}
                        className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 ${
                            currentTheme === 'light' ? 'text-gray-800' : 'text-gray-600 hover:text-gray-800'
                        }`}
                        disabled={isAnimating}
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThemePicker; 