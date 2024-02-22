import { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "../../../node_modules/react-calendar/src/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function Calender() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <Layout>
      <StyledCalendarWrapper>
        <StyledCalendar onChange={onChange} value={value}></StyledCalendar>
      </StyledCalendarWrapper>
    </Layout>
  );
}

export default Calender;

const Layout = styled.div`
  width: 100%;
  height: 330px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const StyledCalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;
export const StyledCalendar = styled(Calendar)``;

const Text = styled.div`
  font-size: 16px;
  margin: 20px;
  margin-bottom: 16px;
  font-weight: bold;
`;
