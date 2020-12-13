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
        <div className="container-fluid">
            <div className="row mb-5">
                <div className="col-sm-4 mt-2">
                    <h3>This is @{user.username}'s Profile Page</h3>
                    <Button onClick={() => { history.push("/upload") }}>Upload Images</Button>
                </div>
            </div>
            <div className="row">
                <UserImage userId={user.id} />
            </div>
        </div>

    )
}

export default MyProfilePage;