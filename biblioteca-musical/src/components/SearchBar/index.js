import React, { useState } from 'react';
import { SearchBarContainer, SearchForm, SearchInputContainer, SearchInput, SearchButton } from './styles';

const SearchBar = ({ onSearch, loading }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <SearchBarContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInputContainer>
          <SearchInput
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Buscar álbumes por artista..."
            disabled={loading}
          />
          <SearchButton 
            type="submit"
            disabled={loading || !searchTerm.trim()}
          >
            {loading ? 'Buscando...' : 'Buscar'}
          </SearchButton>
        </SearchInputContainer>
      </SearchForm>
    </SearchBarContainer>
  );
};

export default SearchBar;