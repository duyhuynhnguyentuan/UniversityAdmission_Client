import React, { Component, ChangeEvent } from 'react';
import Axios from 'axios';
import { NavLink, NavLinkProps } from 'react-router-dom'; // Import NavLink and NavLinkProps
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

interface Props {
  onResultClick: (name: string) => void;
}

interface State {
  searchQuery: string;
  searchResults: University[] | string[];
  universityNames: string[];
  isPopupOpen: boolean;
  activeResult: string | null;
}

export default class Search extends Component<Props, State> {
  private wrapperRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.state = {
      searchQuery: '',
      searchResults: [],
      universityNames: [],
      isPopupOpen: false,
      activeResult: null,
    };
    this.wrapperRef = React.createRef();
  }

  handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    this.setState({ searchQuery: query, isPopupOpen: true });
    const { universityNames } = this.state;
    if (query) {
      const filteredResults = universityNames.filter((name) =>
        name.toLowerCase().includes(query.toLowerCase())
      );
      this.setState({ searchResults: filteredResults });
    } else {
      this.setState({ searchResults: [] });
    }
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    Axios.get<University[]>('https://universityadmission.onrender.com/api/v1/university')
      .then((response) => {
        const universityNames = response.data.map((uni) => uni.name);
        this.setState({ universityNames });
      })
      .catch((error) => {
        console.error('Error fetching universities:', error);
      });
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event: MouseEvent) => {
    if (this.wrapperRef.current && !this.wrapperRef.current.contains(event.target as Node)) {
      this.setState({ isPopupOpen: false });
    }
  };

  handleResultClick = (name: string) => {
    this.props.onResultClick(name);
    this.setState({ isPopupOpen: false, activeResult: name });
  };

  renderUniversity = () => {
    return this.state.searchResults.map((result) => {
      if (typeof result === 'string') {
        return (
          <li key={result} onClick={() => this.handleResultClick(result)}>
            {result}
          </li>
        );
      } else {
        return (
          <li key={result.name} onClick={() => this.handleResultClick(result.name)}>
            <NavLink className={`${styles.navLink} ${this.state.activeResult === result.name ? styles.active : ''}`} to={`/university/${result.name}`}>
              {result.name}
            </NavLink>
          </li>
        );
      }
    });
  };

  render() {
    return (
      <div className={styles.container} ref={this.wrapperRef}>
        <div className="input-group">
          <div className={styles.inputSearch}>
            <input
              type="text"
              className={`form-control rounded ${styles.search}`}
              placeholder="Tìm kiếm trường đại học..."
              value={this.state.searchQuery}
              onChange={this.handleSearchChange}
              aria-label="Search"
              aria-describedby="search-addon"
            />
          </div>
        </div>
        {this.state.isPopupOpen && (
          <div className={styles.popup}>
            <ul>
              {this.renderUniversity()}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
