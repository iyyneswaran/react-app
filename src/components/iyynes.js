function iyynes (props){

    const { userInfo } = props;
    const { username, passion } = userInfo;

    const text = ` I'm ${username} and I'm passionate about ${passion}`;
    return (
        <>
            <h6>{text}</h6>
        </>
    );
};

export default iyynes;