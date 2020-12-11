import React, { useState } from 'react';
import { Form, FormGroup, Input, FormText, Button } from 'reactstrap';
import axios from 'axios'

const UploadPage = () => {
    const [imageFile, setImageFile] = useState(null)
    const [previewImage, setPreviewImage] = useState(null)
    const [message, setMessage] = useState('')

    return (
        <div>
            <h1>Upload your image!</h1>
            {/* The function to call on submit goes here */}
            <Form onSubmit={
                (e) => {
                    e.preventDefault()
                    let token = localStorage.getItem("jwt")
                    let formData = new FormData();
                    // Append the key:value pair to the formData object
                    formData.append("image", imageFile);

                    axios.post("https://insta.nextacademy.com/api/v1/images/", formData, {
                        headers: { Authorization: "Bearer " + token }
                    })
                        .then(
                            response => {
                                if (response.data.success) {
                                    setMessage("Image Uploaded Successfully!")
                                    setPreviewImage(null)
                                    setImageFile(null)
                                }
                            }
                        )
                        .catch(error => {
                            console.log(error)
                        })
                }
            }>
                <FormGroup>
                    <Input
                        type="file"
                        name="image-file"
                        onChange={
                            (e) => {
                                setPreviewImage(URL.createObjectURL(e.target.files[0]))
                                setImageFile(e.target.files[0])
                                setImageFile(e.target.files[0])
                                // setTextInput(e.target.value)
                            }
                            // Th e function to call when you have selected a file will be called here
                        }
                    />
                    <FormText color="muted">
                        Make sure the image being uploaded is a supported format.</FormText>
                </FormGroup>
                <Button type="submit" color="primary">
                    Upload
                </Button>
            </Form>

            {/* Image Preview */}
            <div className="card">
                {previewImage ? (
                    <img
                        src={previewImage}
                        width="50%"
                        height="50%"
                    />
                ) : (
                        <h3 className="text-center">
                            {message ? message : "Live Preview"}
                        </h3>
                    )}
            </div>
        </div >
    )
}

export default UploadPage;


// https://insta.nextacademy.com/api/v1/images/