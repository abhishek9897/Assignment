import Copyright from './Copyright';
import Footer from './Footer';
import Navbar from './Navbar';
import Products from './Products';
import Banner from './Banner';
import "./app.css"
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <Products/>
    <Footer/>
    <Copyright/>
      
    </div>
  );
}

export default App;
