import React, { useContext } from 'react'
import '../css/index.css';
import Footer from './Footer'
import Grid from '@material-ui/core/Grid'
import NextButton from './ui/NextButton'
import PreviousButton from './ui/PreviousButton'
import DataContext from '../state/DataContext'
import { useRouteMatch, NavLink } from 'react-router-dom'


const Project = () => {
    const context = useContext(DataContext)
    let { url } = useRouteMatch();
    let projectLink = url.substring(url.lastIndexOf('/') + 1)
    let projects = context.projects.projectList
    let projectClicked = {}

    for (let projectIndex in projects) {
        let project = projects[projectIndex]
        if (project.project_url === projectLink) {
            projectClicked = project
        }
    }

    const projectNavData = {
        projects: projects,
        clickedProjectId: parseInt(projectClicked.id)
    }
    
    return (
        <div>
            <h1 className="project-title">{projectClicked.title}</h1>
            <div className="project-summary">
                <p>{projectClicked.summary}</p>
            </div>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                <ProjectGallery images={projectClicked.gallery} />
                </Grid>
            </Grid>
            <div className="closing-note">
                <p>{projectClicked.closing_note}</p>
            </div>
            <ProjectNavigation data={projectNavData} />
            <Footer/>
        </div>
    )
}

const ProjectGallery = (props) => {
    return (
        props.images.map((item, key) =>
            <img className="project-gallery" src={process.env.PUBLIC_URL + "/img/" + item} />
        )
    )
}


const ProjectNavigation = (props) => {
    let projects = props.data.projects
    let clickedProjectId = props.data.clickedProjectId
    let numberOfProjects = projects.length
    let previousProjectId = clickedProjectId - 1 
    let nextProjectId = clickedProjectId + 1

    let previousProject = projects[previousProjectId - 1]
    let nextProject = projects[nextProjectId - 1]

    return (
        <div id="project-catalog-nav">
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    {previousProjectId !== 0 && 
                        <NavLink className="anchor-item-link" to={`/projects/${previousProject.project_url}`}>
                            <PreviousButton buttonText={previousProject.link_title} />
                        </NavLink>
                    }
                </Grid>
                <Grid item xs={6}>
                    {nextProjectId <= numberOfProjects && 
                        <NavLink className="anchor-item-link" to={`/projects/${nextProject.project_url}`}>
                            <NextButton buttonText={nextProject.link_title} />
                        </NavLink>
                    }
                </Grid>
            </Grid>
        </div>
    )
}

export default Project