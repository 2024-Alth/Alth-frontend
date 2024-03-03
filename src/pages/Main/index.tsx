import styled from "styled-components";
import InputDrink from "../../components/Main/InputDrink";
import Stats from "../../components/Main/Stats";
import Calender from "../../components/Main/Calendar";

function Main() {
  return (
    <>
      <Layout>
        <InputDrink></InputDrink>
        <Calender></Calender>
        <Stats></Stats>
      </Layout>
    </>
  );
}

export default Main;

const Layout = styled.div`
  background-color: #edf5ef;
  width: 100vw;
  height: 100vh;
  padding: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
