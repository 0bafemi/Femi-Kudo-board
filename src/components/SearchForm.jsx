import { useState } from 'react';
import { debounce } from 'lodash';
import '../styles/searchform.css'
import Suggestions from './Suggestions';

function SearchForm({ handleSearch, suggestions }) {
  const [searchQuery, setSearchQuery] = useState('');

  const debounceHandleSearch = debounce((query) => {
    handleSearch(query);
  }, 300);

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    debounceHandleSearch(query);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion); // Update input field with selected suggestion
    handleSearch(suggestion); // Trigger search with selected suggestion
  };

  return (
    <div className='searchform-container'>
      <input
        type="text"
        placeholder='Search boards...'
        value={searchQuery}
        onChange={handleInputChange}
        />
        {searchQuery && (
          <Suggestions suggestions={suggestions} handleSuggestionClick={handleSuggestionClick} />
      )}
    </div>
  )
}

export default SearchForm
