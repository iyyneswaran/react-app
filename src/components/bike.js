import Car from "./car";
import Apple from "./apple";
import Iyynes from "./iyynes";
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


  const userInfo = {
    username: "JohnDoe",
    passion: "coding"
  };

  const iyynesInfo = [
    {
      username: "iyynes",
      passion: "react"
    },
    {
      username: "Adithya",
      passion: "Java"
    }
  ];


  const numberList = [
    1, 2, 3, 3, 4, 5, 6, 6
  ];

  return (
    <>
      {/* <Car brand={brand} color={color} /> */}
      {showCarInfo ? <Car carInfo={carInfo} /> : null}  {/* Ternary operator */}
      {/* {showCarInfo && <Car carInfo={carInfo} />} And operator */}
      <Apple appleInfo={appleInfo} />
      {isDoorOpened ? <h2>Garage door is opened</h2> : <h2>Garage door is closed</h2>}
      {isDoorOpened ? <h2> Garage door is {doorInfo.status1} </h2> : <h2> Garage door is {doorInfo.status2} </h2>}

      <ul>
        {carList.map((carInfo) => <li className="list-element" key={carInfo.brand}> <Car carInfo={carInfo} /> </li>)}
      </ul>


      {/* key value is used to identify which items have changed, are added, or removed. And it will prevent us from the unique key warning in the console. */}
      <ul>
        {carList.map((carInfo) => {
          return <li key={carInfo.brand}>< Car carInfo={carInfo} /></li>
        })}
      </ul>


      <ul>
        {iyynesInfo.map((userInfo) => {
          return <li key={userInfo.username}> <Iyynes userInfo={userInfo} /> </li>
        })}
      </ul>

      <ul>
        {numberList.map((e, index) => {
          return <p key={index}>{e}</p>
        })}
      </ul>

    </>
  );
};

export default Bike;