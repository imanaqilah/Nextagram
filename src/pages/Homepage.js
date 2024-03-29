import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import UserImage from '../components/UserImage.js';
import axios from 'axios';
import '../App.css';
import LoadingIndicator from '../components/LoadingIndicator.js';

// users is passed from App.Js
/*  Homepage = ({ users }) => */
function Homepage() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // axios.get() returns a promise. 
        // We handle the result of the GET request with .then and .catch.
        axios.get('https://insta.nextacademy.com/api/v1/users')
            // the result of the API is users 
            .then(result => {
                // passing result.data to useState array []
                setUsers(result.data)
                setIsLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    if (isLoading) {

        return < LoadingIndicator />

    }

    return (
        <div className="container-fluid">
            {
                users.map(user => {
                    return (
                        <div key={user.id} className="row border border-0 pt-3 pb-1 rounded">
                            <div className="col-2" style={{ backgroundColor: "#c4dbf6" }}>
                                <div className="mt-3">
                                    <Link className="font-weight-bold" to={`/profile/${user.id}`}>{user.username}</Link>
                                </div>
                                <img className="profile-image-avatar rounded-circle mt-4" src={user.profileImage} alt="profile-avatar" />
                            </div>
                            <div className="col" style={{ backgroundColor: "#e6f2ff" }}>
                                <div className="row">
                                    <UserImage userId={user.id} />
                                </div>
                            </div>
                        </div >
                    )

                })
            }
        </div>
    );
}

export default Homepage;