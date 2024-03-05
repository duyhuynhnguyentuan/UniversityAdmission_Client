import React, { Component } from 'react'
import Axios from 'axios'
import styles from './University.module.css'


  interface University {
    maNhanVien: number;
    tenNhanVien: string;
    name: string;
    description : string;
    abbreviation: string;
    code: string;
    address: string;
    contactInfo: string;
    admissionPolicy: string;
    yearEstablish: number;

  }
  
  interface State {
    universityLists: University[];
  }
  
  export default class Universitys extends Component<{}, State> {
    state: State = {
      universityLists: []
    };
  
    componentDidMount() {
      this.getUniversityList();
    }
  
    getUniversityList = () => {
      Axios.get<University[]>('https://universityadmission.onrender.com/api/v1/university/')
        .then((result) => {
          console.log(result.data);
          this.setState({
            universityLists: result.data
          });
        })
        .catch((err) => {
          console.log(err.response?.data);
        });
    };
  
    renderUniversity = () => {
      return this.state.universityLists.map((item) => (
        <tr>
          <td >{item.name}</td>
          <td>{item.description}</td>
          <td>{item.abbreviation}</td>
          <td>{item.code}</td>
          <td>{item.address}</td>
          <td>{item.contactInfo}</td>
          <td>{item.admissionPolicy}</td>
          <td>{item.yearEstablish}</td>        
        </tr>
      ));
    };

  render() {
    return (
        <div className='container'>
          <div className={styles.table}>
        <table className="table table-bordered " >
          <thead>
            <tr>
              <th >Name</th>
              <th>Description</th>
              <th>Abbereviation</th>
              <th>Code</th>
              <th>Adress</th>
              <th>Contact infor</th>
              <th>Admission policyn</th>
              <th>Establish year</th>
            </tr>
          </thead>
          <tbody>
            { this.renderUniversity() }
          </tbody>
        </table>
        </div>
        </div>
    )
  }
}


