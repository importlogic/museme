import Container from '../components/Container.tsx';
import NotificationItem from './NotificationItem.tsx';

const NotificationPage = () => {
    return (
        <>
            <Container className=''>
                <ul>
                    <NotificationItem type='like'></NotificationItem>
                    <NotificationItem type='comment'></NotificationItem>
                    <NotificationItem type='follow'></NotificationItem>
                    <NotificationItem type='like'></NotificationItem>
                    <NotificationItem type='comment'></NotificationItem>
                    <NotificationItem type='follow'></NotificationItem>
                    <NotificationItem type='like'></NotificationItem>
                    <NotificationItem type='comment'></NotificationItem>
                    <NotificationItem type='follow'></NotificationItem>
                    <NotificationItem type='like'></NotificationItem>
                    <NotificationItem type='comment'></NotificationItem>
                    <NotificationItem type='follow'></NotificationItem>
                </ul>
            </Container>
        </>
    )
}

export default NotificationPage;