import Container from '../components/Container';

import {
    FontAwesomeIcon,
    FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

import activeTabContext from '../store/activeTabContext';

import { useContext } from 'react';
import { Link } from 'react-router-dom';

const LeftNavbar = () => {
    const activeTab = useContext(activeTabContext);

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
                                            activeTab.activeTab == item
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
