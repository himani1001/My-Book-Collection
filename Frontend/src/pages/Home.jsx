import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css' // Import the custom CSS file

const Home = () => {
    return (
        <div className='container'>
            <p className='text-1'> Hi! I'm Himani Sharma</p>
            <p className='text-2'>I'm a Book Lover</p>
            <Link to="/cr" className="button">Current Read</Link>
            <Link to="/tbr" className="button">To Be Read</Link>
            <Link to="/read" className="button">Read</Link>
            <Link to='https://open.spotify.com/user/ec1wy3ga1fw86eoyhwwu9ymvw?si=mG9q20k_Rj2ayL_JMEQxKA' className="button">Spotify</Link>
        </div>
    )
}

export default Home
