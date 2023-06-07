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
            userComments: [{'user': 'user1', 'comment': 'amazing post'}, {'user': 'user2', 'comment': 'very nice'}],
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
            userComments: [{'user': 'user1', 'comment': 'amazing post'}, {'user': 'user2', 'comment': 'very nice'}],
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
            userComments: [{'user': 'user1', 'comment': 'amazing post'}, {'user': 'user2', 'comment': 'very nice'}],
        },
    ];

    return (
        <>
            <Container className='flex flex-col'>
                <Container className='flex-grow'>
                    <ul>
                        {[
                            postDetails.map((post) => {
                                return (
                                    <li key={post.key}>
                                        <Container>
                                            <Post postDetails={post}></Post>
                                        </Container>
                                    </li>
                                );
                            }),
                        ]}
                    </ul>
                </Container>
                <Container className='mt-5 mb-2 flex justify-center flex-grow'>
                        <button className='rounded-xl bg-blue-500 p-2 px-5 text-white outline-none duration-500 ease-in-out hover:bg-indigo-600 '>
                            Load More
                        </button>
                </Container>
            </Container>
        </>
    );
};

export default Feed;
