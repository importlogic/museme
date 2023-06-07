import { useEffect } from 'react';

import Header from '../components/Header.tsx';
import Container from '../components/Container.tsx';
import Feed from '../ui/Feed.tsx';
import ProfilePage from '../ui/ProfilePage.tsx';
import LeftNavbar from '../ui/LeftNavbar.tsx';

import { useParams } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const Museme = () => {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    const param = useParams();
    let username = 'default';

    if (param.username != undefined) {
        username = param.username;
    }

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
                    <Container className='border-gray col-span-5 flex-grow overflow-y-scroll border-r-2 p-2 px-4 dark:border-gray-600'>
                        <BrowserRouter>
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
                                    path='profile/:username'
                                    element={
                                        <ProfilePage username={username} />
                                    }
                                />
                            </Routes>
                        </BrowserRouter>
                    </Container>
                    <Container className='w-96 px-2'>container 4</Container>
                </Container>
            </Container>
        </Container>
    );
};

export default Museme;
