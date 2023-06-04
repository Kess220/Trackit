import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import trackIt from "../assets/TrackIt.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import axios from "axios";

const TodayPage = () => {
  const { image, token, completedHabits, habitList } = useContext(AuthContext);
  const progress = (completedHabits / habitList.length) * 100;
  const [habitsHistory, setHabitsHistory] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (token != null) {
      const fetchHabitsHistory = async () => {
        try {
          const response = await axios.get(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily",
            {
              headers: {
                Authorization: `Bearer ${token}`, // Coloque o seu token aqui
              },
            }
          );
          setHabitsHistory(response.data);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      fetchHabitsHistory();
    }
  }, [token]);

  const handleHabits = () => {
    navigate("/habitos");
  };

  const handleToday = () => {
    navigate("/hoje");
  };

  const handleHistoric = () => {
    navigate("/historico");
  };

  return (
    <Wrapper>
      <Nav>
        <TrackDiv>
          <TrackLogo src={trackIt} alt="TrackIt" />
        </TrackDiv>
        <UserImage data-test="avatar" src={image} alt="Bob" />
      </Nav>
      <Container>
        <Day>
          <Title>Histórico</Title>
          {habitsHistory.length === 0 ? (
            <NoHabitsText>
              Em breve você poderá ver o histórico dos seus hábitos aqui!
            </NoHabitsText>
          ) : (
            habitsHistory.map((historyItem) => (
              <HistoryItem key={historyItem.day}>
                <HistoryDay>{historyItem.day}</HistoryDay>
                {historyItem.habits.map((habit) => (
                  <HistoryHabit key={habit.id}>
                    {habit.done ? (
                      <CompletedHabitIcon />
                    ) : (
                      <IncompleteHabitIcon />
                    )}
                    <HabitName>{habit.name}</HabitName>
                  </HistoryHabit>
                ))}
              </HistoryItem>
            ))
          )}
        </Day>
        <HabitsContainer></HabitsContainer>
      </Container>
      <Footer>
        <FooterTitle data-test="habit-link" onClick={handleHabits}>
          Hábitos
        </FooterTitle>
        <ProgressContainer onClick={handleToday}>
          <CircularProgressbar
            data-test="today-link"
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
        </ProgressContainer>
        <FooterTitle onClick={handleHistoric} data-test="history-link">
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
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

const Day = styled.div`
  display: flex;
  flex-direction: column;
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

const NoHabitsText = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: #666666;
`;

const HistoryItem = styled.div`
  margin-bottom: 20px;
`;

const HistoryDay = styled.h3`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: #126ba5;
`;

const HistoryHabit = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const CompletedHabitIcon = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #8fc549;
  margin-right: 8px;
`;

const IncompleteHabitIcon = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #eb5757;
  margin-right: 8px;
`;

const HabitName = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: #666666;
`;

const HabitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

export default TodayPage;
