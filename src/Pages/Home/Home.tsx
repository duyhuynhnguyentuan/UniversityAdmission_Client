import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Home extends Component {
  render() {
    return (
      <Carousel style={{marginTop: '36px'}}>
        <Carousel.Item style={{width: '100%', height: '600px'}}>
          <img
            className="d-block " style={{width: '100%'}}
            src={require('../../asset/MYU.jpg')}
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{width: '100%', height: '600px'}}>
          <img
            className="d-block0" style={{width: '100%'}}
            src={require('../../asset/MBS.png')}
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{width: '100%', height: '600px'}}>
          <img 
            className="d-block" style={{width: '100%'}}
            src={require('../../asset/YTokyo.png')}
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
