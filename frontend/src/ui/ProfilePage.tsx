import Feed from '../ui/Feed.tsx';
import Container from '../components/Container.tsx';
import testimage from '../assets/dp.jpeg';

interface propsInterface {
    username: string;
}

const ProfilePage = (props: propsInterface) => {
    const username = props.username;
    console.log(username);
    
    return (
        <>
            <Container className='mt-5 flex select-none'>
                <Container className='h-32 w-32 overflow-hidden rounded-full'>
                    <img
                        src={testimage}
                        className='h-32 w-32 object-cover'
                    ></img>
                </Container>

                <Container className='ml-5 mt-2 flex-grow'>
                    <Container>
                        <h1 className='text-xl font-semibold tracking-wider dark:text-white'>
                            @manasrawat
                        </h1>
                        <h1 className='text-gray-500'>Manas Rawat</h1>
                    </Container>
                    <Container className='mt-3 grid grid-cols-3'>
                        <Container className='text-center'>
                            <p className='font-semibold tracking-wider text-blue-400'>
                                10
                            </p>
                            <p className='dark:text-white'>Posts</p>
                        </Container>
                        <Container className='text-center'>
                            <p className='font-semibold tracking-wider text-blue-400'>
                                10
                            </p>
                            <p className='dark:text-white'>Posts</p>
                        </Container>
                        <Container className='text-center'>
                            <p className='font-semibold tracking-wider text-blue-400'>
                                10
                            </p>
                            <p className='dark:text-white'>Posts</p>
                        </Container>
                    </Container>
                </Container>
            </Container>

            <div className='collapse-arrow collapse my-4 bg-base-200'>
                <input type='checkbox' />
                <div className='collapse-title text-lg dark:text-white'>
                    Highlights
                </div>
                <div className='collapse-content'>
                    <Feed />
                </div>
            </div>

            <div className='collapse-arrow collapse bg-base-200'>
                <input type='checkbox' />
                <div className='collapse-title text-lg dark:text-white'>
                    All posts
                </div>
                <div className='collapse-content'>
                    <Feed />
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
