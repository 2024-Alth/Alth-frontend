import React, { useState, useEffect } from 'react';
import * as S from './Styles';

function SocialIndex() {
  const [posts, setPosts] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

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
      <S.Layout>
        <S.TitleContainer>
          <S.TitleText>최신 게시물</S.TitleText>
        </S.TitleContainer>
        <S.PostsContainer>
          {posts.map((post, index) => (
            <React.Fragment key={index}>
              <S.PostItem>{post}</S.PostItem>
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

