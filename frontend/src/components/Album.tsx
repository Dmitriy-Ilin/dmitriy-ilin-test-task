import React, { useState, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPhotos } from 'src/api/api';
import { IAlbum } from 'src/interfaces/interface';
import { FavoritesContext } from 'src/context/FavoritesContext';
import AlbumHeader from './AlbumHeader';
import PhotoGrid from './PhotoGrid';

type Props = {
  album: IAlbum;
};

const Album: React.FC<Props> = ({ album }) => {
  const [isActive, setIsActive] = useState(false);
  const { starredPhotos, setStarredPhotos } = useContext(FavoritesContext);

  const fetchPhotos = async () => {
    const response = await getPhotos(album.albumId);
    return response.data;
  };

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['photos', album.albumId],
    queryFn: fetchPhotos,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className='albums'>
      <AlbumHeader
        album={album}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      {isActive && (
        <PhotoGrid
          data={data}
          starredPhotos={starredPhotos}
          setStarredPhotos={setStarredPhotos}
        />
      )}
    </div>
  );
};

export default Album;
