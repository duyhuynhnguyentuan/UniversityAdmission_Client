import React, { Component, ChangeEvent } from 'react';
import Axios from 'axios';
import styles from './Search.module.css';

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
      Axios.get<University[]>(`https://universityadmission.onrender.com/api/v1/university/?name_like=${query}`)
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
      <tr key={item.name}>
        <td>{item.name}</td>
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
      <div>
        <div className="input-group">
          <div className={styles.inputSearch}>
            <input type="text" className="form-control rounded" placeholder="Search..." value={this.state.searchQuery} onChange={this.handleSearchChange} aria-label="Search" aria-describedby="search-addon" />
          </div>
        </div>
        {this.state.searchResults.length > 0 && (
          <div className='container'>
            <table className="table table-bordered" >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Abbreviation</th>
                  <th>Code</th>
                  <th>Address</th>
                  <th>Contact info</th>
                  <th>Admission policy</th>
                  <th>Establish year</th>
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
