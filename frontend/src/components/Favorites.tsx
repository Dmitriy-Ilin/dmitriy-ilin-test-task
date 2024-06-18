import React, { useContext } from 'react';
import { FavoritesContext } from 'src/context/FavoritesContext';
import fav from 'src/assets/fav.jpeg';
import filledStar from 'src/assets/star-filled.svg';

const Favorites: React.FC = () => {
  const { starredPhotos } = useContext(FavoritesContext);

  return (
    <div className='favorites'>
      <div className='album__container'>
        {starredPhotos.length > 0 ? (
          <ul className='favorites__list'>
            {starredPhotos.map((photo) => (
              <li key={photo.id} className='favorites__item'>
                <img
                  className='favorites__item-img'
                  src={photo.url}
                  alt={photo.title}
                  title={photo.title}
                />
                <p className='favorites__item-text'>{photo.title}</p>
                <div className='grid__item-star'>
                  <img src={filledStar} alt='star' />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className='favorites__empty'>
            <img className='favorite__empty-img' src={fav} alt='fav' />
            <h3 className='favorites__empty-title'>Список избранного пуст</h3>
            <p className='favorites__empty-text'>
              Добавляйте изображения, нажимая на звездочки
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
