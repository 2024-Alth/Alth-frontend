import React from 'react';
import styled from 'styled-components';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    onSearch(query);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(e.currentTarget.value);
    }
  };

  return (
    <SearchContainer>
      <InputText
        type="text"
        placeholder="검색어를 입력하세요"
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 30px;
`;

const InputText = styled.input`
  width: 100%;
  padding-left: 15px;
  border: none;
  outline: none;
  border-radius: 10px;
  font-size: 16px;
`;

