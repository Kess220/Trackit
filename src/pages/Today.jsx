import styled from "styled-components";
import { FiCheckCircle } from "react-icons/fi";

const TodayPage = () => {
  return (
    <Wrapper>
      <Nav>Nav</Nav>
      <Container>
        <Day>
          <Title>Segunda-Feira</Title>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Day = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

const NoHabitsText = styled.p`
  font-size: 16px;
  color: #888;
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
  padding: 16px;
  display: flex;
  align-items: center;
`;

const HabitCardText = styled.div`
  width: 340px;
  background: #ffffff;
  border-radius: 5px;
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

const HabitIcon = styled(FiCheckCircle)`
  width: 50px;
  height: 50px;
`;

const HabitTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 8px;
`;

const HabitInfo = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
`;

const InfoText = styled.p`
  font-size: 14px;
  color: #888;
  margin-bottom: 8px;
`;

const Nav = styled.nav`
  height: 60px;
  background-color: #3312c2;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
