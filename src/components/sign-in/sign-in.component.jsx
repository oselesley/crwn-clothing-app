import React from 'react'

import './sign-in.styles.scss'
import { FormField } from '../form-field/form.field.component'
import { Button } from '../button/button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

export class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({[name]: value })
    }

    handleSubmit = async e => {
        e.preventDefault();
        console.log(this.state)
        const [ email, password ] = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({
                email: "",
                password: ""
            });
        } catch(e) {
            console.log(e);
        }
    }

    render () {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form method='post' onSubmit={this.handleSubmit}>
                    <FormField 
                        name='email'
                        type='email'
                        label='EMAIL'
                        required={true}
                        value={this.state.email}
                        handleChange={this.handleChange}
                    />
                    <FormField 
                        name='password'
                        type='password'
                        label='PASSWORD'
                        required={true}
                        value={this.state.password}
                        handleChange={this.handleChange}
                    />
                    <div className='buttons'>
                        <Button 
                            text='Sign In'   
                        />
                        <Button 
                            color='blue'
                            text='Sign In with Google'
                            onClick={ signInWithGoogle }   
                        />
                    </div>
                </form>
            </div>    
        )
    }
}
