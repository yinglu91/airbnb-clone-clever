import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/search" component={SearchPage} exact />

          {/* fallback page */}
          <Route path="*" component={Home} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
