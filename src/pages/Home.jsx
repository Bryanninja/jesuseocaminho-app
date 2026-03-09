import DailyReading from '../components/sections/DailyReading';
import Header from '../components/sections/Header';
import WelcomeCard from '../components/sections/WelcomeCard';

const Home = () => {
  return (
    <main className="bg-light-black min-h-screen">
      <Header />
      <WelcomeCard />
      <DailyReading />
    </main>
  );
};

export default Home;
