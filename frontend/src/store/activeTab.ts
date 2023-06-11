import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tab: 'home',
};

const activeTab = createSlice({
    name: 'activeTab',
    initialState,
    reducers: {
        setTab(state, action) {
            state.tab = action.payload;
        },
    },
});

export const activeTabActions = activeTab.actions;

export default activeTab.reducer;
