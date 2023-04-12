import React from 'react'
import moon from '../archivos/icon-moon.svg';
import sun from '../archivos/icon-sun.svg';


const Header = ({ themeLight, setThemeLight }) => {
    const switchThemeIcon = themeLight ? moon : sun;

    const changeTheme = () => {
        setThemeLight(!themeLight);
    };

    return (
        <header>
            <h1>TODO</h1>
            <span className="btn img" onClick={changeTheme}>
                <img src={switchThemeIcon} alt="Dark Theme" />
            </span>
        </header>
    );
};

export default Header;