import styled from "styled-components";
import TopPosts from '../../components/Community/TopPostsContainer';
import LatestPosts from '../../components/Community/LatestPostsContainer';

function SocialMainPage() {

  return (
    <>
      <Layout>
        <br/>
        <TopPosts></TopPosts>
        <LatestPosts></LatestPosts>
      </Layout>
    </>
  );
}

export default SocialMainPage;

export const Layout = styled.div`
  background-color: #FFFFFF;
  width: 100vw;
  height: 100vh;
  padding: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

