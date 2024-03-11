import React from 'react';
import './styles/ProfilePage.module.css'; // Import the CSS file for this component

const ProfilePage: React.FC = () => {
  return (
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-6 mb-4 mb-lg-0">
            <div className="card mb-3" style={{ borderRadius: '.5rem' }}>
              <div className="row g-0">
                <div className="col-md-4 gradient-custom text-center text-white" style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="Avatar" className="img-fluid my-5" style={{ width: 80 }} />
                  <h5>Marie Horwitz</h5>
                  <p>Web Designer</p>
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
                        <h6>Email</h6>
                        <p className="text-muted">johndoe@gmail.com</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Mobile</h6>
                        <p className="text-muted">123 456 789</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Password</h6>
                        <p className="text-muted">********</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Birthday</h6>
                        <p className="text-muted">1990-01-01</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Role</h6>
                        <p className="text-muted">User</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Gender</h6>
                        <p className="text-muted">Male</p>
                      </div>
                      <div className="col-12 mb-3">
                        <h6>Address</h6>
                        <p className="text-muted">123 Street, City, Country</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start">
                      <a href="#!"><i className="fab fa-facebook-f fa-lg me-3" /></a>
                      <a href="#!"><i className="fab fa-twitter fa-lg me-3" /></a>
                      <a href="#!"><i className="fab fa-instagram fa-lg" /></a>
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


export default ProfilePage;