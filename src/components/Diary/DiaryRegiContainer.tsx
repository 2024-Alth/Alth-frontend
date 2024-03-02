import { useState } from 'react';
import styled from "styled-components"
import CardSlider from '../CardSlider';

const DiaryRegiContainer = () => {
  const [soberIsOpen, setSoberIsOpen] = useState(false);
  const [soberSelectedOption, setSoberSelectedOption] = useState<string | null>(null);

  const soberOptions = ['술을 안 마신 느낌', '조금 알딸딸한 느낌', '술자리의 주인공', '잃어버린 그 날의 기억'];

  const handleSoberToggle = () => {
    setSoberIsOpen(!soberIsOpen);
  };

  const handleOptionSelect = (option: string): void => {
    setSoberSelectedOption(option);
    setSoberIsOpen(false);
  };

  return (
    <Layout>
      <TitleText>4월 16일의 기록</TitleText>
      <Divider />
      <CardSlider />
      <ExpensesContainer>
        <MiddleTitle>지출</MiddleTitle>
        <InputContainer>
          <Input type="text" placeholder="___________" />
          <UnitLabel>원</UnitLabel>
        </InputContainer>
      </ExpensesContainer>
      <SoberDegreeContainer>
        <LastTitle>얼마나 취했나요?</LastTitle>
        <Dropdown>
          <DropdownButton onClick={handleSoberToggle}>
            {soberSelectedOption || '선택'}
            <Triangle>{soberIsOpen ? '▲' : '▼'}</Triangle>
          </DropdownButton>
          <DropdownContent isOpen={soberIsOpen}>
            {soberOptions.map((option) => (
              <DropdownOption
                key={option}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </DropdownOption>
            ))}
          </DropdownContent>
        </Dropdown>
      </SoberDegreeContainer>
      <Button>등록</Button>
    </Layout>
  )
}

export default DiaryRegiContainer

export const Layout = styled.div`
  width: 100%;
  height: auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 20px;
`

const TitleText = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`

const Divider = styled.div`
  height: 1px;
  background-color: #CCCCCC;
  width: 100%;
`;

const ExpensesContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 10px;
`;

const MiddleTitle = styled.div`
  display: flex;
  width: 30%;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const SoberDegreeContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

const LastTitle = styled.div`
  display: flex;
  width: 100%;
  font-weight: bold;
  align-items: center;
  justify-content: center;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 3px solid #a7d0b0;
  border-radius: 30px;
  padding: 5px 10px;
`;

const UnitLabel = styled.span`
  display: flex;
  margin-right: 5px;
  font-size: 13px;
  margin-left: 20px;
`;

const Input = styled.input`
  width: 30%;
  border: none;
  text-align: center;
  font-size: 13px;
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  font-size: 13px;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
`;

const DropdownButton = styled.button`
  background-color: #FFFFFF;
  border: 3px solid #a7d0b0;
  border-radius: 30px;
  padding: 5px;
  cursor: pointer;
  width: 100%;
`;

const DropdownContent = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  width: 100%;
  top: 100%;
  background-color: #FFFFFF;
  padding: 5px 10px;
  list-style: none;
  margin: 0;
  padding: 0;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const Triangle = styled.span`
  color: #a7d0b0;
  margin-left: 4px; 
  font-size: 13px;
  line-height: 0;
`;

const DropdownOption = styled.li`
  cursor: pointer;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  display: flex;
  background-color: #a7d0b0;
  border-radius: 30px;
  padding: 5px 10px;
  cursor: pointer;  
  font-size: 15px;
  align-items: center;
  font-weight: bold;
`;