import React, { Component } from "react";
import "./Books.css";
import { BookDisplay } from "./BookDisplay";

export default class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
        books: [
          {
            id: 1,
            title: "Domain Driven Design",
            author: "Eric Evans",
            isbn: "978-0321125217",
            img: "https://prodimage.images-bn.com/pimages/9780321125217_p0_v2_s600x595.jpg"
        },
        {
            id: 2,
            title: "Accelerate",
            author: "Nicole Forsgren",
            isbn: "978-1942788331",
            img: "https://prodimage.images-bn.com/pimages/9781942788331_p0_v2_s550x406.jpg"
        },
        {
            id: 3,
            title: "The Cardinal of the Kremlin",
            author: "Tom Clancy",
            isbn: "978-1101002384" ,
            img: "https://prodimage.images-bn.com/pimages/9780425269398_p0_v2_s550x406.jpg"
        },
        {
            id: 4,
            title: "As a Man Thinketh",
            author: "James Allen",
            isbn: "978-0875160009",
            img: "https://prodimage.images-bn.com/pimages/9781585426386_p0_v1_s550x406.jpg" 
        },
        {
            id: 5,
            title: "The Acts of the Apostles",
            author: "Ellen G. White",
            isbn: "978-1644391136", 
            img: "https://prodimage.images-bn.com/pimages/9781514280966_p0_v1_s550x406.jpg"
        },
        {
            id: 6,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            isbn: "978-0446310789", 
            img: "https://prodimage.images-bn.com/pimages/9780446310789_p0_v6_s550x406.jpg"
        },
        {
            id: 7,
            title: "Tinkers",
            author: "Paul Harding",
            isbn: "978-1934137123", 
            img: "https://prodimage.images-bn.com/pimages/9781934137123_p0_v3_s550x406.jpg"
        },
        {
            id: 8,
            title: "Cutting for Stone",
            author: "Abraham Verghese",
            isbn: "978-0375714368", 
            img: "https://prodimage.images-bn.com/pimages/9780375714368_p0_v1_s550x406.jpg"
        }
      ]
    };
  }

  render() {
    return (
        <div className="Books">
            <div className="lander">
              <BookDisplay books={this.state.books} />
            </div>
        </div>
    );
  }
}
