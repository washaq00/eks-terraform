import React, { useEffect, useState, useRef } from 'react'
import './css/index.css';
import { BrowserRouter as Router } from 'react-router-dom'
import MyProvider from './state/MyProvider'
import 'bootstrap/dist/css/bootstrap.min.css'
import ScrollToTop from './components/utils/ScrollToTop';
import AppWrapper from './components/AppWrapper'
import NavigationBar from './components/NavigationBar'

export default function Application() {
    console.log(process.env.PUBLIC_URL)

    useEffect(() => {
        return () => {
            window.removeEventListener("scroll", () => handleScroll)
        }
    }, [])

    const [isSticky, setSticky] = useState(false)

    const stickyRef = useRef(null)
    const handleScroll = () => {
        window.pageYOffset > 0 //stickyRef.current.getBoundingClientRect().bottom
            ? setSticky(true)
            : setSticky(false)
    }

    const debounce = (func, wait = 20, immediate=true) => {
        let timeout 
        return () => {
            let context = this,
                args = arguments
            const later = () => {
                timeout = null
                if (!immediate) func.apply(context, args)
            }
            const callNow = immediate && !timeout
            clearTimeout(timeout)
            timeout = setTimeout(later, wait)
            if (callNow) func.apply(context, args)
        }
    }

    window.addEventListener("scroll", handleScroll)

    return (
        <MyProvider>
            <Router basename={process.env.PUBLIC_URL}>
                <ScrollToTop>
                    <NavigationBar sticky={isSticky} />
                    <AppWrapper stickyRef={stickyRef} />
                </ScrollToTop>
            </Router>
        </MyProvider>
    )
}




