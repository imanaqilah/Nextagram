import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap'
import UserImage from '../components/UserImage.js';
import { useHistory } from 'react-router-dom';


const MyProfilePage = () => {
    const [user, setUser] = useState({})
    const history = useHistory()

    useEffect(() => {
        axios.get("https://insta.nextacademy.com/api/v1/users/me",
            {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('jwt')
                }
            })
            .then(result => {
                console.log(result)
                setUser(result.data)
            })
            .catch(error => {
                console.log(error) // so that we know what went wrong if the request failed
            })
    }, [])
    console.log(user.id)

    return (
        <div>
            <h1>This is @{user.username}'s Profile Page</h1>
            <Button onClick={() => { history.push("/upload") }}>Upload Images</Button>
            <UserImage userId={user.id} />
        </div>

    )
}

export default MyProfilePage;