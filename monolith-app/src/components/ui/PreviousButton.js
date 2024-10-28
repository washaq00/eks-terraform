import React from 'react'
import Grid from '@material-ui/core/Grid'
import '../../css/index.css'
import PreviousArrow from './PreviousArrow'

const PreviousButton = (props) => {
    const { buttonText } = props
    return (
        <div className="arrow-button">
            <Grid container spacing={1}>
                <Grid item xs={1} className="project-nav-left-parent">
                    <PreviousArrow />
                </Grid>
                <Grid item xs={11}>
                    <p className="left-button-text">{ buttonText }</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default PreviousButton
