import './App.css';
import { FavoritesProvider } from 'src/context/FavoritesProvider';
import MainPage from './pages/MainPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FavoritesProvider>
          <MainPage />
        </FavoritesProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
