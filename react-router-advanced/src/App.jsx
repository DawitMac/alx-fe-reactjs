import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Post from './components/Post';
import ProtectedRoute from './components/ProtectedRoute';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';


function App() {
    
    return (
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}>
                           <Route path="details" element={<ProfileDetails />} />
                           <Route path="settings" element={<ProfileSettings />} />
                        </Route>
                        <Route path="/post/:postId" element={<Post />} />
                    </Routes>
                </BrowserRouter>
    );
}

export default App;