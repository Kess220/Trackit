import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SingUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticação ou chamada a API aqui
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            type="email"
            placeholder="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="senha"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="nome"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="foto"
            value={image}
            onChange={handleImageChange}
          />
        </div>
        <Button type="submit">Cadastrar</Button>
      </form>
      <P>
        <Link to="/">Já tem uma conta? Faça login!</Link>
      </P>
    </Wrapper>
  );
};

export default SingUpPage;

const Wrapper = styled.div`
  padding: 20px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const P = styled.p`
  color: #52b6ff;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 13.976px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;
`;

const Input = styled.input`
  width: 303px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
`;

const Button = styled.button`
  color: #ffffff;
  width: 303px;
  height: 45px;
  background: #52b6ff;
  border-radius: 4.63636px;
  border: none;
  cursor: pointer;
`;
