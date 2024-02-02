import styled from "styled-components";
import SearchBar from '../../components/Searchbar';
import TopPosts from '../../components/Community/TopPostsContainer';
import LatestPosts from '../../components/Community/LatestPostsContainer';

function SocialPage() {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  return (
    <>
      <Layout>
        <SearchBar onSearch={handleSearch} />
        <TopPosts></TopPosts>
        <LatestPosts></LatestPosts>
      </Layout>
    </>
  );
}

export default SocialPage;

export const Layout = styled.div`
  background-color: #FFFFFF;
  width: 100vw;
  height: 100vh;
  padding: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

