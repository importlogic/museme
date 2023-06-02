interface propsInterface {
    top?: string;
    right?: string;
}

const NotificationDot = (props: propsInterface) => {
    let top = props.top;
    let right = props.right;

    return (
        <span
            className={`absolute -top-[${top}] right-[${right}] flex h-3 w-3`}
        >
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75'></span>
            <span className='relative inline-flex h-3 w-3 rounded-full bg-sky-500'></span>
        </span>
    );
};

export default NotificationDot;
