import styled from 'styled-components';

export const Layout = styled.div`
  background-color: #FFFFFF;
  width: 100vw;
  height: 100vh;
  padding: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchBarContainer = styled.div`
  width: 100%; 
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 8px;
`;

export const PostItem = styled.div`
  padding: 10px;
  background-color: transparent;
  color: #000000;
  margin-top: 3px;
  margin-bottom: 3px;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #E1E1E1;
  width: 100%;
`;

export const LoadingText = styled.div`
  text-align: center;
  padding: 10px;
  color: #666;
`;


export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  font-size: 20px;
  height: 50px;
  margin-left: 10px;
`;

export const TitleText = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;
