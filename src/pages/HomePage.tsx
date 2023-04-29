import HeroSection from '../components/HeroSection';
import Categories from '../components/Categories';
import Filter from '../components/Filter';
import Main from '../components/Main';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Categories />
      <div className="container">
        <Filter />
        <Main />
      </div>
    </>
  );
};

export default HomePage;
