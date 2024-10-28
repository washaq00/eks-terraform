import React from 'react'
import Grid from '@material-ui/core/Grid'
import '../../css/index.css'
import NextArrow from './NextArrow'

const NextButton = (props) => {
    const { buttonText } = props
    return (
        <div className="arrow-button">
            <Grid container spacing={1}>
                <Grid item xs={11}>
                    <p className="right-button-text">{ buttonText }</p>
                </Grid>
                <Grid item xs={1} className="project-nav-right-parent">
                    <NextArrow />
                </Grid>
            </Grid>
        </div>
    )
}

export default NextButton
