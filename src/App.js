import './App.css';
import Footer from './components/Footer/Footer';
import Hotels from './components/Hotels/Hotels';
import LocationFilter from './components/LocationFilter/LocationFilter';
import Map from './components/Map/Map';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LocationFilter />
      <Map />
      <Footer />
      <Hotels />
    </div>
  );
}

export default App;
