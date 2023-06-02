interface propsInterface{
    active: number,
    onClick: () => void,
    children: React.ReactNode,
    className?: string,
}

const HeaderButton = (props: propsInterface) => {
    let bg = 'bg-[#f4f5fa] dark:bg-[#3b3b3b]';
    let classes = props.className;

    if (props.active == 1) {
        bg = 'bg-blue-600';
    }

    return (
        <button
            className={`${bg} rounded-full h-10 w-10 mx-2 outline-none ${classes}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default HeaderButton;
