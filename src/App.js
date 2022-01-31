import { Route, Routes } from 'react-router-dom';
import Header from './containers/Header';
import { Home, About, Faq, Post, SingleCard } from './pages';
import './assets/styles/index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/post" element={<Post />} />
        <Route path="/info:id" element={<SingleCard />} />
      </Routes>
    </div>
  );
}

export default App;
