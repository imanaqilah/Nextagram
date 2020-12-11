import React, { useState, useEffect } from 'react';
import { CardImg, CardBody } from 'reactstrap';
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
        <div className="d-flex flex-wrap" style={{ margin: "10px" }}>
            {
                users.map(user => {
                    return (
                        <div key={user.id} className="row" style={{ backgroundColor: "#2A1B3D", marginBottom: "10px" }}>
                            <div className="col-2">
                                <CardImg src={user.profileImage} style={{ width: "40%", border: "3px solid white", margin: "5px" }} />

                                <CardBody>
                                    {/* <CardTitle>{user.username}</CardTitle> */}
                                    <Link to={`/profile/${user.id}`}>{user.username}</Link>
                                    {/* <Button onClick={press} color="primary">See More</Button>{' '} */}
                                </CardBody>
                            </div>
                            <div className="col-10" >
                                <div className="row">
                                    <UserImage userId={user.id} />
                                </div>
                            </div>
                        </div>
                    )

                })
            }
        </div >
    );
}

export default Homepage;