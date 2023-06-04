/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { AiFillCheckSquare } from "react-icons/ai";
import { AuthContext } from "../components/AuthContext";
import axios from "axios";
import "react-circular-progressbar/dist/styles.css";
import trackIt from "../assets/TrackIt.png";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

dayjs.locale("pt-br");

const TodayPage = () => {
  const {
    image,
    token,
    habitList,
    updateHabitList,
    completedHabits,
    updateCompletedHabits,
    totalHabits,
  } = useContext(AuthContext);

  const percentageCompleted =
    totalHabits > 0 ? (completedHabits / totalHabits) * 100 : 0;
  useEffect(() => {
    console.log(token);
    if (token != null) {
      handleGetHabits();
      restoreCompletedHabits();
    }
    // Restaurar hábitos marcados ao carregar a página
  }, [token]);
  const handleGetHabits = () => {
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        updateHabitList(response.data);
        console.log("Habits retrieved successfully:", response.data);
      })
      .catch((error) => {
        console.log("Error retrieving habits:", error);
      });
  };

  useEffect(() => {
    const countCompletedHabits = habitList.filter(
      (habit) => habit.completed
    ).length;
    updateCompletedHabits(countCompletedHabits);

    // Salvar hábitos marcados no localStorage
    saveCompletedHabits(habitList);
  }, [habitList]);

  const saveCompletedHabits = (habits) => {
    localStorage.setItem("completedHabits", JSON.stringify(habits));
  };

  const restoreCompletedHabits = () => {
    const savedHabits = localStorage.getItem("completedHabits");
    if (savedHabits) {
      const parsedHabits = JSON.parse(savedHabits);
      updateHabitList(parsedHabits);
    }
  };
  const toggleHabitCompletion = (habitId) => {
    const habit = habitList.find((habit) => habit.id === habitId);
    if (!habit) {
      return;
    }

    axios
      .post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/check`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const updatedHabitList = habitList.map((habit) =>
          habit.id === habitId
            ? { ...habit, completed: !habit.completed }
            : habit
        );
        updateHabitList(updatedHabitList);
        console.log("Habit marked as complete:", response.data);
      })
      .catch((error) => {
        console.log("Error marking habit as complete:", error);
      });
  };

  const navigate = useNavigate();

  const handleHabits = () => {
    navigate("/habitos");
  };
  const handleToday = () => {
    navigate("/hoje");
  };

  const handleHistoric = () => {
    navigate("/historico");
  };
  console.log(`Teste HabitList`, true.toString());
  return (
    <Wrapper>
      <Nav>
        <TrackDiv>
          <TrackLogo src={trackIt} alt="TrackIt" />
        </TrackDiv>
        <UserImage src={image} alt="Bob" />
      </Nav>
      <Container>
        <Day>
          <Title data-test="today">{dayjs().format("dddd, DD/MM")}</Title>
          {completedHabits === 0 ? (
            <NoHabitsText data-test="today-counter">
              Nenhum hábito concluído hoje.
            </NoHabitsText>
          ) : (
            <HabitsText
              data-test="today-counter"
              percentage={percentageCompleted}
            >
              {percentageCompleted === 0
                ? "Nenhum hábito concluído hoje."
                : `${percentageCompleted.toFixed(
                    0
                  )}% de hábitos concluídos hoje.`}
            </HabitsText>
          )}
        </Day>
        <HabitsContainer>
          {habitList.map((habit) => (
            <HabitCard
              data-test="today-habit-container"
              key={habit.id}
              completed={habit.completed?.toString()}
              onClick={() => toggleHabitCompletion(habit.id)}
            >
              <HabitCardText>
                <HabitTitle data-test="today-habit-name">
                  {habit.name}
                </HabitTitle>
                <HabitInfo>
                  <InfoText data-test="today-habit-sequence">
                    Sequência atual: {habit.currentSequence} dias
                  </InfoText>
                  <InfoText data-test="today-habit-record">
                    Seu recorde: {habit.highestSequence} dias
                  </InfoText>
                </HabitInfo>
              </HabitCardText>
              <HabitIconWrapper>
                <HabitIcon
                  data-test="today-habit-check-btn"
                  completed={habit.completed?.toString()}
                />
              </HabitIconWrapper>
            </HabitCard>
          ))}
        </HabitsContainer>
      </Container>
      <Footer>
        <FooterTitle data-test="habit-link" onClick={() => handleHabits()}>
          Hábitos
        </FooterTitle>
        <ProgressContainer onClick={() => handleToday()}>
          <CircularProgressbar
            value={(completedHabits / habitList.length) * 100}
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
        </ProgressContainer>

        <FooterTitle onClick={() => handleHistoric()} data-test="history-link">
          Histórico
        </FooterTitle>
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
const ProgressContainer = styled.div`
  cursor: pointer;
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
const Container = styled.div`
  display: flex;
  flex-direction: column;
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
const FooterTitle = styled.button`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  text-align: center;
  color: #52b6ff;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const Day = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const Title = styled.h2`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;
  color: #126ba5;
`;

const NoHabitsText = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: #bababa;
`;

const HabitsText = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: ${({ percentage }) => (percentage > 0 ? "#8FC549" : "#8FC549")};
`;

const HabitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const HabitCard = styled.div`
  width: 340px;
  height: 94px;
  background: #ffffff;
  border-radius: 5px;
  margin: 16px;
  display: flex;
  align-items: center;
  .circular-progressbar {
    width: 69px;
    height: 69px;
  }
`;

const HabitCardText = styled.div`
  flex: 1;
  margin: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const HabitIconWrapper = styled.div`
  width: 69px;
  height: 69px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HabitIcon = styled(AiFillCheckSquare)`
  width: 69px;
  height: 69px;
  color: ${({ completed }) => (completed == "true" ? "#8FC549" : "#ebebeb")};
  border-radius: 5px;
`;

const HabitTitle = styled.h3`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #666666;
`;

const HabitInfo = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
`;

const InfoText = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 12.976px;
  line-height: 16px;
  color: #666666;
  margin-top: 7px;
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

export default TodayPage;
