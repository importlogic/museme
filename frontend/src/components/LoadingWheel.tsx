import loadingSvg from '../assets/loading.svg';

interface propsInterface {
    size: string;
}

const LoadingWheel = (props: propsInterface) => {
    const size = props.size;

    return <img src={loadingSvg} className={`${size} animate-spin`}></img>;
};

export default LoadingWheel;
