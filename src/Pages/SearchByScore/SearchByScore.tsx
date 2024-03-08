import React, { Component, ChangeEvent } from 'react';
import Axios from 'axios';
import styles from './SearchByScore.module.css';

interface University {
  name: string;
  description: string;
  abbreviation: string;
  code: string;
  yearEstablish: number;
  admissionPolicy: string;
  contactInfo: string;
  address: string;
}

interface State {
  searchQuery: number[];
  searchResults: University[];
}

export default class Search extends Component<{}, State> {
  state: State = {
    searchQuery: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    searchResults: []
  };

  handleScoreChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const score = parseInt(value);
    if (!isNaN(score) && score >= 0 && score <= 10) {
      const updatedQuery = [...this.state.searchQuery];
      updatedQuery[index] = score;
      this.setState({ searchQuery: updatedQuery });
    }
  };

  handleSearchClick = () => {
    const query = this.state.searchQuery.filter(score => score !== 0);
    if (query.length >= 3) {
      Axios.get<University[]>(`https://universityadmission.onrender.com/api/v1/university/?scores=${query.join(',')}`)
        .then((response) => {
          this.setState({ searchResults: response.data });
        })
        .catch((error) => {
          console.error('Error fetching search results:', error);
        });
    } else {
      alert('Bạn cần nhập ít nhất 3 môn học.');
    }
  };

  renderUniversity = () => {
    return this.state.searchResults.map((item) => (
      <tr key={item.name}>
        <td>{item.name}</td>
        {/* <td>{item.description}</td> */}
        <td className={styles.theadAll}>{item.abbreviation}</td>
        <td className={styles.theadAll}>{item.code}</td>
        <td >{item.address}</td>
        <td className={styles.theadAll}>{item.contactInfo}</td>
        {/* <td>{item.admissionPolicy}</td> */}
        <td className={styles.theadAll}>{item.yearEstablish}</td>
      </tr>
    ));
  };

  renderScoreInputs = () => {
    const subjects = ['Toán Học', 'Ngữ Văn', 'Ngoại Ngữ', 'Vật Lý', 'Hóa Học', 'Sinh Học', 'Lịch Sử', 'Địa Lý', 'GDCD'];
    return (
      <div className={styles.scoreInputs}>
        {subjects.map((subject, index) => (
          <div key={index} className={styles.scoreInputContainer}>
            <label className={styles.scoreInputLabel}>{subject}</label>
            <input type="number" className="form-control rounded" value={this.state.searchQuery[index]} onChange={(e) => this.handleScoreChange(index, e)} />
          </div>
        ))}
      </div>
    );
  };

  render() {
    return (
      <div>
        <div className="input-group">
          <div className={styles.inputSearch}>
            {this.renderScoreInputs()}
          </div>
        </div>
        <button className="btn btn-primary" style={{ marginLeft: '920px', marginBottom: '20px', width: '145px', height: '45px' }} onClick={this.handleSearchClick}>Tìm Kiếm</button>
        {this.state.searchResults.length > 0 && (
          <div className='container'>
            <table className="table table-bordered" >
              <thead className={styles.theadAll}>
                <tr>
                  <th className={styles.thName}>Tên trường</th>
                  {/* <th>Description</th> */}
                  <th>Tên viết tắt</th>
                  <th>Mã trường</th>
                  <th>Địa chỉ</th>
                  <th>Thông tin liên hệ</th>
                  {/* <th>Admission policy</th> */}
                  <th>Năm thành lập</th>
                </tr>
              </thead>
              <tbody>{this.renderUniversity()}</tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}
