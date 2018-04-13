import React from 'react';

class Numeros extends React.Component {
    render(){
        const numeros = this.props.listado;

        return(
            <div>
                {
                    numeros.map( (num,index) => {
                        return (
                            <div key={index}>
                                <label>Este es el numero: {num}</label>
                                <br/>
                                <br/>
                            </div>
                        )
                    })
                }
                <hr/>
            </div>
        )
    }
}

export default Numeros;