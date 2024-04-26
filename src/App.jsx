import './App.css'
import HomePage from './components/HomePage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SignInPage from './components/SignInPage'
import SignUpPage from './components/SignUpPage';
import Profile from './components/Profile';


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path= "/" Component={HomePage}></Route>
      <Route path='/signin' Component={SignInPage}></Route>
      <Route path='/signup' Component={SignUpPage}></Route>
      <Route path='/profile' Component={Profile}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
