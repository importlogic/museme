interface propsInterface {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
}

const Container = (props: propsInterface) => {
    const classes = props.className;
    const event = props.onClick;
    const styles = props.style;

    return (
        <>
            <div className={classes} style={styles} onClick={event}>
                {props.children}
            </div>
        </>
    );
};

export default Container;
