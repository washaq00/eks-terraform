import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import { NavLink } from 'react-router-dom'
import DataContext from '../state/DataContext'

const NavigationBar = ( { sticky } ) => {
    return (
        <nav id="announcement-header" className={sticky ? "announcement-header navbar-sticky" : "announcement-header"}>
            <Grid container spacing={10} justify="flex-end">
                <Grid item xs={9}>
                    <SiteHeader />
                </Grid>
                <Grid item xs={3}>
                    <NavMenu />
                </Grid>
            </Grid>
        </nav>
    )
}

const SiteHeader = () => {
    const context = useContext(DataContext)
    return (
        <div>
            <NavLink to="/" className="site-title anchor-item-link">{context.homepage.site_title}</NavLink>
        </div>
    )
}

const NavMenu = () => {
    return (
        <div className="nav">
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <NavLink to="/projects" activeClassName="active" className="anchor-item-link">Projects</NavLink>
                </Grid>
                <Grid item xs={4}>
                    <NavLink to="/about" activeClassName="active" className="anchor-item-link">About</NavLink>
                </Grid>
                <Grid item xs={4}>
                    <NavLink to="/contact" activeClassName="active" className="anchor-item-link">Contact</NavLink>
                </Grid>
            </Grid>
        </div>
    )
}

export default NavigationBar