import { mdiWeatherNight, mdiWeatherSunny } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';
import '../styles/header.scss';
import { ThemeContext } from '../App';
import { AppTheme } from '../AppTheme';

export const Header = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    const headerStyle: AppTheme = {
        dark: {
            backgroundColor: '#222',
            color: 'whitesmoke',
        },
        light: {
            backgroundColor: 'whitesmoke',
            color: '#222',
        },
        common: {
            transition: 'all 200ms ease ',
        },
    };

    const themeStyle = {
        ...headerStyle.common,
        ...(theme === 'light' ? headerStyle.light : headerStyle.dark),
    };

    const switchTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={'header_body'} style={themeStyle}>
            <div>Welcome to my react app</div>
            <div className="switch" onClick={switchTheme}>
                <Icon path={theme === 'light' ? mdiWeatherNight : mdiWeatherSunny} size={1} />
            </div>
        </div>
    );
};
