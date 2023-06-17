import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/404';
import ComingSoon from './pages/coming-soon';
import Header from './components/global/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path='/coming-soon' element={<ComingSoon />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
