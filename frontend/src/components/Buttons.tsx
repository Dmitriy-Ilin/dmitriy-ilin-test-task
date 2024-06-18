import { NavLink } from 'react-router-dom';

const Buttons = () => {
  return (
    <>
      <div className='main__btns'>
        <NavLink to='/' className='main__btn'>
          Каталог
        </NavLink>
        <NavLink to='/favorites' className='main__btn'>
          Избранное
        </NavLink>
      </div>
    </>
  );
};

export default Buttons;
