import Container from './Container.tsx';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';

import activeTabContext from '../store/activeTabContext.tsx';
import HeaderButton from './HeaderButton.tsx';

import { useRef, useState, useContext } from 'react';

const Header = () => {
    const searchBar = useRef();
    const [searchBarEmpty, setSearchBarEmpty] = useState(1);

    const activeTab = useContext(activeTabContext);
    console.log(activeTab.activeTab);

    const clearSearchBarHandler = () => {
        searchBar.current.value = '';
        setSearchBarEmpty(1);
    };

    const searchBarInputHandler = () => {
        if (searchBar.current.value.length != 0) {
            if (searchBarEmpty == 1) setSearchBarEmpty(0);
        } else setSearchBarEmpty(1);
    };

    const notificationsClickHandler = () => {
        activeTab.setActiveTab('notifications');
    };

    const profileClickHandler = () => {
        activeTab.setActiveTab('profile');
    };

    const homeClickHandler = () => {
        activeTab.setActiveTab('home');
    };

    const headerButtons = ['profile', 'notifications'];
    const functionMap = {
        profile: profileClickHandler,
        notifications: notificationsClickHandler,
    };

    return (
        <>
            <Container className='py-6 px-8 w-full'>
                <div className='grid grid-cols-3'>
                    <h1
                        className='text-black font-regular text-3xl hover:tracking-[1.5rem] duration-300 hover:cursor-pointer ease-in-out'
                        onClick={homeClickHandler}
                    >
                        museme
                    </h1>
                    <div className='flex bg-[#f4f5fa] rounded-lg'>
                        <SearchIcon className='m-2'></SearchIcon>
                        <input
                            type='text'
                            placeholder='Search'
                            className='bg-[#f4f5fa] p-2 rounded-lg w-full outline-none'
                            onInput={searchBarInputHandler}
                            ref={searchBar}
                        ></input>
                        {searchBarEmpty == 0 && (
                            <ClearIcon
                                className='m-2 rounded-full bg-white p-1'
                                onClick={clearSearchBarHandler}
                            ></ClearIcon>
                        )}
                    </div>
                    <div className='flex flex-row-reverse'>
                        <button className='ml-2 bg-blue-600 text-white font-medium p-2 px-3 rounded-xl outline-none'>
                            Create Something
                        </button>
                        <ul className='flex'>
                            {[
                                headerButtons.map((item) => {
                                    let active: number = 0;

                                    if (item == activeTab.activeTab) {
                                        active = 1;
                                    }

                                    return (
                                        <li key={`${item}`}>
                                            <HeaderButton
                                                active={active}
                                                onClick={functionMap[item]}
                                            >
                                                {item == 'profile' &&
                                                    active == 0 && (
                                                        <AccountCircleOutlinedIcon fontSize='medium'></AccountCircleOutlinedIcon>
                                                    )}
                                                {item == 'profile' &&
                                                    active == 1 && (
                                                        <AccountCircleIcon
                                                            fontSize='medium'
                                                            className='invert'
                                                        ></AccountCircleIcon>
                                                    )}
                                                {item == 'notifications' &&
                                                    active == 0 && (
                                                        <NotificationsNoneOutlinedIcon fontSize='medium'></NotificationsNoneOutlinedIcon>
                                                    )}
                                                {item == 'notifications' &&
                                                    active == 1 && (
                                                        <NotificationsIcon
                                                            fontSize='medium'
                                                            className='invert'
                                                        ></NotificationsIcon>
                                                    )}
                                            </HeaderButton>
                                        </li>
                                    );
                                }),
                            ]}
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Header;
