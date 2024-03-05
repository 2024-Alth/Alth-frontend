import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface DiaryViewContainerProps {
  date: string;
  dateList: string[];
  index: number[];
}

function DiaryViewContainer({
  date,
  dateList,
  index,
}: DiaryViewContainerProps) {
  const [log, setLog] = useState([]);

  useEffect(() => {
    if (dateList.includes(date)) {
      const dateIndex = dateList.indexOf(date);
      const targetIndexValue = index[dateIndex];
      console.log("Target index value:", targetIndexValue);
      GetDate(targetIndexValue);
    }
  }, [date, dateList, index]);

  const GetDate = async (index: number) => {
    try {
      const response = await axios({
        method: "get",
        url: `http://localhost:8080/user/record/${index}`,
        headers: { Authorization: `${localStorage.getItem("user")}` },
      });
      console.log(response.data);
      setLog(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div>{log?.recordDate}</div>
      <div>내 상태는? {log?.hangOver}</div>
      <div>음주 기록</div>
      {log?.alcohols?.map((index) => (
        <div>
          <div>
            {index?.alcoholName}
            {index?.alcoholType}{" "}
          </div>
          <div>
            {index?.degree}도 {index?.volume}ml{" "}
          </div>
        </div>
      ))}
    </Layout>
  );
}

export default DiaryViewContainer;

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
