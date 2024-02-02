// LatestPostsContainer.tsx

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const LatestPostsContainer: React.FC = () => {
  const [latestPosts, setLatestPosts] = useState<string[]>([]);

  useEffect(() => {
    setLatestPosts(['게시물 10', '게시물 11', '게시물 12', '게시물 13', '게시물 14']);
    // // 실제 API 호출 로직을 여기에 추가
    // const fetchLatestPosts = async () => {
    //   try {
    //     // API 호출 및 데이터 받아오는 로직
    //     const response = await fetch('your-api-endpoint');
    //     const data = await response.json();

    //     // 최신 게시물 데이터를 상태에 업데이트
    //     setLatestPosts(data);
    //   } catch (error) {
    //     console.error('Error fetching latest posts:', error);
    //   }
    // };

    // 컴포넌트가 마운트되었을 때 최신 게시물을 가져오도록 호출
    // fetchLatestPosts();
  }, []);

  const handleMoreButtonClick = () => {
    // '/postindex'로 페이지 이동
    window.location.href = '/postindex';
  };
  
  // 최대 5개의 게시물만 노출되도록 처리
  const displayedPosts = latestPosts.slice(0, 5);

  return (
    <Container>
      <TitleContainer>
        <TitleText>최신 게시물</TitleText>
        <MoreButton onClick={handleMoreButtonClick}>+ 더보기</MoreButton>
      </TitleContainer>
      <ContentContainer>
        {displayedPosts.map((post, index) => (
          <React.Fragment key={index}>
            <PostItem>{post}</PostItem>
            {index < displayedPosts.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </ContentContainer>
    </Container>
  );
};

export default LatestPostsContainer;

const Container = styled.div`
  color: #000000;
  border-radius: 8px;
  margin-top: 20px;
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  padding-left: 5px;
  height: 50px;
`;

const TitleText = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;

const MoreButton = styled.button`
  margin-left: auto;
  font-size: 14px;
  background: none;
  border: none;
  font-weight: bold;
  color: #000000;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
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
