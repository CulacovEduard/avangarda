import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import im1 from '../assets/CarouselImages/im1.jpg';
import im2 from '../assets/CarouselImages/im2.jpg';
import im3 from '../assets/CarouselImages/im3.jpg';


export default class CarouselBox extends Component {
  render() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ im1 }
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={im2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={im3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
  }
}
