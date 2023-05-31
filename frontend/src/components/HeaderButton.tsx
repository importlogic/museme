const HeaderButton = (props) => {
    let bg: string = 'bg-[#f4f5fa]';

    if (props.active == 1) {
        bg = 'bg-blue-600';
    }

    return (
        <button
            className={`${bg} rounded-full h-10 w-10 mx-2 outline-none`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default HeaderButton;
