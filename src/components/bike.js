import Car from "./car";
import Apple from "./apple";
import '../index.css';

function Bike() {

  const carInfo = {
    brand: 'Ferrari',
    color: 'Black'
  };

  // const carInfo = {};

  const appleInfo = {
    type: "Fuji",
    color: "Red"
  };

  const isDoorOpened = true;

  const doorInfo = {
    status1: "open",
    status2: "closed"
  };

  const showCarInfo = carInfo.brand !== undefined && carInfo.color !== undefined

  const carList = [
    {
      brand: "BMW",
      color: "Red"
    },
    {
      brand: "Ford",
      color: "Green"
    },
    {
      brand: "Tesla",
      color: "Black"
    }
  ];

  return (
    <>
      {/* <Car brand={brand} color={color} /> */}
      {/* {showCarInfo ? <Car carInfo={carInfo} /> : null} */}  {/* Ternary operator */}
      {showCarInfo && <Car carInfo={carInfo} />} {/* And operator */}
      <Apple appleInfo={appleInfo} />
      {/* {isDoorOpened ? <h2>Garage door is opened</h2> : <h2>Garage door is closed</h2>} */}
      {isDoorOpened ? <h2> Garage door is {doorInfo.status1} </h2> : <h2> Garage door is {doorInfo.status2} </h2>}

      <ul>
        { carList.map((carInfo) => <li className="list-element"> <Car carInfo={carInfo}/> </li> )}
      </ul>

    </>
  );
};

export default Bike;