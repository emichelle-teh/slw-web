import './App.css';
import Home from './components/pages/Home.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home></Home>
      <Footer />
    </div>
  );
}

export default App;
