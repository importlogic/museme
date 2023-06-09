import { createContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const activeTabContext = createContext({
    activeTab: 'home',
    setActiveTab: (activeTab: string) => {activeTab}
});

interface propsInterface {
    children: React.ReactNode
}

export const ActiveTabWrapper = (props: propsInterface) => {
    const [activeTab, setActiveTab] = useState('home');

    const location = useLocation();

    useEffect(() => {
        const tab = location.pathname.split('/')[1];
        setActiveTab(tab);
        console.log(tab);
    }, [location.pathname]);

    return (
        <activeTabContext.Provider
            value={{
                activeTab,
                setActiveTab,
            }}
        >
            {props.children}
        </activeTabContext.Provider>
    );
};

export default activeTabContext;
