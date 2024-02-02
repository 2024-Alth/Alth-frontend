import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from '../../components/Searchbar';

function SocialIndex() {
  const [posts, setPosts] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // 실제 검색 로직을 구현하고 검색 결과를 setPosts로 업데이트합니다.
    // 예시로 더미 데이터를 사용합니다.
    setPosts(['게시물 1', '게시물 2', '게시물 3', '게시물 4', '게시물 5']);
  };

  useEffect(() => {
    // 여기서 무한 스크롤 이벤트를 구독합니다.
    window.addEventListener('scroll', handleScroll);
    return () => {
      // 컴포넌트가 언마운트되면 이벤트 리스너를 제거합니다.
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // 스크롤이 아래로 내려갈 때 추가적인 게시물을 불러오는 로직을 구현합니다.
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 200 && !loading) {
      // 스크롤이 아래로 내려가고 로딩 중이 아닌 경우에 더미 데이터를 추가로 가져옵니다.
      setLoading(true);
      setTimeout(() => {
        setPosts((prevPosts) => [...prevPosts, '더미 게시물', '더미 게시물', '더미 게시물']);
        setLoading(false);
      }, 1000); // setTimeout을 사용하여 가상의 API 호출을 대체합니다.
    }
  };

  return (
    <>
      <Layout>
        <SearchBarContainer>
            <SearchBar onSearch={handleSearch} />
        </SearchBarContainer>
        <PostsContainer>
          {posts.map((post, index) => (
            <React.Fragment key={index}>
              <PostItem>{post}</PostItem>
              {index < posts.length - 1 && <Divider />}
            </React.Fragment>
          ))}
          {loading && <LoadingText>Loading...</LoadingText>}
        </PostsContainer>
      </Layout>
    </>
  );
}

export default SocialIndex;

const Layout = styled.div`
  background-color: #FFFFFF;
  width: 100vw;
  height: 100vh;
  padding: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchBarContainer = styled.div`
  position: fixed;
  width: 100%;
  padding-left: 28px;
  padding-right: 28px;
  z-index: 1; 
`;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 70px;
`;


const PostItem = styled.div`
  padding: 10px;
  background-color: transparent;
  color: #000000;
  margin-top: 3px;
  margin-bottom: 3px;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #E1E1E1;
  width: 100%;
`;

const LoadingText = styled.div`
  text-align: center;
  padding: 10px;
  color: #666;
`;
