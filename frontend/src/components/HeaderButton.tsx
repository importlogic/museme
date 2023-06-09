interface propsInterface {
    active: number;
    children: React.ReactNode;
    className?: string;
}

const HeaderButton = (props: propsInterface) => {
    let bg = 'bg-[#f4f5fa] dark:bg-[#3b3b3b]';
    let classes = props.className;

    if (props.active == 1) {
        bg = 'bg-blue-600';
    }

    return (
        <button
            className={`${bg} mx-2 h-10 w-10 rounded-full outline-none ${classes}`}
        >
            {props.children}
        </button>
    );
};

export default HeaderButton;
