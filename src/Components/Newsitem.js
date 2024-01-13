import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Newsitem extends Component {
  render() {
    const { title, description, imageUrl, NewsUrl, date, authorName, source } =
      this.props;
    return (
      <>
        <div className="card my-2 mx-auto" style={{ width: "100%", height:"100%" }}>
          <div>
            <span
              className="badge rounded-pill bg-danger"
              style={{ position: "absolute", right: "0" }}
            >
              {source}
              <span className="visually-hidden">name of source</span>
            </span>
          </div>
          <Link style={{ color: "black", textDecoration: "none" }} to={NewsUrl}>
            <div style={{ width: "100%" }}>
              <img
                src={imageUrl}
                // style={{ width: "300px", height:"300px" }}
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card-body">
              <h6 className="card-title">
                {title.slice(0,30)}{" "}
                <span className="badge my-1 text-bg-success">Success</span>
              </h6>
              <p className="card-text">{description.slice(0,60)}</p>
              <b>
                <p className="card-text mb-3 text-capitalize">
                  <small className="text-muted">
                    by {authorName ? authorName : " .... "} on{" "}
                    {new Date(date).toGMTString()}{" "}
                  </small>
                </p>
              </b>
            </div>
          </Link>
        </div>
      </>
    );
  }
}

export default Newsitem;
