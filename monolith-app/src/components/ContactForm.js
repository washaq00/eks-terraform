import React, { Component, useState } from 'react'
import '../css/index.css';
import SubmitButton from './ui/SubmitButton'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { Formik } from 'formik'
import * as Yup from 'yup' 

const schema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().email().required(),
    message: Yup.string().required()
})  

const submitForm = () => {
    console.log("Submitting form")
}

const ContactFormWrapper = () => {
    const [validated, setValidated] = useState(false)
        return (
            <div className="contact-page-container-wrapper">
                <h2 className="contact-form-heading">
                    if you have any work inquiry, or you would like to
                    collaborate, please feel free to email me.
                </h2>
                <Formik validationSchema={schema} onSubmit={submitForm} 
                    initialValues={{
                        firstName: 'First Name',
                        lastName: 'Last Name',
                        email: 'example@email.com'
                    }}
                > 
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors
                }) => (
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="firstName">
                            <Form.Label>First Name*</Form.Label>
                            <Form.Control required 
                                name="firstName" 
                                value={values.firstName || ''}
                                onBlur={handleBlur} 
                                onChange={handleChange} 
                                isValid={touched.firstName && !errors.firstName} 
                                isInvalid={!!errors.firstName}
                                type="text" />
                        </Form.Group>
                    
                        <Form.Group as={Col} md="6" controlId="lastName">
                            <Form.Label>Last Name*</Form.Label>
                            <Form.Control required 
                                name="lastName" 
                                value={values.lastName} 
                                onBlur={handleBlur}
                                onChange={handleChange} 
                                isValid={touched.lastName && !errors.lastName} 
                                isInvalid={!!errors.lastName}
                                type="text" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="12" controlId="formGridEmail">
                            <Form.Label>Email*</Form.Label>
                            <Form.Control 
                                required 
                                name="email" 
                                value={values.email}
                                onBlur={handleBlur} 
                                onChange={handleChange} 
                                isValid={touched.email && !errors.email} 
                                isInvalid={!!errors.email}
                                type="email"  />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="12" controlId="yourMessage.textArea">
                            <Form.Label>Your message*</Form.Label>
                            <Form.Control as="textarea" rows="8" required />
                        </Form.Group>
                    </Form.Row>
                    <SubmitButton buttonText="Submit" submitForm={submitForm}/>
                </Form>
                )}
                </Formik>
            </div>
        )
}

export default ContactFormWrapper