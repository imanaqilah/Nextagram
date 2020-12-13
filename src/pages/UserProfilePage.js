import UserImage from '../components/UserImage.js'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { CardImg, CardBody } from 'reactstrap';

const UserProfilePage = () => {
    const match = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        // axios.get() returns a promise. 
        // We handle the result of the GET request with .then and .catch.
        axios.get(`https://insta.nextacademy.com/api/v1/users/${match.id}`)
            // the result of the API is users 
            .then(result => {
                // passing result.data to useState array []
                setUser(result.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [match.id])

    // return <h1>Profile Page of USER ID: {match.id}</h1>
    return (
        <div>
            <div className="col-3" >
                <CardImg src={user.profileImage} style={{ width: "40%", border: "3px solid white", margin: "5px" }} />
                <CardBody>
                    {/* <CardTitle>{user.username}</CardTitle> */}
                    <Link to={`/profile/${user.id}`}>{user.username}</Link>
                </CardBody>
            </div>
            <div className="row">
                <UserImage userId={match.id} />
            </div>
        </div>


    )
}

export default UserProfilePage;