interface propsInterface {
    utilityClasses?: string;
}

const NotificationDot = (props: propsInterface) => {
    return (
        <span
            className={`absolute ${props.utilityClasses} flex h-3 w-3`}
        >
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75'></span>
            <span className='relative inline-flex h-3 w-3 rounded-full bg-sky-500'></span>
        </span>
    );
};

export default NotificationDot;
