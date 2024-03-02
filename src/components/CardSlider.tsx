import { useState } from 'react';
import styled from 'styled-components';

const CardSlider = () => {
  const [cards] = useState([
    { id: 1, content: '카드 1 내용' },
  ]);

  const [drinkIsOpen, setDrinkIsOpen] = useState(false);
  const [drinkSelectedOption, setDrinkSelectedOption] = useState<string | null>(null);
  const [volumnIsOpen, setVolumnIsOpen] = useState(false);
  const [volumnSelectedOption, setVolumnSelectedOption] = useState<string | null>(null);

  const drinkOptions = ['소주', '맥주', '막걸리', '기타'];
  const volumnOptions = ['병', '캔', '기타'];

  const handleDrinkToggle = () => {
    setDrinkIsOpen(!drinkIsOpen);
  };

  const handleVolumnToggle = () => {
    setVolumnIsOpen(!volumnIsOpen);
  };

  type OptionType = 'drink' | 'volumn';
  
  const handleOptionSelect = (option: string, type: OptionType): void => {
    if (type === 'drink') {
      setDrinkSelectedOption(option);
      setDrinkIsOpen(false);
    } else if (type === 'volumn') {
      setVolumnSelectedOption(option);
      setVolumnIsOpen(false);
    }
  };

  return (
    <Container>
        {cards.map((card) => (
          <Card key={card.id}>
            <CardContent>
              <TopRow>
                <MiddleTitle>주종</MiddleTitle>
                <Dropdown>
                  <DropdownButton onClick={handleDrinkToggle} style={{ width: '80px' }}>
                    {drinkSelectedOption || '선택'}
                    <Triangle>{drinkIsOpen ? '▲' : '▼'}</Triangle>
                  </DropdownButton>
                  <DropdownContent isOpen={drinkIsOpen}>
                    {drinkOptions.map((option) => (
                      <DropdownOption
                        key={option}
                        onClick={() => handleOptionSelect(option, 'drink')}
                      >
                        {option}
                      </DropdownOption>
                    ))}
                  </DropdownContent>
                </Dropdown>
                <Dropdown>
                  <DropdownButton onClick={handleVolumnToggle} style={{ width: '60px' }}>
                    {volumnSelectedOption || '선택'}
                    <Triangle>{volumnIsOpen ? '▲' : '▼'}</Triangle>
                  </DropdownButton>
                  <DropdownContent isOpen={volumnIsOpen}>
                    {volumnOptions.map((option) => (
                      <DropdownOption
                        key={option}
                        onClick={() => handleOptionSelect(option, 'volumn')}
                      >
                        {option}
                      </DropdownOption>
                    ))}
                  </DropdownContent>
                </Dropdown>
                <Button>조회</Button>
              </TopRow>
              <BottomRow>
                <MiddleTitle style={{ width: '180px' }}>음주량 / 도수</MiddleTitle>
                <InputContainer>
                  <Input type="text" placeholder="___" />
                  <UnitLabel>mL</UnitLabel>
                  <Separator>|</Separator>
                  <Input type="text" placeholder="___" />
                  <UnitLabel>%</UnitLabel>
                </InputContainer>
              </BottomRow>
            </CardContent>
          </Card>
        ))}
    </Container>
  );
};

export default CardSlider;

const Container = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  border: 1px solid #b1b1b1;
  border-radius: 15px;
  background-color: #ffffff;
  margin-top: 10px;
`;

const Card = styled.div`
  width: 100%;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const TopRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const MiddleTitle = styled.div`
  display: flex;
  font-weight: bold;
  align-items: center;
  margin-right: 5px;
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  font-size: 13px;
`;

const DropdownButton = styled.button`
  background-color: #FFFFFF;
  border: 3px solid #a7d0b0;
  border-radius: 30px;
  padding: 5px;
  cursor: pointer;
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
  font-size: 13px;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  border: 3px solid #a7d0b0;
  border-radius: 30px;
  padding: 5px 10px;
`;

const UnitLabel = styled.span`
  display: flex;
  right: 0;
  align-items: center;
  margin-right: 5px;
  font-size: 13px;
`;

const Input = styled.input`
  width: 30%;
  border: none;
  text-align: center;
  font-size: 13px;
`;

const Separator = styled.div`
  margin: 0 3px;
`;

