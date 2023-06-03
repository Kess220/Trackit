import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false); // State for loading status

  const navigate = useNavigate();

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

    setLoading(true); // Set loading to true when signup starts

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
      navigate("/");
    } catch (error) {
      alert("Ocorreu um erro ao cadastrar. Por favor, tente novamente.");
    } finally {
      setLoading(false); // Set loading to false after signup is completed
    }
  };

  return (
    <Wrapper>
      <Logo src={logo} alt="Logo" />
      <form onSubmit={handleSubmit}>
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
        <div>
          <Input
            data-test="user-name-input"
            type="text"
            placeholder="nome"
            value={name}
            onChange={handleNameChange}
            disabled={loading} // Disable input field if loading
          />
        </div>
        <div>
          <Input
            data-test="user-image-input"
            type="text"
            placeholder="URL da foto"
            value={image}
            onChange={handleImageChange}
            disabled={loading} // Disable input field if loading
          />
        </div>
        <Button data-test="signup-btn" type="submit" disabled={loading}>
          <span>
            {loading && (
              <ThreeDots type="Oval" color="#FFF" height={40} width={40} />
            )}
          </span>
          {!loading && "Cadastrar"}
        </Button>
      </form>
      <SignupLink data-test="login-link" no link to="/">
        Já tem uma conta? Faça login!
      </SignupLink>
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
  position: relative;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
