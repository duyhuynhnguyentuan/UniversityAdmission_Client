import React, { Component } from 'react';
import Axios from 'axios';
import styles from './Major.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface Majors {
  name: string;
  code: string;
}

interface State {
  majorList: Majors[];
  currentPage: number;
  majorsPerPage: number;
}

export default class Major extends Component<{}, State> {
  state: State = {
    majorList: [],
    currentPage: 1,
    majorsPerPage: 12,
  };

  componentDidMount() {
    this.getMajorList();
  }

  getMajorList = () => {
    Axios.get<Majors[]>('https://universityadmission.onrender.com/api/v1/major')
      .then((result) => {
        console.log(result.data);
        this.setState({
          majorList: result.data,
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
    const { majorList, majorsPerPage, currentPage } = this.state;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(majorList.length / majorsPerPage); i++) {
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
          disabled={currentPage === Math.ceil(majorList.length / majorsPerPage)}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    );
  };

  renderMajor = () => {
    const { majorList, currentPage, majorsPerPage } = this.state;
    const indexOfLastMajor = currentPage * majorsPerPage;
    const indexOfFirstMajor = indexOfLastMajor - majorsPerPage;
    const currentMajors = majorList.slice(indexOfFirstMajor, indexOfLastMajor);

    return currentMajors.map((item) => (
      <tr key={item.code}>
        <td style={{ textAlign: 'center' }}>{item.code}</td>
        <td>{item.name}</td>
      </tr>
    ));
  };

  render() {
    return (
      <div className="container" >
        <div className={styles.table}>
          <table className="table table-bordered" style={{ width: '45%', marginLeft: '350px' }}>
            <thead>
              <tr style={{ textAlign: 'center' }}>
                <th>Mã ngành</th>
                <th>Tên ngành</th>
              </tr>
            </thead>
            <tbody>{this.renderMajor()}</tbody>
          </table>
          {this.renderPageNumbers()}
        </div>
      </div>
    );
  }
}
