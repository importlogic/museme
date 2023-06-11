import { configureStore } from '@reduxjs/toolkit';

import activeTheme from './activeTheme.ts';
import activeTab from './activeTab.ts';

const store = configureStore({
    reducer: { activeTheme, activeTab },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
