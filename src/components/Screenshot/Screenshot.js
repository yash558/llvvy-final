import React from 'react'
import './Screenshot.css'
import ScreenshotCard from './ScreenshotCard'

const Screenshot = () => {

    return (
        <div className="app-screenshots section-padding" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title">
                            <h2>Preview of <span> Livvy Shopping App  </span> </h2>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="screenshot-carasouel container">
                        <ScreenshotCard />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Screenshot