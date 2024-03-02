import { useNavigate } from "react-router-dom";
import styled from "styled-components"

function InputDrink(){

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/diary");
  };

  return(
    <Layout>
      <Text>
        술을 드셨나요? 바로 입력해주세요!
      </Text>
      <Button onClick={handleButtonClick}>
        입력하기
      </Button>
    </Layout>
  )
}

export default InputDrink

const Layout = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  margin-top:16px;
  margin-bottom: 16px;
`

const Text = styled.div`
  font-size: 16px;
  margin: 20px;
  margin-bottom: 16px;
  font-weight: bold;
`

const Button = styled.button`
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #60D394;
  margin-bottom: 16px;
`