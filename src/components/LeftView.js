/**
 * Created by user on 2017-09-29.
 */
import React, { Component } from 'react'

import bg1 from '../img/bg1.jpg'
import bg2 from '../img/bg2.jpg'
import bg3 from '../img/bg3.jpg'
import bg4 from '../img/bg4.jpg'
import bg5 from '../img/bg5.jpg'
import bg6 from '../img/bg6.jpg'
import bg7 from '../img/bg7.jpg'
import bg8 from '../img/bg8.jpg'
import bg9 from '../img/bg9.jpg'
import bg10 from '../img/bg10.jpg'
import bg11 from '../img/bg11.jpg'
import bg12 from '../img/bg12.jpg'
import bg13 from '../img/bg13.jpg'

// const image_urls = [
//     "http://media.gettyimages.com/photos/african-girl-picture-id108312102",
//     "http://andykristian.com/wp-content/uploads/2011/06/15.jpg"
// ];

const image_urls = [
    bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg9, bg10, bg11, bg12, bg13
];

export class LeftView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            image_index: 0,
            image: image_urls[0]
        };

        this.changeBackground = this.changeBackground.bind(this);
    }

    componentDidMount() {
        setInterval(this.changeBackground, 5000);
    }


    changeBackground(event) {

        if (this.state.image_index === image_urls.length - 1) {
            this.setState({ image_index: 0 })
        }
        else {
            this.setState({ image_index: this.state.image_index + 1 })
        }

        this.setState({
            image: image_urls[this.state.image_index]
        });


    }

    render() {

        return (
            <div className="split-image" style={{ backgroundImage: `url(${this.state.image})` }}>

            </div>
        );

    }

}