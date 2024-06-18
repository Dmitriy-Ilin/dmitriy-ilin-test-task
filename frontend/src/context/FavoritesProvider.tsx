import React, { useState } from 'react';
import { IPhoto } from 'src/interfaces/interface';
import { FavoritesContext } from './FavoritesContext';

type Props = { children: React.ReactNode };

export const FavoritesProvider: React.FC<Props> = ({ children }) => {
  const [starredPhotos, setStarredPhotos] = useState<IPhoto[]>([]);

  return (
    <FavoritesContext.Provider value={{ starredPhotos, setStarredPhotos }}>
      {children}
    </FavoritesContext.Provider>
  );
};
