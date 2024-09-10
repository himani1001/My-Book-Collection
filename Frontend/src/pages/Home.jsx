import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import img1 from '../components/Images/img1.jpg';
import img2 from '../components/Images/img2.jpg';
import img3 from '../components/Images/img3.jpg';
import img4 from '../components/Images/img4.jpg';
import img5 from '../components/Images/img5.jpg';
import img6 from '../components/Images/img6.jpg';

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Index of the active option

    const handleOptionClick = (index) => {
        setActiveIndex(index);
    };

    const images = [img1, img2, img3, img4, img5, img6];

    return (
        <div className='container'>
            <p className='text-1'> Hi! I'm Himani Sharma</p>
            <p className='text-2'>I'm a Book Lover</p>
            <div className="button-group">
                <Link to="/cr" className="button">Current Read</Link>
                <Link to="/tbr" className="button">To Be Read</Link>
                <Link to="/read" className="button">Read</Link>
                <Link to='https://open.spotify.com/user/ec1wy3ga1fw86eoyhwwu9ymvw?si=mG9q20k_Rj2ayL_JMEQxKA' className="button">Spotify</Link>
            </div>
            <div className="options">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`option ${activeIndex === index ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${image})` }}
                        onClick={() => handleOptionClick(index)} // Handle click event
                    >
                        <div className="shadow"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
