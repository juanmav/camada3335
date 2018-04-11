import React from 'react';

class Contador extends React.Component {

    constructor(props){
        console.log('Me construyo');
        super(props);
        console.log('---------------Inicial: ' + props.initialCount);
        this.state = {
            count : props.initialCount || 0
        };

    }

    addOne = () => {
        console.log('voy a sumar');
        let newCount = this.state.count + 1;
        console.log('ya sume');
        this.setState({count : newCount});
    };

    render(){
        console.log('Me dibujo');
        return(
            <div>
                <label> Count: { this.state.count }</label>
                <button onClick={this.addOne} > Apreta! </button>
            </div>
        )
    }
}

export default Contador;