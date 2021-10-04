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
            <h1 className="mt-4">Services</h1>
            <div className="services">
            <div className="row">
                {
                    services.map(service => (
                        <div className="col-md-4">
                           <div className="cart">
                            <div className="logo-image">
                        <img src={service.image} alt="" />

                            </div>
                              <div>
                                <h2>{service.name}</h2>
                                <p>
                                    {service.description}
                                </p>
                                </div> 
                           </div>
                        </div>
                    ))
                }
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;