import { useState } from "react";

import styled from "styled-components";
import trackIt from "../assets/TrackIt.png";
import bob from "../assets/bob.png";
import logoMais from "../assets/+.svg";
import lixeira from "../assets/lixeira.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";

const HabitsPage = () => {
  const { token } = useContext(AuthContext);

  const [showAddHabit, setShowAddHabit] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [habitName, setHabitName] = useState("");

  // Obtenha o token do contexto

  const handleDayClick = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(
        selectedDays.filter((selectedDay) => selectedDay !== day)
      );
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };
  const handleNameChange = (event) => {
    setHabitName(event.target.value);
  };

  const handleAddHabit = () => {
    setShowAddHabit(true);
  };

  const handleCancel = () => {
    setShowAddHabit(false);
  };

  const handleSave = () => {
    const habitData = {
      name: habitName,
      days: selectedDays.map((day) => parseInt(day)),
    };

    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        habitData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("Habit saved successfully:", response.data);
        setShowAddHabit(false);
      })
      .catch((error) => {
        console.log("Error saving habit:", error);
        console.log(token);
        console.log(habitName);
        console.log(habitData);
      });
  };

  return (
    <Wrapper>
      <Nav>
        <TrackDiv>
          <TrackLogo src={trackIt} alt="TrackIt" />
        </TrackDiv>
        <BobLogo src={bob} alt="Bob" />
      </Nav>
      <Container>
        <HabilitsCreator>
          <Title>Meus Hábitos</Title>
          <AddButton onClick={handleAddHabit}>
            <MaisLogo src={logoMais} alt="Mais" />
          </AddButton>
        </HabilitsCreator>
        {showAddHabit && (
          <AddHabitScreen>
            <Input
              type="text"
              placeholder="Nome do hábito"
              value={habitName} // Bind the value to the habitName state
              onChange={handleNameChange} // Handle input value changes
            />
            <DaysOfWeek>
              <DayButton
                selected={selectedDays.includes("1")}
                onClick={() => handleDayClick("1")}
                data-day="1"
              >
                D
              </DayButton>
              <DayButton
                selected={selectedDays.includes("2")}
                onClick={() => handleDayClick("2")}
                data-day="2"
              >
                S
              </DayButton>
              <DayButton
                selected={selectedDays.includes("3")}
                onClick={() => handleDayClick("3")}
                data-day="3"
              >
                T
              </DayButton>
              <DayButton
                selected={selectedDays.includes("4")}
                onClick={() => handleDayClick("4")}
                data-day="4"
              >
                Q
              </DayButton>
              <DayButton
                selected={selectedDays.includes("5")}
                onClick={() => handleDayClick("5")}
                data-day="5"
              >
                Q
              </DayButton>
              <DayButton
                selected={selectedDays.includes("6")}
                onClick={() => handleDayClick("6")}
                data-day="6"
              >
                S
              </DayButton>
              <DayButton
                selected={selectedDays.includes("7")}
                onClick={() => handleDayClick("7")}
                data-day="7"
              >
                S
              </DayButton>
            </DaysOfWeek>
            <ButtonContainer>
              <CancelButton onClick={handleCancel}>Cancelar</CancelButton>
              <SaveButton onClick={handleSave}>Salvar</SaveButton>
            </ButtonContainer>
          </AddHabitScreen>
        )}
        <HabitsContainer>
          <Habit>
            <HabitName>Ler 1 capítulo de livro</HabitName>
            <DeletIcon src={lixeira} />
            <DaysOfWeek>
              <DayButton>D</DayButton>
              <DayButton>S</DayButton>
              <DayButton>T</DayButton>
              <DayButton>Q</DayButton>
              <DayButton>Q</DayButton>
              <DayButton>S</DayButton>
              <DayButton>S</DayButton>
            </DaysOfWeek>
          </Habit>

          <Habit>
            <HabitName>Ler 1 capítulo de livro</HabitName>
            <DeletIcon src={lixeira} />
            <DaysOfWeek>
              <DayButton>D</DayButton>
              <DayButton>S</DayButton>
              <DayButton>T</DayButton>
              <DayButton>Q</DayButton>
              <DayButton>Q</DayButton>
              <DayButton>S</DayButton>
              <DayButton>S</DayButton>
            </DaysOfWeek>
          </Habit>

          <Habit>
            <HabitName>Ler 1 capítulo de livro</HabitName>
            <DeletIcon src={lixeira} />
            <DaysOfWeek>
              <DayButton>D</DayButton>
              <DayButton>S</DayButton>
              <DayButton>T</DayButton>
              <DayButton>Q</DayButton>
              <DayButton>Q</DayButton>
              <DayButton>S</DayButton>
              <DayButton>S</DayButton>
            </DaysOfWeek>
          </Habit>
        </HabitsContainer>
      </Container>
      <Footer>
        <FooterTitle>Hábitos</FooterTitle>
        <StyledCircularProgressbar
          value={66}
          text="Hoje"
          strokeWidth={10}
          styles={{
            path: {
              stroke: "#52b6ff",
              strokeLinecap: "butt",
              transition: "stroke-dashoffset 0.5s ease 0s",
            },
            trail: {
              stroke: "#d6d6d6",
            },
            text: {
              fill: "#52b6ff",
              fontSize: "16px",
              fontWeight: "bold",
            },
          }}
        />
        <FooterTitle>Histórico</FooterTitle>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #e5e5e5;
`;

const StyledCircularProgressbar = styled(CircularProgressbar)`
  width: 91px;
  height: 91px;
  margin-bottom: 40px;
`;
const TrackLogo = styled.img`
  width: 97px;
  height: 49px;
`;
const TrackDiv = styled.div`
  display: flex;
`;
const BobLogo = styled.img`
  width: 51px;
  height: 51px;
`;
const MaisLogo = styled.img`
  width: 16px;
  height: 16px;
`;

const Nav = styled.nav`
  height: 70px;
  background: rgb(18, 107, 165);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 4px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const HabitsContainer = styled.div`
  margin-top: 16px;
`;

const Habit = styled.div`
  width: 340px;
  height: 91px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
`;

const HabitName = styled.h1`
  margin-top: 13px;
  margin-left: 15px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;

  color: #666666;
`;

const DeletIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 20px;
  color: red;
  cursor: pointer;
`;

const HabilitsCreator = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

const Title = styled.h2`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;
  color: #126ba5;
`;

const AddButton = styled.div`
  width: 40px;
  height: 35px;
  border-radius: 4.63636px; /* Set the border radius */
  color: #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #52b6ff;
`;

const FooterTitle = styled.h1`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  text-align: center;
  color: #52b6ff;
  display: flex;
  align-items: center;
`;

const Footer = styled.footer`
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const AddHabitScreen = styled.div`
  width: 340px;
  height: 180px;
  background: #ffffff;
  border-radius: 5px;
  margin-left: 10px;
`;

const Input = styled.input`
  width: 303px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  padding-left: 11px;
  margin-left: 10px;
  margin-top: 18px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #666666;

  &::placeholder {
    margin-left: 11px;
    color: #dbdbdb;
  }

  &:focus {
    outline: none;
    border-color: #52b6ff;
    box-shadow: 0 0 0 2px rgba(82, 182, 255, 0.5);
  }
`;

const DaysOfWeek = styled.div`
  display: flex;
  margin-bottom: 16px;
  margin-left: 10px;
`;

const DayButton = styled.button`
  position: relative;
  width: 30px;
  height: 30px;
  background: ${(props) => (props.selected ? "#CFCFCF" : "#ffffff")};
  border: 1px solid ${(props) => (props.selected ? "#CFCFCF" : "#d5d5d5")};
  border-radius: 5px;
  color: ${(props) => (props.selected ? "#ffffff" : "#dbdbdb")};
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 4px;
  margin-top: 8px;

  &:before {
    content: attr(data-day);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0; /* Hide the number */
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CancelButton = styled.button`
  color: #52b6ff;
  background: none;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin-right: 8px;
  cursor: pointer;
  width: 84px;
  height: 35px;
`;

const SaveButton = styled.button`
  background-color: #52b6ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  width: 84px;
  height: 35px;
  margin-right: 6px;
`;

export default HabitsPage;
