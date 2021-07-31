import React from 'react';
import './AllProjects.css';
import BookShop from '../../images/BookShop.jpg';
import RideBooking from '../../images/RideBooking.jpg';
import PremierLeague from '../../images/PremierLeague.jpg';
import WeatherMap from '../../images/WeatherMap.jpg';
import Calculator from '../../images/Calculator.jpg';
import PenguinFashion from '../../images/PenguinFashion.jpg';
import Project from '../Project/Project';
import Footer from '../Footer/Footer';

const Projects = () => {
    const allProjects = [
        {
            id: 6,
            name: 'Book Shop using MERN stack',
            img: BookShop,
            preview: 'https://book-shop-d5432.web.app/',
            client: 'https://github.com/mhasanjoy/book-shop-client',
            server: 'https://github.com/mhasanjoy/book-shop-server'
        },
        {
            id: 5,
            name: 'Ride Booking using Firebase authentication',
            img: RideBooking,
            preview: 'https://ride-booking-57f0b.web.app/',
            client: 'https://github.com/mhasanjoy/ride-booking',
            server: ''
        },
        {
            id: 4,
            name: 'Premier League teams using React Router',
            img: PremierLeague,
            preview: 'https://practical-agnesi-95a6c0.netlify.app/',
            client: 'https://github.com/mhasanjoy/premier-league',
            server: ''
        },
        {
            id: 3,
            name: 'Weather Map by OpenWeatherMap API',
            img: WeatherMap,
            preview: 'https://mhasanjoy.github.io/weather-map/',
            client: 'https://github.com/mhasanjoy/weather-map',
            server: ''
        },
        {
            id: 2,
            name: 'Calculator with Vanilla JavaScript',
            img: Calculator,
            preview: 'https://mhasanjoy.github.io/calculator/',
            client: 'https://github.com/mhasanjoy/calculator',
            server: ''
        },
        {
            id: 1,
            name: 'E-commerce landing page by Bootstrap',
            img: PenguinFashion,
            preview: 'https://mhasanjoy.github.io/penguin-fashion/',
            client: 'https://github.com/mhasanjoy/penguin-fashion',
            server: ''
        }
    ];

    return (
        <>
            <main className="project-container">
                <h1>Some of my projects</h1>
                <section className="row g-5 mt-5">
                    {
                        allProjects.map(project => <Project key={project.id} project={project}></Project>)
                    }
                </section>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Projects;