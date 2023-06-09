import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faComments, faThumbsUp, faUserGroup } from '@fortawesome/free-solid-svg-icons';

import Container from '../components/Container.tsx';
import NotificationDot from '../components/NotificationDot.tsx';

interface propsInterface{
    type: string;
}

const NotificationItem = (props: propsInterface) => {
    const iconList = new Map<string, FontAwesomeIconProps['icon']>([
        ['like', faThumbsUp],
        ['follow', faUserGroup],
        ['comment', faComments]
    ]);

    return (
        <Container className='mt-1 relative flex h-20 items-center border-b-2 dark:border-gray-600 dark:text-white'>
            <Container className='mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white'>
                <FontAwesomeIcon icon={iconList.get(props.type)!}  />
            </Container>

            <h1 className='w-[87%]'>Hi I am a notification</h1>
            <NotificationDot utilityClasses='right-3'></NotificationDot>
        </Container>
    );
};

export default NotificationItem;
