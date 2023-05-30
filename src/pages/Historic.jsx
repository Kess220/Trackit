import styled from "styled-components";

const TodayPage = () => {
  return (
    <Wrapper>
      <Nav>Nav</Nav>
      <Container>
        <Day>
          <Title>Historico</Title>
          <NoHabitsText>
            Em breve voce podera ver o historico dos seus habitos aqui!
          </NoHabitsText>
        </Day>
        <HabitsContainer></HabitsContainer>
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
