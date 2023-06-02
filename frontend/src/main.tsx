import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home.tsx';
import {ActiveTabWrapper} from './store/activeTabContext.tsx';
import {ActiveThemeWrapper} from './store/activeThemeContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ActiveThemeWrapper>
            <ActiveTabWrapper>
                <Home />
            </ActiveTabWrapper>
        </ActiveThemeWrapper>
    </React.StrictMode>
);