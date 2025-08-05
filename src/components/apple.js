import React from 'react';      
import User from './user';

const userData = {
    username: "Dummy",
    hobby: "Dummy"
}

const userList = [
    {
        username: "Deepa",
        hobby: "Coding"
    },
    {
        username: "Adithya",
        hobby: "Art"
    }, 
    {
        username: "Iyynes",
        hobby: "Gaming"
    }
];

class Apple extends React.Component {
    render() {

        const { appleInfo } = this.props;
        const { type, color } = appleInfo;
        return (

            <>
                <h2>{`I'm an apple and my type is ${type} and my color is ${color}`}</h2>

                <ul>
                    {userList.map((userData) => {
                        return <li key={userData.username}> <User userData={userData}/> </li>
                    })}
                </ul>
            </>

        );
    };
};

export default Apple;