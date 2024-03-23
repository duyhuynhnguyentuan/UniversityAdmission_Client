import React from 'react';
import './styles/AdmissionPlanPage.module.css'; // Import the CSS file for this component

const AdmissionPlanPage: React.FC = () => {
  return (
    <div style={{ marginTop: '60px', display: 'flex', justifyContent: 'center' }}>
      <table className="table table-bordered" style={{ width: '800px' }}> {/* Set width to 800px */}
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">School</th>
            <th scope="col">School Year</th>
            <th scope="col">Description</th>
            <th scope="col">Major In Plan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>2023</td>
            <td>UTE</td>
            <td>Tuyển Thẳng</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>2023</td>
            <td>UEH</td>
            <td>Xét điểm thi đại học quốc gia</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>2023</td>
            <td>Hutech</td>
            <td>Xét chứng chỉ ngoại ngữ</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>2023</td>
            <td>FPT University</td>
            <td>Xét học bạ</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdmissionPlanPage;
