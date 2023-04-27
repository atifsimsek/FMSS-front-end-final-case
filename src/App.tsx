import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Categories from './components/Categories';
import './styles/reset.scss';
import './styles/styles.scss';
import Filter from './components/Filter';
import Main from './components/Main';
import { useTheme } from './store/redux-helpers/themeHelper';

function App() {
  const theme = useTheme();
  return (
    <div className={`theme ${theme} `}>
      <Header />
      <HeroSection />
      <Categories />
      <div className="container">
        <Filter />
        <Main />
      </div>
    </div>
  );
}

export default App;
