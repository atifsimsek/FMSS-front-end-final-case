import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Categories from './components/Categories';
import './styles/reset.scss';
import './styles/styles.scss';
import Filter from './components/Filter';
import Main from './components/Main';
import { useTheme } from './store/redux-helpers/themeHelper';
import Footer from './components/Footer';
import Layout from './pages/Layout';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

function App() {
  const theme = useTheme();
  return (
    <div className={`theme ${theme} `}>
      <Header />
      <Layout>{useRoutes(routes)}</Layout>
      <Footer />
    </div>
  );
}

export default App;
