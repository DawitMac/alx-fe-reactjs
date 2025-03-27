import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import BlogPost from './components/BlogPost';
import Login from './components/Login';
// import ProfileDetails from './components/ProfileDetails';
// import ProfileSettings from './components/ProfileSettings';


function App() {
    
    return (
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}>
                           
                        </Route>
                        <Route path="/blog/:id" element={<BlogPost />} />
                        <Route path="login" element={<Login />} />
                    </Routes>
                </BrowserRouter>
    );
}

export default App;