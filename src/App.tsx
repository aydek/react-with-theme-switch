import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
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

    const GlobalStyle = createGlobalStyle`
        body {
            color: ${theme === 'light' ? '#222' : '#whitesmoke'};
            background-color: ${theme === 'light' ? 'whitesmoke' : '#222'};
        }
    `;

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <GlobalStyle />
            <div>
                <Header></Header>
            </div>
        </ThemeContext.Provider>
    );
};

export default App;
