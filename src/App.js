import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MiembroList from "./miembro/MiembroList"
import MiembroCreate from "./miembro/MiembroCreate"
import MiembroEdit from "./miembro/MiembroEdit"
import Login from "./pages/Login"
import Registration from "./pages/Registration"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Registration />} />
        <Route exact path="/dashboard" element={<MiembroList />} />
        <Route path="/create" element={<MiembroCreate />} />
        <Route path="/edit/:id" element={<MiembroEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
