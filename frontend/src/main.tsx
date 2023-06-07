import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import {ActiveTabWrapper} from './store/activeTabContext.tsx';
import {ActiveThemeWrapper} from './store/activeThemeContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ActiveThemeWrapper>
            <ActiveTabWrapper>
                <App />
            </ActiveTabWrapper>
        </ActiveThemeWrapper>
    </React.StrictMode>
);