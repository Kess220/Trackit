import { useState } from "react";
import styled from "styled-components";
import trackIt from "../assets/TrackIt.png";
import bob from "../assets/bob.png";
import logoMais from "../assets/+.svg";

const HabitsPage = () => {
  const [showAddHabit, setShowAddHabit] = useState(false);

  const handleAddHabit = () => {
    setShowAddHabit(true);
  };

  const handleCancel = () => {
    setShowAddHabit(false);
  };

  const handleSave = () => {
    // Logic to save the new habit
    setShowAddHabit(false);
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
          <AddHabitContainer>
            <AddHabitScreen>
              <Input type="text" placeholder="Nome do hábito" />
              <DaysOfWeek>
                <DayButton>D</DayButton>
                <DayButton>S</DayButton>
                <DayButton>T</DayButton>
                <DayButton>Q</DayButton>
                <DayButton>Q</DayButton>
                <DayButton>S</DayButton>
                <DayButton>S</DayButton>
              </DaysOfWeek>
              <ButtonContainer>
                <CancelButton onClick={handleCancel}>Cancelar</CancelButton>
                <SaveButton onClick={handleSave}>Salvar</SaveButton>
              </ButtonContainer>
            </AddHabitScreen>
          </AddHabitContainer>
        )}
        <HabitsContainer>
          <Habit>
            <HabitName>Sair</HabitName>
            {/* <DeleteIcon /> */}
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
  overflow: hidden; /* Added to prevent buttons from overflowing the component */
`;

const HabitName = styled.h1`
  margin-bottom: 16px;
  margin-left: 15px;
`;

// const DeleteIcon = styled(MdDelete)`
//   position: absolute;
//   top: 8px;
//   right: 8px;
//   font-size: 20px;
//   color: red;
//   cursor: pointer;
// `;

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

const AddHabitContainer = styled.div`
  margin-top: 16px;
`;

const AddHabitScreen = styled.div`
  width: 340px;
  height: 180px;
  background: #ffffff;
  border-radius: 5px;
  padding: 16px;
`;

const Input = styled.input`
  width: 303px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-bottom: 6px;
  padding-left: 11px;

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
`;

const DayButton = styled.button`
  width: 30px;
  height: 30px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  color: #dbdbdb;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 4px;
  margin-top: 8px;
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
`;

export default HabitsPage;
