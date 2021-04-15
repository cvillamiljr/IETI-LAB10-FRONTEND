import React, {Component, useState} from "react";

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';


import "./Login.css";

export class  Login extends Component {


    constructor(props) {
        super(props);
        this.state = {email:"", password: ""};
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);

    }

    render() {

        const FormHeader = props => (
            <h2 id="headerTitle">{props.title}</h2>
        );
        const login = () => {
            if (localStorage.getItem('email') === this.state.email && localStorage.getItem('password') === this.state.password){
                localStorage.setItem('IsLoggedIn', "true");
            }
            this.setState({email:"", password: ""});
            window.location.reload();
        }
        const FormButton = props => (
            <div id="button" class="row">
                <button onClick={login}>{props.title}</button>
            </div>
        );


        return (

            <div id="loginform">
                <FormHeader title="Iniciar sesion"/>
                <div>
                    <form className="form">
                        <FormControl margin="normal" required fullWidth class="row input">
                            <label >Ingrese su usuario</label>
                            <Input
                                id="email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={this.handleChangeEmail}
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth class="row">
                            <label >Ingrese su contraseña</label>
                            <Input
                                name="password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={this.handleChangePassword}
                            />
                        </FormControl>
                    </form>
                    <FormButton title="Entrar"/>
                </div>
            </div>
        )
    }

    handleChangeEmail(e) {

        this.setState({email : e.target.value});

    }
    handleChangePassword(e){

        this.setState({password : e.target.value});


    }


}




