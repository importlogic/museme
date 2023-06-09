import { useEffect } from 'react';

import Header from '../components/Header.tsx';
import Container from '../components/Container.tsx';
import LeftNavbar from '../ui/LeftNavbar.tsx';
import Feed from '../ui/Feed.tsx';
import ProfilePage from '../ui/ProfilePage.tsx';
import NotificationPage from '../ui/NotificationPage.tsx';

import { Routes, Route, Navigate } from 'react-router-dom';

const Museme = () => {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <Container className='flex max-h-screen min-h-screen flex-col'>
            <Header></Header>
            <Container className='mr-4 flex flex-grow overflow-hidden text-black'>
                <Container className='flex min-w-[100%] max-w-[100%]'>
                    <Container className='border-gray col-span-1 flex w-[8.5rem] justify-end border-r-2 px-2 dark:border-gray-600'>
                        <LeftNavbar></LeftNavbar>
                    </Container>
                    <Container className='border-gray col-span-2 w-72 border-r-2 px-2 dark:border-gray-600'>
                        container 2
                    </Container>
                    <Container className='relative border-gray col-span-5 flex-grow overflow-y-scroll border-r-2 p-2 px-4 dark:border-gray-600'>
                        <Routes>
                            <Route
                                path='/'
                                element={<Navigate to='/home' />}
                            />
                            <Route path='/home' element={<Feed />} />
                            <Route
                                path='/profile'
                                element={<Navigate to='/home' />}
                            />
                            <Route
                                path='/profile/:username'
                                element={<ProfilePage />}
                            />
                            <Route path='/notifications' element={<NotificationPage/>}/>
                        </Routes>
                    </Container>
                    <Container className='w-96 px-2'>container 4</Container>
                </Container>
            </Container>
        </Container>
    );
};

export default Museme;
