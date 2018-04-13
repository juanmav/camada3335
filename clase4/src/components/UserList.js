import React from 'react';
import users from '../data/users';
import User from './User';

class UserList extends React.Component {


    handleFilter = () =>{};
    handleOrder = () =>{};
    handleShow = () =>{};


    render(){
        return(
            <div>
                <hr/>
                Listado de usuarios:
                <br/>
                <button onClick={this.handleFilter}> Filtrar </button>
                <button onClick={this.handleOrder}> Ordernar </button>
                <button onClick={this.handleShow}> Mostrar columnas extras </button>
                <br/>
                {
                    users.map((user, index) => {
                        return (
                            <User
                                key={index}
                                {...user}
                            />
                        )
                    })
                }
                <hr/>
            </div>
        )
    }

}

export default UserList;