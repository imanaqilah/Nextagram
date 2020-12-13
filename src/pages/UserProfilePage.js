import UserImage from '../components/UserImage.js'
import { useParams } from 'react-router-dom'
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
                console.log(result.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [match.id])

    // return <h1>Profile Page of USER ID: {match.id}</h1>
    return (
        <div className="container-fluid">
            <div className="row" >
                <div className="col-sm-2 mt-3 mb-3">
                    <CardImg className="profile-image-avatar rounded-circle" src={user.profileImage} />
                </div>
                <div className="col-sm-3">
                    <CardBody>
                        {/* <CardTitle>{user.username}</CardTitle> */}
                        <h3 className="font-weight-bold">@{user.username}</h3>
                        {/* <Link className="font-weight-bold" to={`/profile/${user.id}`}>@{user.username}</Link> */}
                    </CardBody>
                </div>
            </div>
            <div className="row">
                <UserImage userId={match.id} />
            </div>
        </div>


    )
}

export default UserProfilePage;