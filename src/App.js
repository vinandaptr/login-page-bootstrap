import React, {Component} from 'react';
import './App.css';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {FacebookLoginButton, GoogleLoginButton} from 'react-social-login-buttons';

class App extends Component {
  render() {
    return (
      <Form className="login-form">
        {/* <h1>
          <span className="font-weight-bold">vinan</span>.com
        </h1> */}
        <h2 className="text-center">Welcome!</h2>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Email"/>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password"/>
        </FormGroup>
        <Button className="btn-md btn-info btn-user btn-block">
          Log In
        </Button>
        <div className="text-center pt-3">
          Or continue with your social account
        </div>
        <FacebookLoginButton className="mt-3 mb-3"/>
        <GoogleLoginButton/>
        <div className="text-center">
          <a href="/sign-up">Sign Up</a>
          <span className="p-2">|</span>
          <a href="/forgot-password">Forgot Password</a>
        </div>
      </Form>
    );
  }
}


export default App;
