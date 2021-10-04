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
    <Card.Body className="mission-and-vision">
      <Card.Title>Our mission</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Our mission is to help everyone in fullfilling their dreams.We believe that there is no age to learn dance. People of any ages can learn dance.Dancing helps you to stay physically and mentally fit. Even more so, dancing regularly can improve your general well-being, boosts your self-esteem and has also been shown to improve your social skills.</small>
    </Card.Footer>
  </Card>
  
  <Card >
    <Card.Body className="mission-and-vision" >
      <Card.Title>Our vision</Card.Title> 
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Dancing is so much more than just grooving on the dance floor to your favorite tunes. In fact, you’ll be surprised how many benefits are associated with dancing. Not only does it train your brain and your body’s motor skills but it also is an excellent exercise for your entire body. Here are some of the greatest dance quotes of all time to celebrate the joy of dancing.</small>
    </Card.Footer>
  </Card>
</CardGroup>
            </div>


            {/* instructors */}
            <h1 style={{fontWeight:'bold', marginTop:'5px'}}>Meet Our Professional Instructor Team</h1>
            <div className=" container instructors m-4">
                <div className="row">
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
                <h1 style={{fontWeight:'bold', margin:'10px'}}>Client reviews</h1>
                <div className="row mt-3">
                    <div className="col-md-4 review-card">
                    <div>
                        <img style={{height:'100px', width:'100px',borderRadius:'50px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02BDII05FNgN6bNDWDTi_lxpCeD5zrwbZmA&usqp=CAU" alt="" />
                    </div>
                    <div>
                        <h2>Name:Sunny singh</h2>
                        <h5>Lives in Sylhet</h5>
                        <p>I had an amazing experience with this dance academy.</p>
                        <p className="rating-icon">Rating : <AiFillStar/> <AiFillStar/>  <AiFillStar/>  <AiFillStar/>  <AiFillStar/> </p>
                    </div>
                    </div>
                    
                    <div className="col-md-4 review-card">
                    <div>
                        <img style={{height:'100px', width:'100px',borderRadius:'50px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrt7geb18glWDrktXdsige5-f2hzroSba-KQ&usqp=CAU" alt="" />
                    </div>
                    <div>
                        <h2>Name:Raju Ahmed</h2>
                        <h5>Lives in Dhaka</h5>
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
                        <h5>Lives in Rajshahi</h5>
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