import styled from "styled-components";
import InputDrink from "../../components/Main/InputDrink";
import Stats from "../../components/Main/Stats";
import Calender from "../../components/Main/Calendar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const [valueDate, setValueDate] = useState<Date>(null);
  const navigate = useNavigate();

  const handleDate = (value: any) => {
    console.log(value);
    setValueDate(value);
  };

  const handleDateList = (date: any) => {
    console.log(date);
  };

  const handleIndex = (index) => {
    console.log(index);
  };
  return (
    <>
      <Layout>
        <InputDrink></InputDrink>
        <div onClick={() => navigate("/diary")}>
          <Calender
            onValueChange={handleDate}
            onDateChange={handleDateList}
            onIndexChange={handleIndex}
          ></Calender>
        </div>

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
