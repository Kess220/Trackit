import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import axios from "axios";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        email: email,
        name: name,
        password: password,
        image: image,
      };

      const response = await axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
        userData,
        {
          headers: {
            Authorization: "RUsE86dEj8Lc6yVHbB8tzI3l",
          },
        }
      );

      console.log(response.data);
      // Redirecionar para a rota inicial após o cadastro
      window.location.href = "/";
    } catch (error) {
      setError("Ocorreu um erro ao cadastrar. Por favor, tente novamente.");
      alert("Ocorreu um erro ao cadastrar. Por favor, tente novamente.");
    }
  };

  return (
    <Wrapper>
      <Logo src={logo} alt="Logo" />
      <form onSubmit={handleSubmit}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <div>
          <Input
            data-test="email-input"
            type="email"
            placeholder="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <Input
            data-test="password-input"
            type="password"
            placeholder="senha"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <Input
            data-test="user-name-input"
            type="text"
            placeholder="nome"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <Input
            data-test="user-image-input"
            type="text"
            placeholder="URL da foto"
            value={image}
            onChange={handleImageChange}
          />
        </div>
        <Button data-test="signup-btn" type="submit">
          Cadastrar
        </Button>
      </form>
      <Link data-test="login-link" to="/">
        Já tem uma conta? Faça login!
      </Link>
    </Wrapper>
  );
};

export default SignUpPage;

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

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 10px;
`;
