import React, { Component } from 'react'

export default class NewItems extends Component {
    render() {
        let {title,description,imgUrl,newsUrl}=this.props;
        return (
            <div>
                <div className="card my-2" style={{width: "18rem"}}>
                    <img src={!imgUrl?"https://www.digitaltrends.com/wp-content/uploads/2023/03/RRR-Naatu-Naatu.jpg?resize=1200%2C630&p=1":imgUrl} className="card-img-top d-block" alt="..." style={{height: "250px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} className="btn btn-primary">More...</a>
                    </div>
                </div>
            </div>

        )
    }
}
