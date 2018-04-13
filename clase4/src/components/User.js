import React from 'react';


class User extends React.Component {

    handleView = () => {
        alert(JSON.stringify(this.props,null, 4));
    };

    handleEdit = () => {
        alert('Mostrar model user:' + this.props.id);
    };

    handleDelete = () => {
        alert('Borrar model user:' + this.props.id);
    };

    render(){
        return (
            <div>
                <label>Name:</label> {this.props.name} <br/>
                <label>Email:</label>{this.props.email} <br/>
                <label>Lat: </label> {this.props.address.geo.lat} <br/>
                <label>Long:</label> {this.props.address.geo.lng} <br/>
                <button onClick={this.handleView}> Ver Detalle</button>
                <button onClick={this.handleEdit}> Editar</button>
                <button onClick={this.handleDelete}> Borrar</button>
            </div>
        )
    }
}

export default User;