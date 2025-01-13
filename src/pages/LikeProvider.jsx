import { createContext, useContext, useState } from 'react';

const LikePokemon = createContext();

export const useLikePokemon = () => {
  return useContext(LikePokemon);
};

export const LikeProvider = ({ children }) => {
  const [like, setLike] = useState({});

  return (
    <LikePokemon.Provider value={{ like, setLike }}>
      {children}
    </LikePokemon.Provider>
  );
};
