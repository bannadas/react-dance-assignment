import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./servicedata.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <Header></Header>
            {/* service cards */}
            <div className="container">
            <h1 className="mt-4 bolder"> Our Services</h1>
            <div className="services">
            <div className="row">
                {
                    services.map(service => (
                        <div className="col-md-4">
                         <div className="service-cart">
                        <div className="logo-image">
                        <img src={service.image} alt="" />
                            </div>
                                <div>
                                    <h2>{service.name}</h2>
                                    <p>
                                    {service.description}
                                    </p>
                                    <h3>Price per lesson {service.price}</h3>
                                
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

export default Services;