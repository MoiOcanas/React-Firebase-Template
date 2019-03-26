import React from 'react';

import image from '../img/collage.jpg';

//Styles
import "./landing.css";

//Components 
import Card from './Card/Card';
import Footer from './Footer/Footer';

class LandingPage extends React.Component {
    constructor() {
        super();
        this.state = {
            technologies: [
                { 
                    title: 'React', 
                    site: 'https://reactjs.org/', 
                    img: 'https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png' 
                },
                { 
                    title: 'Firebase', 
                    site: 'https://firebase.google.com/?hl=es-419',
                    img: 'https://cdn-images-1.medium.com/max/1000/0*CPTNvq87xG-sUGdx.png' 
                },
                { 
                    title: 'Styled Components', 
                    site: 'https://www.styled-components.com/',
                    img: 'https://cdn-images-1.medium.com/max/1500/1*QOO33LHaDbMGWPiNqc6JxQ.png' 
                },
                { 
                    title: 'create-react-app', 
                    site: 'https://github.com/facebook/create-react-app',
                    img: 'https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png'  
                },
            ]
        };
    }

    render() {
        return (
            <div className="container">
                <div>
                    <img src={image} className="main-image" alt="la" />
                </div>
                <h1>This template has been made using react, firebase and other front end technologies.</h1>
                <p>Here are the links to it's pages.</p>
                <div className="main-grid-container">
                    {this.state.technologies.map(
                        tech => <Card title={tech.title} site={tech.site} img={tech.img} />
                    )}
                </div>
                <Footer />
            </div>
        );
    }
}

export default LandingPage;