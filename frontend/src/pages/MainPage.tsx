import UsersList from 'src/components/UsersList';
import Buttons from 'src/components/Buttons';
import Favorites from 'src/components/Favorites';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const MainPage = () => {
  return (
    <BrowserRouter>
      <section className='main'>
        <div className='container'>
          <Buttons />
          <Routes>
            <Route path='/' element={<UsersList />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </div>
      </section>
    </BrowserRouter>
  );
};

export default MainPage;
