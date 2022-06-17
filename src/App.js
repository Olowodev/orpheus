import './App.scss';
import NavBar from './components/navBar/NavBar'
import Header from './components/header/Header'
import RecentSec from './components/recentSec/RecentSec'
import ContributionSec from './components/contributionSec/ContributionSec'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <RecentSec />
      <ContributionSec />
      <Footer />
    </div>
  );
}

export default App;
