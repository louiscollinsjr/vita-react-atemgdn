
import { Routes, Route } from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import MaestroProduct from "./routes/maestro-product/maestro-product.component";


import './App.css'

// Utility function to truncate text at complete words
const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }

  const truncated = text.substring(0, maxLength).trim();
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  if (lastSpaceIndex === -1) {
    return `${truncated}...`;
  }

  return `${truncated.substring(0, lastSpaceIndex)}...`;
};

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
