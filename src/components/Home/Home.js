import React, { useEffect, useState } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardGroup} from 'react-bootstrap';

const Home = () => {
    const [services,setServices] = useState([]);
    useEffect(() => {
        fetch('./homedata.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
   
    return (
            <div>
            <Header></Header>

        {/* service categories */}
        <div className=" m-4">
            <h2>Categories</h2>
        <CardGroup className="categories-card-group mt-4">
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWALuNWv5NW5bEyaLtrcUPztRtYXoXmnFKNg&usqp=CAU" />
    <Card.Body className="category-card">
      <Card.Title>Category : Children</Card.Title>
      <Card.Text>
       Dance has no age. Your children can learn how to dance at a very small age.Let them explore their talents.
      </Card.Text>
      <Card.Text >
      <h3>Package starting from $40</h3>
      </Card.Text>
      
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQqRSmkJ8OBqW0glCw2RNq2MvlBedf4R7fA&usqp=CAU" />
    <Card.Body className="category-card">
      <Card.Title>Category : Adult</Card.Title>
      <Card.Text>
       Explore your talents. If you dream to be a dancer, we can help you in this journey.We are always ready for you.
      </Card.Text>
      <Card.Text className="package">
      <h3>Package starting from $80</h3>
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiAg3HOhuGcjOkmigBhuBo2QT1gDdUqLsZBA&usqp=CAU" />
    
    <Card.Body className="category-card">
      <Card.Title>Category : Old</Card.Title>
      <Card.Text>
       If you are passionate ,you can learn dance at any age. Age doesn't matter, only your passion matters.
      </Card.Text>
      <Card.Text className="package">
      <h3>Package starting from $65</h3>
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>
        </div>
            

            {/* service cards */}
            <div className="service-cards container">
            <h1 className="mt-4"> Services</h1>
            <div className="services">
            <div className="row">
                {
                    services.map(service => (
                        <div className="col-md-3 col-lg-6">
                        <div className="cart">
                         
                            <img src={service.image} alt="" />
                          
                              <div>
                                <h2>{service.name}</h2>
                                <p>
                                    {service.description}
                                </p>
                                <h2> Price per lesson {service.price}</h2>
                              </div> 
                           </div>
                      </div>
                    ))
                }
            </div>
          </div>
        </div>
           
  
  
             
           <Footer></Footer>
           </div>
    );
};

export default Home;