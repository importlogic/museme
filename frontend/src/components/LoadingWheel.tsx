import loadingSvg from '../assets/loading.svg';

const LoadingWheel = () => {
    return <img src={loadingSvg} className='h-10 w-10 animate-spin'></img>;
};

export default LoadingWheel;
