import React from 'react';
import { Link } from 'react-router-dom';
import Hero from "../components/Hero.component";
import Banner from '../components/Banner.component';
import Services from '../components/Services.component';
import FeaturedRooms from '../components/FeaturedRooms.component';

const Home = () => {
    return (
      <>
        <Hero>
          <Banner
          title='Luxurious Rooms' 
          subtitle='Deluxe rooms starting at $299' >
            <Link to='/rooms' className='btn-primary'>
              Our Rooms
            </Link>
          </Banner>
        </Hero>
        <Services />
        <FeaturedRooms/>
      </>
    )
}

export default Home;
