import React, { useState } from 'react';
import { Modal } from 'reactstrap';
import LoginForm from './LoginForm.js';
import SignUpForm from './SignUpForm.js';

// const ModalForm = ({ isOpen, isLogin, toggle, toggleIsLogin }) => {
const ModalForm = ({ isOpen, toggle, toggleIsLogin, isLogin }) => {

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            {
                isLogin
                    ? <LoginForm toggle={toggle} toggleIsLogin={toggleIsLogin} />
                    : <SignUpForm toggle={toggle} toggleIsLogin={toggleIsLogin} />
            }
        </Modal>
    )

    // 1st try method
    // return (
    //     <div>
    //         {/* SIGN IN LINK */}
    //         <NavLink onClick={() => { setIsLogin(true); toggle() }}>Sign In</NavLink>
    //         <Modal isOpen={showModal} toggle={toggle}>
    //             <ModalBody>
    //                 <div>
    //                     {isLogin ? logInForm() : signUpForm()}
    //                 </div>
    //             </ModalBody>
    //         </Modal>
    //     </div>
    // );
}

export default ModalForm;