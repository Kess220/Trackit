/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [image, setImage] = useState("");
  const [completedHabits, setCompletedHabits] = useState(0);
  const [habitList, setHabitList] = useState([]);

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
        habitList: habitList,
        updateHabitList,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
