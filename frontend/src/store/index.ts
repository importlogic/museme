import { configureStore } from '@reduxjs/toolkit';

import activeTheme from './activeTheme.ts';
import activeTab from './activeTab.ts';
import loginInfo from './loginInfo.ts';

const store = configureStore({
    reducer: { activeTheme, activeTab, loginInfo },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
