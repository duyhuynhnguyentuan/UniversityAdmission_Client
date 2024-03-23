import React, { Component } from 'react';
import Axios from 'axios';
import styles from './HighSchool.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface Schools {
  name: string;
  location: string;
}

interface State {
  schoolList: Schools[];
  currentPage: number;
  schoolsPerPage: number;
}

export default class HighSchool extends Component<{}, State> {
  state: State = {
    schoolList: [],
    currentPage: 1,
    schoolsPerPage: 12,
  };

  componentDidMount() {
    this.getSchoolList();
  }

  getSchoolList = () => {
    Axios.get<Schools[]>('https://universityadmission.onrender.com/api/v1/highschool')
      .then((result) => {
        console.log(result.data);
        this.setState({
          schoolList: result.data,
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

  renderPageNumbers = () => {
    const { schoolList, schoolsPerPage, currentPage } = this.state;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(schoolList.length / schoolsPerPage); i++) {
      pageNumbers.push(i);
    }

    const maxPageDisplay = 5; 
    const numPagesToShow = 2; 

    let displayedPageNumbers: (number | string)[] = [];
    if (pageNumbers.length <= maxPageDisplay) {
      displayedPageNumbers = pageNumbers;
    } else if (currentPage <= numPagesToShow) {
      displayedPageNumbers = [...pageNumbers.slice(0, maxPageDisplay - 1), pageNumbers.slice(-1)[0]];
    } else if (currentPage > pageNumbers.length - numPagesToShow) {
      displayedPageNumbers = [pageNumbers[0], ...pageNumbers.slice(-maxPageDisplay + 1)];
    } else {
      const startPage = currentPage - Math.floor(numPagesToShow / 2);
      displayedPageNumbers = [pageNumbers[0], '...', ...pageNumbers.slice(startPage, startPage + maxPageDisplay - 2), '...', pageNumbers.slice(-1)[0]];
    }

    return (
      <div className="pagination-container" style={{ marginLeft: '490px', marginTop: '25px' }}>
        <button className={styles.iconNext} onClick={this.handlePrevPage} disabled={currentPage === 1}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        {displayedPageNumbers.map((pageNumber, index) => (
          <React.Fragment key={index}>
            {pageNumber === '...' ? (
              <span>...</span>
            ) : (
              <button
                id={pageNumber.toString()}
                onClick={this.handleClick}
                className={`${styles.numberNext} ${currentPage === pageNumber ? styles.activePage : ''}`}
              >
                {pageNumber}
              </button>
            )}
          </React.Fragment>
        ))}
        <button
          className={styles.iconNext}
          onClick={this.handleNextPage}
          disabled={currentPage === Math.ceil(schoolList.length / schoolsPerPage)}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    );
  };

  renderSchool = () => {
    const { schoolList, currentPage, schoolsPerPage } = this.state;
    const indexOfLastSchool = currentPage * schoolsPerPage;
    const indexOfFirstSchool = indexOfLastSchool - schoolsPerPage;
    const currentSchools = schoolList.slice(indexOfFirstSchool, indexOfLastSchool);

    return currentSchools.map((school, index) => (
      <tr key={index}>
        <td style={{ textAlign: 'center' }}>{school.name}</td>
        <td>{school.location}</td>
      </tr>
    ));
  };

  render() {
    return (
      <div className="container">
        <div className={styles.table}>
          <table className="table table-bordered" style={{ width: '45%', marginLeft: '350px', marginTop: '90px' }}>
            <thead>
              <tr style={{ textAlign: 'center' }}>
                <th>Tên trường</th>
                <th>Địa điểm</th>
              </tr>
            </thead>
            <tbody>{this.renderSchool()}</tbody>
          </table>
          {this.renderPageNumbers()}
        </div>
      </div>
    );
  }
}


