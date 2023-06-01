/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AiFillCheckSquare } from "react-icons/ai";
import { AuthContext } from "../components/AuthContext";
import axios from "axios";
import "react-circular-progressbar/dist/styles.css";
import trackIt from "../assets/TrackIt.png";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar } from "react-circular-progressbar";

dayjs.locale("pt-br");

const TodayPage = () => {
  const { image, token } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);
  const [completedHabits, setCompletedHabits] = useState(0);

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

  useEffect(() => {
    handleGetHabits();
  }, []);

  useEffect(() => {
    // Calculate the number of completed habits
    const countCompletedHabits = habits.filter(
      (habit) => habit.completed
    ).length;
    setCompletedHabits(countCompletedHabits);
  }, [habits]);

  const toggleHabitCompletion = (habitId) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === habitId ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

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
          <Title>{dayjs().format("dddd, DD/MM")}</Title>

          <NoHabitsText>Nenhum hábito concluído hoje.</NoHabitsText>
        </Day>
        <HabitsContainer>
          {habits.map((habit) => (
            <HabitCard
              key={habit.id}
              completed={habit.completed}
              onClick={() => toggleHabitCompletion(habit.id)}
            >
              <HabitCardText>
                <HabitTitle>{habit.name}</HabitTitle>
                <HabitInfo>
                  <InfoText>
                    Sequência atual: {habit.currentSequence} dias
                  </InfoText>
                  <InfoText>Seu recorde: {habit.highestSequence} dias</InfoText>
                </HabitInfo>
              </HabitCardText>
              <HabitIconWrapper>
                <HabitIcon completed={habit.completed} />
              </HabitIconWrapper>
            </HabitCard>
          ))}
        </HabitsContainer>
      </Container>
      <Footer>
        <FooterTitle>Hábitos</FooterTitle>

        <CircularProgressbar
          value={(completedHabits / habits.length) * 100}
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
  color: ${({ completed }) => (completed ? "#8FC549" : "#ebebeb")};
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
