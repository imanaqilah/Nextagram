import React from 'react';
import {
    FormGroup,
    Label,
    Input,
    FormFeedback,
    FormText
} from 'reactstrap';

const Password = ({ password, setPassword }) => {
    const handlePasswordInput = e => {
        const password = e.target.value;
        setPassword(password);
    }

    //  this one is to check password input - if less than 6 characters 
    // const [passwordValid, setPasswordValid] = useState(true)
    const getPasswordProp = () => {
        if (!password.length) {
            return null;
        }
        if (password.length <= 6) {
            // setPasswordValid(false)
            return { invalid: true };
        } else {
            // setPasswordValid(true)
            return { valid: true }
        }
    };

    const getPasswordFormFeedback = () => {
        if (!password.length) {
            return null;
        }
        if (password.length <= 6) {
            return <FormFeedback invalid>The password is too short</FormFeedback>
        }
        else
            return <FormFeedback valid></FormFeedback>
        // if (passwordValid) {
        //     return <FormFeedback valid></FormFeedback>
        // } else {
        //     return <FormFeedback invalid></FormFeedback>
        // }
    };

    return (
        <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value); handlePasswordInput(e) }} {...getPasswordProp()}
            />
            {getPasswordFormFeedback()}
            <FormText>Password must have at least 6 characters</FormText>
        </FormGroup>
    )
}

export default Password;