import comingSoonImage from '../assets/coming-soon.png';
import Container from '../components/Container.tsx';

const Home = () => {
    return (
        <>
            <Container className='px-8 py-8'>
                <h1 className='text-5xl font-semibold text-white'>museme</h1>
            </Container>
            <Container className='grid justify-center py-2 text-center'>
                <img className='d' src={comingSoonImage}></img>
                <h1 className='text-6xl text-white'>Coming Soon</h1>
                <p className='text-white my-3'>
                    We are currently building this website!
                </p>
            </Container>
        </>
    );
};

export default Home;
