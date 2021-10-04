import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css'
import { AiFillStar } from 'react-icons/ai';
const About = () => {
    return (
        <div>
            <Header></Header>
            
            {/*  mission and vision */}
            <div className="about-us m-4">
            <CardGroup>
  <Card>
    <Card.Body style={{backgroundColor:'gray',color:'white'}}>
      <Card.Title>Our mission</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate nihil ipsam, magni odit laborum corporis rem ea, quo alias inventore totam delectus eveniet sint suscipit numquam corrupti aliquam itaque! Lorem, ipsum dolor sit amet consectetur adipisicing elit.</small>
    </Card.Footer>
  </Card>
  
  <Card >
    <Card.Body style={{backgroundColor:'gray',color:'white'}}>
      <Card.Title>Our vision</Card.Title> 
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur inventore quidem earum quas quaerat blanditiis, deleniti magnam sit, quo esse ea iure quos asperiores beatae autem similique ab optio? Tenetur illo fugit voluptatibus hic sequi odio totam a laboriosam consequatur.</small>
    </Card.Footer>
  </Card>
</CardGroup>
            </div>


            {/* instructors */}
            <h1>Meet Our Professional Instructor Team</h1>
            <div className=" container instructors m-4">
                <div className="row container cards">
                <div className="col-md-4">
                    <div className="instructor-card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhcRblFblgUROXDpxB7TDghgURaoB5yA2ORA&usqp=CAU" alt="" />
                        <h2>Rashmi</h2>
                        <p>A dance choreographer with 10 years dance experience</p>
                    </div>

                </div>
                <div className="col-md-4">
                <div className="instructor-card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDA0jUdWRRPNUuNbmiYyNgwWLv_NHLZN4RRA&usqp=CAU" alt="" />
                        <h2>Nibedita</h2>
                        <p>A dance choreographer with 8 years dance experience</p>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="instructor-card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa4XnGObxtVrgwf0C42uO9ZGUj2Zh1WwmvRA&usqp=CAU" alt="" />
                        <h2>Nikita</h2>
                        <p>A dance choreographer with 7 years dance experience</p>
                    </div>
                </div>
                
                </div>
            </div>

            {/* reviews */}
            <div className="container">
                <h1>Client reviews</h1>
                <div className="row">
                    <div className="col-md-4 review-card">
                    <div>
                        <img style={{height:'100px', width:'100px',borderRadius:'50px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02BDII05FNgN6bNDWDTi_lxpCeD5zrwbZmA&usqp=CAU" alt="" />
                    </div>
                    <div>
                        <h2>Name:Sunny singh</h2>
                        <h4>Lives in Panjab</h4>
                        <p>I had an amazing experience with this dance academy.</p>
                        <p className="rating-icon">Rating : <AiFillStar/> <AiFillStar/>  <AiFillStar/>  <AiFillStar/>  <AiFillStar/> </p>
                    </div>
                    </div>
                    
                    <div className="col-md-4 review-card">
                    <div>
                        <img style={{height:'100px', width:'100px',borderRadius:'50px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrt7geb18glWDrktXdsige5-f2hzroSba-KQ&usqp=CAU" alt="" />
                    </div>
                    <div>
                        <h2>Name:Raju Sharma</h2>
                        <h4>Lives in Mumbai</h4>
                        <p>I had an amazing experience with this dance academy.</p>
                        <p className="rating-icon">Rating : <AiFillStar/> <AiFillStar/>  <AiFillStar/>  <AiFillStar/>  <AiFillStar/> </p>
                    </div>
                    </div>  
                    <div className="col-md-4 review-card">
                    <div>
                        <img style={{height:'100px', width:'100px',borderRadius:'50px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2as1PLfMq-IkJfT-_sr1vAOle0dKmcFbCKQ&usqp=CAU" alt="" />
                    </div>
                    <div>
                        <h2>Name:Abdullah</h2>
                        <h4>Lives in Pune</h4>
                        <p>I had an amazing experience with this dance academy.</p>
                        <p className="rating-icon">Rating : <AiFillStar/> <AiFillStar/>  <AiFillStar/>  <AiFillStar/>   </p>
                    </div>
                    </div> 
                   
                   
                    
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;