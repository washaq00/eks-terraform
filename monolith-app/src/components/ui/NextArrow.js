import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const NextArrow = () => {
    return (
        <div className="right-icon">
            <FontAwesomeIcon icon={faChevronRight} size="2x"/>
        </div>
    )
}

export default NextArrow