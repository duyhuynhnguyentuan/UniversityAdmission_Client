// Universitys.tsx

import React, { Component } from 'react';
import Axios from 'axios';
import styles from './University.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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

interface State {
  universityLists: University[];
  currentPage: number;
  universitiesPerPage: number;
}

export default class Universitys extends Component<{}, State> {
  state: State = {
    universityLists: [],
    currentPage: 1,
    universitiesPerPage: 10,
  };

  componentDidMount() {
    this.getUniversityList();
  }

  getUniversityList = () => {
    Axios.get<University[]>('https://universityadmission.onrender.com/api/v1/university/')
      .then((result) => {
        console.log(result.data);
        this.setState({
          universityLists: result.data,
        });
      })
      .catch((err) => {
        console.log(err.response?.data);
      });
  };

  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      currentPage: Number(event.currentTarget.id),
    });
  };

  handleNextPage = () => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  handlePrevPage = () => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage - 1,
    }));
  };

  renderUniversity = () => {
    const { universityLists, currentPage, universitiesPerPage } = this.state;
    const indexOfLastUniversity = currentPage * universitiesPerPage;
    const indexOfFirstUniversity = indexOfLastUniversity - universitiesPerPage;
    const currentUniversities = universityLists.slice(indexOfFirstUniversity, indexOfLastUniversity);

    return currentUniversities.map((item) => (
      <tr key={item.code}>
        <td>
          <Link to={`/university/${item.id}`}>{item.name}</Link>
        </td>
        <td className={styles.theadAll}>{item.abbreviation}</td>
        <td className={styles.theadAll}>{item.code}</td>
        <td>{item.address}</td>
        <td className={styles.theadAll}>{item.contactInfo}</td>
        <td className={styles.theadAll}>{item.yearEstablish}</td>
      </tr>
    ));
  };

  renderPageNumbers = () => {
    const { universityLists, universitiesPerPage, currentPage } = this.state;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(universityLists.length / universitiesPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="pagination-container" style={{ marginLeft: '600px', marginTop: '25px' }}>
        <button className={styles.iconNext} onClick={this.handlePrevPage} disabled={currentPage === 1}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            id={number.toString()}
            onClick={this.handleClick}
            className={`${styles.numberNext} ${currentPage === number ? styles.activePage : ''}`}
          >
            {number}
          </button>
        ))}
        <button className={styles.iconNext} onClick={this.handleNextPage} disabled={currentPage === Math.ceil(universityLists.length / universitiesPerPage)}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <div className={styles.table}>
          <table className="table table-bordered ">
            <thead className={styles.theadAll}>
              <tr>
                <th className={styles.thName}>Tên trường</th>
                <th>Tên viết tắt</th>
                <th>Mã trường</th>
                <th>Địa chỉ</th>
                <th>Thông tin liên hệ</th>
                <th>Năm thành lập</th>
              </tr>
            </thead>
            <tbody>{this.renderUniversity()}</tbody>
          </table>
          {this.renderPageNumbers()}
        </div>
      </div>
    );
  }
}
