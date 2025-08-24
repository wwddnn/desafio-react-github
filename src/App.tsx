import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import Before from "./routes/Home/Before";
import NotFound from "./routes/Home/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeBody />} />
          <Route path="before" element={<Before />} >
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
