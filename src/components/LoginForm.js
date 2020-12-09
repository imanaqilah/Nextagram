import React, { useState } from 'react';
import {
    Button,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

const LoginForm = ({ toggleIsLogin, toggle }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div>
            <ModalHeader toggle={toggle}>Login</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="username" name="username" id="username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </FormGroup>
                    <p>New member? <a href="#" onClick={(e) => {
                        e.preventDefault()
                        toggleIsLogin()
                    }}>Sign up here.</a></p>
                    {/* <FormText>New member?</FormText>
                            <NavLink onClick={() => { setIsLogin(!isLogin) }}>Sign up here.</NavLink> */}
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>Log In</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </div >
    )
}

export default LoginForm;