/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import styled from "styled-components";
import trackIt from "../assets/TrackIt.png";
import logoMais from "../assets/+.svg";
import lixeira from "../assets/lixeira.png";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";

const HabitsPage = () => {
  const { image, token, completedHabits, habitList } = useContext(AuthContext);
  const progress = (completedHabits / habitList.length) * 100;

  console.log(habitList, completedHabits);

  const [showAddHabit, setShowAddHabit] = useState(false);

  const [selectedDays, setSelectedDays] = useState([]);
  const [habitName, setHabitName] = useState("");
  const [habits, setHabits] = useState([]);
  const navigate = useNavigate();
  const daysOfWeekButtons = [
    { day: "D", value: "1" },
    { day: "S", value: "2" },
    { day: "T", value: "3" },
    { day: "Q", value: "4" },
    { day: "Q", value: "5" },
    { day: "S", value: "6" },
    { day: "S", value: "7" },
  ];

  useEffect(() => {
    handleGetHabits();
  }, []);

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
  const handleHabits = () => {
    navigate("/hoje");
  };
  const handleNameChange = (event) => {
    setHabitName(event.target.value);
  };

  const handleAddHabit = () => {
    setShowAddHabit(true);
  };

  const handleCancel = () => {
    setShowAddHabit(false);
    setSelectedDays([]);
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
        setSelectedDays([]);
        setHabitName(""); // Limpar o valor do input
        handleGetHabits();
      })
      .catch((error) => {
        console.log("Error saving habit:", error);
      });
  };

  const handleGetHabits = () => {
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setHabits(response.data);
        console.log("Habits retrieved successfully:", response.data);
      })
      .catch((error) => {
        console.log("Error retrieving habits:", error);
      });
  };

  const handleDeleteHabit = (habitId) => {
    const confirmed = window.confirm(
      "Você realmente deseja delezar esse hábito?"
    );

    if (confirmed) {
      axios
        .delete(
          `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log("Habit deleted successfully:", response.data);
          handleGetHabits();
        })
        .catch((error) => {
          console.log("Error deleting habit:", error);
          console.log(habitId);
        });
    }
  };

  const oi = () => {
    console.log(completedHabits, habitList);
  };

  return (
    <Wrapper>
      <Nav>
        <TrackDiv>
          <TrackLogo onClick={() => oi()} src={trackIt} alt="TrackIt" />
        </TrackDiv>
        <UserImage src={image} alt="Bob" />
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
              value={habitName}
              onChange={handleNameChange}
            />
            <DaysOfWeek>
              {daysOfWeekButtons.map((day) => (
                <DayButton
                  key={day.value}
                  selected={selectedDays.includes(day.value)}
                  onClick={() => handleDayClick(day.value)}
                >
                  {day.day}
                </DayButton>
              ))}
            </DaysOfWeek>

            <ButtonContainer>
              <CancelButton onClick={handleCancel}>Cancelar</CancelButton>
              <SaveButton onClick={handleSave}>Salvar</SaveButton>
            </ButtonContainer>
          </AddHabitScreen>
        )}
        <HabitsContainer>
          {habits.map((habit) => (
            <Habit key={habit.id}>
              <HabitName>{habit.name}</HabitName>
              <DeletIcon
                src={lixeira}
                onClick={() => handleDeleteHabit(habit.id)}
              />

              <DaysOfWeek>
                {daysOfWeekButtons.map((day) => (
                  <DayButton
                    key={day.value}
                    selected={habit.days.includes(parseInt(day.value))}
                  >
                    {day.day}
                  </DayButton>
                ))}
              </DaysOfWeek>
            </Habit>
          ))}
        </HabitsContainer>
      </Container>
      <Footer>
        <FooterTitle onClick={() => handleHabits()}>Hábitos</FooterTitle>

        <CircularProgressbar
          value={progress}
          text="Hoje"
          background
          backgroundPadding={6}
          styles={{
            path: {
              stroke: "#FFFFFF",
              strokeLinecap: "round",
              transition: "stroke-dashoffset 0.5s ease 0s",
            },
            trail: {
              stroke: "transparent", // Remove o rastro cinza
            },

            text: {
              fill: "#ffffff",
              fontSize: "18px",
              fontFamily: "Lexend Deca",
              fontWeight: "400",
            },
            background: {
              fill: "#52B6FF",
            },
            root: {
              width: "91px",
              height: "91px",
              marginBottom: "40px",
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

const TrackLogo = styled.img`
  width: 97px;
  height: 49px;
`;
const TrackDiv = styled.div`
  display: flex;
`;
const UserImage = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 98.5px;
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
  background: #ffffff;
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
    opacity: ${(props) => (props.selected ? 1 : 0)};
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
