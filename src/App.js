import './App.css';
import Navbar from './Components/Navbar';
import MovieCarousel from './Components/Carousel';
import MoviesComponent from './Components/MovieComponent';
import Heroe from './Components/Hero'
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Heroe/>
      <Search />
    </div>
  );
}

export default App;
