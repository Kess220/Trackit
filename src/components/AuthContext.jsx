/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [image, setImage] = useState("");
  const [completedHabits, setCompletedHabits] = useState([]); // Inicialize o estado de completedHabits como um array vazio
  const [habitList, setHabitList] = useState([]); // Renomeie 'habits' para 'habitList'

  const updateToken = (newToken) => {
    setToken(newToken);
  };

  const updateUserImage = (newImage) => {
    setImage(newImage);
  };

  const updateCompletedHabits = (newCompletedHabits) => {
    setCompletedHabits(newCompletedHabits);
  };

  const updateHabitList = (newHabitList) => {
    setHabitList(newHabitList);
  };

  return (
    <AuthContext.Provider
      value={{
        token: token,
        updateToken,
        image: image,
        updateUserImage,
        completedHabits: completedHabits,
        updateCompletedHabits,
        habitList: habitList, // Renomeie 'habits' para 'habitList'
        updateHabitList, // Renomeie 'updateHabits' para 'updateHabitList'
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
