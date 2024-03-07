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
            src={require('../../asset/road-1072823_640.jpg')}
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
            src={require('../../asset/tree-736885_1280.jpg')}
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
            src={require('../../asset/admision.png')}
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
