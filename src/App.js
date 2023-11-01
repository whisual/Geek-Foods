import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar'
import Section0 from './Component/Section0'
import Section1 from './Component/Section1'
import Footer from './Component/Footer'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Section0></Section0>
      <Section1></Section1>
      <Footer></Footer>
    </div>

  );
}

export default App;
