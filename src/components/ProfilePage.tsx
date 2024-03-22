import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/ProfilePage.module.css'; // Import the CSS file for this component

const ProfilePage: React.FC = () => {
  // State to store user profile data
  const [profileData, setProfileData] = useState<any>(null); // Change 'any' to the type of your profile data if possible

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Fetch user profile data from the API
        const response = await axios.get('https://universityadmission.onrender.com/api/v1/auth/user/65eff764fe3bcd72e2647f42');

        // If request is successful, set profile data in state
        if (response.status === 200) {
          setProfileData(response.data);
        } else {
          console.error('Failed to fetch user profile data');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    // Call the fetchUserProfile function when the component mounts
    fetchUserProfile();
  }, []);

  return (
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-6 mb-4 mb-lg-0">
            <div className="card mb-3" style={{ borderRadius: '.5rem'}}>
              <div className="row g-0">
                <div className="col-md-4 gradient-custom text-center text-white" style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="Avatar" className="img-fluid my-5" style={{ width: 80 }} />
                  <h5 className='text-black'>{profileData ? `${profileData.firstname} ${profileData.lastname}` : 'Loading...'}</h5>
                  <i className="far fa-edit mb-5" />
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <h6>Thông tin</h6>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      {/* Render user profile data here */}
                      {profileData && (
                        <>
                          <div className="col-6 mb-3">
                            <h6>Tên</h6>
                            <p className="text-muted">{profileData.firstname}</p>
                          </div>
                          <div className="col-6 mb-3">
                            <h6>Họ</h6>
                            <p className="text-muted">{profileData.lastname}</p>
                          </div>
                          <div className="col-6 mb-3">
                            <h6>Email</h6>
                            <p className="text-muted">{profileData.email}</p>
                          </div>
                          <div className="col-6 mb-3">
                            <h6>Số điện thoại</h6>
                            <p className="text-muted">{profileData.mobile}</p>
                          </div>
                          <div className="col-6 mb-3">
                            <h6>Vai trò</h6>
                            <p className="text-muted">{profileData.role}</p>
                          </div>
                          <div className="col-6 mb-3">
                            <h6>Giới tính</h6>
                            <p className="text-muted">{profileData.gender}</p>
                          </div>
                          {/* Add other profile fields here */}
                        </>
                      )}
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
