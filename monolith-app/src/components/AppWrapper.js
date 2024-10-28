import React from 'react'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Project from './Project'
import { Switch, Route, Redirect } from 'react-router-dom'


const AppWrapper = ( { stickyRef } ) => {
    return (
        <main ref={stickyRef} className="container-custom">
            <Switch>
                <Route path="/projects/:id" component={Project}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route exact path="/">
                    <Redirect to="/projects"/>
                </Route>
            </Switch>
        </main>
    )
}

export default AppWrapper