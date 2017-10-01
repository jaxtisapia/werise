/**
 * Created by user on 2017-09-29.
 */
import React, {Component} from 'react'

import bg1 from '../img/bg1.jpg'
import bg2 from '../img/bg2.jpg'
import bg3 from '../img/bg3.jpg'

// const image_urls = [
//     "http://media.gettyimages.com/photos/african-girl-picture-id108312102",
//     "http://andykristian.com/wp-content/uploads/2011/06/15.jpg"
// ];

const image_urls = [
    bg1,
    bg2,
    bg3
];

export class LeftView extends Component{

    constructor(props){
        super(props);

        this.state = {
            image_index : 0,
            image : image_urls[0]
        };

        this.changeBackground = this.changeBackground.bind(this);
    }

    componentDidMount(){
        setInterval(this.changeBackground, 5000);
    }


    changeBackground(event){

        if (this.state.image_index  === image_urls.length-1){
            this.setState({image_index: 0})
        }
        else {
            this.setState({image_index: this.state.image_index + 1})
        }

    this.setState({
        image:image_urls[this.state.image_index]
    });


    }

    render (){

        return (
            <div className="split-image" style={{backgroundImage:`url(${this.state.image})`}}>

            </div>
        );

    }

}