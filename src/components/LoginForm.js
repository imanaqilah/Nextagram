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
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify'

const LoginForm = ({ toggleIsLogin, toggle, setLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()

    const handleLogin = (e) => {
        e.preventDefault()

        axios({
            method: 'post',
            url: 'https://insta.nextacademy.com/api/v1/login',
            data: {
                username: username,
                password: password
            }
        })
            .then(result => {
                console.log(result)
                localStorage.setItem('jwt', result.data.auth_token)
                setLoggedIn(true)
                setUsername("")
                setPassword("")
                toggle()
                history.push("/profile")

                toast.info(`Welcome back, ${username} !`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                localStorage.setItem("user", JSON.stringify(result.data.user))
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div style={{ color: "black" }}>
            <ModalHeader toggle={toggle}>Log In</ModalHeader>
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
                    <p>New member? <a href="/#" onClick={(e) => {
                        e.preventDefault()
                        toggleIsLogin()
                    }}>Sign up here.</a></p>
                    {/* <FormText>New member?</FormText>
                            <NavLink onClick={() => { setIsLogin(!isLogin) }}>Sign up here.</NavLink> */}
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleLogin}>Log In</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </div >
    )
}

export default LoginForm;