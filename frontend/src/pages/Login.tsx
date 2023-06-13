import Container from '../components/Container.tsx';
import background from '../assets/login-bg.mp4';
import musemePoster from '../assets/museme-poster.png';

import { useState, useEffect, useRef, BaseSyntheticEvent } from 'react';
import LoadingWheel from '../components/LoadingWheel.tsx';

import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';

import { createAccount, loginAccount } from '../services/account.ts';

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [emailInvalid, setemailInvalid] = useState(false);
    const [passwordInvalid, setpasswordInvalid] = useState(false);
    const [isLoading, setisLoading] = useState(false);

    const type = useLocation().pathname.split('/')[1];
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const defaultEmail = searchParams.get('email');

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        emailRef.current!.value = defaultEmail || '';
    }, []);

    const changeFormHandler = () => {
        if (type == 'login') {
            navigate(`/signup?email=${emailRef.current?.value || ''}`);
        } else {
            navigate(`/login?email=${emailRef.current?.value || ''}`);
        }
    };

    const formHandler = async (event: BaseSyntheticEvent) => {
        event.preventDefault();

        const email = event.target[0].value;
        const password = event.target[1].value;

        const emailParts = email.split('@');

        if (emailParts.length != 2 || emailParts[1].length == 0) {
            setErrorMessage('Please enter a valid Email address');
            setemailInvalid(true);
            emailRef.current?.focus();
            return;
        }

        if (password.length < 8) {
            setErrorMessage('Password must be at least 8 characters long');
            setpasswordInvalid(true);
            passwordRef.current?.focus();
            return;
        }

        setisLoading(true);

        if (type == 'signup') {
            try {
                await createAccount(email, password);

                setSuccessMessage(
                    'Account created successfully! Please login.'
                );

                setTimeout(() => {
                    setSuccessMessage('');
                }, 5000);

                changeFormHandler();
            } catch (error: any) {
                setErrorMessage(error.message);

                setTimeout(() => {
                    setErrorMessage('');
                }, 5000);
            }
        } else {
            try {
                await loginAccount(email, password);

                navigate('/home');
            } catch (error: any) {
                setErrorMessage(error.message);

                setTimeout(() => {
                    setErrorMessage('');
                }, 5000);
            }
        }

        setisLoading(false);
    };

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
            <Container className='flex h-[70vh] overflow-hidden rounded-xl shadow-2xl backdrop-blur-lg'>
                <img src={musemePoster} />
                <Container className='flex w-[30rem] flex-col bg-white p-2 px-4 text-black'>
                    {isLoading && (
                        <Container className='flex flex-grow items-center justify-center'>
                            <LoadingWheel size='h-12 w-12'></LoadingWheel>
                        </Container>
                    )}

                    {!isLoading && (
                        <form
                            onSubmit={formHandler}
                            className='flex w-full flex-grow flex-col items-center justify-center'
                        >
                            <h1 className='mb-4 text-3xl'>
                                {type == 'login' && 'Welcome Back :)'}
                                {type == 'signup' && 'We are proud of you ;)'}
                            </h1>
                            <input
                                type='text'
                                placeholder='Email'
                                onChange={() => {
                                    setemailInvalid(false);
                                    setErrorMessage('');
                                }}
                                ref={emailRef}
                                className={`p-2 ${
                                    emailInvalid
                                        ? `outline-2 outline-red-400`
                                        : `outline-none`
                                } my-2 w-[75%] border-b-2 bg-white focus:shadow-lg`}
                            />
                            <input
                                type='password'
                                placeholder='Password'
                                onChange={() => {
                                    setpasswordInvalid(false);
                                    setErrorMessage('');
                                }}
                                ref={passwordRef}
                                className={`p-2 ${
                                    passwordInvalid
                                        ? `outline-2 outline-red-400`
                                        : `outline-none`
                                } my-2 w-[75%] border-b-2 bg-white outline-none focus:shadow-lg`}
                            />
                            <button className='m-2 mt-4 w-[75%] rounded-lg bg-blue-600 p-2 text-white'>
                                {type == 'login' ? `Login` : `Create Account`}
                            </button>
                            <Container className='mt-4 flex justify-center space-x-2'>
                                <p className='text-sm text-gray-600'>
                                    {type == 'login' ? `Don't` : `Already`} have
                                    an account?
                                </p>
                                <p
                                    className='text-sm text-blue-600 hover:cursor-pointer'
                                    onClick={changeFormHandler}
                                >
                                    {type == 'login' ? `Signup` : `Login`}
                                </p>
                            </Container>
                        </form>
                    )}
                </Container>
            </Container>

            {errorMessage.length > 0 && (
                <div className='alert alert-error absolute bottom-4 right-4 w-auto ease-in-out'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6 shrink-0 stroke-current'
                        fill='none'
                        viewBox='0 0 24 24'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                    </svg>
                    <span>{errorMessage}</span>
                </div>
            )}

            {successMessage.length > 0 && (
                <div className='alert alert-success absolute bottom-4 right-4 w-auto ease-in-out'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6 shrink-0 stroke-current'
                        fill='none'
                        viewBox='0 0 24 24'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                    </svg>
                    <span>{successMessage}</span>
                </div>
            )}
        </Container>
    );
};

export default Login;