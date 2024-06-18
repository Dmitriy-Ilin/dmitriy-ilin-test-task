import React, { useState } from 'react';
import CustomTooltip from './Tooltip';
import { IPhoto } from 'src/interfaces/interface';
import filledStar from 'src/assets/star-filled.svg';
import star from 'src/assets/star.svg';
import close from 'src/assets/close.svg';

type Props = {
  photo: IPhoto;
  starredPhotos: IPhoto[];
  setStarredPhotos: (starredPhotos: IPhoto[]) => void;
};

const PhotoItem: React.FC<Props> = ({
  photo,
  starredPhotos,
  setStarredPhotos,
}) => {
  const [modalActive, setModalActive] = useState(false);

  const handleStarClick = () => {
    if (starredPhotos.includes(photo)) {
      setStarredPhotos(starredPhotos.filter((p) => p !== photo));
    } else {
      setStarredPhotos([...starredPhotos, photo]);
    }
  };

  const handleModalClick = () => {
    setModalActive(!modalActive);
  };

  return (
    <li className='grid__item'>
      <CustomTooltip title={photo.title}>
        <img
          onClick={handleModalClick}
          className='grid__item-img'
          src={photo.url}
          alt={photo.title}
        />
      </CustomTooltip>
      <div
        className={`grid__item-star ${starredPhotos.includes(photo) && 'grid__item-star--active'}`}
      >
        <img
          src={starredPhotos.includes(photo) ? filledStar : star}
          alt='star'
          onClick={handleStarClick}
        />
      </div>

      <div className={`modal ${modalActive && 'modal--active'}`}>
        <img
          className='modal__close'
          alt='close'
          src={close}
          onClick={handleModalClick}
        />
        <img className='modal__img' src={photo.url} />
      </div>
    </li>
  );
};

export default PhotoItem;
