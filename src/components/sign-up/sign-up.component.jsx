import React from 'react'
import { FormField } from '../form-field/form.field.component';
import { Button } from '../button/button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

export class SignUp extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleChange = e => {
        console.log(e.target)
        const { name, value } = e.target;
        this.setState({[name]: value }, () => console.log(this.state))
    }

    handleSubmit = async e => {
        console.log("submit clicked")
        e.preventDefault();
        
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !==  confirmPassword) {
            alert('passwords don\'t match')
            return
        }

        try {
            const user = await auth.createUserWithEmailAndPassword(email, password);
            user.displayName = displayName
            let userRef = await createUserProfileDocument(user);

            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
        } catch (e) {
            console.log(e);
        }
    }

    render () {
        return (
            <div className='sign-in'>
            <h2 className='title'>I don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={this.handleSubmit} method='post'>
                <FormField 
                    handleChange={this.handleChange} 
                    label='display name'
                    name='displayName'
                    type='text'
                    value={this.state.displayName}
                />
                <FormField 
                    handleChange={this.handleChange} 
                    label='email'
                    name='email'
                    type='email'
                    value={this.state.email}
                />
                <FormField 
                    handleChange={this.handleChange} 
                    label='password'
                    name='password'
                    type='password'
                    value={this.state.password}
                />
                <FormField 
                    handleChange={this.handleChange} 
                    label='confirm password'
                    name='confirmPassword'
                    type='password'
                    value={this.state.confirmPassword}
                />
                <Button
                    text="Sign Up"
                />
            </form>
        </div> 
        )
    }
}
