import { useEffect } from 'react';

import comingSoonImage from '../assets/coming-soon.png';
import Header from '../components/Header.tsx';
import Container from '../components/Container.tsx';
import { ActiveTabWrapper } from '../store/activeTabContext.tsx';

const Home = () => {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <ActiveTabWrapper>
            <Container className=''>
                <Header></Header>
                <Container className='text-white bg-black'>
                    <h1 className='text-xl'>lorem epsum</h1>
                </Container>
            </Container>
        </ActiveTabWrapper>
    );
};

export default Home;
