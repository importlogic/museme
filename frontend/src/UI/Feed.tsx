import Container from '../components/Container.tsx';
import Post from './Post.tsx';

const Feed = () => {
    const postDetails = [
        {
            key: '0',
            owner: 'manasrawat',
            following: false,
            text: 'first',
            date: '30 May, 2023',
            media: '',
            likes: 20,
            likedByUser: true,
            comments: ['amazing post', 'very nice'],
        },
        {
            key: '1',
            owner: 'manasrawat',
            following: true,
            text: 'second',
            date: '30 May, 2023',
            media: '',
            likes: 1000,
            likedByUser: false,
            comments: ['amazing post', 'very nice'],
        },
        {
            key: '2',
            owner: 'manasrawat',
            following: false,
            text: 'third',
            date: '30 May, 2023',
            media: '',
            likes: 20,
            likedByUser: true,
            comments: ['amazing post', 'very nice'],
        },
    ];

    return (
        <>
            <Container className=''>
                <ul>
                    {[
                        postDetails.map((post) => {
                            return (
                                <li key={post.key}>
                                    <Container className='p-2'>
                                        <Post postDetails={post}></Post>
                                    </Container>
                                </li>
                            );
                        }),
                    ]}
                </ul>
            </Container>
            <Container className='m-5 flex justify-center'>
                    <button className='rounded-xl bg-blue-500 p-2 px-5 text-white outline-none duration-500 ease-in-out hover:bg-indigo-600 '>
                        Load More
                    </button>
            </Container>
        </>
    );
};

export default Feed;
