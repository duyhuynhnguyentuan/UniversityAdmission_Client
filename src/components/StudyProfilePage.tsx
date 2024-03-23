import React from 'react';
import './styles/StudyProfilePage.module.css'; // Import the CSS file for this component

const StudyProfilePage: React.FC = () => {
  return (
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-6 mb-4 mb-lg-0">
            <div className="card mb-3" style={{ borderRadius: '.5rem'}}>
              <div className="row g-0">
                <div className="col-md-4 gradient-custom text-center text-white" style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="Avatar" className="img-fluid my-5" style={{ width: 80 }} />
                  <h5 className='text-black'>John Doe</h5>
                  <i className="far fa-edit mb-5" />
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <h6>Information</h6>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>First Name</h6>
                        <p className="text-muted">John</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Last Name</h6>
                        <p className="text-muted">Doe</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>High School</h6>
                        <p className="text-muted">THPT Chuyên Lê Hồng Phong</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>School Year</h6>
                        <p className="text-muted">2023</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Grade</h6>
                        <p className="text-danger">26.5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default StudyProfilePage;