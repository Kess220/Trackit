/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [image, setImage] = useState(""); // Inicialize o estado de image como uma string vazia

  const updateToken = (newToken) => {
    setToken(newToken);
  };

  const updateUserImage = (newImage) => {
    setImage(newImage); // Atualize o estado de image com a nova imagem
  };

  return (
    <AuthContext.Provider
      value={{ token: token, updateToken, image: image, updateUserImage }} // Adicione a propriedade "image" ao objeto de valor do contexto
    >
      {children}
    </AuthContext.Provider>
  );
};

