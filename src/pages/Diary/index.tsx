import { useState } from "react";
import styled from "styled-components";
import Calender from "../../components/Main/Calendar";
import Empty from '../../components/Diary/DiaryEmptyContainer';
import Regi from '../../components/Diary/DiaryRegiContainer';
//import View from '../../components/Diary/DiaryViewContainer';

function Main(){
  const [currentContainer, setCurrentContainer] = useState("empty");

  const handleButtonClick = () => {
    setCurrentContainer("regi");
  };

  return(
    <>
      <Layout>
        <Calender></Calender>
        {currentContainer === "empty" && (
          <Empty onButtonClick={handleButtonClick} />
        )}
        {currentContainer === "regi" && <Regi />}
      </Layout>
    </>
  )
}

export default Main;

const Layout = styled.div`
  background-color: #EDF5EF;
  width: 100vw;
  height: 100vh;
  padding: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
`