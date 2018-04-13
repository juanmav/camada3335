import React from 'react';

class UserForm extends React.Component {

    constructor(){
        super();
        this.state = {
            name: '',
            lastname: '',
            email: '',
            password: '',
            checkpassword: ''
        };
    }

    handleClick = (event) => {
        console.log(this.state);
        // TODO enviar a jsonplacehodel. con fetch.
    };

    /*handleNameChange = (event) => {
        console.log(event.target.value);
        this.setState({ name: event.target.value })
    };*/

    handleChange = (event) => {
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState)
    };

    validPass = () => {
        return this.state.password === this.state.checkpassword;
    };

    render(){
        return (
            <div>
                Formulario
                <br/>
                <label>Nombre: </label>
                <input type="text" name={'name'} onChange={this.handleChange}/>
                { this.state.name.length < 30 ? this.state.name.length + '/30' : ''}
                <br/>
                <label>Apellido: </label>
                <input type="text" name={'lastname'} onChange={this.handleChange}/>
                <br/>
                <label>Mail: </label>
                <input type="text"name={'email'} onChange={this.handleChange}/>
                <br/>
                <label>Password: </label>
                <input type="text" name={'password'} onChange={this.handleChange}/>
                <br/>
                <label>Repetir Password: </label>
                <input type="text" name={'checkpassword'} onChange={this.handleChange}/>
                <br/>
                { this.validPass() ? '' : <label>Error!!! </label>}
                <button onClick={this.handleClick}>Crear!</button>
            </div>
        )
    }

}

export default UserForm;