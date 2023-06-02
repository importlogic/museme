import { createContext, useState } from 'react';

const activeTabContext = createContext({
    activeTab: 'home',
    setActiveTab: (activeTab: string) => {activeTab}
});

interface propsInterface {
    children: React.ReactNode
}

export const ActiveTabWrapper = (props: propsInterface) => {
    const [activeTab, setActiveTab] = useState('home');

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
