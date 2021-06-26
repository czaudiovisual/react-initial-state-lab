// your ImageSlider code here!
import React from 'react';
import { Component } from 'react';


export default class ImageSlider extends Component {

    constructor () {
        super ()
        this.state = {
            currentSlideIndex : 0
        }
    }


    render() {
        return (
            // <div>
            // <ImageSlider/>
            <h1>I am on slide {this.state.currentSlideIndex}</h1>
            // </div>
        )
    }
}