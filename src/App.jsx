import './App.css';
import Home from './pages/Home';
import Header from './components/layout/Header';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
};

export default App;
