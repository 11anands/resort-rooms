import React from 'react';
import { Link } from 'react-router-dom';
import Hero from "../components/Hero.component";
import Banner from '../components/Banner.component'

export const Rooms = () => {
    return (
        <Hero hero='roomsHero'>
            <Banner title='Our Rooms'>
                <Link to='/' className='btn-primary'>
                    Return To Home
                </Link>
            </Banner>
        </Hero>
    )
}

export default Rooms;