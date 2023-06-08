import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import Home from "./pages/home"
import AddBook from './pages/books';
import AddReview from './pages/reviews';
import Profile from "./pages/profile"
import Login from './pages/login';
import { AuthProvider } from './context/Authcontext';
import { BookProvider } from './context/bookcontext';
import {ReviewProvider} from './context/reviewcontext';

function App() {
  return (
    <BrowserRouter>
     <AuthProvider>
      <BookProvider>
        <ReviewProvider>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/home' element={<Home/>} />
          <Route path='login' element={<Login />} />
          <Route path='books' element={<AddBook />} />
          <Route path='reviews'element={<AddReview/>}/>
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
      </ReviewProvider>
      </BookProvider>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;