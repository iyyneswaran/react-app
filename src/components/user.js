import React from 'react';

class User extends React.Component {
    render() {

        // props destructuring
        const {userData} = this.props;
        const {username, hobby} = userData;

        const userDetail = `Username: ${username} and hobby: ${hobby}`;

        return (
            <h4>{userDetail}</h4> // list
        );
    };
};

export default User;