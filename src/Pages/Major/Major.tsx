import React, { Component } from 'react'
import styles from './Major.module.css'
import Axios from 'axios'

interface Majors {
  id: number;
  taskName: string;
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
    Axios.get<Majors[]>('https://svcy.myclass.vn/api/ToDoList/GetAllTask')
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
      <tr>
        <td>{item.taskName}</td>

      </tr>
    ));
  };
  render() {
    return (
      <div className='container'>
        <div className={styles.table}>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>code</th>
              <th>category</th>
              <th>description</th>
              <th>status</th>
              <th>effective date</th>
              <th>university id</th>
              <th>formalMajor id</th>
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
