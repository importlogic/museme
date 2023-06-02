import { useEffect } from 'react';

import Header from '../components/Header.tsx';
import Container from '../components/Container.tsx';
import Feed from '../UI/Feed.tsx';
import LeftNavbar from '../UI/LeftNavbar.tsx';

const Home = () => {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
            <Container>
                <Header></Header>
                {/* <Modal></Modal> */}
                <Container className='mr-4 text-black'>
                    <Container className='grid grid-cols-10'>
                        <Container className='border-gray dark:border-gray-600 col-span-1 border-r-2 px-2'>
                            <LeftNavbar></LeftNavbar>
                        </Container>
                        <Container className='border-gray dark:border-gray-600 col-span-2 border-r-2 px-2'>
                            container 2
                        </Container>
                        <Container
                            className='border-gray dark:border-gray-600 col-span-4 overflow-y-scroll border-r-2'
                            style={{ height: `calc(100vh - 90px)` }}
                        >
                            <Feed></Feed>
                        </Container>
                        <Container className='col-span-3 px-2'>
                            container 4
                        </Container>
                    </Container>
                </Container>
            </Container>
    );
};

export default Home;
