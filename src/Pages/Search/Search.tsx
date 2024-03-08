import React, { Component, ChangeEvent, RefObject } from 'react';
import styles from './Search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';

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

interface Props {
  onResultClick: (name: string) => void;
}

interface State {
  searchQuery: string;
  searchResults: University[];
}

class Search extends Component<Props, State> {
  searchRef: RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.state = {
      searchQuery: '',
      searchResults: [],
    };
    this.searchRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside as EventListener);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside as EventListener);
  }

  handleClickOutside = (event: Event) => {
    if (this.searchRef.current && !this.searchRef.current.contains(event.target as Node)) {
      this.setState({ searchResults: [] });
    }
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

  handleResultClick = (name: string) => {
    this.props.onResultClick(name);
    this.setState({ searchResults: [] });
  };

  render() {
    return (
      <div className={styles.search} ref={this.searchRef}>
        <input type="text" placeholder=" Tìm kiếm trường ..." className={`${styles.searchInput} ${styles.searchInputFocus}`} value={this.state.searchQuery} onChange={this.handleSearchChange} />
        <FontAwesomeIcon className={styles.iconSearch} icon={faSearch} />
        {this.state.searchResults.length > 0 && (
          <div className={styles.searchResults}>
            <ul>
              {this.state.searchResults.map((result) => (
                <li key={result.name} onClick={() => this.handleResultClick(result.name)}>
                  {result.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Search;
