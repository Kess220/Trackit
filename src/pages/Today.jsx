import styled from "styled-components";
import trackIt from "../assets/TrackIt.png";
import bob from "../assets/bob.png";
import { AiFillCheckSquare } from "react-icons/ai";

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
          <Title>Segunda-Feira, 17/05</Title>
          <NoHabitsText>Nenhum hábito concluído hoje.</NoHabitsText>
        </Day>
        <HabitsContainer>
          <HabitCard>
            <HabitCardText>
              <HabitTitle>Ler</HabitTitle>
              <HabitInfo>
                <InfoText>Sequência atual: 2 dias</InfoText>
                <InfoText>Seu recorde: 3 dias</InfoText>
              </HabitInfo>
            </HabitCardText>
            <HabitIconWrapper>
              <HabitIcon />
            </HabitIconWrapper>
          </HabitCard>
          {/* Adicione outros cards de hábitos aqui */}
        </HabitsContainer>
      </Container>
      <Footer>Footer</Footer>
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

const BobLogo = styled.img`
  width: 51px;
  height: 51px;
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
  color: #ebebeb;
  border: 1px solid #e7e7e7;
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
  height: 60px;
  background-color: #c70a0a;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export default TodayPage;
