import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    return (
        <div>
            <div>
            <Form className="w-50 mx-auto my-5">
                <h1 className='mb-4'>Please Login</h1>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <p>Already have an account?<Link to='/register'>Register Here</Link></p>
                <Button variant="warning" type="submit">
                    Login
                </Button>
            </Form>

            <div className='w-50 mx-auto'>
            <button type="button" className="d-block mb-2 btn btn-success"><FaGoogle></FaGoogle> Sign In With Google</button>
            <button type="button" className="d-block btn btn-success"><FaGithub></FaGithub> Sign In With GitHub</button>
                
            </div>


            </div>

            
            
        </div>
    );
};

export default Login;