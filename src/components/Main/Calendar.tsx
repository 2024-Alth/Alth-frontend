import { useEffect, useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "../../../node_modules/react-calendar/src/Calendar.css";
import moment from "moment";
import axios from "axios";
type CalendarProps = {
  onValueChange: (value: Value) => void;
  onDateChange: (dateList: Value[]) => void;
  onIndexChange: (indexList: []) => void;
};

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function Calender({
  onValueChange,
  onIndexChange,
  onDateChange,
}: CalendarProps) {
  const [value, onChange] = useState<Value>(new Date());
  // const dateList = ["2024-02-04", "2024-03-04"];

  const [dateList, onChangedateList] = useState<Value[]>([]);
  const [indexList, onChangeindexList] = useState<[]>([]);

  const [dateDataList, onChangedateDataList] = useState<Value[]>([]);

  useEffect(() => {
    onValueChange(value);
  }, [value]);

  useEffect(() => {
    onDateChange(dateList);
  }, [dateList]);

  useEffect(() => {
    onIndexChange(indexList);
  }, [indexList]);

  useEffect(() => {
    GetDate();
  }, []);

  const GetDate = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:8080/user/record/all",
        headers: { Authorization: `${localStorage.getItem("user")}` },
      });
      console.log(response.data.recordList);
      const data = response.data.recordList;
      const listData = data.map((item) => item.recordDate);
      const listIndexData = data.map((item) => item.recordId);
      onChangedateList(listData);
      onChangeindexList(listIndexData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <StyledCalendarWrapper>
        <StyledCalendar
          onChange={onChange}
          formatDay={(locale, date) => moment(date).format("DD")}
          calendarType="gregory"
          next2Label={null}
          prev2Label={null}
          minDetail="year"
          value={value}
          tileContent={({ date }) => {
            //TODO : 버튼 위치 수정
            const html = [];
            if (dateList.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
              html.push(
                <div>
                  <StyledDot key={moment(date).format("YYYY-MM-DD")} />
                </div>
              );
            }
            return <>{html}</>;
          }}
        ></StyledCalendar>
      </StyledCalendarWrapper>
    </Layout>
  );
}

export default Calender;

const Layout = styled.div`
  width: 100%;
  height: 300px;
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
`;
export const StyledCalendar = styled(Calendar)`
  position: relative;
`;

export const StyledDot = styled.div`
  background-color: red;
  border-radius: 50%;
  width: 0.3rem;
  height: 0.3rem;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
`;
