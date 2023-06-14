import Museme from './pages/Museme.tsx';
import Login from './pages/Login.tsx';
import Landing from './pages/Landing.tsx';
import ProfileSetup from './pages/ProfileSetup.tsx';

import { activeTabActions } from './store/activeTab.ts';
import { useLocation } from 'react-router-dom';

import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Routes, Route, Navigate } from 'react-router-dom';

import type { RootState } from './store/index.ts';
import { updateLoggedinStatus } from './store/loginInfo.ts';

const App = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const activeTheme = useSelector(
        (state: RootState) => state.activeTheme.theme
    );

    useEffect(() => {
        const page = document.querySelector('html')!;

        page.dataset.theme = activeTheme;
        page.classList.value = activeTheme;

        localStorage.setItem('museme-theme', activeTheme);
    }, [activeTheme]);

    useEffect(() => {
        //@ts-ignore
        dispatch(updateLoggedinStatus());
        const tab = location.pathname.split('/')[1];
        dispatch(activeTabActions.setTab(tab));
    }, [location.pathname]);

    const loggedIn: boolean = useSelector(
        (state: RootState) => state.loginInfo.loggedIn
    );

    const getSetupVal = useSelector(
        (state: RootState) => state.loginInfo.prefs.setupDone
    );

    const setupDone = getSetupVal === 'true' ? true : false;

    return (
        <>
            <Routes>
                <Route
                    path='/profilesetup'
                    element={
                        loggedIn ? (
                            setupDone ? (
                                <Navigate to='/home' />
                            ) : (
                                <ProfileSetup />
                            )
                        ) : (
                            <Navigate to='/' />
                        )
                    }
                />
                <Route
                    path='/login'
                    element={
                        loggedIn ? (
                            setupDone ? (
                                <Navigate to='/home' />
                            ) : (
                                <Navigate to='/profilesetup' />
                            )
                        ) : (
                            <Login />
                        )
                    }
                />
                <Route
                    path='/signup'
                    element={
                        loggedIn ? (
                            setupDone ? (
                                <Navigate to='/home' />
                            ) : (
                                <Navigate to='/profilesetup' />
                            )
                        ) : (
                            <Login />
                        )
                    }
                />
                <Route
                    path='/'
                    element={
                        loggedIn ? (
                            setupDone ? (
                                <Navigate to='/home' />
                            ) : (
                                <Navigate to='/profilesetup' />
                            )
                        ) : (
                            <Landing />
                        )
                    }
                />
                <Route
                    path='*'
                    element={
                        loggedIn ? (
                            setupDone ? (
                                <Museme />
                            ) : (
                                <Navigate to='/profilesetup' />
                            )
                        ) : (
                            <Navigate to='/' />
                        )
                    }
                />
            </Routes>
        </>
    );
};

export default App;
