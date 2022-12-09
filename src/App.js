import './App.css';
import Navbar from './Components/Navbar';
import MovieCarousel from './Components/Carousel';
import MoviesComponent from './Components/MovieComponent';
import Heroe from './Components/Hero'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Heroe/>
      <MovieCarousel/>
    </div>
  );
}

export default App;
