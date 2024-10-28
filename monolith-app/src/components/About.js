import React from 'react'
import '../css/index.css';
import Footer from './Footer'
import Grid from '@material-ui/core/Grid'
import DataContext from '../state/DataContext'

const About = () => {
    const context = React.useContext(DataContext)
    const about = context.about
    return (
        <div className="about-page-container-wrapper">
            <h1>{about.heading}</h1>
            <p className="text-spacing vertical-spacing"><em>{about.subHeading}</em></p>
            <p className="text-spacing vertical-spacing">{about.summary}</p>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <h2>Services</h2>
                    <p className="text-spacing">{about.services}</p>
                </Grid>
                <Grid item xs={6}>
                    <h2>Clients</h2>
                    <p className="text-spacing">{about.clients}</p>
                </Grid>
            </Grid>
            <div className="additional-description"></div>
            <Footer />
        </div>
    )
}

export default About