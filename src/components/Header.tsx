import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import button from "../assets/headerbutton.svg"
import profilebutton from "../assets/profile.svg"
import searchicon from "../assets/searchicon.svg"
import Sidebar from "./Sidebar";
import SearchBar from "./Searchbar"

function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const modalBackground = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalOpen && modalBackground.current && !modalBackground.current.contains(e.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, [modalOpen]);

  const handleSearchIconClick = () => {
    setSearchBarOpen(!searchBarOpen);
  };

  const getCurrentPath = () => {
    return window.location.pathname;
  };

  // "post"가 포함되어 있는지 확인하는 함수
  const isPostPage = () => {
    const currentPath = getCurrentPath();
    return currentPath.includes("post");
  };


  return (
    <>
      <Layout>
        <ButtonImg onClick={() => setModalOpen(true)} />
        {modalOpen && (
          <div ref={modalBackground} onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false)
            }
          }}>
            <Sidebar></Sidebar>
          </div>
        )}
        <Title>
          알쓰
        </Title>
        <IconContainer>
          {isPostPage() && (
            <SearchIcon onClick={handleSearchIconClick} />
          )}
          <ProfileImg />
        </IconContainer>
      </Layout>
      {searchBarOpen && (
        <SearchBar
          onClose={() => setSearchBarOpen(false)}
          onSearch={(query) => {
            console.log(`Searching for: ${query}`);
          }}
        />
      )}
    </>
  )
}

export default Header

const Layout = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #EDF5EF;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;

const ButtonImg = styled.button`
  width: auto;
  height: 30px;
  background-image: url(${button});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #EDF5EF;
  margin: 0;
`;

const ProfileImg = styled.button`
  width: 30px;
  height: 40px;
  background-image: url(${profilebutton});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #EDF5EF;
`;

const SearchIcon = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${searchicon});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #EDF5EF;
  cursor: pointer;
  margin-right: 20px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 50px;
`

const IconContainer = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
`;
