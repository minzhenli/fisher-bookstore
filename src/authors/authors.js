import React from "react";
import "./authors.css";
import { Component } from "react";
import { AuthorDisplay } from "./AuthorDisplay";

export default class authors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [
            {
              img: "https://images-na.ssl-images-amazon.com/images/I/51TjKI58LiL._US230_.jpg",
              name: "Eric Evans",
              country: "USA"
            },
            {
              img: "https://federalnewsnetwork.com/wp-content/uploads/2017/05/2017NicoleOgrysko-960x960-300x300.jpg",
              name: "Nicole Forsgren",
              country: "USA"
            },
            {
              img: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NTU2MzE2NDI3NDIxMTk1/tom-clancy-9542178-1-402.jpg",
              name: "Tom Clancy",
              country: "USA"
            }
            ]
        }
    }

    render() {        
    return (
        <div className="authors">
            <div className="lander">
            <AuthorDisplay authors={this.state.authors} />
            </div>
        </div>
    );
    }
}
