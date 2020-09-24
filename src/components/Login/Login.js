import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import HeaderBlack from '../HeaderBlack/HeaderBlack';
import './Login.css'

const Login = () => {
    const { register, errors } = useForm();
    return (
        <Container bg="light">
            <HeaderBlack></HeaderBlack>
            <Container>
                <div className="row mx-auto">
                    <form className="login-form mx-auto my-5 w-50 p-4 rounded">
                        <h3>Login</h3>
                        <input className="custom-input" name="email" placeholder="Username or Email" ref={register({ required: true })} />
                        {errors.email && <span className="error">Username or Email is required</span>}
                        <br/>
                        <input className="custom-input" name="password" placeholder="Password" ref={register({ required: true })} />
                        {errors.destination && <span className="error">Destination is required</span>}

                        <div className="d-flex justify-content-between">
                            <div className="mr-2 font-weight-bold">
                                <input name="rememberPassword" type="checkbox" ref={register({ required: true })} /> 
                                <span className="ml-1">Remember Me</span>
                            </div>
                            <div>
                                <a href="">
                                    Forgot Password
                                </a>
                            </div>
                        </div>
                        <input type="submit" variant="warning" value="Login" className="my-3 btn-block font-weight-bold" />
                    </form>
                </div>
            </Container>
        </Container>
    );
};

export default Login;