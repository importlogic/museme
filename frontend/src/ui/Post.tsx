import Container from '../components/Container.tsx';
import defaultImage from '../assets/coming-soon.png';
import testimage from '../assets/dp.jpeg';

import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';

import Modal from '../components/Modal.tsx';
import Comments from './Comments.tsx';

interface comment{
    user: string;
    comment: string;
}

interface propsInterface {
    postDetails: {
        key: string;
        owner: string;
        following: boolean;
        text: string;
        date: string;
        media: string;
        likes: number;
        likedByUser: boolean;
        userComments: comment[];
    };
}

const Post = (props: propsInterface) => {
    return (
        <>
            <Modal
                id={`comment_${props.postDetails.key}`}
                heading={`Comments on ${props.postDetails.owner}'s post`}
                utilityClasses='h-4/6'
            >
                <Comments userComments={props.postDetails.userComments}></Comments>
            </Modal>

            <Container className='flex border-b-2 dark:border-gray-600'>
                <Container className='mt-[.70rem] flex justify-end mr-1'>
                    <Container className='h-10 w-10 rounded-full overflow-hidden'>
                        <img src={testimage} className='object-cover h-10 w-10'></img>
                    </Container>
                </Container>
                <Container className='flex-grow'>
                    <Container className='rounded-lg p-2'>
                        <Container className='flex items-center space-x-5 dark:text-white'>
                            <p>{props.postDetails.owner}</p>
                            <p className='pt-[0.5px] font-semibold text-blue-400 hover:cursor-pointer'>
                                {props.postDetails.following
                                    ? 'Following'
                                    : 'Follow'}
                            </p>
                        </Container>
                        <p className='text-sm text-gray-400'>
                            {props.postDetails.date}
                        </p>
                        <Container className='mt-4 dark:text-white'>
                            {props.postDetails.text}
                        </Container>
                        <Container className='justify-center flex'>
                            <img src={defaultImage}></img>
                        </Container>
                        <Container className='flex justify-evenly text-gray-400'>
                            <Container className='flex space-x-2 rounded-3xl p-2 hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-white dark:hover:text-black'>
                                <Container className='flex items-center'>
                                    {props.postDetails.likedByUser ? (
                                        <ThumbUpIcon
                                            fontSize='small'
                                            color='primary'
                                        ></ThumbUpIcon>
                                    ) : (
                                        <ThumbUpOutlinedIcon fontSize='small'></ThumbUpOutlinedIcon>
                                    )}
                                </Container>

                                <Container>
                                    {props.postDetails.likes} Like
                                    {props.postDetails.likes != 1 ? 's' : ''}
                                </Container>
                            </Container>
                            <Container
                                onClick={() => {
                                    const myModal = document.querySelector(`#comment_${props.postDetails.key}`) as HTMLDialogElement;

                                    myModal.showModal();
                                }}
                                className='flex items-center space-x-2 rounded-3xl p-2 hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-white dark:hover:text-black'
                            >
                                <InsertCommentOutlinedIcon fontSize='small'></InsertCommentOutlinedIcon>
                                <p>Comment</p>
                            </Container>
                            <Container className='flex items-center space-x-2 rounded-3xl p-2 hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-white dark:hover:text-black'>
                                <CurrencyBitcoinOutlinedIcon fontSize='small'></CurrencyBitcoinOutlinedIcon>
                                <p>Donate</p>
                            </Container>
                            <Container className='flex items-center space-x-2 rounded-3xl p-2 hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-white dark:hover:text-black'>
                                <ShareOutlinedIcon fontSize='small'></ShareOutlinedIcon>
                                <p>Share</p>
                            </Container>
                        </Container>
                    </Container>
                </Container>
            </Container>
        </>
    );
};

export default Post;
