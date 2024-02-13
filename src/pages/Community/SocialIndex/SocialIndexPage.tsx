import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';

function SocialIndex() {
  const [posts, setPosts] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadInitialPosts();
    window.addEventListener('scroll', handleScroll);
    return () => {
      // 컴포넌트가 언마운트되면 이벤트 리스너를 제거합니다.
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const fetchPosts = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch('api 주소 넣을 것');
  //     const data = await response.json();
  //     setPosts(data);
  //   } catch (err) {
  //     console.error('Error:', err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const loadInitialPosts = () => {
    const latestPosts = Array.from({ length: 13 }, (_, index) => `게시물${index + 1}`);
    setPosts(latestPosts);
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 200 && !loading) {
      setLoading(true);
      setTimeout(() => {
        setPosts((prevPosts) => [...prevPosts, '더미 게시물', '더미 게시물', '더미 게시물']);
        setLoading(false);
      }, 1000);
    }
  };

  
  const handlePostClick = (postId: number | string) => {
    // 클릭된 게시물의 post 페이지로 이동
    navigate(`/post/${postId}`);
  };

  return (
    <>
      <S.Layout>
        <S.TitleContainer>
          <S.TitleText>최신 게시물</S.TitleText>
        </S.TitleContainer>
        <S.PostsContainer>
          {posts.map((post, index) => (
            <React.Fragment key={index}>
              <S.PostItem onClick={() => handlePostClick(index + 1)}>{post}</S.PostItem>
              {index < posts.length - 1 && <S.Divider />}
            </React.Fragment>
          ))}
          {loading && <S.LoadingText>Loading...</S.LoadingText>}
        </S.PostsContainer>
      </S.Layout>
    </>
  );
}

export default SocialIndex;

