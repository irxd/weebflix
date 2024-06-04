import { create } from "zustand";

interface Favorite {
  mal_id: number;
  image: string;
  title: string;
  score: number;
}

interface FavoriteStore {
  favorites: Favorite[];
  addFavorite: (favorite: Favorite) => void;
  removeFavorite: (mal_id: number) => void;
}

export const useFavoriteStore = create<FavoriteStore>((set) => ({
  favorites: [],
  addFavorite: (favorite) =>
    set((state) => ({
      favorites: [...state.favorites, favorite],
    })),
  removeFavorite: (mal_id) =>
    set((state) => ({
      favorites: state.favorites.filter(
        (favorite) => favorite.mal_id !== mal_id
      ),
    })),
}));
