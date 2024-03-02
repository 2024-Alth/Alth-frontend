import styled from "styled-components"
import button from "../../assets/regibutton.svg"

interface DiaryEmptyContainerProps {
  onButtonClick: () => void;
}

function DiaryEmptyContainer({ onButtonClick }: DiaryEmptyContainerProps) {
  return(
    <Layout>
        <TitleText>오늘의 기록</TitleText>
        <Description>
            기록이 없어요 😢<br/>
            등록하려면 아래의 버튼을 눌러주세요!
        </Description>
        <ButtonImg onClick={onButtonClick} />
    </Layout>
  )
}

export default DiaryEmptyContainer;

const Layout = styled.div`
  width: 100%;
  height: auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  margin-top:16px;
  margin-bottom: 16px;
  padding: 28px;
`

const TitleText = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`

const Description = styled.div`
  font-size: 16px;
  text-align: center;
  margin-bottom: 50px;
`

const ButtonImg = styled.button`
  width: 47px;
  height: 47px;
  background-image: url(${button});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #FFFFFF;
  margin-bottom: 50px;
`;