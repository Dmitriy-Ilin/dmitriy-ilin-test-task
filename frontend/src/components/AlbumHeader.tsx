import React from 'react';
import { IAlbum } from 'src/interfaces/interface';

type Props = {
  album: IAlbum;
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
};

const AlbumHeader: React.FC<Props> = ({ album, isActive, setIsActive }) => {
  return (
    <button
      className='albums__btn'
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      {isActive ? (
        <span className='user__active'>-</span>
      ) : (
        <span className='user__active'>+</span>
      )}
      {album.title}
    </button>
  );
};

export default AlbumHeader;
