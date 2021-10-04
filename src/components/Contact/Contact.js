import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import {AiFillPhone,AiTwotoneMail} from 'react-icons/ai';
import {HiLocationMarker} from 'react-icons/hi';
import { Form } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import './Contact.css'


const Contact = () => {
    return (
        <div>
            <Header></Header>
            <div className="m-4">
            <div className="row">

                {/* address and number */}
                <div className="col-md-6">
            <h2>Get In Touch</h2>
            <p><AiFillPhone/> 12485799228</p>
            <p><AiTwotoneMail/> anybodycandance@gmail.
            com</p>
            <p><HiLocationMarker/> 194/A Kazla,Motihar,6204 <br/> Rajshahi,Bangladeshh
            </p>
                </div>

            {/* contact form */}
                <div className="col-md-6">
                    <h2>Contact Us</h2>
                <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">  
    <Form.Control type="email" placeholder="name@gmail.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" placeholder="Type your text here" rows={3} />
  </Form.Group>
  <Button className="submit-button">Submit</Button>
</Form>
    </div>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;