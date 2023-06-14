import Container from '../components/Container.js';

import background from '../assets/login-bg.mp4';
import avatar from '../assets/default-avatar.png';

import ErrorMessage from '../components/ErrorMessage.js';
import SuccessMessage from '../components/SuccessMessage.js';

import LoadingWheel from '../components/LoadingWheel.js';

import { useState, useRef, useEffect, BaseSyntheticEvent } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../store/index.js';

import { useDispatch } from 'react-redux';
import { updateLoggedinStatus } from '../store/loginInfo.js';

const ProfileSetup = () => {
    const [currentPicture, setCurrentPicture] = useState(avatar);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [usernameValid, setusernameValid] = useState(false);
    const [checkingUsername, setcheckingUsername] = useState(false);
    const [currentUsername, setcurrentUsername] = useState('');
    const [loading, setloading] = useState(false);
    const dispatch = useDispatch();
    const userID = useSelector((state: RootState) => state.loginInfo.id);

    const usernameRef = useRef<HTMLInputElement>(null);

    const imageHandler = (event: BaseSyntheticEvent) => {
        const ext = event.target.files[0].type.split('/')[1];

        if (ext == 'png' || ext == 'jpeg' || ext == 'jpg') {
            setCurrentPicture(URL.createObjectURL(event.target.files[0]));
        } else {
            setCurrentPicture(avatar);
            event.target.value = null;

            setSuccessMessage('');
            setErrorMessage(
                'Please upload a valid image of type png, jpeg or jpg'
            );

            setTimeout(() => {
                setErrorMessage('');
            }, 5000);
        }
    };

    const checkUsernameValid = async () => {
        const inputUsername = usernameRef.current?.value.trim() || '';
        setcurrentUsername(inputUsername);

        if (inputUsername.length < 4 || inputUsername.length > 32) {
            setSuccessMessage('');
            setErrorMessage(
                'Username must be between 4 and 32 characters long'
            );

            setTimeout(() => {
                setErrorMessage('');
            }, 5000);

            return;
        } else {
            setcheckingUsername(true);

            const response = await fetch(
                `${import.meta.env.VITE_BACKEND_SERVER_URL}/api/check-username`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: inputUsername,
                    }),
                }
            );

            const data = await response.json();

            if (data.status == 'failed') {
                setSuccessMessage('');
                setErrorMessage(data.message);

                setTimeout(() => {
                    setErrorMessage('');
                }, 5000);
            } else {
                setErrorMessage('');
                setusernameValid(true);
                setSuccessMessage(data.message);

                setTimeout(() => {
                    setSuccessMessage('');
                }, 5000);
            }

            setcheckingUsername(false);
        }
    };

    const submitHandler = async (event: BaseSyntheticEvent) => {
        event.preventDefault();
        const name = event.target.elements[1].value.trim();

        if (name.length < 4) {
            setSuccessMessage('');

            setErrorMessage('Name must be atleast 4 characters long');

            setTimeout(() => {
                setErrorMessage('');
            }, 5000);

            return;
        }

        setloading(true);

        const profilePicture = event.target.elements[0].files[0];

        const formData = new FormData();
        formData.append('userID', userID);
        formData.append('username', currentUsername);
        formData.append('name', name);
        formData.append('avatar', profilePicture);

        const response = await fetch(
            `${import.meta.env.VITE_BACKEND_SERVER_URL}/api/profile-setup`,
            {
                method: 'POST',
                body: formData,
            }
        );

        const data = await response.json();

        if (data.status == 'failed') {
            setSuccessMessage('');
            setErrorMessage(data.message);

            setTimeout(() => {
                setErrorMessage('');
            }, 5000);
        }

        //@ts-ignore
        dispatch(updateLoggedinStatus());

        setloading(false);

        setErrorMessage('');
        setSuccessMessage('Profile Update Successfull! Redirecting to Home');

        setTimeout(() => {
            setSuccessMessage('');
        }, 5000);

        setCurrentPicture(avatar);
    };

    useEffect(() => {
        if (!checkingUsername && usernameRef.current != null)
            usernameRef.current.value = currentUsername;
    }, [checkingUsername]);

    return (
        <Container className='flex min-h-screen items-center justify-center'>
            <video
                autoPlay
                loop
                muted
                className='absolute max-h-screen w-[100%] object-fill'
            >
                <source src={background} type='video/mp4' />
            </video>
            <Container className='z-10 flex h-[70vh] w-[50rem] items-center overflow-hidden rounded-xl bg-white text-black shadow-2xl'>
                {loading ? (
                    <>
                        <Container className='flex flex-grow justify-center'>
                            <LoadingWheel size='h-14 w-14' />
                        </Container>
                    </>
                ) : (
                    <>
                        <Container className='flex h-full flex-grow flex-col justify-center border-r-2 p-2'>
                            {checkingUsername ? (
                                <Container className='flex justify-center'>
                                    <LoadingWheel size='h-12 w-12' />
                                </Container>
                            ) : (
                                <>
                                    <p className='my-2 pl-1 text-lg'>
                                        Express yourself with a username
                                    </p>
                                    <input
                                        type='text'
                                        ref={usernameRef}
                                        onChange={() => setusernameValid(false)}
                                        className='my-2 border-b-2 bg-white p-1 outline-none focus:shadow-xl'
                                        placeholder='Username'
                                    ></input>
                                    <button
                                        onClick={checkUsernameValid}
                                        className='my-2 rounded-lg bg-blue-600 p-2 text-white'
                                    >
                                        Check Username
                                    </button>
                                </>
                            )}
                        </Container>
                        <Container className='flex w-[60%] flex-col p-2'>
                            <Container className='flex justify-center'>
                                <h1 className='my-2 text-2xl'>
                                    Show everyone, how cool you look!
                                </h1>
                            </Container>
                            <form
                                onSubmit={submitHandler}
                                className='flex flex-col items-center p-2'
                            >
                                <Container className='my-2 flex h-36 w-36 overflow-hidden rounded-full'>
                                    <img
                                        className='h-36 w-36 object-cover'
                                        src={currentPicture}
                                    />
                                </Container>
                                <input
                                    onChange={imageHandler}
                                    className='my-2 w-56'
                                    type='file'
                                />
                                <Container className='my-2 flex w-full text-lg'>
                                    <p className='flex items-center'>
                                        We can call you
                                    </p>
                                    <input
                                        type='text'
                                        className='ml-4 flex-grow border-b-2 bg-white p-1 outline-none focus:shadow-xl'
                                        placeholder='coolboy69'
                                    />
                                </Container>
                                <button
                                    className='my-2 w-32 rounded-lg bg-blue-600 p-2 text-white disabled:opacity-20 disabled:hover:cursor-not-allowed'
                                    disabled={!usernameValid}
                                >
                                    Let's Go
                                </button>
                            </form>
                        </Container>
                    </>
                )}
            </Container>
            <ErrorMessage errorMessage={errorMessage} />
            <SuccessMessage successMessage={successMessage} />
        </Container>
    );
};

export default ProfileSetup;
