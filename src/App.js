import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
