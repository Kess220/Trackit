import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import axios from "axios";
import { AuthContext } from "../components/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { updateToken } = useContext(AuthContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        email: email,
        password: password,
      };

      const response = await axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
        userData
      );
      console.log(response.data);

      const { token } = response.data;
      updateToken(token);
      console.log(updateToken);

      console.log(token);
      // Redirecionar para a rota desejada após o login bem-sucedido
      // Você pode substituir "/habitos" pela rota desejada
      // window.location.href = "/habitos";
    } catch (error) {
      setError("Ocorreu um erro ao fazer login. Verifique suas credenciais.");
    }
  };

  return (
    <Wrapper>
      <Logo src={logo} alt="Logo" />
      <form onSubmit={handleLogin}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
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
        <Button type="submit">Entrar</Button>
      </form>
      <Link to="/signup">Não tem uma conta? Cadastre-se!</Link>
    </Wrapper>
  );
};

export default LoginPage;

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
