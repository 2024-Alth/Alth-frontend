// TopPostsContainer.tsx

import styled from 'styled-components';

type TopPostsContainerProps = {};

const TopPostsContainer = ({ }: TopPostsContainerProps) => {
  return (
    <Container>
      <TitleContainer>
        <TitleText>인기 게시물</TitleText>
      </TitleContainer>
      <ContentContainer>
        <PostItem>게시물 1</PostItem>
        <Divider />
        <PostItem>게시물 2</PostItem>
        <Divider />
        <PostItem>게시물 3</PostItem>
        <Divider />
        <PostItem>게시물 4</PostItem>
        <LastDivider />
      </ContentContainer>
    </Container>
  );
};

export default TopPostsContainer;

const Container = styled.div`
  color: #FFFFFF;
  border-radius: 8px;
  margin-bottom: 20px;
  width: 100%; 
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  background-color: #CD3C3C;
  padding-left: 15px;
  height: 50px;
`;

const TitleText = styled.div`
  font-weight: bold;
  color: #FFFFFF;
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

const LastDivider = styled(Divider)`
  background-color: #CD3C3C;
  height: 2px;
`;