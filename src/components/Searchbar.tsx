import React from 'react';
import styled from 'styled-components';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onClose: () => void; 
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onClose }) => {
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
      <CloseButton onClick={onClose}>닫기</CloseButton>
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  display: flex;
  background-color: #fff;
  transition: top 0.3s ease; 
  padding-bottom: 5px;
  padding-top: 5px;
  border-bottom: 1px solid #e1e1e1;
`;

const InputText = styled.input`
  width: 100%;
  padding-left: 30px;
  border: none;
  outline: none;
  font-size: 16px;
`;

const CloseButton = styled.button`
  display: flex;
  width: 50px;
  font-size: 16px;
  padding: 5px;
  border: 1px solid #e1e1e1;
  align-items: center;
  justify-content: center;
`;