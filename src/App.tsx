import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import './styles/root.scss';

interface IThemeContext {
    theme: string;
    setTheme: any;
}

export const ThemeContext = React.createContext({} as IThemeContext);

const App = () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useState(localStorage.colorMode ? localStorage.colorMode : 'light');

    useEffect(() => {
        if (!localStorage.colorMode && prefersDark) {
            setTheme('dark');
        }
        localStorage.colorMode = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div>
                <Header></Header>
            </div>
        </ThemeContext.Provider>
    );
};

export default App;
