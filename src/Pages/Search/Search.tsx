import React, { Component, ChangeEvent } from 'react';
import Axios from 'axios';

interface University {
  id: number;
  taskName: string;
  description: string;
  establishYear: number;
  admissionPolicyn: string;
  contactInfor: string;
  address: string;
}

interface State {
  searchQuery: string;
  searchResults: University[];
}

export default class Search extends Component<{}, State> {
  state: State = {
    searchQuery: '',
    searchResults: []
  };

  handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    this.setState({ searchQuery: query });
    if (query) {
      Axios.get<University[]>(`https://svcy.myclass.vn/api/ToDoList/GetAllTask?search=${query}`)
        .then((response) => {
          this.setState({ searchResults: response.data });
        })
        .catch((error) => {
          console.error('Error fetching search results:', error);
        });
    } else {
      this.setState({ searchResults: [] });
    }
  };

  renderUniversity = () => {
    return this.state.searchResults.map((item) => (
      <tr key={item.id}>
        <td>{item.taskName}</td>
        <td>{item.description}</td>
        <td>{/* Add Abbereviation field here */}</td>
        <td>{/* Add Code field here */}</td>
        <td>{item.address}</td>
        <td>{item.contactInfor}</td>
        <td>{item.admissionPolicyn}</td>
        <td>{item.establishYear}</td>
      </tr>
    ));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={this.state.searchQuery}
          onChange={this.handleSearchChange}
        />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Abbereviation</th>
              <th>Code</th>
              <th>Address</th>
              <th>Contact infor</th>
              <th>Admission policyn</th>
              <th>Establish year</th>
            </tr>
          </thead>
          <tbody>{this.renderUniversity()}</tbody>
        </table>
      </div>
    );
  }
}
