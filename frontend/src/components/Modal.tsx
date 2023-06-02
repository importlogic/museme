interface propsInterface {
    id: string;
    children: React.ReactNode;
}

const Modal = (props: propsInterface) => {
    const id = props.id;

    return (
        <>
            <dialog id={id} className='modal'>
                <form method='dialog' className='modal-box'>
                    <button className='btn-ghost btn-sm btn-circle btn absolute right-2 top-2'>
                        ✕
                    </button>
                    <h3 className='text-lg font-bold'>{props.children}</h3>
                    <p className='py-4'>
                        Press ESC key or click on ✕ button to close
                    </p>
                </form>
                <form method='dialog' className='modal-backdrop'>
                    <button></button>
                </form>
            </dialog>
        </>
    );
};

export default Modal;
