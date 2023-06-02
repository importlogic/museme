import { createContext, useState, useEffect } from 'react';

const activeThemeContext = createContext({
    theme: 'light',
    setTheme: (theme: string) => {theme}
})

interface propsInterface {
    children?: React.ReactNode
}

export const ActiveThemeWrapper = (props: propsInterface) => {
    let currentTheme = localStorage.getItem('museme-theme');
    if(currentTheme == null){
        currentTheme = 'light';
    }

    const [theme, setTheme] = useState(currentTheme);

    useEffect(() => {
        const page = document.querySelector('html');

        if(page != null){
            page.dataset.theme = theme;
            page.classList.value = theme
        }

        if(theme == 'light'){
            localStorage.setItem('museme-theme', 'light');
        }
        else{
            localStorage.setItem('museme-theme', 'dark');
        }
    }, [theme]);

    return (
        <activeThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </activeThemeContext.Provider>
    )
}

export default activeThemeContext;
