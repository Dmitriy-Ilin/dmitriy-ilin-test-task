import { createContext } from 'react';
import { IPhoto } from 'src/interfaces/interface';

type FavoritesContextType = {
  starredPhotos: IPhoto[];
  setStarredPhotos: (photos: IPhoto[]) => void;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  starredPhotos: [],
  setStarredPhotos: () => {},
});
