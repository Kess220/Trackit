/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [image, setImage] = useState("");
  const [completedHabits, setCompletedHabits] = useState([]);
  const [habitList, setHabitList] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const { token, image } = JSON.parse(storedUser);
      updateToken(token);
      updateUserImage(image);
    }
  }, []);

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

  const totalHabits = habitList.length;
  // localStorage.setItem("token", token);

  return (
    <AuthContext.Provider
      value={{
        totalHabits,
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
