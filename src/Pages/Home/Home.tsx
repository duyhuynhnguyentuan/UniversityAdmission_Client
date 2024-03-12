import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousel style={{ marginTop: '36px' }}>
          <Carousel.Item style={{ width: '100%', height: '600px' }}>
            <img
              className="d-block "
              style={{ width: '100%' }}
              src={require('../../asset/B.png')}
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ width: '100%', height: '600px' }}>
            <img
              className="d-block0"
              style={{ width: '100%' }}
              src={require('../../asset/y.jpg')}
              alt="Second slide"
            />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ width: '100%', height: '600px' }}>
            <img
              className="d-block"
              style={{ width: '100%' }}
              src={require('../../asset/tm-1676958881899376797881.jpg')}
              alt="Third slide"
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* <ScholarshipAndConsultationForm /> */}
      </div>
    );
  }
}

// class ScholarshipAndConsultationForm extends Component {
//   render() {
//     return (
//       <div style={{ marginTop: '36px', backgroundColor: 'lightgray', padding: '20px' }}>
//         <h2>Cơ hội học bổng và Tư vấn</h2>
//         <form>
//           <div className="form-group">
//             <label htmlFor="fullName">Họ và Tên:</label>
//             <input type="text" className="form-control" id="fullName" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input type="email" className="form-control" id="email" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phoneNumber">Điện thoại:</label>
//             <input type="tel" className="form-control" id="phoneNumber" />
//           </div>
//           <div className="form-check">
//             <input type="checkbox" className="form-check-input" id="receiveInfo" />
//             <label className="form-check-label" htmlFor="receiveInfo">Đăng ký nhận thông tin tuyển sinh</label>
//           </div>
//           <div className="form-check">
//             <input type="checkbox" className="form-check-input" id="receiveConsultation" />
//             <label className="form-check-label" htmlFor="receiveConsultation">Đăng ký tư vấn</label>
//           </div>
//           <button type="submit" className="btn btn-primary">Gửi</button>
//         </form>
//       </div>
//     );
//   }
// }