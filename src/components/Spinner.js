import React, { Component } from 'react' 

export class Spinner extends Component {
    render() {
        return (
            <div className='text-center mt-8 '>
                <div className="spinner-grow text-muted m-1"></div>
                <div className="spinner-grow text-primary m-1"></div>
                <div className="spinner-grow text-muted m-1"></div>
                <div className="spinner-grow text-primary m-1"></div>
            </div>
        )
    }
}

export default Spinner
