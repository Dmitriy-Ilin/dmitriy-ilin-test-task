import React from 'react';
import { IPhoto } from 'src/interfaces/interface';
import PhotoItem from './PhotoItem';

type Props = {
  data: IPhoto[];
  starredPhotos: IPhoto[];
  setStarredPhotos: (starredPhotos: IPhoto[]) => void;
};

const PhotoGrid: React.FC<Props> = ({
  data,
  starredPhotos,
  setStarredPhotos,
}) => {
  return (
    <div className='album__container'>
      <ul className='grid'>
        {data.map((photo) => (
          <PhotoItem
            key={photo.id}
            photo={photo}
            starredPhotos={starredPhotos}
            setStarredPhotos={setStarredPhotos}
          />
        ))}
      </ul>
    </div>
  );
};

export default PhotoGrid;
