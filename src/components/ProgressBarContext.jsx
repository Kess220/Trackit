/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ProgressBarContext = createContext();

export const ProgressBarProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);

  return (
    <ProgressBarContext.Provider value={{ progress, setProgress }}>
      {children}
    </ProgressBarContext.Provider>
  );
};
