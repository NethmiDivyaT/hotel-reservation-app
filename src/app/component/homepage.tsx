import React from 'react';

const Homepage: React.FC = () => {
    return (
        <div>
            <header style={{ position: 'relative' }}>
                <img src='/images/Hotel_Homepage.jpg' alt='Hotel Homepage' style={{ width: '100%' }}/>
                <img src='/images/logo.webp' alt='Hotel Logo' style={{ position: 'absolute', top: '10px', right: '10px', width: '100px' }}/>
                <button style={{position:'absolute',top: '10px', right: '50%', width: '100px' }}>Book Now</button>
            </header>
            <section>
                <h2>Our Rooms</h2>
                <p>Choose from a variety of rooms to suit your needs</p>
            </section>
            <section>
                <h2>Amenities</h2>
                <p>Enjoy our world-class amenities</p>
            </section>
            <section>
                <h2>Contact Us</h2>
                <p>Get in touch with us for any queries</p>
            </section>
            <footer>
                <p>&copy; 2023 Our Hotel. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Homepage;