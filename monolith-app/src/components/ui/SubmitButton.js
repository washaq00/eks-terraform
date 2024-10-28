import React from 'react'

const SubmitButton = (props) => {
    let buttonText = props.buttonText
    let submitForm = props.submitForm
    return (
        <button type="submit" className="submit-button" onClick={submitForm}>
            { buttonText }
        </button>
    )
}

export default SubmitButton