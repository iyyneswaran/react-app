import css from './header.css';
import styles from './header.module.css';

function header() {

    const myStyle = {
        color: "red",
        backgroundColor: "black",
        fontSize: "50px",
        fontFamily: "monospace",
        padding: "20px",
        textAlign: "center",
    }

    return (
        <>
            {/* <h1 style={myStyle}>Hello styling</h1> */}
            <h1 className={styles.bigBlue}>Hello styling</h1>
            <p>Add a little para </p>
        </>
    );
}

export default header; //exp shortcut syntax