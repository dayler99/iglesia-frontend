import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MiembroList from "./miembro/MiembroList"
import MiembroCreate from "./miembro/MiembroCreate"
import MiembroEdit from "./miembro/MiembroEdit"
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import Dashboard from './dashboard/Dashboard';
import SermonList from './sermon/SermonList';
import SermonCreate from './sermon/SermonCreate';
import SermonMiembroList from './sermon/SermonMiembroList';
import ComentarioList from './sermon/ComentarioList';
import ComentarioAdministradorList from './sermon/ComentarioAdministadorList';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Registration />} />
        <Route exact path="/bi" element={<Dashboard />} />
        <Route exact path="/dashboard" element={<MiembroList />} />
        <Route exact path="/sermon" element={<SermonList />} />
        <Route exact path="/sermonMiembro" element={<SermonMiembroList />} />
        <Route exact path="/comentarios/:id" element={<ComentarioList />} />
        <Route exact path="/comentarios/administrador/:id" element={<ComentarioAdministradorList />} />
        <Route exact path="/sermon/create" element={<SermonCreate />} />
        <Route path="/create" element={<MiembroCreate />} />
        <Route path="/edit/:id" element={<MiembroEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
