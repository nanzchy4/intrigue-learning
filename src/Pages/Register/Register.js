import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {
    return (
        <div>
            <Form className="w-50 mx-auto my-5">
            <h1 className='mb-4'>Please Register Here!</h1>
                <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter full name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="email" placeholder="Enter photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;