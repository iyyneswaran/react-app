function Car(props) {

    // const {brand, color} = props

    const { carInfo } = props;
    const { brand, color } = carInfo;

    const text = `Hi, I'm a ${brand} car and my color is ${color}`;
    return (
        <h2>{text}</h2>
    );
};

export default Car;