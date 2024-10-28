import React, { useContext } from 'react'
import '../css/index.css';
import { Link, useRouteMatch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'
import DataContext from '../state/DataContext'

const useStyles = makeStyles({
    root: {
        fontSize: '21px',
        textAlign: 'left'
    },
    media: {
        // height: 354.38
        minHeight: 500.38
    }
})

const Projects = () => {
    const context = useContext(DataContext)
    const classes = useStyles();
    let { url } = useRouteMatch();
    const projectList = context.projects.projectList
    const projects = projectList.map((item, key) => 
        <Grid item xs={6}>
            <Link className="anchor-item-link" to={`${url}/${item.project_url}`}>
                <Card square={true} style={{boxShadow: "none"}}>
                    <CardActionArea>
                        <CardMedia className={classes.media} 
                            image={process.env.PUBLIC_URL + '/img/' + item.gallery[0]} 
                            title={item.link_title}/>
                        <CardContent className={classes.root}>
                            { item.link_title }
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </Grid>
    );

    return (
        <div>
            <Grid container spacing={10}>
                { projects }
            </Grid>
            <Description data={context.projects} />
            <Footer />
        </div>
    )
}

const Description = (props) => {
    const projects = props.data
    return (
        <div>
            <h3 className="description">{projects.description}</h3>
            <div className="link">
                <NavLink to="/contact" className="anchor-item-link">
                    <p className="description-link">Let's work together.</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Projects