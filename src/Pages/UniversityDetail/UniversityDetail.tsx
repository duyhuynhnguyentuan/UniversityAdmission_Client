import React from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import './UniversityDetail.css'; // Import CSS file for table border styling

interface UniversityDetailProps {
  code: string;
}

interface University {
  _id: string;
  name: string;
  description: string;
  abbreviation: string;
  code: string;
  address: string;
  contactInfo: string;
  admissionPolicy: string;
  yearEstablish: number;
}

const UniversityDetail = () => {
  const [university, setUniversity] = React.useState<University | null>(null);
  const { _id } = useParams();
  console.log(_id);

  React.useEffect(() => {
    Axios.get<University>(`https://universityadmission.onrender.com/api/v1/university/${_id}`)
      .then((result) => {
        console.log(result.data);
        setUniversity(result.data);
      })
      .catch((err) => {
        console.log(err.response?.data);
      });
  }, [_id]);

  if (!university) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{university.name}</h1>
      <table className="bordered-table"> {/* Apply CSS class for border styling */}
        <tbody>
          <tr>
            <td>Abbreviation:</td>
            <td>{university.abbreviation}</td>
          </tr>
          <tr>
            <td>Code:</td>
            <td>{university.code}</td>
          </tr>
          <tr>
            <td>Description:</td>
            <td>{university.description}</td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>{university.address}</td>
          </tr>
          <tr>
            <td>Contact Info:</td>
            <td>{university.contactInfo}</td>
          </tr>
          <tr>
            <td>Admission Policy:</td>
            <td>{university.admissionPolicy}</td>
          </tr>
          <tr>
            <td>Year Established:</td>
            <td>{university.yearEstablish}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UniversityDetail;
