import React, { Component } from 'react'
import styles from './Major.module.css'
import Axios from 'axios'

interface Majors {
  tenSinhVien: string;
  name: string;
  code: string;
  category: string;
  description: string;
  status: string;
  effectiveDate: string;
  universityId: number;
  formalMajorId: number;
}

interface State {
  majorList: Majors[];
}

export default class Major extends Component<{}, State> {
  state: State = {
    majorList: []
  };

  componentDidMount() {
    this.getMajorList();
  }

  getMajorList = () => {
    Axios.get<Majors[]>('https://svcy.myclass.vn/api/QuanLySinhVien/LayDanhSachSinhVien')
      .then((result) => {
        console.log(result.data);
        this.setState({
          majorList: result.data
        });
      })
      .catch((err) => {
        console.log(err.response?.data);
      });
  };

  renderMajor = () => {
    return this.state.majorList.map((item) => (
      <tr >
        <td>{item.tenSinhVien}</td>
        <td>{item.tenSinhVien}</td>
        <td>{item.tenSinhVien}</td>
        <td>{item.tenSinhVien}</td>
        <td>{item.tenSinhVien}</td>
      </tr>
    ));
  };
  render() {
    return (
      <div className='container'>
        <div className={styles.table}>
        <table className="table table-bordered">
          <thead>
            <tr style={{textAlign: 'center'}}>
              <th>Tên ngành</th>
              <th>Mã ngành</th>
              <th>Loại</th>
              {/* <th>description</th> */}
              <th  style={{textAlign: 'center'}}>trạng thái</th>
              <th>Ngày mở xét tuyển</th>
              {/* <th>university id</th>
              <th>formalMajor id</th> */}
            </tr>
          </thead>
          <tbody>
            {this.renderMajor()}
          </tbody>
        </table>
      </div>
      </div>
        )
  }
}
