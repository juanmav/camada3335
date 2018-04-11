import React from 'react';

class Leyenda extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return <h1>{this.props.value}</h1>
    }
}

export default Leyenda;