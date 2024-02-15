import { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function Calender() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <Layout>
      <Text>
        <Calendar onChange={onChange} value={value}></Calendar>
      </Text>
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

const Text = styled.div`
  font-size: 16px;
  margin: 20px;
  margin-bottom: 16px;
  font-weight: bold;
`;
