/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AuthContext } from "./AuthContext";

const ProgressBar = () => {
  const { progress } = useContext(AuthContext);

  return (
    <CircularProgressbar
      value={progress}
      text="Hoje"
      background
      backgroundPadding={6}
      styles={{
        path: {
          stroke: "#FFFFFF",
          strokeLinecap: "round",
          transition: "stroke-dashoffset 0.5s ease 0s",
        },
        trail: {
          stroke: "transparent",
        },
        text: {
          fill: "#ffffff",
          fontSize: "18px",
          fontFamily: "Lexend Deca",
          fontWeight: "400",
        },
        background: {
          fill: "#52B6FF",
        },
        root: {
          width: "91px",
          height: "91px",
          marginBottom: "40px",
        },
      }}
    />
  );
};

export default ProgressBar;
