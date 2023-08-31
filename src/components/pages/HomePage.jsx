import React from 'react';
import ServicesComponent from '../ServicesProvided';
import Welcome from '../Welcome';
import ServiceAreaComponent from '../ServiceArea';
import Footer from '../Footer';

const HomePage = () => (
  <>
    <Welcome />
    <ServicesComponent />
    <ServiceAreaComponent />
    <Footer />
  </>
);

export default HomePage;
