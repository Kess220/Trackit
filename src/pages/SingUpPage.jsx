import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";

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
      <Logo src={logo}></Logo>
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
      <Link to="/">
        <P>Já tem uma conta? Faça login!</P>
      </Link>
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
const Logo = styled.img`
  margin-bottom: 36px;
  width: 180px;
  height: 178.38px;
  margin-top: 68px;
`;

const P = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 13.976px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;

  color: #52b6ff;

  margin-bottom: 200px;
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

const Button = styled.button`
  color: #ffffff;
  width: 303px;
  height: 45px;
  background: #52b6ff;
  border-radius: 4.63636px;
  border: none;
  cursor: pointer;
  margin-bottom: 25px;
  font-style: normal;
  font-weight: 400;
  font-size: 20.976px;
  line-height: 26px;
  text-align: center;
`;
