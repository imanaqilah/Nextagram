import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'react-graceful-image';


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
    }, [userId])

    return (
        userImages.map(userImage => {
            return (
                <div className="col-sm-4 mb-2" key={userImage.id}>
                    {/* <CardImg key={userImage.id} src={userImage.url} className="feed-picture" /> */}
                    {/* Lazy loading */}
                    <Image
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