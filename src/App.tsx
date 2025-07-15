import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import HomeBody from './routes/Home/HomeBody';
import Before from './routes/Home/Before';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route index element={<HomeBody />}/>
        <Route path="before" element={<Before />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
