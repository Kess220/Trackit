import styled from "styled-components";
import trackIt from "../assets/TrackIt.png";
import bob from "../assets/bob.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TodayPage = () => {
  return (
    <Wrapper>
      <Nav>
        <TrackDiv>
          <TrackLogo src={trackIt} alt="TrackIt" />
        </TrackDiv>
        <BobLogo src={bob} alt="Bob" />
      </Nav>
      <Container>
        <Day>
          <Title>Historico</Title>
          <NoHabitsText>
            Em breve voce podera ver o historico dos seus habitos aqui!
          </NoHabitsText>
        </Day>
        <HabitsContainer></HabitsContainer>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
const StyledCircularProgressbar = styled(CircularProgressbar)`
  width: 91px;
  height: 91px;
  margin-bottom: 40px;
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
const BobLogo = styled.img`
  width: 51px;
  height: 51px;
`;

export default TodayPage;
