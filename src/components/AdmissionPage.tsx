import React, { useEffect, useState } from 'react';
import './styles/AdmissionPage.css'; // Import CSS file for styling

interface AdmissionMethod {
  _id: string;
  name: string;
  AdmissionScore: number;
  NumberOfStudent: number;
  university: string[];
  major: string[];
  schoolYear: string[]; // Assuming schoolYear contains IDs
}

interface SchoolYear {
  _id: string;
  startDate: string;
  endDate: string;
  year: number;
}

const AdmissionPage: React.FC = () => {
  const [admissionMethods, setAdmissionMethods] = useState<AdmissionMethod[]>([]);
  const [universityMap, setUniversityMap] = useState<{ [id: string]: string }>({});
  const [majorMap, setMajorMap] = useState<{ [id: string]: string }>({});
  const [schoolYearMap, setSchoolYearMap] = useState<{ [id: string]: string }>({});

  useEffect(() => {
    // Fetch data from the API
    fetch('https://universityadmission.onrender.com/api/v1/admissionMethod')
      .then(response => response.json())
      .then((data: AdmissionMethod[]) => {
        console.log('Data fetched successfully:', data);
        setAdmissionMethods(data);
        
        // Extract unique university IDs
        const uniqueUniversityIds = Array.from(new Set(data.flatMap(method => method.university)));
        // Extract unique major IDs
        const uniqueMajorIds = Array.from(new Set(data.flatMap(method => method.major)));
        // Extract unique school year IDs
        const uniqueSchoolYearIds = Array.from(new Set(data.flatMap(method => method.schoolYear)));
        
        // Fetch university data to create a map of university IDs to names
        uniqueUniversityIds.forEach(id => {
          fetch(`https://universityadmission.onrender.com/api/v1/university/${id}`)
            .then(response => response.json())
            .then((universityData: { _id: string; name: string }) => {
              console.log('University data fetched successfully:', universityData);
              setUniversityMap(prevMap => ({ ...prevMap, [universityData._id]: universityData.name }));
            })
            .catch(error => console.error('Error fetching university data:', error));
        });

        // Fetch major data to create a map of major IDs to names
        uniqueMajorIds.forEach(id => {
          fetch(`https://universityadmission.onrender.com/api/v1/major/${id}`)
            .then(response => response.json())
            .then((majorData: { _id: string; name: string }) => {
              console.log('Major data fetched successfully:', majorData);
              setMajorMap(prevMap => ({ ...prevMap, [majorData._id]: majorData.name }));
            })
            .catch(error => console.error('Error fetching major data:', error));
        });

        // Fetch school year data to create a map of school year IDs to start years
        uniqueSchoolYearIds.forEach(id => {
          fetch(`https://universityadmission.onrender.com/api/v1/schoolYear/${id}`)
            .then(response => response.json())
            .then((schoolYearData: SchoolYear) => {
              console.log('School year data fetched successfully:', schoolYearData);
              setSchoolYearMap(prevMap => ({ ...prevMap, [schoolYearData._id]: `${schoolYearData.year}` }));
            })
            .catch(error => console.error('Error fetching school year data:', error));
        });
      })
      .catch(error => console.error('Error fetching admission methods:', error));
  }, []);

  return (
    <div>
      <h1>Phương Thức Tuyển Sinh</h1>
      <table className="admission-table"> {/* Add className for styling */}
        <thead>
          <tr>
            <th>Tên</th>
            <th>Điểm</th>
            <th>Số lượng tuyển</th>
            <th>Đại Học</th>
            <th>Nghành</th>
            <th>Năm Học</th>
          </tr>
        </thead>
        <tbody>
          {admissionMethods.map(method => (
            <tr key={method._id}>
              <td>{method.name}</td>
              <td>{method.AdmissionScore}</td>
              <td>{method.NumberOfStudent}</td>
              <td>{universityMap[method.university[0]] || method.university[0]}</td> {/* Use university map */}
              <td>{majorMap[method.major[0]] || method.major[0]}</td> {/* Use major map */}
              <td>{schoolYearMap[method.schoolYear[0]] || method.schoolYear[0]}</td> {/* Use school year map */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdmissionPage;
