import { createContext, useState } from 'react';

const activeTabContext = createContext({
    activeTab: 'home',
    setActiveTab: undefined
});

export const ActiveTabWrapper = (props) => {
    const [activeTab, setActiveTab] = useState('home');

    return (
        <activeTabContext.Provider
            value={{
                activeTab,
                setActiveTab
            }}
        >
            {props.children}
        </activeTabContext.Provider>
    );
};

export default activeTabContext;
