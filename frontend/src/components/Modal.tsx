import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Container from './Container';

interface propsInterface {
    id: string;
    children: React.ReactNode;
    heading: string;
    utilityClasses?: string;
}

const Modal = (props: propsInterface) => {
    const id = props.id;

    return (
        <>
            <dialog id={id} className='modal backdrop-blur-sm'>
                <Container className={`modal-box ${props.utilityClasses}`}>
                    <form method='dialog' className='flex text-xl'>
                        <button className='outline-none'><FontAwesomeIcon icon={faArrowLeft}/></button>
                        <p className='ml-5'>{props.heading}</p>
                    </form>
                    <Container className='mt-5'>
                        {props.children}
                    </Container>
                </Container>
                
                <form method='dialog' className='modal-backdrop'>
                    <button></button>
                </form>
            </dialog>
        </>
    );
};

export default Modal;
