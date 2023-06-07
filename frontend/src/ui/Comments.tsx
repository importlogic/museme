import Container from '../components/Container.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

interface comment{
    user: string;
    comment: string;
}

interface propsInterface {
    userComments: comment[];
}

const Comments = (props: propsInterface) => {
    return (
        <>
            <form>
                <Container className='rounded-md bg-gray-200 p-2 text-right dark:bg-[#3b3b3b]'>
                    <textarea
                        className='h-24 w-full resize-none bg-gray-200 outline-none dark:bg-[#3b3b3b]'
                        placeholder='Share your thoughts....'
                    ></textarea>
                    <button className='mr-1'>
                        <FontAwesomeIcon icon={faPaperPlane} size='lg' />
                    </button>
                </Container>

                <Container className='mt-5'>
                    <ul>
                    {
                        [
                            props.userComments.map((comment) => {
                                return (
                                    <li>
                                        <p>{comment.user}</p>
                                        <p>{comment.comment}</p>
                                    </li>
                                )
                            })
                        ]
                    }
                    </ul>
                </Container>
            </form>
        </>
    );
};

export default Comments;
