// UniversityDetail.tsx

import React, { useEffect, useState } from 'react';
import Axios from 'axios';

interface UniversityDetailProps {
  code: string;
}

interface University {
  id: string;
  name: string;
  description: string;
  abbreviation: string;
  code: string;
  address: string;
  contactInfo: string;
  admissionPolicy: string;
  yearEstablish: number;
}

const UniversityDetail: React.FC<UniversityDetailProps> = ({ code }) => {
  const [university, setUniversity] = useState<University | null>(null);

  useEffect(() => {
    Axios.get<University>(`https://universityadmission.onrender.com/api/v1/university/${code}`)
      .then((result) => {
        console.log(result.data);
        setUniversity(result.data);
      })
      .catch((err) => {
        console.log(err.response?.data);
      });
  }, [code]);

  if (!university) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{university.name}</h1>
      <p>Abbreviation: {university.abbreviation}</p>
      <p>Code: {university.code}</p>
      <p>Description: {university.description}</p>
      <p>Address: {university.address}</p>
      <p>Contact Info: {university.contactInfo}</p>
      <p>Admission Policy: {university.admissionPolicy}</p>
      <p>Year Established: {university.yearEstablish}</p>
    </div>
  );
};

export default UniversityDetail;
