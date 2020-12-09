import React, { useState } from 'react';
import {
    FormGroup,
    Label,
    Input,
    FormFeedback,
    FormText
} from 'reactstrap';
import isEmail from 'validator/lib/isEmail';

const Email = ({ email, setEmail }) => {
    const handleEmailInput = e => {
        const email = e.target.value;
        setEmail(email);
        checkEmail(email)
    }

    const checkEmail = currentEmail => {
        console.log(isEmail(currentEmail))
        if (isEmail(currentEmail)) {
            setEmailValid(true)
        } else {
            setEmailValid(false)
        }
    }

    //  this one is to check email input - if using the same format example@example.com
    const [emailValid, setEmailValid] = useState("")
    const getEmailProp = () => {
        if (!email.length) {
            return null;
        }
        
        if (emailValid) {
            return { valid: true };
        } else {
            return { invalid: true };
        }
    };

    const getEmailFormFeedback = () => {
        if (!email.length) {
            return null;
        }
        if (email.length <= 6) {
            return <FormFeedback invalid>The email is invalid</FormFeedback>
        }

        if (emailValid) {
            return <FormFeedback valid></FormFeedback>
        } else {
            return <FormFeedback invalid>The email is invalid</FormFeedback>
        }
    };

    return (
        <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} onChange={handleEmailInput} {...getEmailProp()}
            />
            {getEmailFormFeedback()}
            <FormText>example@example.com</FormText>
        </FormGroup>
    )
}

export default Email;