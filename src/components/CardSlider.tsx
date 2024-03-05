import { useEffect, useState } from "react";
import styled from "styled-components";

const CardSlider = ({ onValueChange }) => {
  const [cards, setCards] = useState([
    {
      alcoholName: "병",
      degree: 0,
      price: 0,
      alCnt: 0,
      volume: 0,
      alcoholType: "선택",
      recordId: 1,
    },
  ]);
  const [drinkIsOpen, setDrinkIsOpen] = useState(false);
  const [drinkSelectedOption, setDrinkSelectedOption] = useState<string | null>(
    null
  );
  const [volumnIsOpen, setVolumnIsOpen] = useState(false);
  const [volumnSelectedOption, setVolumnSelectedOption] = useState<
    string | null
  >(null);

  const drinkOptions = ["소주", "맥주", "막걸리", "기타"];
  const volumnOptions = ["병", "캔", "기타"];

  const [drink, setDrink] = useState("");
  const [percent, setPercent] = useState("");

  const [drinkIsOpenArr, setDrinkIsOpenArr] = useState(
    new Array(cards.length).fill(false)
  );
  const [volumnIsOpenArr, setVolumnIsOpenArr] = useState(
    new Array(cards.length).fill(false)
  );

  // const handleDrinkToggle = () => {
  //   setDrinkIsOpen(!drinkIsOpen);
  // };

  // const handleVolumnToggle = () => {
  //   setVolumnIsOpen(!volumnIsOpen);
  // };

  const handleDrinkToggle = (index) => {
    setDrinkIsOpenArr((prevIsOpenArr) => {
      const updatedIsOpenArr = [...prevIsOpenArr];
      updatedIsOpenArr[index] = !updatedIsOpenArr[index];
      return updatedIsOpenArr;
    });
  };

  const handleVolumnToggle = (index) => {
    setVolumnIsOpenArr((prevIsOpenArr) => {
      const updatedIsOpenArr = [...prevIsOpenArr];
      updatedIsOpenArr[index] = !updatedIsOpenArr[index];
      return updatedIsOpenArr;
    });
  };

  type OptionType = "drink" | "volumn";

  const handleOptionSelect = (option: string, type: OptionType): void => {
    if (type === "drink") {
      setDrinkSelectedOption(option);
      setDrinkIsOpen(false);
    } else if (type === "volumn") {
      setVolumnSelectedOption(option);
      setVolumnIsOpen(false);
    }
  };

  const handleAddCard = () => {
    const newCard = {
      alcoholName: "병" || "",
      degree: parseInt(percent) || 0,
      price: 0,
      alCnt: 0,
      volume: 0,
      alcoholType: "",
      recordId: cards.length + 1,
    };
    setCards([...cards, newCard]);
    setDrink("");
    setPercent("");
    setDrinkIsOpenArr([...drinkIsOpenArr, false]);
    setVolumnIsOpenArr([...volumnIsOpenArr, false]);
  };

  const handleDegree = (degree, index) => {
    setCards((prevCards) => {
      return prevCards.map((card) => {
        if (card.recordId === index) {
          return { ...card, degree: degree };
        }
        return card;
      });
    });
    console.log(cards);
  };

  const handleVolume = (volume, index) => {
    setCards((prevCards) => {
      return prevCards.map((card) => {
        if (card.recordId === index) {
          return { ...card, volume: volume };
        }
        return card;
      });
    });
    console.log(cards);
  };

  const handleName = (name, type, index) => {
    handleOptionSelect(name, type);
    let drinkName = "";
    if (name === "소주") {
      drinkName = "SOJU";
    } else if (name === "맥주") {
      drinkName = "BEER";
    } else if (name === "막걸리") {
      drinkName = "MAKGEOLLI";
    } else {
      drinkName = "ETC";
    }
    setCards((prevCards) => {
      return prevCards.map((card) => {
        if (card.recordId === index) {
          return { ...card, alcoholType: drinkName };
        }
        return card;
      });
    });
    console.log(cards);
  };

  const handleContent = (name, type, index) => {
    handleOptionSelect(name, type);
    setCards((prevCards) => {
      return prevCards.map((card) => {
        if (card.recordId === index) {
          return { ...card, alcoholName: name };
        }
        return card;
      });
    });
    console.log(cards);
  };

  useEffect(() => {
    onValueChange(cards);
  }, [cards, onValueChange]);

  return (
    <Container>
      {cards.map((card, index) => (
        <Card key={card.recordId}>
          <CardContent>
            <TopRow>
              <MiddleTitle>주종</MiddleTitle>
              <Dropdown>
                <DropdownButton
                  onClick={() => handleDrinkToggle(index)}
                  style={{ width: "80px" }}
                >
                  {card.alcoholType || "선택"}
                  <Triangle>{drinkIsOpen ? "▲" : "▼"}</Triangle>
                </DropdownButton>
                <DropdownContent isOpen={drinkIsOpenArr[index]}>
                  {drinkOptions.map((option) => (
                    <DropdownOption
                      key={option}
                      onClick={() => handleName(option, "drink", card.recordId)}
                    >
                      {option}
                    </DropdownOption>
                  ))}
                </DropdownContent>
              </Dropdown>
              <Dropdown>
                <DropdownButton
                  onClick={() => handleVolumnToggle(index)}
                  style={{ width: "60px" }}
                >
                  {card.alcoholName || "선택"}
                  <Triangle>{volumnIsOpen ? "▲" : "▼"}</Triangle>
                </DropdownButton>
                <DropdownContent isOpen={volumnIsOpenArr[index]}>
                  {volumnOptions.map((option) => (
                    <DropdownOption
                      key={option}
                      onClick={() =>
                        handleContent(option, "volumn", card.recordId)
                      }
                    >
                      {option}
                    </DropdownOption>
                  ))}
                </DropdownContent>
              </Dropdown>
              {/* <Button>조회</Button> */}
            </TopRow>
            <BottomRow>
              <MiddleTitle style={{ width: "180px" }}>
                음주량 / 도수
              </MiddleTitle>
              <InputContainer>
                <Input
                  type="text"
                  value={card.volume}
                  onChange={(e) => handleVolume(e.target.value, card.recordId)}
                  placeholder="___"
                />
                <UnitLabel>mL</UnitLabel>
                <Separator>|</Separator>
                <Input
                  type="text"
                  value={card.degree}
                  onChange={(e) => handleDegree(e.target.value, card.recordId)}
                  placeholder="___"
                />
                <UnitLabel>%</UnitLabel>
              </InputContainer>
            </BottomRow>
          </CardContent>
        </Card>
      ))}
      <AddCardButton onClick={handleAddCard}>+</AddCardButton>
    </Container>
  );
};

export default CardSlider;

const AddCardButton = styled.button`
  background-color: #a7d0b0;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 10px;
`;

const Container = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  background-color: #ffffff;
  margin-top: 10px;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const Card = styled.div`
  width: 100%;
  border: 1px solid #b1b1b1;
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
  z-index: 1;
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
  background-color: #ffffff;
  border: 3px solid #a7d0b0;
  border-radius: 30px;
  padding: 5px;
  cursor: pointer;
  z-index: 99;
`;

const DropdownContent = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  overflow: scroll;
  height: 80px;
  width: 100%;
  top: 100%;
  background-color: #ffffff;
  padding: 5px 10px;
  list-style: none;
  margin: 0;
  padding: 0;
  display: ${(props) => (props.isOpen ? "block" : "none")};
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
