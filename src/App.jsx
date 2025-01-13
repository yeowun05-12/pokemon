import { useEffect } from 'react';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMultiplePokemonById } from './RTK/thunk';
import { Link, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Search from './pages/Search';
import Detail from './pages/Detail';
import Favorites from './pages/Favorites';
import 'galmuri/dist/galmuri.css';
import { LikeProvider } from './pages/LikeProvider';
import Footer from './pages/Footer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);

  return (
    <main>
      <h1>포켓몬 도감</h1>
      <nav>
        <div className='menu_content'>
          <Link className='nav_content' to={'/'}>
            메인
          </Link>
          <Link className='nav_content' to={'/detail/1'}>
            상세정보
          </Link>
          <Link className='nav_content' to={'/search'}>
            검색
          </Link>
          <Link className='nav_content' to={'/favorites'}>
            찜목록
          </Link>
        </div>
      </nav>
      <LikeProvider>
        <Routes>
          <Route path={'/'} element={<Main />} />
          <Route path={'/search'} element={<Search />} />
          <Route path={'/detail/:pokemonId'} element={<Detail />} />
          <Route path={'/favorites'} element={<Favorites />} />
        </Routes>
      </LikeProvider>
      <Footer />
    </main>
  );
}

export default App;
