import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Inform from './components/Inform/Inform';
import Review from './components/Review/Review';
import Service from './components/Service/Service';
import TimePart from './components/TimePart/TimePart';

function App() {
  return (
    <div>
     <Header />
     <Banner />
     <TimePart />
     <Service />
     <Review />
     <Blog />
     <About />
     <Inform />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
