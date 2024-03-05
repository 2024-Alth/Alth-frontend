import styled from "styled-components";

function Sidebar() {
  return (
    <ModalLayout>
      <UserLayout>
        <Name>사용자님</Name>
        <Logout>로그아웃</Logout>
      </UserLayout>
      <List>
        <NavButton>
          <NavText>퍼스널 차트</NavText>
        </NavButton>
        <NavButton>
          <NavText>퍼스널 차트</NavText>
        </NavButton>
        <NavButton>
          <NavText>퍼스널 차트</NavText>
        </NavButton>
        <NavButton>
          <NavText>퍼스널 차트</NavText>
        </NavButton>
        <NavButton>
          <NavText>퍼스널 차트</NavText>
        </NavButton>
        <NavButton>
          <NavText>퍼스널 차트</NavText>
        </NavButton>
      </List>
    </ModalLayout>
  );
}

export default Sidebar;

const ModalLayout = styled.div`
  width: 60vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const UserLayout = styled.div`
  padding: 16px;
  margin-bottom: 36px;
`;
const Name = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Logout = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

const List = styled.div`
  width: 100%;
`;

const NavButton = styled.div`
  background-color: #60d394;
`;
const NavText = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding: 6px;
  margin-left: 30px;
`;
