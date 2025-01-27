import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl , author, date, Source} = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <span className="position-absolute mt-2 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex : 1}}>{Source}</span>
                    <img src={!imageUrl ? "https://thumbs.dreamstime.com/b/no-preview-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-easily-97109047.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
