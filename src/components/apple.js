import React from 'react';

class Apple extends React.Component {
    render() {

        const { appleInfo } = this.props;
        const { type, color } = appleInfo;
        return (
            <h2>{`I'm an apple and my type is ${type} and my color is ${color}`}</h2>
        );
    };
};

export default Apple;