import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div id='contact'>
            <div className="con-type">
            <h2>ASK US ANYTHING</h2>
            <span className="mar"></span>
            <p>You can now get to the contacts page by clicking the Apps icon in the upper right corner of the Gmail inbox. When you click the Apps icon, which is a square made up of nine smaller squares, it unfolds to reveal a panel of icons for other Google programs and services, including Google Photos, Google News and YouTube.</p>
            </div>
            <Form  className='con'>
                <div className="all-con">
                    <Form.Group style={{ margin: "30px" }} className="mb-3 filed-con " controlId="formGroupName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control name='name' type="name" placeholder="Enter your name " />
                    </Form.Group>
                    <Form.Group style={{ margin: "30px" }} className="mb-3 filed-con" controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Email" />
                    </Form.Group>
                </div>
                <Form.Group style={{ margin: "30px" }} className="mb-3" controlId="formGroupText">
                    <textarea className='text-con' rows="4" cols="50" name="comment" form="usrform">
                        Enter text here...</textarea>
                </Form.Group>
                <div className="sub-con">
                <input className='sub' type="submit" value="SEND" />
                </div>
            </Form>
        </div>
    );
};

export default Contact;