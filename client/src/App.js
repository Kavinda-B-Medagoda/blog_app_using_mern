import { Route, Routes } from 'react-router-dom';
import './App.css';
import Post from './Post';
import Layout from './Layout';
import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (

    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Index/>}></Route>
        <Route path={'/login'} element={<Login/>}></Route>
        <Route path={'/register'} element={<Register/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
