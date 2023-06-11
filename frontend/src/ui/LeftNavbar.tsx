import Container from '../components/Container';

import {
    FontAwesomeIcon,
    FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import type { RootState } from '../store/index';

const LeftNavbar = () => {
    const activeTab = useSelector((state: RootState) => state.activeTab.tab);

    const navBarButtons = ['home', 'chats', 'more'];

    let iconMap = new Map<string, FontAwesomeIconProps['icon']>([
        ['home', faHouse],
        ['chats', faMessage],
        ['more', faEllipsis],
    ]);

    return (
        <Container className='grid'>
            <ul>
                {[
                    navBarButtons.map((item) => {
                        const name =
                            item.charAt(0).toUpperCase() + item.slice(1);

                        const iconName = iconMap.get(item)!;
                        return (
                            <li key={item}>
                                <Link to={`/${item}`}>
                                    <button
                                        className={`relative mr-4 mt-8 text-center text-sm font-semibold hover:cursor-pointer hover:text-blue-500 ${
                                            activeTab == item
                                                ? 'text-blue-500'
                                                : 'text-gray-400'
                                        }`}
                                    >
                                        <FontAwesomeIcon
                                            icon={iconName}
                                            size='xl'
                                        />
                                        <Container className='mt-1'>
                                            {name}
                                        </Container>
                                    </button>
                                </Link>
                            </li>
                        );
                    }),
                ]}
            </ul>
        </Container>
    );
};

export default LeftNavbar;
