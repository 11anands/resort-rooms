import React from 'react';
import { Link } from 'react-router-dom';
import Hero from "../components/Hero.component";
import Banner from '../components/Banner.component'

export default Error = () => {
    return (
        <Hero>
            <Banner title='Page not found' subtitle='Error 404'>
                <Link to='/' className='btn-primary'>
                    Return to Home
                </Link>
            </Banner>
        </Hero>
    )
}