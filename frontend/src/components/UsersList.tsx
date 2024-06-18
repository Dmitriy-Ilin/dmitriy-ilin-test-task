import { useQuery } from '@tanstack/react-query';
import User from './User';
import { IUser } from 'src/interfaces/interface';
import { getUsers } from 'src/api/api';

const UsersList = () => {
  const fetchUsers = async () => {
    const response = await getUsers();
    return response.data;
  };

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className='users'>
      <ul className='user__list'>
        {data.map((user: IUser) => (
          <li className='user__item' key={user.id}>
            <User user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
