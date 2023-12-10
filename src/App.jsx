import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Room from "./Room";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/room/:roomId" element={<Room />}></Route>
      </Routes>
    </div>
  );
}

export default App;
