import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home'

function App() {
  const user = {
    pfp: "https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg",
    name: "Julian",
    runningTime: "1:05",
    swimmingTime: "1:05",
    bikingTime: "1:05",
    email: 'test',
    password: 123
  }

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login user={user} />} />
          <Route path='/home' element={<Home user={user}/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
