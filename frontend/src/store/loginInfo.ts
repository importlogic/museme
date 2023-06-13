import { createSlice } from '@reduxjs/toolkit';
import { getUser } from '../services/account.ts';

const initialState = {
    loggedIn: false,
    id: '',
    name: '',
    email: '',
    prefs: {},
};

const loginInfo = createSlice({
    name: 'loginInfo',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state.loggedIn = action.payload.loggedIn;
            if (action.payload.loggedIn) {
                state.id = action.payload.id;
                state.name = action.payload.name;
                state.email = action.payload.email;
                state.prefs = action.payload.prefs;
            } else {
                state.id = '';
                state.name = '';
                state.email = '';
                state.prefs = {};
            }
        },
    },
});

export const updateLoggedinStatus = () => {
    return async (dispatch: any) => {
        const updateInfo = async () => {
            const response = await getUser();
            return response;
        };

        try {
            const response = await updateInfo();

            dispatch(
                loggedInActions.updateUser({
                    loggedIn: true,
                    id: response.$id,
                    name: response.name,
                    email: response.email,
                    prefs: response.prefs,
                })
            );
        } catch (error: any) {
            dispatch(loggedInActions.updateUser({ loggedIn: false }));
        }
    };
};

export const loggedInActions = loginInfo.actions;

export default loginInfo.reducer;
