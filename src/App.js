
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './components/Calendar';
import Completed from './components/Completed';
import Footer from './components/Footer';
import Home from './components/Home';
import Navber from './components/Navber';
import Todo from './components/Todo';

function App() {
  return (
    <div className="bg-purple-200">
      <Navber/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="completed" element={<Completed />} />
        <Route path="todo" element={<Todo />} />
        <Route path="calendar" element={<Calendar />} />
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
