import React, {useContext} from 'react'
import '../css/index.css';
import DataContext from '../state/DataContext'

export default function Footer() {
    const context = useContext(DataContext)
    return (
        <footer className="footer">
            <strong>Copyright</strong>
            <p>&copy; {context.copyright.text}</p>
        </footer>
    )
}