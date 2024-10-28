import React from 'react'
import DataContext from './DataContext'
import data from '../config/static.json'

class MyProvider extends React.Component {
    render() {
        return (
            <DataContext.Provider value={data}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export default MyProvider