import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Input, Modal } from 'reactstrap';
import Image from 'react-graceful-image';

const Comments = ({ isOpen, toggle, imageUrl, userId }) => {
    const [comments, setComments] = useState("");

    // const handleSubmit = () => {

    // }

    useEffect(() => {
        console.log(imageUrl);
        console.log(userId);
        axios.get(`https://insta.nextacademy.com/api/v1/images/${userId}/comments`,
            {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('jwt'),
                }
            }
        )
            .then(result => {
                // passing result.data to useState array []
                setComments(result.data)
                console.log(result.data);
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <div className="container-fluid row mt-3 pb-3 justify-content-center" >

                {/* IMAGE PANEL */}
                <div className="col-md-4" style={{ backgroundColor: "#333333", color: "#d9d9d9" }} >
                    <h1>Image</h1>
                    <Image
                        src={imageUrl}
                        className='feed-picture'
                        alt='My awesome image'
                    />
                </div>

                {/* COMMENT PANEL */}
                <div className="col-md-6 pb-2" style={{ backgroundColor: "#e6e6e6", color: "#4d4d4d" }}>
                    <h1>Comments</h1>
                </div>

                {/* COMMENT BOX */}
                {/* <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="New message"
                    value={input}
                    maxLength="500"
                    onChange={(e) => { setInput(e.target.value) }}
                />
                <Input type="submit" value="Send" className="btn btn-primary" disabled={input.length === 0} />
            </Form> */}
            </div>
        </Modal>
    )
}

export default Comments;