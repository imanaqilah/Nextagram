import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import LoadingIndicator from '../components/LoadingIndicator.js';
import Placeholder from './Placeholder.js';
import Image from 'react-graceful-image';
import logo from '../assets/Spinner-1s-200px.gif';

const UserImage = ({ userId }) => {

    const [userImages, setUserImages] = useState([]);

    useEffect(() => {
        axios.get(`https://insta.nextacademy.com/api/v2/images?userId=${userId}`)
            // the result of the API is users 
            .then(result => {
                // passing result.data to useState array []
                setUserImages(result.data)

            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        userImages.map(userImage => {
            return (
                <div className="col-sm-4 mb-2">
                    {/* <CardImg key={userImage.id} src={userImage.url} className="feed-picture" /> */}
                    {/* Lazy loading */}
                    <Image
                        key={userImage.id}
                        src={userImage.url}
                        className='feed-picture'
                        alt='My awesome image'
                    />
                </div>
            )
        })
    )
}

export default UserImage;