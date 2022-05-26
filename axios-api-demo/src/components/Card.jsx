import React from 'react'

const Card = ({ title, description, imgUrl, newsUrl }) => {
    return (
        <div className="container card-group">
            <div className="card mx-5 my-5" style={{ width: "18rem" }}>
                <img src={imgUrl?imgUrl:"https://bilder1.n-tv.de/img/incoming/crop23238980/2641327852-cImg_16_9-w1200/2022-03-29T214717Z-288568047-RC2LCT9S8A2U-RTRMADP-3-USA-SEC-SPACS.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a target='_blank' href={newsUrl?newsUrl:"https://www.reuters.com/world/"} className="btn btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default Card