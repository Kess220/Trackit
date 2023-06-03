import styled from "styled-components";
import trackIt from "../assets/TrackIt.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthContext";

const Historic = () => {
  const { image, token, completedHabits, habitList } = useContext(AuthContext);
  const progress = (completedHabits / habitList.length) * 100;
  const [habitHistory, setHabitHistory] = useState([]);

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

  useEffect(() => {
    const fetchHabitHistory = async () => {
      try {
        const response = await fetch(
          "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setHabitHistory(data);
      } catch (error) {
        console.log("Error fetching habit history:", error);
      }
    };

    fetchHabitHistory();
  }, [token]);

  return (
    <Wrapper>
      <Nav>
        <TrackDiv>
          <TrackLogo src={trackIt} alt="TrackIt" />
        </TrackDiv>
        <UserImage data-test="avatar" src={image} alt="Bob" />
      </Nav>
      <Container>
        {Array.isArray(habitHistory) && habitHistory.length > 0 ? (
          habitHistory.map((entry) => (
            <Day key={entry.day}>
              <Title>{entry.day}</Title>
              {entry.habits.length === 0 ? (
                <NoHabitsText>
                  Em breve você poderá ver o histórico dos seus hábitos aqui!
                </NoHabitsText>
              ) : (
                entry.habits.map((habit) => (
                  <HabitCard key={habit.id}>
                    <HabitTitle>{habit.name}</HabitTitle>
                    <HabitInfo className={habit.done ? "done" : ""}>
                      {habit.done ? "Concluído" : "Não concluído"}
                    </HabitInfo>
                  </HabitCard>
                ))
              )}
            </Day>
          ))
        ) : (
          <NoHabitsText>
            Em breve você poderá ver o histórico dos seus hábitos aqui!
          </NoHabitsText>
        )}
      </Container>

      <Footer>
        <FooterTitle data-test="habit-link" onClick={() => handleHabits()}>
          Hábitos
        </FooterTitle>
        <ProgressContainer onClick={() => handleToday()}>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
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

export default Historic;
