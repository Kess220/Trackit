/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import axios from "axios";
import { AuthContext } from "../components/AuthContext";
import { ThreeDots } from "react-loader-spinner";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // State for loading status

  const navigate = useNavigate();

  const { updateToken, updateUserImage, token } = useContext(AuthContext);

  const hasToken = !!token;

  useEffect(() => {
    if (token) {
      navigate("/hoje");
    }
  }, [hasToken]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true); // Set loading to true when login starts

    try {
      const userData = {
        email: email,
        password: password,
      };

      const response = await axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
        userData
      );

      const { token, image } = response.data;
      updateToken(token);
      updateUserImage(image);

      // Save user object in Local Storage
      const user = {
        token,
        image,
      };
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/hoje");
    } catch (error) {
      setLoading(false); // Set loading to false after displaying error alert
      alert("Ocorreu um erro ao fazer login. Verifique suas credenciais.");
    }
  };

  return (
    <Wrapper>
      <Logo src={logo} alt="Logo" />
      <form onSubmit={handleLogin}>
        <div>
          <Input
            data-test="email-input"
            type="email"
            placeholder="email"
            value={email}
            onChange={handleEmailChange}
            disabled={loading} // Disable input field if loading
          />
        </div>
        <div>
          <Input
            data-test="password-input"
            type="password"
            placeholder="senha"
            value={password}
            onChange={handlePasswordChange}
            disabled={loading} // Disable input field if loading
          />
        </div>
        <Button
          data-test="login-btn"
          type="submit"
          disabled={loading}
          loading={loading}
        >
          <span>
            {loading && (
              <ThreeDots type="Oval" color="#FFF" height={40} width={40} />
            )}
          </span>
          {!loading && "Entrar"}
        </Button>
      </form>
      <SignupLink data-test="signup-link" to="/cadastro">
        Não tem uma conta? Cadastre-se!
      </SignupLink>
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 7px;

  & > span {
    visibility: ${({ loading }) => (loading ? "visible" : "hidden")};
    position: absolute;
  }
`;

const SignupLink = styled(Link)`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 13.976px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;
  color: #52b6ff;
`;
