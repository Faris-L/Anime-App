import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : { anime: [], manga: [] };
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (item, type) => {
    const key = type.toLowerCase();
    const exists = favorites[key].some(f => f.id === item.id);
    if (exists) return;
    setFavorites(prev => ({
      ...prev,
      [key]: [...prev[key], item],
    }));
  };

  const removeFromFavorites = (id, type) => {
    const key = type.toLowerCase();
    setFavorites(prev => ({
      ...prev,
      [key]: prev[key].filter(f => f.id !== id),
    }));
  };

  const isInFavorites = (id, type) => {
    const key = type.toLowerCase();
    return favorites[key].some(f => f.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isInFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
