import Header from './components/Header';
import './styles/reset.scss';
import './styles/styles.scss';
import { useTheme } from './store/redux-helpers/helper';
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
