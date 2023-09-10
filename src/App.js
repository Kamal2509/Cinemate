import { AllRoutes } from './routes/AllRoutes';
import './App.css';
import { Header,Footer } from './components/index';

function App() {
  return (
    <div className="App">
      <Header/>
    <AllRoutes/>
    <Footer/>
    </div>
  );
}

export default App;
