import { useState } from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";

const HabitsPage = () => {
  const [showAddHabit, setShowAddHabit] = useState(false);

  const handleAddHabit = () => {
    setShowAddHabit(true);
  };

  const handleCancel = () => {
    setShowAddHabit(false);
  };

  const handleSave = () => {
    // Lógica para salvar o novo hábito
    setShowAddHabit(false);
  };

  return (
    <Wrapper>
      <Nav>Nav</Nav>
      <Container>
        <HabilitsCreator>
          <Title>Meus Hábitos</Title>
          <AddButton onClick={handleAddHabit}>+</AddButton>
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
            <DeleteIcon />
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
          {/* Adicione aqui outros componentes de hábitos */}
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
  overflow: hidden; /* Adicionado para evitar que os botões saiam do componente */
`;

const HabitName = styled.h1`
  margin-bottom: 16px;
  margin-left: 15px;
`;

const DeleteIcon = styled(MdDelete)`
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 20px;
  color: red;
  cursor: pointer;
`;

const Nav = styled.nav`
  height: 60px;
  background-color: #3312c2;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const HabilitsCreator = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

const AddButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #52b6ff;
  border: none;
  border-radius: 50%;
  color: #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
  width: 100%;
  height: 30px;
  margin-bottom: 16px;
`;

const DaysOfWeek = styled.div`
  display: flex;
  justify-content: space-between;
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
  margin-right: 8px;
  margin-left: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CancelButton = styled.button`
  background-color: #c70a0a;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin-right: 8px;
  cursor: pointer;
`;

const SaveButton = styled.button`
  background-color: #52b6ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`;

export default HabitsPage;
