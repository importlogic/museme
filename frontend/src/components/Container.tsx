const Container = (props: any) => {
    const classes = props.className;

    return (
        <>
            <div className={classes}>{props.children}</div>
        </>
    );
};

export default Container;
