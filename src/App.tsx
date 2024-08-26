
import { Routes, Route } from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import MaestroProduct from "./routes/maestro-product/maestro-product.component";


import './App.css'


function App() {
  return (
    <>
       <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home key={window.location.pathname} />} />
      <Route path="/maestro" element={<MaestroProduct key={window.location.pathname}/>} />
      <Route path="/design" element={<Home />} />
      <Route path="/satchel" element={<Home />} />
      <Route path="/maestro"element={<Home />} />
    </Route>
  </Routes>
    </>
  )
};


export default App
