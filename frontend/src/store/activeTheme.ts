import { createSlice } from '@reduxjs/toolkit';

let currentTheme = localStorage.getItem('museme-theme') || 'light';

const initialState = {
    theme: currentTheme,
};

const activeTheme = createSlice({
    name: 'activeTheme',
    initialState,
    reducers: {
        setTheme(state, action) {
            state.theme = action.payload;
        },
    },
});

export const activeThemeActions = activeTheme.actions;

export default activeTheme.reducer;
