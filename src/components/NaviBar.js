import React, { useState } from 'react';
import ModalForm from "../components/Modal.js";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Form,
    FormGroup,
    Input,
    Button
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify'

const NaviBar = ({ loggedIn, setLoggedIn }) => {
    const [isOpen, setIsOpen] = useState(false);

    const [isLogin, setIsLogin] = useState(true);

    const history = useHistory()

    const toggle = () => setIsOpen(!isOpen);

    const [nameInput, setNameInput] = useState("");

    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const toggleIsLogin = () => {
        console.log(isLogin);
        setIsLogin(!isLogin)
    }

    const handleLogout = () => {
        localStorage.removeItem('jwt')
        setLoggedIn(false)
        toast.info("You are logged out", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        history.push("/")
    }


    //  This is for the "Search Username" form
    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/profile/${nameInput}`)
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        setNameInput(e.target.value)
    }

    return (
        <div>
            <div className="container-fluid" style={{ backgroundColor: "#265077" }}>
                <Navbar dark expand="lg" style={{ cursor: "pointer" }}>
                    <NavbarBrand onClick={() => { history.push("/") }}>Nextagram</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                {/* Search Input */}
                                <Form inline onSubmit={handleSubmit}>
                                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                        <Input onChange={handleChange} type="text" name="user" placeholder="Type username" />
                                        {/* // comment out --> this.setState({password: e.target.value}); */}
                                    </FormGroup>
                                    <Button>Search</Button>
                                </Form>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => { history.push("/users") }}>Users</NavLink>
                            </NavItem>
                            {
                                loggedIn ?
                                    <NavItem>
                                        <NavLink style={{ cursor: "pointer" }} onClick={() => { history.push("/profile") }}>My Profile</NavLink>
                                    </NavItem>
                                    :
                                    null
                            }
                            <NavItem>
                                {/* LOGIN MODAL */}
                                {/* <ModalForm isLogin={isLogin} setIsLogin={setIsLogin}>Sign In</ModalForm> */}
                                {
                                    loggedIn ?
                                        <NavLink style={{ cursor: "pointer" }} onClick={() => handleLogout()}>Log out</NavLink>
                                        :
                                        <NavLink style={{ cursor: "pointer" }} onClick={() => { toggleModal(); setIsLogin(true) }} >Log in</NavLink>
                                }
                            </NavItem>
                            {/* <NavItem>
                                <NavLink href="/components/">Sign Up</NavLink>
                            </NavItem> */}
                        </Nav>
                    </Collapse>
                </Navbar>

            </div>
            <ModalForm
                isOpen={showModal}
                toggle={toggleModal}
                toggleIsLogin={toggleIsLogin}
                setLoggedIn={setLoggedIn}
                isLogin={isLogin}
            />
        </div>
    );
}


/* {
                    isLogin
                        ? <ModalForm
                            isOpen={showModal}
                            toggle={toggleModal}
                            modalTitle={"Login"}
                            isLogin={isLogin}
                            toggleIsLogin={toggleIsLogin}
                        />
                        : <ModalForm
                            isOpen={showModal}
                            toggle={toggleModal}
                            modalTitle={"Sign Up"}
                            isLogin={isLogin}
                            toggleIsLogin={toggleIsLogin}
                        />
                } */


export default NaviBar;