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

    return (
        <div className="container-fluid">
            <div className="row mb-5">
                <div className="col-sm-3 mt-2">
                    <img className="profile-image-avatar rounded-circle mt-5" src={user.profile_picture} alt="profile-avatar" />
                </div>
                <div className="col-sm-3 mt-4">
                    <h3>@{user.username}</h3>
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