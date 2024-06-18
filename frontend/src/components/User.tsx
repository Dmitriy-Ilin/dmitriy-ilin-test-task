import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { IAlbum, IUser } from 'src/interfaces/interface';
import Album from './Album';
import { getAlbums } from 'src/api/api';

type Props = {
  user: IUser;
};

const User: React.FC<Props> = ({ user }) => {
  const [isActive, setIsActive] = useState(false);

  const fetchAlbums = async () => {
    const response = await getAlbums(user.id);
    return response.data;
  };

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['albums', user.id],
    queryFn: fetchAlbums,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className='user'>
      <button
        className='user__btn'
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        {isActive ? (
          <span className='user__active'>-</span>
        ) : (
          <span className='user__active'>+</span>
        )}
        {user.name}
      </button>
      {isActive && (
        <ul>
          {data.map((album: IAlbum) => (
            <li key={album.albumId}>{<Album album={album} />}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default User;
