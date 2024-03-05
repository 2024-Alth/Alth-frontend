import { useEffect, useState } from "react";
import styled from "styled-components";
import Calender from "../../components/Main/Calendar";
import Empty from "../../components/Diary/DiaryEmptyContainer";
import Regi from "../../components/Diary/DiaryRegiContainer";
import View from "../../components/Diary/DiaryViewContainer";

function Main() {
  const [currentContainer, setCurrentContainer] = useState<string>("empty");
  const [valueDate, setValueDate] = useState<string | null>(null);
  const [dateList, setDateList] = useState<string[]>([]);
  const [dateIndexList, setDateIndexList] = useState<number[]>([]);

  const handleButtonClick = () => {
    setCurrentContainer("regi");
  };

  const handleDate = (value: Date) => {
    const year = value.getFullYear(); // 년도 추출
    const month = (value.getMonth() + 1).toString().padStart(2, "0"); // 월 추출 (0부터 시작하므로 1을 더하고, 두 자리로 맞추기 위해 padStart 사용)
    const day = value.getDate().toString().padStart(2, "0"); // 일 추출 (두 자리로 맞추기 위해 padStart 사용)
    const formattedDate = `${year}-${month}-${day}`;
    setValueDate(formattedDate);
  };

  const handleDateList = (date: string[]) => {
    setDateList(date);
  };

  const handleIndex = (index: number[]) => {
    setDateIndexList(index);
  };

  useEffect(() => {
    if (!dateList.includes(valueDate)) {
      setCurrentContainer("empty");
    } else {
      setCurrentContainer("view");
    }
  }, [dateList, valueDate]);

  return (
    <>
      <Layout>
        <Calender
          onValueChange={handleDate}
          onDateChange={handleDateList}
          onIndexChange={handleIndex}
        ></Calender>
        {currentContainer === "empty" && (
          <Empty onButtonClick={handleButtonClick} />
        )}
        {currentContainer === "regi" && <Regi date={valueDate} />}
        {currentContainer === "view" && (
          <View date={valueDate} dateList={dateList} index={dateIndexList} />
        )}
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
